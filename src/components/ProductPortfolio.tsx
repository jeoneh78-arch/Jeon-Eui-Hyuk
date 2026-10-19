import React from 'react';
import { GAS_PRODUCTS, GasProduct } from '../data/mockData';

interface ProductPortfolioProps {
  onSelectProduct: (product: GasProduct) => void;
  onOpenCatalog: () => void;
  lang: 'KOR' | 'ENG';
}

export const ProductPortfolio: React.FC<ProductPortfolioProps> = ({
  onSelectProduct,
  onOpenCatalog,
  lang,
}) => {
  return (
    <section className="w-full bg-[#F4F8FA] py-20 lg:py-24" id="products">
      <div className="w-full max-w-[1320px] mx-auto px-6 space-y-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div>
            <span className="text-[12px] text-[#003d5d] font-bold uppercase tracking-widest">
              Product Categories
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#071d2c] mt-1 leading-tight">
              {lang === 'KOR'
                ? '다양한 산업분야를 아우르는 고부가가치형 가스산업'
                : 'High Value-Added Gas Solutions Powering Korea’s Core Industries'}
            </h2>
            <p className="text-[14px] sm:text-[15px] text-[#41474e] mt-2 max-w-2xl leading-relaxed">
              {lang === 'KOR'
                ? '초순도 정제 기술과 엄격한 품질 관리를 기반으로 제철, 화학, 반도체, 첨단 의료 등 전방위 산업에 최적화된 맞춤형 가스 에너지를 제공합니다.'
                : 'Engineered with sub-ppb purification and strict ISO/GMP protocols, tailoring specialty energy for metallurgy, chemical, electronics, and medical care.'}
            </p>
          </div>

          <button
            onClick={onOpenCatalog}
            className="inline-flex items-center gap-1.5 px-5 py-2.5 rounded-lg bg-[#003d5d] hover:bg-[#005580] text-white text-[14px] font-semibold transition-all shadow-sm self-start md:self-auto cursor-pointer shrink-0 active:scale-95"
          >
            <span>{lang === 'KOR' ? '전체 가스 규격서 열람' : 'View Full Gas Catalog'}</span>
            <span className="material-symbols-outlined text-[18px]">chevron_right</span>
          </button>
        </div>

        {/* 6 B2B Industrial Gas Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GAS_PRODUCTS.map((prod) => (
            <div
              key={prod.id}
              onClick={() => onSelectProduct(prod)}
              className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between border border-[#D5E2EA] cursor-pointer hover:border-[#81cfff]"
            >
              <div>
                <div className="relative w-full aspect-[16/10] overflow-hidden bg-[#EBF1F5]">
                  <img
                    alt={prod.titleKo}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    src={prod.imageUrl}
                  />
                  <span
                    className={`absolute top-3 left-3 px-2.5 py-1 rounded-md text-[12px] font-semibold shadow-sm ${prod.badgeColor}`}
                  >
                    {prod.badge}
                  </span>
                  <span className="absolute top-3 right-3 px-2 py-0.5 rounded bg-black/40 backdrop-blur-md text-white text-[11px] font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                    상세 스펙 보기
                  </span>
                </div>

                <div className="p-6 space-y-3">
                  <h3 className="text-[19px] font-bold text-[#071d2c] group-hover:text-[#003d5d] transition-colors leading-snug">
                    {lang === 'KOR' ? prod.titleKo : prod.titleEn}
                  </h3>
                  <p className="text-[13px] text-[#41474e] leading-relaxed line-clamp-3">
                    {lang === 'KOR' ? prod.descKo : prod.descEn}
                  </p>

                  <div className="flex flex-wrap gap-1.5 pt-1 text-[12px]">
                    {(lang === 'KOR' ? prod.tagsKo : prod.tagsEn).map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-1 rounded bg-[#E0F4FC] text-[#003d5d] font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="px-6 py-3.5 bg-[#e0f0ff]/60 border-t border-[#D5E2EA]/60 flex items-center justify-between text-[#003d5d] text-[13px] font-semibold group-hover:bg-[#E0F4FC] transition-colors">
                <span>{lang === 'KOR' ? prod.footerActionKo : prod.footerActionEn}</span>
                <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1.5 transition-transform">
                  arrow_forward
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
