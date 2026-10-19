import React from 'react';

interface QuickSupportPortalsProps {
  onOpenCompanyIntro: () => void;
  onOpenInquiry: () => void;
  onOpenBranches: () => void;
  onScrollToNotices: () => void;
  lang: 'KOR' | 'ENG';
}

export const QuickSupportPortals: React.FC<QuickSupportPortalsProps> = ({
  onOpenCompanyIntro,
  onOpenInquiry,
  onOpenBranches,
  onScrollToNotices,
  lang,
}) => {
  return (
    <section className="w-full bg-[#111111] text-white py-16 lg:py-20" id="quick-support">
      <div className="w-full max-w-[1320px] mx-auto px-6 space-y-12">
        <div className="text-center max-w-xl mx-auto space-y-2">
          <span className="text-[12px] text-[#81cfff] font-bold tracking-widest uppercase">
            Quick Support Portals
          </span>
          <h2 className="text-[24px] sm:text-[30px] text-white font-bold">
            {lang === 'KOR'
              ? '(주)MS가스 고객 지원 바로가기'
              : 'Direct Enterprise Support Portals'}
          </h2>
          <p className="text-[13px] sm:text-[14px] text-[#e6f2ff]/60">
            {lang === 'KOR'
              ? '원하시는 전용 서비스를 선택하시면 신속하고 전문적인 담당자 창구로 연결됩니다.'
              : 'Access immediate dedicated channels for plant audits, gas inquiries, and regional depot contacts.'}
          </p>
        </div>

        {/* 4 High Utility Interactive Tiles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* 1. 회사소개 */}
          <button
            onClick={onOpenCompanyIntro}
            className="p-6 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] transition-all group flex items-start gap-4 text-left border border-white/10 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-[#005580] text-[#81cfff] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[28px]">corporate_fare</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-[17px] text-white font-bold group-hover:text-[#81cfff] transition-colors flex items-center gap-1">
                <span>회사소개</span>
                <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">
                  arrow_forward
                </span>
              </h3>
              <p className="text-[13px] text-[#e6f2ff]/65 leading-relaxed">
                CEO 인사말, 조직도, 50년 연혁 및 안전경영 비전 안내
              </p>
            </div>
          </button>

          {/* 2. 온라인 문의 */}
          <button
            onClick={onOpenInquiry}
            className="p-6 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] transition-all group flex items-start gap-4 text-left border border-white/10 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-[#005580] text-[#81cfff] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[28px]">forum</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-[17px] text-white font-bold group-hover:text-[#81cfff] transition-colors flex items-center gap-1">
                <span>온라인 문의</span>
                <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">
                  arrow_forward
                </span>
              </h3>
              <p className="text-[13px] text-[#e6f2ff]/65 leading-relaxed">
                신속한 가스 견적, 초저온 저장탱크 시공 상담 및 1:1 기술 지원
              </p>
            </div>
          </button>

          {/* 3. 새로운 소식 */}
          <button
            onClick={onScrollToNotices}
            className="p-6 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] transition-all group flex items-start gap-4 text-left border border-white/10 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-[#005580] text-[#81cfff] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[28px]">campaign</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-[17px] text-white font-bold group-hover:text-[#81cfff] transition-colors flex items-center gap-1">
                <span>새로운 소식</span>
                <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">
                  arrow_forward
                </span>
              </h3>
              <p className="text-[13px] text-[#e6f2ff]/65 leading-relaxed">
                입찰공고, R&D 규제자유특구 실증특례 소식 및 언론보도
              </p>
            </div>
          </button>

          {/* 4. 오시는 길 */}
          <button
            onClick={onOpenBranches}
            className="p-6 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] transition-all group flex items-start gap-4 text-left border border-white/10 cursor-pointer"
          >
            <div className="w-12 h-12 rounded-xl bg-[#005580] text-[#81cfff] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
              <span className="material-symbols-outlined text-[28px]">pin_drop</span>
            </div>
            <div className="space-y-1">
              <h3 className="text-[17px] text-white font-bold group-hover:text-[#81cfff] transition-colors flex items-center gap-1">
                <span>오시는 길</span>
                <span className="material-symbols-outlined text-[16px] opacity-0 group-hover:opacity-100 transition-opacity">
                  arrow_forward
                </span>
              </h3>
              <p className="text-[13px] text-[#e6f2ff]/65 leading-relaxed">
                부산 본사 및 전국 17개 영업지점과 물류 충전소 위치 안내
              </p>
            </div>
          </button>
        </div>
      </div>
    </section>
  );
};
