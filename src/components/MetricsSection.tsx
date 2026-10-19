import React from 'react';

interface MetricsSectionProps {
  onOpenBranches: () => void;
  lang: 'KOR' | 'ENG';
}

export const MetricsSection: React.FC<MetricsSectionProps> = ({
  onOpenBranches,
  lang,
}) => {
  return (
    <section className="w-full bg-[#111111] text-white py-16 lg:py-20 border-t border-b border-white/10">
      <div className="w-full max-w-[1320px] mx-auto px-6 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[12px] text-[#81cfff] font-bold tracking-widest uppercase">
              Performance & Network
            </span>
            <h2 className="text-[26px] sm:text-[34px] font-bold text-white mt-1 leading-snug">
              {lang === 'KOR'
                ? '전국적인 네트워크를 통한 유기적인 가스 공급 실현'
                : 'Seamless National Gas Supply Across Unified Infrastructure'}
            </h2>
          </div>
          <p className="text-[14px] text-[#e6f2ff]/70 max-w-md leading-relaxed">
            {lang === 'KOR'
              ? '(주)MS가스는 전국을 아우르는 고도화된 운송 인프라와 실시간 모니터링 시스템을 통해, 언제 어디서나 안전하고 끊김없는 가스 에너지를 공급합니다.'
              : 'With nationwide logistics hubs and digital IoT telemetry, MS Gas guarantees zero-downtime, safe, and dependable industrial energy.'}
          </p>
        </div>

        {/* 4-Grid Metric Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {/* Metric 1 */}
          <div
            onClick={onOpenBranches}
            className="group relative p-6 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] transition-all backdrop-blur-sm border border-white/10 cursor-pointer"
          >
            <div className="w-8 h-1 rounded-full bg-[#81cfff] mb-4 group-hover:w-14 transition-all"></div>
            <div className="flex items-baseline gap-1">
              <span className="text-[40px] lg:text-[46px] text-white font-extrabold tracking-tight">8</span>
              <span className="text-[20px] text-[#81cfff] font-bold">개</span>
            </div>
            <h3 className="text-[15px] text-white font-bold mt-2 flex items-center justify-between">
              <span>핵심 지역 사업본부</span>
              <span className="material-symbols-outlined text-[16px] text-[#81cfff] opacity-0 group-hover:opacity-100 transition-opacity">
                arrow_forward
              </span>
            </h3>
            <p className="text-[13px] text-[#e6f2ff]/60 mt-1.5 leading-relaxed">
              수도권, 충청, 영남, 호남권역 총괄 전략 거점
            </p>
          </div>

          {/* Metric 2 */}
          <div
            onClick={onOpenBranches}
            className="group relative p-6 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] transition-all backdrop-blur-sm border border-white/10 cursor-pointer"
          >
            <div className="w-8 h-1 rounded-full bg-[#81cfff] mb-4 group-hover:w-14 transition-all"></div>
            <div className="flex items-baseline gap-1">
              <span className="text-[40px] lg:text-[46px] text-white font-extrabold tracking-tight">17</span>
              <span className="text-[20px] text-[#81cfff] font-bold">개</span>
            </div>
            <h3 className="text-[15px] text-white font-bold mt-2 flex items-center justify-between">
              <span>전국 충전 및 물류 영업소</span>
              <span className="material-symbols-outlined text-[16px] text-[#81cfff] opacity-0 group-hover:opacity-100 transition-opacity">
                arrow_forward
              </span>
            </h3>
            <p className="text-[13px] text-[#e6f2ff]/60 mt-1.5 leading-relaxed">
              전국 직영 및 협력 거점망을 통한 24시간 배송
            </p>
          </div>

          {/* Metric 3 */}
          <div className="group relative p-6 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] transition-all backdrop-blur-sm border border-white/10">
            <div className="w-8 h-1 rounded-full bg-[#81cfff] mb-4 group-hover:w-14 transition-all"></div>
            <div className="flex items-baseline gap-1">
              <span className="text-[40px] lg:text-[46px] text-white font-extrabold tracking-tight">10</span>
              <span className="text-[20px] text-[#81cfff] font-bold">개국</span>
            </div>
            <h3 className="text-[15px] text-white font-bold mt-2">글로벌 해외 네트워크</h3>
            <p className="text-[13px] text-[#e6f2ff]/60 mt-1.5 leading-relaxed">
              특수가스 및 원료 가스 수입·수출 글로벌 협력
            </p>
          </div>

          {/* Metric 4 */}
          <div className="group relative p-6 rounded-xl bg-white/[0.04] hover:bg-white/[0.08] transition-all backdrop-blur-sm border border-white/10">
            <div className="w-8 h-1 rounded-full bg-[#FDD000] mb-4 group-hover:w-14 transition-all"></div>
            <div className="flex items-baseline gap-1.5">
              <span className="text-[40px] lg:text-[46px] text-[#FDD000] font-extrabold tracking-tight">935</span>
              <span className="text-[20px] text-white font-bold">억 원</span>
            </div>
            <h3 className="text-[15px] text-white font-bold mt-2">연간 매출액</h3>
            <p className="text-[13px] text-[#e6f2ff]/60 mt-1.5 leading-relaxed">
              2024 회계연도 GAAP 기준 검증된 건실한 재무건전성
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
