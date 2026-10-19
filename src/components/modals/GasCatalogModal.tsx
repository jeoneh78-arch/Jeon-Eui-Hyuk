import React, { useState } from 'react';
import { GAS_PRODUCTS } from '../../data/mockData';

interface GasCatalogModalProps {
  isOpen: boolean;
  onClose: () => void;
  onInquiryForGas: (gasName: string) => void;
  initialCategory?: string;
}

export const GasCatalogModal: React.FC<GasCatalogModalProps> = ({
  isOpen,
  onClose,
  onInquiryForGas,
  initialCategory,
}) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory || '전체');

  if (!isOpen) return null;

  const categories = [
    '전체',
    '산업용 가스',
    '연료용 가스',
    '특수 가스',
    '의료용 가스',
    '표준 가스',
    '기타 장비 & 엔지니어링',
  ];

  const filteredProducts = GAS_PRODUCTS.filter((prod) => {
    const matchesCategory =
      selectedCategory === '전체' ||
      prod.category.includes(selectedCategory) ||
      (selectedCategory === '초저온 액화가스' && prod.tagsKo.some(t => t.includes('액화')));

    const matchesSearch =
      prod.titleKo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.titleEn.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.descKo.toLowerCase().includes(searchQuery.toLowerCase()) ||
      prod.specifications.some(s => s.gasFormula.toLowerCase().includes(searchQuery.toLowerCase()));

    return matchesCategory && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-5xl bg-white rounded-2xl shadow-2xl border border-[#D5E2EA] overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-[#003d5d] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[24px] text-[#81cfff]">menu_book</span>
            <div>
              <h3 className="text-[18px] font-bold">MS가스 종합 가스 제품 규격서 (Full Catalog)</h3>
              <p className="text-[12px] text-[#81cfff]">순도 99.9%부터 99.9999%(6N)까지 국가대표 정밀 가스 규격 총람</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Filters and Search Bar */}
        <div className="p-4 bg-[#F4F8FA] border-b border-[#D5E2EA] flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between shrink-0">
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-[12px] font-semibold transition-all cursor-pointer ${
                  selectedCategory === cat
                    ? 'bg-[#003d5d] text-white shadow-sm'
                    : 'bg-white text-[#41474e] border border-[#D5E2EA] hover:bg-[#EBF1F5]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-64">
            <span className="material-symbols-outlined absolute left-2.5 top-2.5 text-[18px] text-[#41474e]">
              search
            </span>
            <input
              type="text"
              placeholder="가스명, 화학식(O₂, N₂, Ar), CAS 검색"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-9 pl-9 pr-3 rounded-lg border border-[#D5E2EA] bg-white text-[12px] focus:outline-none focus:border-[#003d5d]"
            />
          </div>
        </div>

        {/* Table / Cards List */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          {filteredProducts.length === 0 ? (
            <div className="py-12 text-center text-[#41474e]">
              <span className="material-symbols-outlined text-[40px] text-gray-400 mb-2">search_off</span>
              <p className="text-[14px]">검색 조건과 일치하는 가스 품목이 없습니다.</p>
            </div>
          ) : (
            filteredProducts.map((prod) => (
              <div
                key={prod.id}
                className="p-5 rounded-xl border border-[#D5E2EA] bg-white shadow-sm space-y-4 hover:border-[#003d5d] transition-all"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-3 border-b border-[#EBF1F5]">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className={`px-2.5 py-0.5 rounded text-[11px] font-bold ${prod.badgeColor}`}>
                        {prod.category}
                      </span>
                      <h4 className="text-[17px] font-bold text-[#071d2c]">{prod.titleKo}</h4>
                    </div>
                    <p className="text-[12px] text-[#005580]">{prod.titleEn}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[12px] text-[#41474e] bg-[#E0F4FC] px-2.5 py-1 rounded text-[#003d5d] font-semibold">
                      보증 순도: <strong>{prod.purity}</strong>
                    </span>
                    <button
                      onClick={() => {
                        onClose();
                        onInquiryForGas(prod.titleKo);
                      }}
                      className="px-3.5 py-1.5 rounded-lg bg-[#003d5d] hover:bg-[#005580] text-white text-[12px] font-bold cursor-pointer shrink-0 transition-colors"
                    >
                      견적 문의
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-[12px]">
                  <div>
                    <span className="text-[#41474e] font-semibold block mb-1">제공 품목 및 화학식:</span>
                    <div className="space-y-1">
                      {prod.specifications.map((s, idx) => (
                        <div key={idx} className="flex items-center gap-1.5 font-mono text-[#003d5d] font-bold">
                          <span className="w-1.5 h-1.5 rounded-full bg-[#003d5d]"></span>
                          <span>{s.gasFormula}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div>
                    <span className="text-[#41474e] font-semibold block mb-1">공급 용기 형태:</span>
                    <ul className="space-y-1 text-[#071d2c]">
                      {prod.deliveryMethods.slice(0, 3).map((m, idx) => (
                        <li key={idx} className="truncate">· {m}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <span className="text-[#41474e] font-semibold block mb-1">핵심 적용 산업:</span>
                    <p className="text-[#41474e] line-clamp-3 leading-relaxed">
                      {prod.specifications[0]?.applications.join(', ')}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#F4F8FA] border-t border-[#D5E2EA] flex items-center justify-between text-[12px] text-[#41474e] shrink-0">
          <span>한국가스안전공사(KGS) 완성검사 기준 100% 준수</span>
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
