import React, { useState } from 'react';

interface OnlineInquiryModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultGas?: string;
}

export const OnlineInquiryModal: React.FC<OnlineInquiryModalProps> = ({
  isOpen,
  onClose,
  defaultGas,
}) => {
  const [gasCategory, setGasCategory] = useState(defaultGas || '산업용 일반 고압가스');
  const [supplyType, setSupplyType] = useState('초저온 벌크 탱크로리');
  const [companyName, setCompanyName] = useState('');
  const [contactName, setContactName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [region, setRegion] = useState('영남권 (부산/울산/경남/경북)');
  const [estimatedVolume, setEstimatedVolume] = useState('월 10톤 ~ 30톤');
  const [message, setMessage] = useState('');
  const [submittedId, setSubmittedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const inquiryNum = `MSG-2025-${Math.floor(1000 + Math.random() * 9000)}`;
    setSubmittedId(inquiryNum);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#D5E2EA] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-5 bg-[#003d5d] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center text-[#81cfff]">
              <span className="material-symbols-outlined text-[20px]">assignment</span>
            </div>
            <div>
              <h3 className="text-[18px] font-bold">온라인 맞춤 가스 공급 및 시공 견적 문의</h3>
              <p className="text-[12px] text-[#81cfff]">24시간 이내 전국 17개 거점 전담 엔지니어 직통 배정</p>
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
        <div className="p-6 overflow-y-auto flex-1">
          {submittedId ? (
            <div className="py-8 text-center space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <span className="material-symbols-outlined text-[36px]">check_circle</span>
              </div>
              <h4 className="text-[20px] font-bold text-[#071d2c]">견적 상담 접수가 완료되었습니다</h4>
              <p className="text-[14px] text-[#41474e] max-w-md mx-auto leading-relaxed">
                접수번호 <span className="font-bold text-[#003d5d]">[{submittedId}]</span>로 등록되었습니다.<br />
                기재해주신 연락처(<span className="font-semibold">{phone || email}</span>)로 담당 지점 기술 영업관이 빠른 시간 내에 상세 견적서와 납품 가능 일정을 회신드립니다.
              </p>
              <div className="p-4 rounded-xl bg-[#F4F8FA] border border-[#D5E2EA] max-w-md mx-auto text-left text-[13px] space-y-1.5">
                <div className="flex justify-between">
                  <span className="text-[#41474e]">신청 가스 품목:</span>
                  <span className="font-bold text-[#071d2c]">{gasCategory}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#41474e]">공급 방식:</span>
                  <span className="font-bold text-[#071d2c]">{supplyType}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#41474e]">배송 희망 지역:</span>
                  <span className="font-bold text-[#071d2c]">{region}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-[#41474e]">긴급 콜센터:</span>
                  <span className="font-bold text-[#003d5d]">1588-0000 (상황실 24H)</span>
                </div>
              </div>
              <div className="pt-4">
                <button
                  onClick={onClose}
                  className="px-6 py-2.5 rounded-lg bg-[#003d5d] hover:bg-[#005580] text-white font-semibold text-[14px] cursor-pointer"
                >
                  확인 및 닫기
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Step 1: Gas & Supply Method */}
              <div className="space-y-3">
                <label className="block text-[13px] font-bold text-[#071d2c]">
                  1. 필요 가스 품목 선택
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    '산업용 일반 고압가스 (O₂/N₂/Ar/CO₂)',
                    '초고순도 특수가스 (6N 반도체/전자)',
                    '의료용 의약품 가스 (GMP)',
                    '고효율 연료용 가스 (프로판/프라멕스)',
                    '정밀 측정용 표준·분석가스',
                    '초저온 저장탱크 플랜트 시공',
                  ].map((gas) => (
                    <button
                      key={gas}
                      type="button"
                      onClick={() => setGasCategory(gas)}
                      className={`p-2.5 text-left rounded-lg text-[12px] font-medium border transition-all cursor-pointer ${
                        gasCategory === gas
                          ? 'border-[#003d5d] bg-[#E0F4FC] text-[#003d5d] font-bold ring-1 ring-[#003d5d]'
                          : 'border-[#D5E2EA] hover:bg-[#F4F8FA] text-[#41474e]'
                      }`}
                    >
                      {gas}
                    </button>
                  ))}
                </div>
              </div>

              {/* Step 2: Supply Type & Volume */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-bold text-[#071d2c] mb-1.5">
                    공급 용기/방식
                  </label>
                  <select
                    value={supplyType}
                    onChange={(e) => setSupplyType(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border border-[#D5E2EA] bg-white text-[13px] focus:outline-none focus:border-[#003d5d]"
                  >
                    <option>초저온 벌크 탱크로리 (10~25톤)</option>
                    <option>초저온 액화용기 (LGC 175L)</option>
                    <option>고압 실린더 봄베 (47L 150bar)</option>
                    <option>실린더 번들 매니폴드 (12~16본)</option>
                    <option>ISO 튜브 트레일러 벌크 공급</option>
                    <option>공장 내 초저온 저장탱크 신설 시공</option>
                  </select>
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-[#071d2c] mb-1.5">
                    예상 월 사용량
                  </label>
                  <select
                    value={estimatedVolume}
                    onChange={(e) => setEstimatedVolume(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border border-[#D5E2EA] bg-white text-[13px] focus:outline-none focus:border-[#003d5d]"
                  >
                    <option>월 50병 미만 (소량 정기공급)</option>
                    <option>월 50~200병 (중형 공장)</option>
                    <option>월 5톤 ~ 10톤 (LGC 벌크)</option>
                    <option>월 10톤 ~ 30톤 (대형 탱크로리)</option>
                    <option>월 30톤 이상 (대형 산업단지 연속공급)</option>
                    <option>신규 플랜트 인허가 및 배관 공사 견적</option>
                  </select>
                </div>
              </div>

              {/* Step 3: Company & Contact */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-bold text-[#071d2c] mb-1.5">
                    회사명 / 사업체명 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="예: (주)대한정밀화학"
                    value={companyName}
                    onChange={(e) => setCompanyName(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border border-[#D5E2EA] text-[13px] focus:outline-none focus:border-[#003d5d]"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-[#071d2c] mb-1.5">
                    담당자 성함 / 직책 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="예: 홍길동 부장"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border border-[#D5E2EA] text-[13px] focus:outline-none focus:border-[#003d5d]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[13px] font-bold text-[#071d2c] mb-1.5">
                    연락처 전화번호 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="010-0000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border border-[#D5E2EA] text-[13px] focus:outline-none focus:border-[#003d5d]"
                  />
                </div>
                <div>
                  <label className="block text-[13px] font-bold text-[#071d2c] mb-1.5">
                    이메일 주소 <span className="text-red-500">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="engineer@company.co.kr"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full h-10 px-3 rounded-lg border border-[#D5E2EA] text-[13px] focus:outline-none focus:border-[#003d5d]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[13px] font-bold text-[#071d2c] mb-1.5">
                  배송 권역 / 공장 소재지
                </label>
                <select
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                  className="w-full h-10 px-3 rounded-lg border border-[#D5E2EA] bg-white text-[13px] focus:outline-none focus:border-[#003d5d]"
                >
                  <option>영남권 (부산/김해/울산/창원/포항/대구/구미)</option>
                  <option>수도권 (화성/평택/인천/이천/기흥/서울)</option>
                  <option>충청권 (천안/아산/서산/당진/청주/오송/대전)</option>
                  <option>호남권 (여수/광양/광주/군산/익산/전주)</option>
                  <option>기타 특수 산단 및 도서지역</option>
                </select>
              </div>

              <div>
                <label className="block text-[13px] font-bold text-[#071d2c] mb-1.5">
                  상세 문의사항 및 스펙 요구 (순도, 법정 인허가 등)
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="예: 레이저 절단기 전용 고순도 질소(99.999%) 5톤 탱크 설치 및 배관 공사 견적과 완성검사 지원 여부를 문의합니다."
                  className="w-full p-3 rounded-lg border border-[#D5E2EA] text-[13px] focus:outline-none focus:border-[#003d5d] resize-none"
                />
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-[#EBF1F5]">
                <p className="text-[11px] text-[#41474e]">
                  ※ 개인정보는 견적 상담 목적 외에 이용되지 않으며 암호화 보관됩니다.
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={onClose}
                    className="px-4 py-2.5 rounded-lg border border-[#D5E2EA] text-[#41474e] hover:bg-[#F4F8FA] text-[13px] font-semibold cursor-pointer"
                  >
                    취소
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-lg bg-[#003d5d] hover:bg-[#005580] text-white text-[13px] font-bold transition-all shadow-md active:scale-98 cursor-pointer"
                  >
                    견적 요청 제출
                  </button>
                </div>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
