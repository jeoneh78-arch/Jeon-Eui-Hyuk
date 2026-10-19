import React from 'react';
import { GasProduct } from '../../data/mockData';

interface ProductDetailModalProps {
  product: GasProduct | null;
  onClose: () => void;
  onInquiryForProduct: (gasName: string) => void;
}

export const ProductDetailModal: React.FC<ProductDetailModalProps> = ({
  product,
  onClose,
  onInquiryForProduct,
}) => {
  if (!product) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-[#D5E2EA] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header Bar */}
        <div className="px-6 py-4 bg-[#003d5d] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#E0F4FC] text-[#003d5d] text-[12px] font-bold">
              {product.category}
            </span>
            <span className="text-[16px] font-bold tracking-tight">{product.titleKo}</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 overflow-y-auto space-y-6">
          {/* Top Banner with Image & Key Attributes */}
          <div className="flex flex-col md:flex-row gap-6 items-start">
            <div className="w-full md:w-5/12 aspect-[16/11] rounded-xl overflow-hidden bg-[#EBF1F5] shrink-0 border border-[#D5E2EA]">
              <img
                src={product.imageUrl}
                alt={product.titleKo}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1 space-y-3">
              <h3 className="text-[22px] font-bold text-[#071d2c] leading-tight">
                {product.titleKo}
              </h3>
              <p className="text-[13px] text-[#005580] font-semibold">{product.titleEn}</p>
              <p className="text-[14px] text-[#41474e] leading-relaxed">{product.descKo}</p>
              <div className="p-3.5 rounded-lg bg-[#E0F4FC] border border-[#81cfff]/50 flex items-center justify-between">
                <div>
                  <span className="text-[11px] text-[#003d5d] font-semibold block">보증 순도 / 품질 등급</span>
                  <span className="text-[15px] font-extrabold text-[#003d5d]">{product.purity}</span>
                </div>
                <div className="text-right">
                  <span className="text-[11px] text-[#003d5d] font-semibold block">품질 인증</span>
                  <span className="text-[13px] font-bold text-[#071d2c]">ISO 9001 / KGS 검증</span>
                </div>
              </div>
            </div>
          </div>

          {/* Delivery & Supply Packaging */}
          <div className="space-y-2.5">
            <h4 className="text-[14px] font-bold text-[#071d2c] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] text-[#003d5d]">local_shipping</span>
              <span>공급 및 패키징 유형</span>
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {product.deliveryMethods.map((method, idx) => (
                <div
                  key={idx}
                  className="p-3 rounded-lg bg-[#F4F8FA] border border-[#D5E2EA] flex items-center gap-2.5 text-[13px] text-[#071d2c]"
                >
                  <span className="w-2 h-2 rounded-full bg-[#005580]"></span>
                  <span>{method}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Specifications and Gas breakdown */}
          <div className="space-y-3">
            <h4 className="text-[14px] font-bold text-[#071d2c] flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px] text-[#003d5d]">science</span>
              <span>상세 가스 물질 규격 및 주요 적용 산업</span>
            </h4>
            <div className="space-y-3">
              {product.specifications.map((spec, sIdx) => (
                <div
                  key={sIdx}
                  className="p-4 rounded-xl border border-[#D5E2EA] bg-white shadow-sm space-y-2.5 text-[13px]"
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-[#EBF1F5]">
                    <span className="font-extrabold text-[#003d5d] text-[15px] font-mono">
                      {spec.gasFormula}
                    </span>
                    <div className="flex items-center gap-3 text-[12px] text-[#41474e]">
                      <span>CAS: <strong className="text-[#071d2c]">{spec.casNo}</strong></span>
                      <span>UN: <strong className="text-[#071d2c]">{spec.unNo}</strong></span>
                    </div>
                  </div>

                  <div>
                    <span className="text-[12px] text-[#41474e] font-semibold block mb-1">제공 등급:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {spec.grades.map((grade, gIdx) => (
                        <span
                          key={gIdx}
                          className="px-2 py-0.5 rounded bg-[#EBF1F5] text-[#071d2c] text-[11px] font-medium"
                        >
                          {grade}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div>
                    <span className="text-[12px] text-[#41474e] font-semibold block mb-1">주요 적용 분야:</span>
                    <p className="text-[12px] text-[#41474e] leading-relaxed">
                      {spec.applications.join(' · ')}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="px-6 py-4 bg-[#F4F8FA] border-t border-[#D5E2EA] flex items-center justify-between shrink-0">
          <span className="text-[12px] text-[#41474e]">
            24시간 전국 직송 및 기술지원: 1588-0000
          </span>
          <div className="flex gap-2.5">
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-lg border border-[#D5E2EA] text-[#41474e] hover:bg-white text-[13px] font-semibold cursor-pointer"
            >
              닫기
            </button>
            <button
              onClick={() => {
                onClose();
                onInquiryForProduct(product.titleKo);
              }}
              className="px-5 py-2 rounded-lg bg-[#003d5d] hover:bg-[#005580] text-white text-[13px] font-bold shadow-sm transition-all flex items-center gap-1.5 cursor-pointer active:scale-98"
            >
              <span>이 제품 맞춤 견적 문의</span>
              <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
