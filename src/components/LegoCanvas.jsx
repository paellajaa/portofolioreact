import React, { useRef, useState, useEffect } from 'react';
import Lego3DLanyard from './3DLegoLanyard';

const TOTAL_FRAMES = 214;
const getFrameUrl = (idx) => `/frames/frame_${idx.toString().padStart(5, '0')}.webp`;

export default function LegoCanvas() {
  const canvasRef = useRef(null);
  const containerRef = useRef(null);

  const imagesRef = useRef([]);
  const loadedMapRef = useRef(Array(215).fill(false));
  const currentRenderedFrame = useRef(1);
  const targetFrameRef = useRef(1);
  const lastDrawnFrameRef = useRef(-1);
  const animFrameId = useRef(null);
  const isLerping = useRef(false);

  // State frame animasi tembok merah (1..214)
  const [currentFrame, setCurrentFrame] = useState(1);

  // Canvas setup and progressive frame loading
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    // alpha: true — transparan di lubang tembok
    const ctx = canvas.getContext('2d', { alpha: true });
    canvas.width = 1280;
    canvas.height = 720;
    ctx.imageSmoothingEnabled = true;
    ctx.imageSmoothingQuality = 'high';

    ctx.clearRect(0, 0, canvas.width, canvas.height);

    const frameCache = Array(215);
    const processedCache = Array(215);
    imagesRef.current = frameCache;

    const preprocessFrame = (idx, img) => {
      const processed = document.createElement('canvas');
      processed.width = canvas.width;
      processed.height = canvas.height;
      const pCtx = processed.getContext('2d', { alpha: true });

      pCtx.clearRect(0, 0, processed.width, processed.height);
      pCtx.drawImage(img, 0, 0, processed.width, processed.height);

      // Chroma-key background abu-abu saat tembok mulai berlubang
      if (idx >= 80) {
        const imageData = pCtx.getImageData(0, 0, processed.width, processed.height);
        const data = imageData.data;
        const len = data.length;

        for (let i = 0; i < len; i += 4) {
          const r = data[i];
          const g = data[i + 1];
          const b = data[i + 2];

          const maxC = Math.max(r, g, b);
          const minC = Math.min(r, g, b);
          const spread = maxC - minC;
          const brightness = (r + g + b) / 3;

          if (spread < 25 && brightness > 170) {
            const grayFactor = 1 - (spread / 25);
            const brightFactor = Math.min(1, (brightness - 170) / 60);
            const alphaReduction = grayFactor * brightFactor;
            data[i + 3] = Math.round(data[i + 3] * (1 - alphaReduction));
          }
        }

        pCtx.putImageData(imageData, 0, 0);
      }

      return processed;
    };

    const drawFrame = (frameNum) => {
      const target = Math.max(1, Math.min(TOTAL_FRAMES, frameNum));
      setCurrentFrame(target);
      if (lastDrawnFrameRef.current === target && processedCache[target]) return;

      const processed = processedCache[target];
      if (processed) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(processed, 0, 0);
        lastDrawnFrameRef.current = target;
        return;
      }

      const img = frameCache[target];
      if (img && img.complete && img.naturalWidth > 0) {
        processedCache[target] = preprocessFrame(target, img);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(processedCache[target], 0, 0);
        lastDrawnFrameRef.current = target;
      } else {
        for (let offset = 1; offset <= 20; offset++) {
          for (const candidate of [target - offset, target + offset]) {
            if (candidate >= 1 && candidate <= TOTAL_FRAMES) {
              if (processedCache[candidate]) {
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(processedCache[candidate], 0, 0);
                lastDrawnFrameRef.current = candidate;
                return;
              }
              const fallbackImg = frameCache[candidate];
              if (fallbackImg?.complete && fallbackImg?.naturalWidth > 0) {
                processedCache[candidate] = preprocessFrame(candidate, fallbackImg);
                ctx.clearRect(0, 0, canvas.width, canvas.height);
                ctx.drawImage(processedCache[candidate], 0, 0);
                lastDrawnFrameRef.current = candidate;
                return;
              }
            }
          }
        }
      }
    };

    const loadSingleFrame = (idx, highPriority = false) => {
      if (idx < 1 || idx > TOTAL_FRAMES || frameCache[idx]) return;

      const img = new Image();
      if (highPriority && 'fetchPriority' in img) {
        img.fetchPriority = 'high';
      }
      img.src = getFrameUrl(idx);
      img.onload = () => {
        frameCache[idx] = img;
        loadedMapRef.current[idx] = true;

        if ('requestIdleCallback' in window) {
          window.requestIdleCallback(() => {
            if (!processedCache[idx]) {
              processedCache[idx] = preprocessFrame(idx, img);
            }
          });
        } else {
          setTimeout(() => {
            if (!processedCache[idx]) {
              processedCache[idx] = preprocessFrame(idx, img);
            }
          }, 50);
        }

        if (idx === 1 && lastDrawnFrameRef.current === -1) {
          drawFrame(1);
        }
      };
      frameCache[idx] = img;
    };

    // 1. High priority keyframes
    [1, 2, 3, 4, 5, 205, 208, 210, 211, 212, 213, 214].forEach((idx) => loadSingleFrame(idx, true));

    // 2. Preload step frames
    for (let idx = 10; idx < TOTAL_FRAMES; idx += 5) {
      loadSingleFrame(idx, false);
    }

    // 3. Background idle loader
    let idleBatchIndex = 1;
    const loadRemainingIdle = () => {
      const nextBatchEnd = Math.min(TOTAL_FRAMES, idleBatchIndex + 10);
      for (let i = idleBatchIndex; i <= nextBatchEnd; i++) {
        loadSingleFrame(i, false);
      }
      idleBatchIndex = nextBatchEnd + 1;
      if (idleBatchIndex <= TOTAL_FRAMES) {
        if ('requestIdleCallback' in window) {
          window.requestIdleCallback(loadRemainingIdle);
        } else {
          setTimeout(loadRemainingIdle, 30);
        }
      }
    };
    loadRemainingIdle();

    // Lerp loop untuk animasi scroll frame yang halus
    const stepLerp = () => {
      const diff = targetFrameRef.current - currentRenderedFrame.current;
      if (Math.abs(diff) > 0.4) {
        currentRenderedFrame.current += diff * 0.28;
        const rounded = Math.round(currentRenderedFrame.current);
        drawFrame(rounded);

        // Preload tetangga frame terdekat
        for (let i = -3; i <= 3; i++) {
          const neighbor = rounded + i;
          if (neighbor >= 1 && neighbor <= TOTAL_FRAMES) {
            loadSingleFrame(neighbor, true);
          }
        }
        animFrameId.current = requestAnimationFrame(stepLerp);
      } else {
        currentRenderedFrame.current = targetFrameRef.current;
        const finalFrame = Math.round(currentRenderedFrame.current);
        drawFrame(finalFrame);
        isLerping.current = false;
      }
    };

    const startLerp = () => {
      if (!isLerping.current) {
        isLerping.current = true;
        animFrameId.current = requestAnimationFrame(stepLerp);
      }
    };

    // Animasi mulus intro tembok hancur menuju frame 214 secara otomatis dan sinematik
    let startTime = null;
    const duration = 1800; // 1.8 detik transisi mulus

    const playIntro = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const progress = Math.min(1, elapsed / duration);
      // Easing cubic ease-out
      const ease = 1 - Math.pow(1 - progress, 3);
      const target = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(1 + ease * (TOTAL_FRAMES - 1))));

      currentRenderedFrame.current = target;
      targetFrameRef.current = target;
      drawFrame(target);

      if (progress < 1) {
        animFrameId.current = requestAnimationFrame(playIntro);
      } else {
        drawFrame(TOTAL_FRAMES);
        setCurrentFrame(TOTAL_FRAMES);
        currentRenderedFrame.current = TOTAL_FRAMES;
        targetFrameRef.current = TOTAL_FRAMES;
      }
    };

    animFrameId.current = requestAnimationFrame(playIntro);

    // Wheel event handler: scroll mundur me-reverse animasi tembok, scroll maju menghancurkan tembok
    const handleWheel = (e) => {
      // Jika user sudah berada di section konten bawah (scrollY > 15), biarkan native page scroll bekerja normal
      if (window.scrollY > 15) return;

      const delta = e.deltaY;

      // Scroll ke ATAS: reverse animasi tembok ke arah frame 1
      if (delta < 0) {
        if (targetFrameRef.current > 1) {
          e.preventDefault();
          if (animFrameId.current && !isLerping.current) {
            cancelAnimationFrame(animFrameId.current);
          }
          const step = Math.max(3, Math.round(Math.abs(delta) * 0.18));
          targetFrameRef.current = Math.max(1, targetFrameRef.current - step);
          startLerp();
        }
      }
      // Scroll ke BAWAH: jika tembok belum hancur penuh (< 214), advance frame ke arah 214
      else if (delta > 0) {
        if (targetFrameRef.current < TOTAL_FRAMES) {
          e.preventDefault();
          if (animFrameId.current && !isLerping.current) {
            cancelAnimationFrame(animFrameId.current);
          }
          const step = Math.max(3, Math.round(Math.abs(delta) * 0.18));
          targetFrameRef.current = Math.min(TOTAL_FRAMES, targetFrameRef.current + step);
          startLerp();
        }
        // Jika targetFrameRef sudah 214 dan tembok hancur penuh, JANGAN preventDefault
        // agar user bisa scroll down dengan lancar ke section berikutnya (Hero & Main Content)
      }
    };

    // Touch gesture handler untuk mobile / touchpad pan
    let touchStartY = 0;
    const handleTouchStart = (e) => {
      touchStartY = e.touches[0]?.clientY || 0;
    };

    const handleTouchMove = (e) => {
      if (window.scrollY > 15) return;
      const curY = e.touches[0]?.clientY || 0;
      const delta = touchStartY - curY; // > 0: geser ke atas (scroll down), < 0: geser ke bawah (scroll up)

      if (delta < -8 && targetFrameRef.current > 1) {
        if (e.cancelable) e.preventDefault();
        if (animFrameId.current && !isLerping.current) {
          cancelAnimationFrame(animFrameId.current);
        }
        touchStartY = curY;
        targetFrameRef.current = Math.max(1, targetFrameRef.current - 5);
        startLerp();
      } else if (delta > 8 && targetFrameRef.current < TOTAL_FRAMES) {
        if (e.cancelable) e.preventDefault();
        if (animFrameId.current && !isLerping.current) {
          cancelAnimationFrame(animFrameId.current);
        }
        touchStartY = curY;
        targetFrameRef.current = Math.min(TOTAL_FRAMES, targetFrameRef.current + 5);
        startLerp();
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('touchstart', handleTouchStart, { passive: true });
    window.addEventListener('touchmove', handleTouchMove, { passive: false });

    return () => {
      if (animFrameId.current) cancelAnimationFrame(animFrameId.current);
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('touchstart', handleTouchStart);
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden bg-[#fbf9f8] lego-dot-bg"
    >
      {/* LAYER 1: TEMBOK MERAH (Paling Belakang - z-10) */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        <canvas ref={canvasRef} className="w-full h-full object-cover" />
      </div>

      {/* LAYER 2: LANYARD 3D (DI DEPAN TEMBOK - z-20) */}
      {/* Wrapper luar pointer-events-none sehingga sisi kiri dan kanan layar tetap tembus scroll ke window */}
      {currentFrame >= 214 && (
        <div className="absolute inset-0 z-20 pointer-events-none flex justify-center items-center">
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-5/12 max-w-[560px] h-full pointer-events-auto flex justify-center items-center">
            <Lego3DLanyard />
          </div>
        </div>
      )}

      {/* LAYER 3: AWAN PUTIH (Paling Depan - z-30, Diam Statis di Bawah Tembok) */}
      <img
        src="/awan-section.png"
        alt="Cloud Divider"
        className="absolute bottom-0 left-0 w-full z-30 pointer-events-none select-none block"
      />
    </div>
  );
}
