import React from 'react';

interface EsgProjectModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenInquiry: () => void;
}

export const EsgProjectModal: React.FC<EsgProjectModalProps> = ({
  isOpen,
  onClose,
  onOpenInquiry,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-[#D5E2EA] overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-[#003d5d] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[24px] text-[#81cfff]">eco</span>
            <div>
              <h3 className="text-[18px] font-bold">차세대 친환경 에너지 암모니아 벙커링 및 탄소중립 실증</h3>
              <p className="text-[12px] text-[#81cfff]">울산 규제자유특구 및 경남 해양 친환경 모빌리티 국가 R&D 프로젝트</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {/* Top Banner Image with Narrative */}
          <div className="relative aspect-[16/7] rounded-xl overflow-hidden bg-[#111111] border border-[#D5E2EA]">
            <img
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfkGrb_mO42QsLBGxBVWsDzGZkjZRIFeedRavOd0S16T1uZ9pAxmTYVqmPVP5856AY88391I9ZnM4t5e2AJ-M_2VTXUG78opdlmwfm-xwq5C6_8SiaxKyJbJKigyXiHmBOz8ToEp-cy0Wd2hdas_Ajc1iMY7o38EKX5ulgfBPeEH2ylqq6lNnwTtgkje4FBpEDJBqnpaoRiTYAULTWxvNfDU7GAGmg7fGNIip18zsm53jlFeBL8jEasA"
              alt="Ammonia Bunkering Harbor"
              className="w-full h-full object-cover opacity-75"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent flex items-end p-6">
              <div className="text-white space-y-1">
                <span className="px-2.5 py-0.5 rounded-full bg-[#81cfff] text-[#003d5d] text-[11px] font-bold">
                  국가 규제자유특구 실증과제
                </span>
                <h4 className="text-[20px] font-bold">
                  무탄소 청정연료 암모니아(NH₃) 기반 해상 벙커링 체계 완성
                </h4>
              </div>
            </div>
          </div>

          {/* Project Details 2-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-5 rounded-xl border border-[#D5E2EA] bg-[#F4F8FA] space-y-3">
              <div className="flex items-center gap-2 text-[#003d5d] font-bold text-[15px]">
                <span className="material-symbols-outlined text-[20px]">anchor</span>
                <h5>1. 울산 암모니아 TTS(Truck-To-Ship) 벙커링 인프라</h5>
              </div>
              <p className="text-[13px] text-[#41474e] leading-relaxed">
                특수 탱크로리를 이용해 친환경 추진 선박에 액화 암모니아를 안전하게 공급하는 이송 배관, 긴급 분리 차단(ERC) 커플링, 누출 감지 스크러버 정화 설비를 실증 시공하였습니다.
              </p>
              <div className="text-[12px] text-[#005580] bg-white p-3 rounded-lg border border-[#D5E2EA]">
                · 과제 성과: 고압 독성가스 안전기준 제정 및 실증 지침 마련<br />
                · 참여 기관: (주)MS가스, 울산항만공사, 한국조선해양기자재연구원
              </div>
            </div>

            <div className="p-5 rounded-xl border border-[#D5E2EA] bg-[#F4F8FA] space-y-3">
              <div className="flex items-center gap-2 text-[#003d5d] font-bold text-[15px]">
                <span className="material-symbols-outlined text-[20px]">directions_boat</span>
                <h5>2. 경남 암모니아 혼소 추진 시스템 선박 실증</h5>
              </div>
              <p className="text-[13px] text-[#41474e] leading-relaxed">
                해양 배출 온실가스를 최대 70% 이상 감축하기 위해 디젤과 무수암모니아를 최적 혼합하여 구동하는 선박 엔진용 가스 공급 모듈과 기화 시스템을 설계·공급하였습니다.
              </p>
              <div className="text-[12px] text-[#005580] bg-white p-3 rounded-lg border border-[#D5E2EA]">
                · 과제 성과: 실제 해상 시운전 통과 및 가스안전책임보험 가입<br />
                · 적용 기술: HAZOP 정성적 위험평가 및 정밀 유량제어
              </div>
            </div>
          </div>

          {/* Environmental Carbon Reduction Target */}
          <div className="p-5 rounded-xl bg-[#003d5d] text-white flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <span className="text-[12px] text-[#81cfff] font-bold uppercase tracking-wider">
                ESG Environmental Target
              </span>
              <h5 className="text-[18px] font-bold mt-0.5">
                2030 산업용 가스 공급 탄소배출 40% 감축 로드맵
              </h5>
              <p className="text-[12px] text-[#e6f2ff]/80 mt-1 max-w-xl">
                MS가스는 재생에너지 연계 청정수소 공급 인프라와 친환경 액화가스 전소 설비를 통해 고객사의 Scope 1/2 탄소중립 실현을 전방위 지원합니다.
              </p>
            </div>
            <button
              onClick={() => {
                onClose();
                onOpenInquiry();
              }}
              className="px-5 py-2.5 rounded-lg bg-[#81cfff] hover:bg-white text-[#003d5d] font-bold text-[13px] shrink-0 transition-colors cursor-pointer shadow-sm active:scale-98"
            >
              ESG 공급 상담 신청
            </button>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#F4F8FA] border-t border-[#D5E2EA] flex items-center justify-between text-[12px] text-[#41474e] shrink-0">
          <span>중소벤처기업부 및 지자체 규제특례제도 공식 승인 과제</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg border border-[#D5E2EA] bg-white text-[#071d2c] hover:bg-gray-100 font-medium cursor-pointer"
          >
            닫기
          </button>
        </div>
      </div>
    </div>
  );
};
