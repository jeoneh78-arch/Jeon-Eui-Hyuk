import React from 'react';

interface FooterProps {
  onOpenMsds: () => void;
  onOpenCatalog: (filterCat?: string) => void;
  onOpenBranches: () => void;
  onOpenSafetyPolicy: () => void;
  onOpenLegalModal: (title: string, content: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onOpenMsds,
  onOpenCatalog,
  onOpenBranches,
  onOpenSafetyPolicy,
  onOpenLegalModal,
}) => {
  return (
    <footer className="w-full bg-[#1e3241] text-[#e6f2ff]">
      <div className="w-full max-w-[1320px] mx-auto px-6 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/10">
          {/* Brand Info */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <span className="text-[22px] font-bold text-white tracking-tight">
                (주)MS가스
              </span>
              <span className="px-2.5 py-0.5 rounded-full bg-[#005580] text-white text-[12px] font-bold tracking-wide">
                Safety First
              </span>
            </div>
            <p className="text-[14px] text-[#e6f2ff]/80 max-w-md leading-relaxed">
              반세기 축적된 초고순도 가스 정제 및 공급 기술력. 대한민국 전역 17개 거점 네트워크로 고압가스, 특수가스, 의료용 가스의 안정적인 공급을 선도합니다.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={onOpenMsds}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[12px] font-semibold transition-colors border border-white/15 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px] text-[#81cfff]">description</span>
                <span>MSDS 자료실 바로가기</span>
              </button>
              <button
                onClick={onOpenSafetyPolicy}
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-lg bg-white/10 hover:bg-white/20 text-white text-[12px] font-semibold transition-colors border border-white/15 cursor-pointer"
              >
                <span className="material-symbols-outlined text-[16px] text-[#FDD000]">verified_user</span>
                <span>안전보건경영방침</span>
              </button>
            </div>
          </div>

          {/* Col 1: 제품 및 공급 */}
          <div>
            <h4 className="text-[14px] font-bold text-white mb-4 tracking-wider uppercase">
              제품 및 공급
            </h4>
            <ul className="space-y-2.5 text-[13px] text-[#e6f2ff]/75">
              <li>
                <button
                  onClick={() => onOpenCatalog('특수 가스')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  초고순도 특수가스
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenCatalog('의료용 가스')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  의료용 의약품 가스
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenCatalog('산업용 가스')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  산업용 일반고압가스
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenCatalog('표준 가스')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  혼합 및 표준가스
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenCatalog('초저온 액화가스')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  초저온 액화가스
                </button>
              </li>
            </ul>
          </div>

          {/* Col 2: 엔지니어링 & 솔루션 */}
          <div>
            <h4 className="text-[14px] font-bold text-white mb-4 tracking-wider uppercase">
              엔지니어링 & 솔루션
            </h4>
            <ul className="space-y-2.5 text-[13px] text-[#e6f2ff]/75">
              <li>
                <button
                  onClick={() => onOpenCatalog('기타 장비 & 엔지니어링')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  가스 배관 플랜트 시공
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenCatalog('기타 장비 & 엔지니어링')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  초저온 저장탱크 설치/검사
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenCatalog('IoT')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  원격 재고 모니터링 (IoT)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onOpenCatalog('기타 장비 & 엔지니어링')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  정기 법정 안전진단 대행
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: 안전관리 및 문의 */}
          <div>
            <h4 className="text-[14px] font-bold text-white mb-4 tracking-wider uppercase">
              안전관리 및 문의
            </h4>
            <div className="space-y-2.5 text-[13px] text-[#e6f2ff]/75">
              <p className="text-white text-[13px] font-semibold">긴급 안전상황실 (24H)</p>
              <p className="text-[22px] font-extrabold text-[#FDD000] tracking-tight">1588-0000</p>
              <p className="text-[#e6f2ff]/70">본사 대표: 051-000-0000</p>
              <button
                onClick={onOpenBranches}
                className="text-[#81cfff] hover:underline cursor-pointer flex items-center gap-1"
              >
                <span>전국 17개 영업소 및 물류기지</span>
                <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
              </button>
            </div>
          </div>
        </div>

        {/* Bottom Legal & Copyright */}
        <div className="pt-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 text-[13px] text-[#e6f2ff]/60">
          <div className="space-y-1">
            <p>(주)MS가스 | 대표자: 전청민 | 사업자등록번호: 605-81-00000 | 설립: 1974년</p>
            <p>본사 및 종합물류기지 네트워크: 부산광역시 사상구 및 전국 17개 지점</p>
            <p className="text-[#e6f2ff]/40">Copyright © 2025 (주)MS가스 All rights reserved.</p>
          </div>
          <div className="flex items-center gap-6">
            <button
              onClick={() =>
                onOpenLegalModal(
                  '개인정보처리방침',
                  '(주)MS가스는 정보주체의 개인정보를 철저히 보호하며, 개인정보보호법 등 관련 법령을 엄격히 준수합니다. 본 방침은 온라인 문의, 견적 상담, 가스 발주 시 수집되는 회사명, 담당자 연락처 등의 처리 목적과 보관 기간(상담 완료 후 3년)을 안내합니다.'
                )
              }
              className="hover:text-white transition-colors cursor-pointer"
            >
              개인정보처리방침
            </button>
            <button
              onClick={() =>
                onOpenLegalModal(
                  '이용약관',
                  '본 약관은 (주)MS가스 웹사이트가 제공하는 가스 규격서 조회, 기술자료 다운로드, 온라인 견적 서비스의 이용조건 및 절차를 규정합니다. 모든 가스 사양과 안전 수칙은 산업안전보건법 및 고압가스안전관리법에 의거합니다.'
                )
              }
              className="hover:text-white transition-colors cursor-pointer"
            >
              이용약관
            </button>
            <button
              onClick={() =>
                onOpenLegalModal(
                  '법적고지',
                  '본 사이트에 게재된 모든 가스 규격, 기술 도면, 로고 및 브랜딩 자산은 (주)MS가스의 지적재산권으로 보호됩니다. 무단 복제 및 상업적 전재를 금하며 위반 시 법적 조치가 취해질 수 있습니다.'
                )
              }
              className="hover:text-white transition-colors cursor-pointer"
            >
              법적고지
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
