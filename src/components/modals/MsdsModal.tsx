import React, { useState } from 'react';
import { MSDS_DATABASE, MsdsItem } from '../../data/mockData';

interface MsdsModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const MsdsModal: React.FC<MsdsModalProps> = ({ isOpen, onClose }) => {
  const [search, setSearch] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('전체');
  const [downloadSuccessItem, setDownloadSuccessItem] = useState<string | null>(null);

  if (!isOpen) return null;

  const categories = ['전체', '산업용', '특수가스', '의료용', '연료용'];

  const filtered = MSDS_DATABASE.filter((item) => {
    const matchesCat = activeCategory === '전체' || item.category === activeCategory;
    const matchesSearch =
      item.nameKo.toLowerCase().includes(search.toLowerCase()) ||
      item.nameEn.toLowerCase().includes(search.toLowerCase()) ||
      item.formula.toLowerCase().includes(search.toLowerCase()) ||
      item.casNo.includes(search);
    return matchesCat && matchesSearch;
  });

  const handleDownload = (item: MsdsItem) => {
    setDownloadSuccessItem(item.nameKo);
    setTimeout(() => {
      setDownloadSuccessItem(null);
    }, 3000);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-white rounded-2xl shadow-2xl border border-[#D5E2EA] overflow-hidden flex flex-col max-h-[92vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-[#003d5d] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2.5">
            <span className="material-symbols-outlined text-[24px] text-[#81cfff]">description</span>
            <div>
              <h3 className="text-[18px] font-bold">MSDS (물질안전보건자료) 디지털 아카이브</h3>
              <p className="text-[12px] text-[#81cfff]">산업안전보건법 제110조 및 화학물질관리법에 의거한 공식 GHS 규격</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Download notification toast */}
        {downloadSuccessItem && (
          <div className="bg-emerald-600 text-white px-6 py-2.5 text-[13px] flex items-center justify-between animate-in slide-in-from-top-2">
            <span className="flex items-center gap-2">
              <span className="material-symbols-outlined text-[18px]">check_circle</span>
              <span><strong>[{downloadSuccessItem}]</strong> 법정 MSDS 정식 파일(GHS 16개 항목) 다운로드가 완료되었습니다.</span>
            </span>
            <button onClick={() => setDownloadSuccessItem(null)} className="cursor-pointer">
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          </div>
        )}

        {/* Filter & Search Bar */}
        <div className="p-4 bg-[#F4F8FA] border-b border-[#D5E2EA] flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between shrink-0">
          <div className="flex flex-wrap gap-1.5">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-3 py-1.5 rounded-lg text-[12px] font-semibold transition-all cursor-pointer ${
                  activeCategory === cat
                    ? 'bg-[#003d5d] text-white shadow-sm'
                    : 'bg-white text-[#41474e] border border-[#D5E2EA] hover:bg-[#EBF1F5]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          <div className="relative w-full sm:w-72">
            <span className="material-symbols-outlined absolute left-2.5 top-2.5 text-[18px] text-[#41474e]">
              search
            </span>
            <input
              type="text"
              placeholder="물질명, 화학식(O₂, NH₃), CAS 번호 검색"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full h-9 pl-9 pr-3 rounded-lg border border-[#D5E2EA] bg-white text-[12px] focus:outline-none focus:border-[#003d5d]"
            />
          </div>
        </div>

        {/* MSDS Item Cards */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {filtered.length === 0 ? (
            <div className="py-12 text-center text-[#41474e]">
              <span className="material-symbols-outlined text-[40px] text-gray-400 mb-2">search_off</span>
              <p className="text-[14px]">일치하는 MSDS 물질이 없습니다.</p>
            </div>
          ) : (
            filtered.map((item) => (
              <div
                key={item.id}
                className="p-5 rounded-xl border border-[#D5E2EA] bg-white shadow-sm space-y-3 hover:border-[#005580] transition-colors"
              >
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-2.5 border-b border-[#EBF1F5]">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-[#E0F4FC] text-[#003d5d] text-[11px] font-bold">
                        {item.category}
                      </span>
                      <h4 className="text-[17px] font-bold text-[#071d2c]">{item.nameKo}</h4>
                      <span className="font-mono text-[#003d5d] text-[14px] font-bold">({item.formula})</span>
                    </div>
                    <p className="text-[12px] text-[#41474e]">{item.nameEn}</p>
                  </div>

                  <div className="flex items-center gap-2 shrink-0">
                    <span
                      className={`px-2.5 py-1 rounded text-[11px] font-extrabold ${
                        item.signalWord.includes('위험')
                          ? 'bg-red-100 text-red-700 border border-red-200'
                          : 'bg-amber-100 text-amber-800 border border-amber-200'
                      }`}
                    >
                      {item.signalWord}
                    </span>
                    <button
                      onClick={() => handleDownload(item)}
                      className="px-3.5 py-1.5 rounded-lg bg-[#003d5d] hover:bg-[#005580] text-white text-[12px] font-semibold flex items-center gap-1.5 transition-colors cursor-pointer shadow-sm active:scale-98"
                    >
                      <span className="material-symbols-outlined text-[15px]">download</span>
                      <span>MSDS 다운로드</span>
                    </button>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[12px]">
                  <div>
                    <span className="text-[#41474e] font-semibold block mb-1">화학물질 기본정보:</span>
                    <div className="text-[#071d2c] space-y-0.5">
                      <p>· CAS 번호: <strong>{item.casNo}</strong></p>
                      <p>· UN 번호: <strong>{item.unNo}</strong></p>
                      <p>· 보관 온도: <strong>{item.storageTemp}</strong></p>
                    </div>
                  </div>

                  <div>
                    <span className="text-[#41474e] font-semibold block mb-1">GHS 유해·위험성 분류:</span>
                    <ul className="text-[#071d2c] space-y-0.5">
                      {item.hazardClassification.map((haz, hIdx) => (
                        <li key={hIdx} className="text-red-700">· {haz}</li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <span className="text-[#41474e] font-semibold block mb-1">응급조치 요령 요약:</span>
                    <p className="text-[#41474e] leading-relaxed">
                      {item.firstAidSummary}
                    </p>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#F4F8FA] border-t border-[#D5E2EA] flex items-center justify-between text-[12px] text-[#41474e] shrink-0">
          <span>화학사고 비상대응 문의: MS가스 안전상황실 1588-0000 (24시간 무휴)</span>
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
