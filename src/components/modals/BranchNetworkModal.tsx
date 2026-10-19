import React, { useState } from 'react';
import { BRANCH_LOCATIONS, BranchLocation } from '../../data/mockData';

interface BranchNetworkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const BranchNetworkModal: React.FC<BranchNetworkModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [activeRegion, setActiveRegion] = useState<string>('전체');
  const [copiedId, setCopiedId] = useState<string | null>(null);

  if (!isOpen) return null;

  const regions = ['전체', '영남권', '수도권', '충청권', '호남권'];

  const filtered = BRANCH_LOCATIONS.filter(
    (b) => activeRegion === '전체' || b.region === activeRegion
  );

  const handleCopyAddress = (b: BranchLocation) => {
    navigator.clipboard.writeText(b.address);
    setCopiedId(b.id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-[#D5E2EA] overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-[#003d5d] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[24px] text-[#81cfff]">pin_drop</span>
            <div>
              <h3 className="text-[18px] font-bold">전국 17개 물류 거점망 및 오시는 길</h3>
              <p className="text-[12px] text-[#81cfff]">부산 본사 및 전국 권역별 24시간 실시간 직배송 네트워크</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Region Filter Bar */}
        <div className="p-4 bg-[#F4F8FA] border-b border-[#D5E2EA] flex items-center justify-between shrink-0">
          <div className="flex flex-wrap gap-2">
            {regions.map((reg) => (
              <button
                key={reg}
                onClick={() => setActiveRegion(reg)}
                className={`px-4 py-1.5 rounded-lg text-[13px] font-bold transition-all cursor-pointer ${
                  activeRegion === reg
                    ? 'bg-[#003d5d] text-white shadow-sm'
                    : 'bg-white text-[#41474e] border border-[#D5E2EA] hover:bg-[#EBF1F5]'
                }`}
              >
                {reg} {reg === '전체' ? `(${BRANCH_LOCATIONS.length})` : ''}
              </button>
            ))}
          </div>
          <span className="text-[12px] text-[#41474e] hidden sm:inline-block">
            긴급상황 배차 요청: <strong>1588-0000</strong>
          </span>
        </div>

        {/* Branches Grid */}
        <div className="p-6 overflow-y-auto grid grid-cols-1 md:grid-cols-2 gap-4 flex-1">
          {filtered.map((branch) => (
            <div
              key={branch.id}
              className="p-5 rounded-xl border border-[#D5E2EA] bg-white shadow-sm hover:border-[#005580] transition-colors flex flex-col justify-between space-y-3"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-[#E0F4FC] text-[#003d5d] text-[11px] font-bold">
                      {branch.region}
                    </span>
                    <span className="text-[11px] text-[#41474e]">{branch.type}</span>
                  </div>
                  <span className="text-[12px] font-medium text-[#005580]">
                    {branch.manager}
                  </span>
                </div>

                <h4 className="text-[17px] font-bold text-[#071d2c]">{branch.name}</h4>

                <div className="text-[13px] text-[#41474e] space-y-1">
                  <p className="flex items-start gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-[#003d5d] shrink-0 mt-0.5">location_on</span>
                    <span>{branch.address}</span>
                  </p>
                  <p className="flex items-center gap-1.5 font-medium text-[#071d2c]">
                    <span className="material-symbols-outlined text-[16px] text-[#003d5d] shrink-0">call</span>
                    <span>{branch.phone} (FAX: {branch.fax})</span>
                  </p>
                </div>

                <div className="pt-1">
                  <span className="text-[11px] text-[#41474e] font-semibold block mb-1">보유 핵심 설비:</span>
                  <div className="flex flex-wrap gap-1">
                    {branch.keyFacilities.map((fac, fIdx) => (
                      <span
                        key={fIdx}
                        className="px-2 py-0.5 rounded bg-[#EBF1F5] text-[#071d2c] text-[11px]"
                      >
                        {fac}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="pt-2 flex items-center justify-between border-t border-[#EBF1F5]">
                <button
                  onClick={() => handleCopyAddress(branch)}
                  className="text-[12px] text-[#005580] font-semibold hover:underline flex items-center gap-1 cursor-pointer"
                >
                  <span className="material-symbols-outlined text-[15px]">content_copy</span>
                  <span>{copiedId === branch.id ? '주소 복사됨!' : '주소 복사'}</span>
                </button>
                <a
                  href={`tel:${branch.phone}`}
                  className="px-3 py-1 rounded bg-[#003d5d] hover:bg-[#005580] text-white text-[12px] font-semibold flex items-center gap-1 transition-colors"
                >
                  <span className="material-symbols-outlined text-[14px]">phone_in_talk</span>
                  <span>지점 통화</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#F4F8FA] border-t border-[#D5E2EA] flex items-center justify-between text-[12px] text-[#41474e] shrink-0">
          <span>전국 17개 거점 네트워크로 2시간 내 긴급 비상 가스 공급 지원</span>
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
