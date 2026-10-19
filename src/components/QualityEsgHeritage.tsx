import React from 'react';

interface QualityEsgHeritageProps {
  onOpenEsgProject: () => void;
  onOpenCompanyIntro: () => void;
  onOpenMsds: () => void;
  lang: 'KOR' | 'ENG';
}

export const QualityEsgHeritage: React.FC<QualityEsgHeritageProps> = ({
  onOpenEsgProject,
  onOpenCompanyIntro,
  onOpenMsds,
  lang,
}) => {
  return (
    <section className="w-full bg-[#f6f9ff] py-20 lg:py-24" id="quality-esg">
      <div className="w-full max-w-[1320px] mx-auto px-6 space-y-12">
        {/* Section Header */}
        <div className="max-w-2xl">
          <span className="text-[12px] text-[#003d5d] font-bold uppercase tracking-widest">
            Quality, ESG & Heritage
          </span>
          <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#071d2c] mt-1 leading-tight">
            {lang === 'KOR'
              ? '지속적인 연구와 품질 관리로 신뢰를 만듭니다'
              : 'Building Trust Through Relentless R&D and Safety Quality'}
          </h2>
          <p className="text-[14px] sm:text-[15px] text-[#41474e] mt-2 leading-relaxed">
            {lang === 'KOR'
              ? '반세기 동안 지켜온 기본과 원칙. 친환경 에너지 패러다임 전환과 첨단 안전 분석 역량을 통해 대한민국 산업 기반을 든든하게 받칩니다.'
              : 'Rooted in 50 years of uncompromising principles. Pioneering green hydrogen-ammonia bunkering while anchoring Korea’s heavy manufacturing base.'}
          </p>
        </div>

        {/* Bento Mosaic */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {/* Bento 1: ESG Leadership (Large Card - spans 2 cols) */}
          <div
            onClick={onOpenEsgProject}
            className="md:col-span-2 lg:col-span-2 relative rounded-2xl overflow-hidden bg-[#003d5d] text-white p-8 lg:p-10 flex flex-col justify-between min-h-[380px] shadow-lg group cursor-pointer border border-[#81cfff]/30 transition-all hover:shadow-2xl"
          >
            <div className="absolute inset-0 opacity-30">
              <img
                alt="Green Ammonia Bunkering"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfkGrb_mO42QsLBGxBVWsDzGZkjZRIFeedRavOd0S16T1uZ9pAxmTYVqmPVP5856AY88391I9ZnM4t5e2AJ-M_2VTXUG78opdlmwfm-xwq5C6_8SiaxKyJbJKigyXiHmBOz8ToEp-cy0Wd2hdas_Ajc1iMY7o38EKX5ulgfBPeEH2ylqq6lNnwTtgkje4FBpEDJBqnpaoRiTYAULTWxvNfDU7GAGmg7fGNIip18zsm53jlFeBL8jEasA"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#003d5d] via-[#003d5d]/60 to-transparent"></div>
            </div>

            <div className="relative z-10 space-y-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#E0F4FC] text-[#003d5d] text-[12px] font-bold">
                <span className="material-symbols-outlined text-[15px]">eco</span>
                ESG 경영 · 지속가능 성장
              </span>
              <h3 className="text-[22px] sm:text-[26px] text-white font-bold leading-tight">
                차세대 친환경 에너지<br />
                암모니아 벙커링 및 탄소중립 실증
              </h3>
              <p className="text-[13px] sm:text-[14px] text-[#e6f2ff]/80 max-w-md leading-relaxed">
                울산 규제자유특구 암모니아 TTS 벙커링 인프라 및 경남 암모니아 혼소 추진 시스템 실증 참여를 통해 국가 수소·암모니아 친환경 밸류체인을 선도합니다.
              </p>
            </div>

            <div className="relative z-10 pt-6 flex items-center gap-2 text-[#81cfff] group-hover:text-white font-semibold text-[14px] transition-colors">
              <span>ESG 실증 프로젝트 현황 상세 열람</span>
              <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
                arrow_forward
              </span>
            </div>
          </div>

          {/* Bento 2: History (1974년 설립) */}
          <div
            onClick={onOpenCompanyIntro}
            className="relative rounded-2xl overflow-hidden bg-[#111111] text-white p-6 lg:p-8 flex flex-col justify-between min-h-[380px] shadow-lg border border-white/10 group cursor-pointer hover:border-[#FDD000]/40 transition-all"
          >
            <div className="space-y-3">
              <span className="text-[12px] text-[#FDD000] font-bold uppercase tracking-wider">
                Heritage Since 1974
              </span>
              <h3 className="text-[20px] font-bold text-white leading-snug">
                1974년 창립 이래<br />
                50년 축적의 엔지니어링
              </h3>
              <p className="text-[13px] text-[#e6f2ff]/70 leading-relaxed">
                가스 단일 전문 기업으로서 반세기 동안 쉼 없이 고순도 제조 기술과 초저온 수송 기술을 정립해 왔습니다.
              </p>
            </div>

            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white/5 border border-white/10 flex items-center justify-between group-hover:bg-white/10 transition-colors">
                <div>
                  <p className="text-[11px] text-[#e6f2ff]/50 font-medium">정부 훈장 수상</p>
                  <p className="text-[15px] text-white font-bold">은탑산업훈장 수훈</p>
                </div>
                <span className="material-symbols-outlined text-[#FDD000] text-[34px]">
                  military_tech
                </span>
              </div>
              <p className="text-[11px] text-[#81cfff] flex items-center gap-1">
                <span>반세기 연혁 및 비전 보기</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </p>
            </div>
          </div>

          {/* Bento 3: MSDS & Chemical Safety Hub */}
          <div className="relative rounded-2xl overflow-hidden bg-[#d6ebff] text-[#071d2c] p-6 lg:p-8 flex flex-col justify-between min-h-[380px] shadow-sm border border-[#81cfff]/50">
            <div className="space-y-3">
              <span className="text-[12px] text-[#003d5d] font-bold uppercase tracking-wider">
                Safety & Compliance
              </span>
              <h3 className="text-[20px] font-bold text-[#071d2c] leading-snug">
                MSDS 및 안전보건<br />
                디지털 자료실
              </h3>
              <p className="text-[13px] text-[#41474e] leading-relaxed">
                공급되는 모든 고압·특수가스의 법정 물질안전보건자료(MSDS)와 비상대응 매뉴얼을 실시간 열람 및 다운로드할 수 있습니다.
              </p>
            </div>

            <div className="space-y-2.5 pt-4">
              <button
                onClick={onOpenMsds}
                className="w-full py-3 px-4 rounded-lg bg-[#003d5d] hover:bg-[#005580] text-white text-[13px] font-semibold flex items-center justify-between transition-colors shadow-sm cursor-pointer active:scale-98"
              >
                <span>MSDS 신속 조회하기</span>
                <span className="material-symbols-outlined text-[18px]">search</span>
              </button>
              <p className="text-[11px] text-center text-[#41474e]/80">
                산업안전보건법 및 화학물질관리법 준수
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
