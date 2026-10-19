import React from 'react';

interface HeroSectionProps {
  onOpenInquiry: () => void;
  onOpenTelemetry: () => void;
  lang: 'KOR' | 'ENG';
}

export const HeroSection: React.FC<HeroSectionProps> = ({
  onOpenInquiry,
  onOpenTelemetry,
  lang,
}) => {
  return (
    <section className="relative w-full overflow-hidden bg-[#003d5d] text-white">
      {/* Atmospheric Ambient Background Graphic */}
      <div className="absolute inset-0 pointer-events-none opacity-25">
        <svg
          className="w-full h-full"
          fill="none"
          viewBox="0 0 1440 700"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            className="text-[#81cfff]"
            d="M-100 200 C300 120, 600 350, 1100 180 C1300 110, 1500 240, 1600 210"
            stroke="currentColor"
            strokeDasharray="8 8"
            strokeWidth="2"
          />
          <path
            className="text-[#8ec9fa]"
            d="M-80 340 C340 240, 720 480, 1200 310 C1400 240, 1580 380, 1680 340"
            stroke="currentColor"
            strokeWidth="1.5"
          />
          <circle cx="850" cy="220" fill="url(#hero-radial-glow)" r="360" />
          <defs>
            <radialGradient
              cx="0"
              cy="0"
              gradientTransform="translate(850 220) rotate(90) scale(360)"
              gradientUnits="userSpaceOnUse"
              id="hero-radial-glow"
              r="1"
            >
              <stop stopColor="#81cfff" stopOpacity="0.35" />
              <stop offset="1" stopColor="#003d5d" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>
      </div>

      <div className="relative w-full max-w-[1320px] mx-auto px-6 py-20 lg:py-24 flex flex-col lg:flex-row items-center gap-12 lg:gap-16">
        {/* Left Content */}
        <div className="flex-1 space-y-6 z-10">
          <div className="flex flex-wrap items-center gap-2.5">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0F4FC] text-[#003d5d] text-[12px] font-bold shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#005580] animate-pulse"></span>
              {lang === 'KOR'
                ? 'SINCE 1974 · 반세기 산업 가스 선도'
                : 'SINCE 1974 · Half a Century Leading Industrial Gases'}
            </span>
            <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/10 text-white text-[12px] font-semibold backdrop-blur-md border border-white/15">
              <span className="material-symbols-outlined text-[14px] text-[#81cfff]">verified</span>
              ISO 9001 / ISO 14001 인증기업
            </span>
          </div>

          <div className="space-y-2.5">
            <p className="text-[13px] sm:text-[14px] text-[#81cfff] tracking-wider uppercase font-bold">
              One-Stop Total Gas Solution
            </p>
            <h1 className="text-[32px] sm:text-[44px] lg:text-[48px] text-white font-extrabold tracking-tight leading-[1.18]">
              가스 설계부터 공급, 유지까지<br />
              <span className="text-[#81cfff]">전 공정을 아우르는</span> 토탈 솔루션
            </h1>
          </div>

          <p className="text-[15px] sm:text-[16px] text-[#e6f2ff]/85 max-w-xl leading-relaxed">
            {lang === 'KOR'
              ? '보이지 않는 에너지를 통해 사람들의 삶을 따뜻하게 연결합니다. 1974년부터 대한민국 기간산업과 첨단 테크 현장의 일상을 지켜온 신뢰받는 국가대표 가스 전문 기업 (주)MS가스입니다.'
              : 'Connecting lives with invisible energy since 1974. MS Gas is South Korea’s trusted national gas specialist powering heavy industry and high-tech manufacturing.'}
          </p>

          {/* CTA Row */}
          <div className="pt-2 flex flex-wrap items-center gap-3.5">
            <a
              href="#products"
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-lg bg-[#005678] hover:bg-[#003e58] text-white text-[14px] font-semibold transition-all shadow-md group cursor-pointer border border-[#81cfff]/30 hover:border-[#81cfff]"
            >
              <span>{lang === 'KOR' ? '제품 라인업 둘러보기' : 'Browse Product Lineup'}</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </a>
            <button
              onClick={onOpenInquiry}
              className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[14px] font-semibold transition-colors backdrop-blur-md border border-white/20 cursor-pointer"
            >
              <span className="material-symbols-outlined text-[18px] text-[#81cfff]">contact_support</span>
              <span>{lang === 'KOR' ? '맞춤 가스 솔루션 문의' : 'Custom Gas Consultation'}</span>
            </button>
          </div>

          {/* Highlight Features */}
          <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-4 text-[#e6f2ff]/80 text-[13px] border-t border-white/15">
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#81cfff] text-[20px]">local_shipping</span>
              <span>전국 17개 물류 거점망</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[#81cfff] text-[20px]">sensors</span>
              <span>IoT 실시간 재고 원격 관제</span>
            </div>
            <div className="flex items-center gap-2 col-span-2 sm:col-span-1">
              <span className="material-symbols-outlined text-[#FDD000] text-[20px]">security</span>
              <span>24/365 긴급 안전 대응 체계</span>
            </div>
          </div>
        </div>

        {/* Right Visual Feature (Tanker Fleet Showcase with Telemetry Click) */}
        <div className="flex-1 w-full relative">
          <div
            onClick={onOpenTelemetry}
            className="group relative w-full aspect-[16/11] rounded-2xl overflow-hidden shadow-2xl bg-[#EBF1F5] cursor-pointer border border-white/20 ring-1 ring-white/10 transition-all hover:shadow-[0_20px_50px_rgba(0,0,0,0.4)]"
            title="클릭하여 전국 특수 탱크로리 실시간 관제 현황 보기"
          >
            <img
              alt="MS Gas Logistics Fleet"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCYIR6tCFO0sRxIGiliq9wdOH9cD6JGOTkxshISmCZ8GoE9hTjt_XfhVRqmelo7G-cZArpE5JdL1tUHu9Yxnp2CyRNbz0_JaTxKF8mxYZZ1W4Eck33KNdBp37IMTjnx47EecoMxI-45JISxWNn7frbWUU_-nbVSdiHDKINNlO-vFc97QoXheTFwopElJTt9TFqIwfwGlkUsXVidKLKFl81YZryj-Kzu2TDjKzBBVMb4pRw8imTMpCIJTQ"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#003d5d]/90 via-[#003d5d]/20 to-transparent"></div>

            {/* Top Live Badge */}
            <div className="absolute top-4 right-4 px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-[11px] font-bold text-emerald-300 flex items-center gap-1.5 border border-white/20">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-ping"></span>
              <span>LIVE GPS TELEMETRY</span>
            </div>

            {/* Overlaid Live Telemetry Card */}
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-[#003d5d]/88 backdrop-blur-md text-white flex items-center justify-between shadow-lg border border-white/20 group-hover:bg-[#003d5d] transition-colors">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#81cfff]/20 flex items-center justify-center text-[#81cfff]">
                  <span className="material-symbols-outlined text-[24px]">network_check</span>
                </div>
                <div>
                  <p className="text-[11px] text-[#81cfff] font-bold uppercase tracking-wider">
                    National Logistics Fleet
                  </p>
                  <p className="text-[17px] sm:text-[19px] text-white font-bold flex items-center gap-1.5">
                    <span>실시간 특수 탱크로리 관제 가동 중</span>
                    <span className="material-symbols-outlined text-[16px] text-[#81cfff] group-hover:translate-x-1 transition-transform">
                      open_in_new
                    </span>
                  </p>
                </div>
              </div>
              <div className="hidden sm:flex flex-col items-end">
                <span className="text-[11px] text-[#E0F4FC] font-semibold">정시 공급 이행률</span>
                <span className="text-[20px] text-[#FDD000] font-extrabold">99.98%</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
