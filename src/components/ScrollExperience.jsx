import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lego3DLanyard from './3DLegoLanyard';

// Daftarkan plugin ScrollTrigger
gsap.registerPlugin(ScrollTrigger);

const TOTAL_FRAMES = 214;
const getFrameUrl = (idx) => `/frames/frame_${idx.toString().padStart(5, '0')}.webp`;

export default function ScrollExperience() {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const lanyardWrapperRef = useRef(null);
  const indicatorRef = useRef(null);
  const imagesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const ctx = canvas.getContext('2d', { alpha: true });
    const images = Array(TOTAL_FRAMES + 1);
    imagesRef.current = images;

    // ─── 1. RESIZE & FRAMING STABIL (Object-Cover Math) ───
    const resizeCanvas = () => {
      const rect = container.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.imageSmoothingEnabled = true;
      ctx.imageSmoothingQuality = 'high';
    };

    resizeCanvas();

    // ─── 2. RENDER FRAME KE CANVAS ───
    let lastRenderedIdx = -1;
    const renderFrame = (idx) => {
      const target = Math.max(1, Math.min(TOTAL_FRAMES, Math.round(idx)));
      let img = images[target];

      // Fallback ke frame terdekat jika frame target sedang loading
      if (!img || !img.complete || img.naturalWidth === 0) {
        for (let offset = 1; offset <= 25; offset++) {
          const prev = target - offset;
          const next = target + offset;
          if (prev >= 1 && images[prev]?.complete && images[prev]?.naturalWidth > 0) {
            img = images[prev];
            break;
          }
          if (next <= TOTAL_FRAMES && images[next]?.complete && images[next]?.naturalWidth > 0) {
            img = images[next];
            break;
          }
        }
      }

      if (!img || !img.complete || img.naturalWidth === 0) return;
      if (lastRenderedIdx === target) return;
      lastRenderedIdx = target;

      // Object-cover math agar framing tembok MERAH STABIL (tidak zoom/geser keluar layar)
      const hRatio = canvas.width / img.naturalWidth;
      const vRatio = canvas.height / img.naturalHeight;
      const ratio = Math.max(hRatio, vRatio);
      const drawWidth = img.naturalWidth * ratio;
      const drawHeight = img.naturalHeight * ratio;
      const shiftX = (canvas.width - drawWidth) / 2;
      const shiftY = (canvas.height - drawHeight) / 2;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, img.naturalWidth, img.naturalHeight, shiftX, shiftY, drawWidth, drawHeight);
    };

    // ─── 3. PRELOAD IMAGE SEQUENCE ───
    const loadFrame = (idx, priority = false) => {
      if (idx < 1 || idx > TOTAL_FRAMES || images[idx]) return;
      const img = new Image();
      if (priority && 'fetchPriority' in img) {
        img.fetchPriority = 'high';
      }
      img.src = getFrameUrl(idx);
      img.onload = () => {
        images[idx] = img;
        if (idx === 1 && lastRenderedIdx === -1) {
          renderFrame(1);
        }
      };
      images[idx] = img;
    };

    // Frame pertama wajib prioritas tertinggi
    loadFrame(1, true);

    // Keyframes prioritas tinggi
    [2, 3, 4, 5, 50, 100, 150, 180, 200, 210, 214].forEach((f) => loadFrame(f, true));

    // Preload bertahap
    for (let f = 10; f < TOTAL_FRAMES; f += 5) {
      loadFrame(f, false);
    }

    // Idle loader untuk sisa frame
    let idleBatch = 1;
    const loadRemaining = () => {
      const end = Math.min(TOTAL_FRAMES, idleBatch + 12);
      for (let i = idleBatch; i <= end; i++) {
        loadFrame(i, false);
      }
      idleBatch = end + 1;
      if (idleBatch <= TOTAL_FRAMES) {
        if ('requestIdleCallback' in window) {
          window.requestIdleCallback(loadRemaining);
        } else {
          setTimeout(loadRemaining, 35);
        }
      }
    };
    loadRemaining();

    // ─── 4. GSAP SCROLLTRIGGER PIN & SCRUB ───
    const frameObj = { frame: 1 };

    const ctxGsap = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: 'top top',
          end: '+=2500', // Memberi ruang scroll yang cukup untuk scrubbing mulus
          scrub: 1, // Scrubbing maju-mundur mengikuti scroll mouse
          pin: true, // Pinned di layar saat animasi berjalan
          anticipatePin: 1,
          onUpdate: (self) => {
            const targetFrame = Math.round(1 + self.progress * (TOTAL_FRAMES - 1));
            renderFrame(targetFrame);
          },
        },
      });

      // Lanyard pointer-events-none agar tidak menghijack mouse wheel
      gsap.set(lanyardWrapperRef.current, {
        opacity: 0,
        scale: 0.9,
        y: -60,
        pointerEvents: 'none',
      });

      // Hubungkan frame sequence animasi tembok ke timeline
      tl.to(
        frameObj,
        {
          frame: TOTAL_FRAMES,
          ease: 'none',
          duration: 1,
        },
        0
      );

      // Scroll Prompt Indicator langsung menghilang saat mulai di-scroll
      tl.to(
        indicatorRef.current,
        {
          opacity: 0,
          y: -25,
          duration: 0.1,
          ease: 'power1.out',
        },
        0
      );

      // Layer Lanyard: Meluncur turun masuk ke tengah saat lubang tembok terbuka
      tl.to(
        lanyardWrapperRef.current,
        {
          opacity: 1,
          scale: 1,
          y: 0,
          pointerEvents: 'none',
          duration: 0.25,
          ease: 'power2.out',
        },
        0.65
      );
    }, container);

    const onResize = () => {
      resizeCanvas();
      renderFrame(frameObj.frame);
      ScrollTrigger.refresh();
    };

    window.addEventListener('resize', onResize);

    return () => {
      window.removeEventListener('resize', onResize);
      ctxGsap.revert(); // Safe cleanup ScrollTrigger & GSAP
    };
  }, []);

  return (
    <>
      {/* ─── PINNED HERO SECTION (CANVAS + LANYARD) ─── */}
      <section
        ref={containerRef}
        className="relative w-full h-screen overflow-hidden bg-[#fbf9f8] lego-dot-bg flex items-center justify-center select-none"
      >
        {/* ─── LAYER 1: CANVAS IMAGE SEQUENCE TEMBOK LEGO (Paling Belakang - z-10) ─── */}
        <div className="absolute inset-0 z-10 pointer-events-none flex items-center justify-center overflow-hidden">
          <canvas
            ref={canvasRef}
            className="w-full h-full object-cover object-center pointer-events-none block will-change-transform"
          />
        </div>

        {/* ─── LAYER 2: LANYARD 3D INTERAKTIF (Di Depan Tembok Terbuka - z-20) ─── */}
        <div
          ref={lanyardWrapperRef}
          className="absolute inset-0 z-20 pointer-events-none flex justify-center items-center opacity-0 will-change-transform"
        >
          <div className="w-full sm:w-2/3 md:w-1/2 lg:w-5/12 max-w-[560px] h-full pointer-events-none flex justify-center items-center">
            <Lego3DLanyard />
          </div>
        </div>

        {/* ─── PROMPT INDICATOR (z-40) ─── */}
        <div
          ref={indicatorRef}
          className="absolute bottom-10 md:bottom-12 flex flex-col items-center gap-4 transition-opacity duration-300 pointer-events-none z-40"
        >
          <span className="font-label-caps text-label-caps font-bold bg-white px-6 py-3 border-4 border-black brick-shadow uppercase text-black select-none">
            Scroll to Build
          </span>
          <div className="w-8 h-8 border-4 border-black bg-white brick-shadow flex items-center justify-center animate-bounce">
            <span className="font-black text-primary text-[18px]">↓</span>
          </div>
        </div>
      </section>

      {/* ─── MARQUEE BANNER DIVIDER (Pita Biru Memanjang Tanpa Awan) ─── */}
      <div className="relative w-full overflow-hidden bg-blue-600 border-y-4 border-black py-3 sm:py-3.5 select-none z-30 shadow-[0_4px_0_0_#000]">
        <div className="flex w-max animate-marquee will-change-transform items-center">
          {/* Block 1 (50%) */}
          <div className="flex items-center gap-6 sm:gap-8 pr-6 sm:pr-8 shrink-0">
            {Array(8).fill(null).map((_, idx) => (
              <React.Fragment key={`m1-${idx}`}>
                <span className="font-black text-lg sm:text-2xl tracking-widest text-[#FFD500] uppercase drop-shadow-[2px_2px_0px_#000]">
                  BUILD
                </span>
                <span className="text-white text-base sm:text-xl font-bold">▣</span>
                <span className="font-black text-lg sm:text-2xl tracking-widest text-white uppercase drop-shadow-[2px_2px_0px_#000]">
                  CODE
                </span>
                <span className="text-[#FFD500] text-base sm:text-xl font-bold">▣</span>
                <span className="font-black text-lg sm:text-2xl tracking-widest text-[#FFD500] uppercase drop-shadow-[2px_2px_0px_#000]">
                  DESIGN
                </span>
                <span className="text-white text-base sm:text-xl font-bold">▣</span>
              </React.Fragment>
            ))}
          </div>

          {/* Block 2 (50% duplicate for seamless infinite loop) */}
          <div className="flex items-center gap-6 sm:gap-8 pr-6 sm:pr-8 shrink-0">
            {Array(8).fill(null).map((_, idx) => (
              <React.Fragment key={`m2-${idx}`}>
                <span className="font-black text-lg sm:text-2xl tracking-widest text-[#FFD500] uppercase drop-shadow-[2px_2px_0px_#000]">
                  BUILD
                </span>
                <span className="text-white text-base sm:text-xl font-bold">▣</span>
                <span className="font-black text-lg sm:text-2xl tracking-widest text-white uppercase drop-shadow-[2px_2px_0px_#000]">
                  CODE
                </span>
                <span className="text-[#FFD500] text-base sm:text-xl font-bold">▣</span>
                <span className="font-black text-lg sm:text-2xl tracking-widest text-[#FFD500] uppercase drop-shadow-[2px_2px_0px_#000]">
                  DESIGN
                </span>
                <span className="text-white text-base sm:text-xl font-bold">▣</span>
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
