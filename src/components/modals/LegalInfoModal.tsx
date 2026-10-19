import React from 'react';

interface LegalInfoModalProps {
  isOpen: boolean;
  title: string;
  content: string;
  onClose: () => void;
}

export const LegalInfoModal: React.FC<LegalInfoModalProps> = ({
  isOpen,
  title,
  content,
  onClose,
}) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl border border-[#D5E2EA] overflow-hidden flex flex-col max-h-[85vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-[#003d5d] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-[20px] text-[#81cfff]">gavel</span>
            <h3 className="text-[17px] font-bold">{title}</h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 text-[14px] text-[#41474e] leading-relaxed flex-1">
          <div className="p-4 rounded-xl bg-[#F4F8FA] border border-[#D5E2EA] text-[#071d2c] whitespace-pre-line">
            {content}
          </div>

          <div className="space-y-2 text-[12px] text-[#41474e]">
            <p className="font-semibold text-[#071d2c]">[주요 준수 법령 및 규정]</p>
            <p>1. 고압가스안전관리법 및 동법 시행령·시행규칙</p>
            <p>2. 산업안전보건법 및 화학물질관리법 제110조(MSDS 작성·게시)</p>
            <p>3. 개인정보보호법 제15조 및 제17조</p>
            <p>4. 한국가스안전공사(KGS) 시설기준 및 기술기준(KGS Code)</p>
          </div>
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#F4F8FA] border-t border-[#D5E2EA] flex items-center justify-between text-[12px] text-[#41474e] shrink-0">
          <span>(주)MS가스 준법감시팀</span>
          <button
            onClick={onClose}
            className="px-4 py-1.5 rounded-lg bg-[#003d5d] hover:bg-[#005580] text-white font-medium cursor-pointer"
          >
            확인 및 닫기
          </button>
        </div>
      </div>
    </div>
  );
};
