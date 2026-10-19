import React from 'react';
import { NOTICES, NoticeItem } from '../data/mockData';

interface NoticePressProps {
  onSelectNotice: (notice: NoticeItem) => void;
  onOpenInquiry: () => void;
  lang: 'KOR' | 'ENG';
}

export const NoticePress: React.FC<NoticePressProps> = ({
  onSelectNotice,
  onOpenInquiry,
  lang,
}) => {
  return (
    <section className="w-full bg-[#F4F8FA] py-20 lg:py-24" id="notices">
      <div className="w-full max-w-[1320px] mx-auto px-6 space-y-12">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <span className="text-[12px] text-[#003d5d] font-bold uppercase tracking-widest">
              Notice & Press
            </span>
            <h2 className="text-[28px] sm:text-[36px] font-extrabold text-[#071d2c] mt-1 leading-tight">
              {lang === 'KOR'
                ? 'MS가스의 새로운 소식을 전달드립니다'
                : 'Latest Announcements, Tenders & Enterprise Press'}
            </h2>
          </div>
          <button
            onClick={() => onSelectNotice(NOTICES[0])}
            className="inline-flex items-center gap-1.5 text-[14px] font-bold text-[#003d5d] hover:text-[#005580] transition-colors cursor-pointer group"
          >
            <span>{lang === 'KOR' ? '공지사항 전체보기' : 'View All Notices'}</span>
            <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform">
              chevron_right
            </span>
          </button>
        </div>

        {/* Real Extracted B2B Notices Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {NOTICES.map((item) => (
            <article
              key={item.id}
              onClick={() => onSelectNotice(item)}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-all flex flex-col justify-between space-y-4 border border-[#D5E2EA] cursor-pointer hover:border-[#81cfff] group"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  {item.categoryType === 'honor' ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#FDD000] text-[#111111] text-[12px] font-bold">
                      {item.category}
                    </span>
                  ) : item.categoryType === 'regulation' ? (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#e0f0ff] text-[#4c6075] text-[12px] font-bold">
                      {item.category}
                    </span>
                  ) : (
                    <span className="px-2.5 py-0.5 rounded-full bg-[#E0F4FC] text-[#003d5d] text-[12px] font-bold">
                      {item.category}
                    </span>
                  )}
                  <span className="text-[13px] text-[#41474e] font-medium">{item.date}</span>
                </div>

                <h3 className="text-[17px] sm:text-[18px] text-[#071d2c] font-bold line-clamp-2 group-hover:text-[#003d5d] transition-colors leading-snug">
                  {item.title}
                </h3>
                <p className="text-[13px] text-[#41474e] line-clamp-2 leading-relaxed">
                  {item.desc}
                </p>
              </div>

              <div className="pt-2 flex items-center justify-between text-[12px] text-[#003d5d] font-bold border-t border-[#EBF1F5]">
                <span>자세히 보기</span>
                <span className="material-symbols-outlined text-[16px] group-hover:translate-x-1 transition-transform">
                  arrow_forward
                </span>
              </div>
            </article>
          ))}

          {/* Card 6: Direct Customer Inquiries */}
          <article className="bg-[#003d5d] rounded-xl p-6 shadow-md text-white flex flex-col justify-between space-y-4 border border-[#81cfff]/30">
            <div className="space-y-3">
              <span className="inline-flex px-2.5 py-0.5 rounded-full bg-white/20 text-white text-[12px] font-bold">
                공식 고객지원 센터
              </span>
              <h3 className="text-[18px] sm:text-[19px] text-white font-bold leading-snug">
                견적 및 가스 공급 배관 현장실측 신청
              </h3>
              <p className="text-[13px] text-[#e6f2ff]/80 leading-relaxed">
                전국 17개 영업 거점 담당 엔지니어가 24시간 이내에 현장을 방문하여 가스 소비량과 설비 스펙을 정밀 진단해 드립니다.
              </p>
            </div>
            <button
              onClick={onOpenInquiry}
              className="w-full py-3 px-4 rounded-lg bg-[#81cfff] text-[#003d5d] hover:bg-white text-[14px] font-bold flex items-center justify-center gap-2 transition-colors cursor-pointer shadow-sm active:scale-98"
            >
              <span>공급 상담 접수</span>
              <span className="material-symbols-outlined text-[18px]">support_agent</span>
            </button>
          </article>
        </div>
      </div>
    </section>
  );
};
