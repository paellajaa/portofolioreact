import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Daftarkan ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export default function ScrollExperience() {
  const componentRef = useRef(null);
  const wallRef = useRef(null);
  const cardRef = useRef(null);
  const strapRef = useRef(null);
  const cloudsRef = useRef(null);
  const indicatorRef = useRef(null);

  useEffect(() => {
    // Gunakan gsap.context untuk scoping dan safe cleanup
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: componentRef.current,
          start: 'top top',
          end: '+=2000',
          scrub: 1, // scrubbing maju-mundur mengikuti pergerakan scroll
          pin: true, // pin container saat animasi berjalan
          anticipatePin: 1,
        },
      });

      // 1. Scroll Indicator langsung fade out saat mulai scroll
      tl.to(
        indicatorRef.current,
        {
          opacity: 0,
          y: -25,
          duration: 0.15,
          ease: 'power1.out',
        },
        0
      );

      // 2. Dinding Lego background bergerak dengan efek parallax & subtle scale
      tl.to(
        wallRef.current,
        {
          scale: 1.12,
          yPercent: 4,
          duration: 1,
          ease: 'none',
        },
        0
      );

      // 3. Tali Lanyard & Kartu ID Profil meluncur turun masuk ke tengah layar
      tl.fromTo(
        strapRef.current,
        { scaleY: 0, transformOrigin: 'top center' },
        {
          scaleY: 1,
          duration: 0.6,
          ease: 'power2.out',
        },
        0.05
      );

      tl.fromTo(
        cardRef.current,
        {
          y: -900,
          rotation: -10,
          scale: 0.85,
          opacity: 0,
        },
        {
          y: 0,
          rotation: 0,
          scale: 1,
          opacity: 1,
          duration: 0.65,
          ease: 'power2.out',
        },
        0.05
      );

      // Ayunan natural kartu saat tiba di tengah
      tl.to(
        cardRef.current,
        {
          rotation: 3,
          duration: 0.18,
          ease: 'power1.inOut',
        },
        0.7
      ).to(
        cardRef.current,
        {
          rotation: 0,
          duration: 0.15,
          ease: 'power1.inOut',
        },
        0.88
      );

      // 4. Tumpukan Awan Lego di bagian bawah bergerak naik masuk
      tl.fromTo(
        cloudsRef.current,
        {
          yPercent: 55,
          opacity: 0.85,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.55,
          ease: 'power2.inOut',
        },
        0.45
      );
    }, componentRef);

    return () => ctx.revert(); // Cleanup semua GSAP trigger & tween saat unmount
  }, []);

  return (
    <section
      ref={componentRef}
      className="relative w-full h-screen overflow-hidden bg-[#fbf9f8] select-none"
    >
      {/* ─── LAYER 1: DINDING LEGO (Background - z-10) ─── */}
      <div className="absolute inset-0 z-10 overflow-hidden pointer-events-none">
        <img
          ref={wallRef}
          src="/images/lego-wall.png"
          alt="Lego Wall Background"
          className="w-full h-full object-cover object-center scale-100 will-change-transform"
          onError={(e) => {
            // Fallback jika path di root
            e.currentTarget.src = '/lego-wall.png';
          }}
        />
        {/* Subtle overlay gradient */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/15 via-transparent to-black/35" />
      </div>

      {/* ─── LAYER 2: TALI & KARTU ID PROFIL (Tengah - z-20) ─── */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center pointer-events-none pt-4">
        {/* Tali Lanyard yang terhubung ke atas */}
        <div
          ref={strapRef}
          className="w-7 h-48 -mb-2 bg-[#FFD500] border-x-4 border-black shadow-[4px_4px_0px_0px_#000] flex flex-col justify-around items-center overflow-hidden will-change-transform z-10"
        >
          <div className="w-full h-2 bg-[#af101a]" />
          <div className="w-full h-2 bg-[#0055a4]" />
          <div className="w-full h-2 bg-[#00852B]" />
        </div>

        {/* Jepitan Klip Lanyard Lego */}
        <div className="w-12 h-6 bg-[#af101a] border-4 border-black shadow-[3px_3px_0px_0px_#000] rounded-sm z-20 flex items-center justify-center -mb-2">
          <div className="w-3 h-3 rounded-full bg-[#FFD500] border-2 border-black" />
        </div>

        {/* Kartu ID Profil Utama */}
        <div
          ref={cardRef}
          className="w-[310px] sm:w-[350px] bg-white border-4 border-black shadow-[10px_10px_0px_0px_#000] rounded-2xl overflow-hidden p-5 flex flex-col gap-4 pointer-events-auto will-change-transform z-20 bg-dot-grid"
        >
          {/* Header Kartu dengan Studs Lego */}
          <div className="flex items-center justify-between border-b-4 border-black pb-3">
            <div className="flex gap-2">
              <div className="w-3.5 h-3.5 rounded-full bg-[#af101a] border-2 border-black" />
              <div className="w-3.5 h-3.5 rounded-full bg-[#FFD500] border-2 border-black" />
              <div className="w-3.5 h-3.5 rounded-full bg-[#00852B] border-2 border-black" />
            </div>
            <span className="font-mono text-[10px] font-black uppercase px-2 py-0.5 bg-[#FFD500] border-2 border-black shadow-[2px_2px_0px_0px_#000]">
              ID: BUILDER-01
            </span>
          </div>

          {/* Foto Profil & Badge */}
          <div className="flex gap-4 items-center">
            <div className="relative w-20 h-20 rounded-xl overflow-hidden border-4 border-black bg-neutral-200 shrink-0 shadow-[3px_3px_0px_0px_#000]">
              <img
                src="/images/profile-hero.jpg"
                alt="Raffael Aditya"
                className="w-full h-full object-cover"
                onError={(e) => {
                  e.currentTarget.src = '/profile-hero.jpg';
                }}
              />
            </div>
            <div className="flex flex-col gap-1 min-w-0">
              <span className="text-[11px] font-bold font-mono text-[#af101a] uppercase tracking-wider flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-[#af101a] animate-pulse" />
                ONLINE / READY
              </span>
              <h2 className="font-black text-lg text-black leading-tight truncate">
                RAFFAEL ADITYA
              </h2>
              <span className="text-xs font-bold text-neutral-600 truncate">
                AL FACHRY
              </span>
            </div>
          </div>

          {/* Role & Bio Mini */}
          <div className="bg-[#f5f5f5] border-3 border-black p-2.5 rounded-lg flex flex-col gap-1">
            <div className="text-[10px] font-mono font-bold text-neutral-500 uppercase">
              SPECIALIZATION
            </div>
            <div className="font-black text-xs text-black uppercase tracking-tight">
              Front-End Developer & UI/UX Designer
            </div>
          </div>

          {/* Barcode & Footer Strip */}
          <div className="flex items-center justify-between pt-1 border-t-2 border-dashed border-neutral-300">
            <div className="flex items-center gap-1 h-6">
              {[4, 2, 6, 2, 8, 3, 5, 2, 7, 3, 4].map((h, idx) => (
                <div
                  key={idx}
                  className="bg-black w-1 rounded-xs"
                  style={{ height: `${h * 2.4}px` }}
                />
              ))}
            </div>
            <span className="font-mono text-[9px] font-bold text-neutral-500">
              PORTFOLIO // 2026
            </span>
          </div>
        </div>
      </div>

      {/* ─── LAYER 3: TUMPUKAN AWAN LEGO (Bawah - z-30) ─── */}
      <div
        ref={cloudsRef}
        className="absolute -bottom-1 left-0 w-full z-30 pointer-events-none select-none will-change-transform leading-none"
      >
        <img
          src="/images/awan-section.png"
          alt="Lego Cloud Divider"
          className="w-full h-auto block select-none object-cover"
          onError={(e) => {
            e.currentTarget.src = '/awan-section.png';
          }}
        />
      </div>

      {/* ─── SCROLL INDICATOR CUE (z-40) ─── */}
      <div
        ref={indicatorRef}
        className="absolute bottom-8 left-0 right-0 flex flex-col items-center gap-2 pointer-events-none z-40"
      >
        <span className="font-mono text-xs font-black uppercase bg-white px-4 py-1.5 border-3 border-black shadow-[3px_3px_0px_0px_#000] text-black">
          Scroll Down to Scrub
        </span>
        <div className="w-8 h-8 bg-[#FFD500] border-3 border-black shadow-[3px_3px_0px_0px_#000] flex items-center justify-center animate-bounce">
          <span className="font-black text-sm">↓</span>
        </div>
      </div>
    </section>
  );
}
