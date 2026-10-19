import React from 'react';

interface CompanyIntroModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenBranches: () => void;
}

export const CompanyIntroModal: React.FC<CompanyIntroModalProps> = ({
  isOpen,
  onClose,
  onOpenBranches,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-[#D5E2EA] overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-[#003d5d] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[24px] text-[#81cfff]">corporate_fare</span>
            <div>
              <h3 className="text-[18px] font-bold">회사소개 · (주)MS가스 반세기 기업 비전</h3>
              <p className="text-[12px] text-[#81cfff]">1974년 창립 이래 50년 동안 대한민국 기간산업을 지탱해 온 가스 전문 기업</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Scroll Content */}
        <div className="p-6 overflow-y-auto space-y-8 flex-1">
          {/* CEO Greeting Card */}
          <div className="p-6 rounded-2xl bg-[#F4F8FA] border border-[#D5E2EA] space-y-4">
            <div className="flex items-center justify-between">
              <span className="px-3 py-1 rounded-full bg-[#E0F4FC] text-[#003d5d] text-[12px] font-bold">
                CEO 인사말
              </span>
              <span className="text-[12px] font-bold text-[#FDD000] bg-[#111111] px-3 py-1 rounded-full flex items-center gap-1">
                <span className="material-symbols-outlined text-[14px]">military_tech</span>
                <span>은탑산업훈장 수훈 기업</span>
              </span>
            </div>
            <h4 className="text-[20px] font-extrabold text-[#071d2c] leading-snug">
              “보이지 않는 에너지로 국가 기간산업의 동력을 빚어내고,<br />
              철저한 안전과 신뢰로 고객과 함께 100년 기업을 향해 나아가겠습니다.”
            </h4>
            <div className="space-y-3 text-[14px] text-[#41474e] leading-relaxed">
              <p>
                안녕하십니까, (주)MS가스 대표이사 전청민입니다. 1974년 첫발을 내디딘 당사는 지난 50년간 산소, 질소, 아르곤 등 일반 산업용 고압가스부터 반도체·디스플레이용 6N 초고순도 특수가스, 생명을 살리는 식약처 GMP 인증 의료용 가스까지 대한민국 제조 및 의료 현장의 핵심 에너지를 안정적으로 공급해 왔습니다.
              </p>
              <p>
                최근 전 세계적인 탄소중립 전환에 발맞추어 울산 규제자유특구 암모니아 TTS 벙커링 인프라 구축과 경남 무탄소 선박 혼소 시스템 실증 과제를 주도하며, 차세대 무탄소 친환경 수소·암모니아 밸류체인의 선두주자로 도약하고 있습니다.
              </p>
              <p className="font-semibold text-[#071d2c] pt-2">
                (주)MS가스 대표이사 전청민 배상
              </p>
            </div>
          </div>

          {/* 3 Core Pillars */}
          <div className="space-y-3">
            <h4 className="text-[16px] font-bold text-[#071d2c] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[20px] text-[#003d5d]">verified</span>
              <span>(주)MS가스 3대 핵심 경영 가치</span>
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="p-5 rounded-xl border border-[#D5E2EA] bg-white shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-lg bg-[#E0F4FC] text-[#003d5d] flex items-center justify-center font-bold">
                  01
                </div>
                <h5 className="text-[16px] font-bold text-[#071d2c]">무사고 안전제일주의</h5>
                <p className="text-[13px] text-[#41474e] leading-relaxed">
                  24시간 IoT 중앙안전관제센터 운영과 100% KGS 안전인증을 통해 단 한 건의 안전사고도 용납하지 않는 엄격한 시스템.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-[#D5E2EA] bg-white shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-lg bg-[#E0F4FC] text-[#003d5d] flex items-center justify-center font-bold">
                  02
                </div>
                <h5 className="text-[16px] font-bold text-[#071d2c]">초고순도 6N 기술력</h5>
                <p className="text-[13px] text-[#41474e] leading-relaxed">
                  미량 불순물을 ppb 단위로 정밀 제어하는 클린룸 정제 공정과 국가표준원 소급 성적서 보증 체계.
                </p>
              </div>

              <div className="p-5 rounded-xl border border-[#D5E2EA] bg-white shadow-sm space-y-2">
                <div className="w-10 h-10 rounded-lg bg-[#E0F4FC] text-[#003d5d] flex items-center justify-center font-bold">
                  03
                </div>
                <h5 className="text-[16px] font-bold text-[#071d2c]">ESG 친환경 에너지 혁신</h5>
                <p className="text-[13px] text-[#41474e] leading-relaxed">
                  국가 암모니아 벙커링 및 선박 실증 사업을 이끌며 미래 무탄소 해양 및 수소 인프라 선도.
                </p>
              </div>
            </div>
          </div>

          {/* 50-Year Milestones Timeline */}
          <div className="space-y-3">
            <h4 className="text-[16px] font-bold text-[#071d2c] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[20px] text-[#003d5d]">history_edu</span>
              <span>50년의 발자취 (1974 ~ 현재)</span>
            </h4>
            <div className="space-y-3 border-l-2 border-[#003d5d] pl-4 ml-2 text-[13px]">
              <div className="relative">
                <span className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-[#003d5d]"></span>
                <span className="font-bold text-[#003d5d]">2024년 ~ 현재</span>
                <p className="text-[#071d2c] font-semibold">전청민 대표이사 은탑산업훈장 수훈 및 충남도지사 탄소중립 표창 수상</p>
                <p className="text-[#41474e]">울산 규제자유특구 암모니아 TTS 벙커링 인프라 구축 및 경남 선박 혼소 시스템 실증 주도</p>
              </div>

              <div className="relative">
                <span className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-[#005580]"></span>
                <span className="font-bold text-[#003d5d]">2010년대</span>
                <p className="text-[#071d2c] font-semibold">전국 17개 물류 거점망 완성 및 연 매출 900억 원 돌파</p>
                <p className="text-[#41474e]">식품의약품안전처 의료용 고압가스 GMP 전용 충전소 승인 및 반도체 6N 전용 클린룸 준공</p>
              </div>

              <div className="relative">
                <span className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-[#81cfff]"></span>
                <span className="font-bold text-[#003d5d]">1990년대 ~ 2000년대</span>
                <p className="text-[#071d2c] font-semibold">부산 본사 초저온 벌크 기지 확충 및 ISO 9001/14001 인증 획득</p>
                <p className="text-[#41474e]">수도권(화성/평택) 및 중부(천안/서산) 첨단산단 거점 지점망 대거 개척</p>
              </div>

              <div className="relative">
                <span className="absolute -left-[23px] top-1.5 w-3 h-3 rounded-full bg-gray-400"></span>
                <span className="font-bold text-[#003d5d]">1974년</span>
                <p className="text-[#071d2c] font-semibold">MS가스 창립 · 영남권 산업용 고압가스 공급 개시</p>
              </div>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-4 bg-[#F4F8FA] border-t border-[#D5E2EA] flex items-center justify-between text-[12px] text-[#41474e] shrink-0">
          <button
            onClick={() => {
              onClose();
              onOpenBranches();
            }}
            className="text-[#003d5d] font-bold hover:underline flex items-center gap-1 cursor-pointer"
          >
            <span>전국 17개 지점 및 오시는 길 확인하기</span>
            <span className="material-symbols-outlined text-[15px]">arrow_forward</span>
          </button>
          <button
            onClick={onClose}
            className="px-5 py-2 rounded-lg bg-[#003d5d] hover:bg-[#005580] text-white text-[13px] font-bold cursor-pointer transition-colors"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
