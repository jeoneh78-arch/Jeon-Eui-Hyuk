import React, { useState } from 'react';

interface HeaderProps {
  onOpenInquiry: (defaultGas?: string) => void;
  onOpenCompanyIntro: () => void;
  onOpenBranches: () => void;
  onOpenMsds: () => void;
  onOpenCatalog: () => void;
  lang: 'KOR' | 'ENG';
  setLang: (lang: 'KOR' | 'ENG') => void;
}

export const Header: React.FC<HeaderProps> = ({
  onOpenInquiry,
  onOpenCompanyIntro,
  onOpenBranches,
  onOpenMsds,
  onOpenCatalog,
  lang,
  setLang,
}) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#ffffff]/92 backdrop-blur-xl border-b border-[#D5E2EA]/60 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-20 w-full max-w-[1320px] mx-auto px-6 flex items-center justify-between">
        {/* Brand Logo & Since Badge */}
        <div className="flex items-center gap-4">
          <a
            href="#"
            className="flex items-center gap-2 group transition-transform"
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            <img
              alt="MS Gas Logo"
              className="h-8 w-auto object-contain transition-transform group-hover:scale-105"
              src="https://lh3.googleusercontent.com/aida/AEtjO1WD-KQb633LJH7qP3rc7Gyp3yZmCGQGSmE_Gsz4IVzgfU4GLR-2uZivWJdiDklrSYi12NzF7LjzI5DDp7Wxs1XVu597WxamH5bHNCcaW40vmvRzaoIrESFQJ0sLYiQT26gNeviNegjpEj-0Uvy6x-1wc7OM8X8Tpc-cGGRNQ5LJ9uOvN5D9Uz3phPURtphoSAgjYBvm-0XAna4nlEs5_TCJFyWjZ86Zu8dlAehXAdrnJHGUto1dOPxZw4U1"
            />
            <span className="text-[20px] leading-[28px] text-[#003d5d] tracking-tight font-bold">
              (주)MS가스
            </span>
          </a>
          <span className="hidden lg:inline-block px-2.5 py-0.5 rounded-full bg-[#E0F4FC] text-[#003d5d] text-[12px] font-semibold tracking-wider">
            SINCE 1974
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden xl:flex items-center gap-10">
          <button
            onClick={onOpenCompanyIntro}
            className="text-[#41474e] hover:text-[#003d5d] transition-colors text-[14px] font-semibold tracking-wide cursor-pointer"
          >
            {lang === 'KOR' ? '회사소개' : 'About Us'}
          </button>
          <a
            href="#products"
            className="text-[#41474e] hover:text-[#003d5d] transition-colors text-[14px] font-semibold tracking-wide"
          >
            {lang === 'KOR' ? '제품소개' : 'Products'}
          </a>
          <button
            onClick={onOpenCatalog}
            className="text-[#41474e] hover:text-[#003d5d] transition-colors text-[14px] font-semibold tracking-wide cursor-pointer"
          >
            {lang === 'KOR' ? '솔루션 및 서비스' : 'Solutions & Services'}
          </button>
          <a
            href="#quality-esg"
            className="text-[#41474e] hover:text-[#003d5d] transition-colors text-[14px] font-semibold tracking-wide"
          >
            {lang === 'KOR' ? 'ESG경영' : 'ESG Management'}
          </a>
          <a
            href="#notices"
            className="text-[#41474e] hover:text-[#003d5d] transition-colors text-[14px] font-semibold tracking-wide"
          >
            {lang === 'KOR' ? '고객지원' : 'Customer Support'}
          </a>
        </nav>

        {/* Right Actions: Lang, Inquiry CTA, User Portal */}
        <div className="flex items-center gap-3.5">
          {/* Language Toggle */}
          <div className="hidden sm:flex items-center bg-[#EBF1F5] rounded-full p-1 border border-[#D5E2EA]/50">
            <button
              onClick={() => setLang('KOR')}
              className={`px-2.5 py-1 rounded-full text-[12px] font-bold transition-all ${
                lang === 'KOR'
                  ? 'bg-white text-[#003d5d] shadow-[0_1px_4px_rgba(0,0,0,0.06)]'
                  : 'text-[#41474e] hover:text-[#071d2c]'
              }`}
              type="button"
            >
              KOR
            </button>
            <button
              onClick={() => setLang('ENG')}
              className={`px-2.5 py-1 rounded-full text-[12px] font-bold transition-all ${
                lang === 'ENG'
                  ? 'bg-white text-[#003d5d] shadow-[0_1px_4px_rgba(0,0,0,0.06)]'
                  : 'text-[#41474e] hover:text-[#071d2c]'
              }`}
              type="button"
            >
              ENG
            </button>
          </div>

          {/* Online Inquiry Button */}
          <button
            onClick={() => onOpenInquiry()}
            className="hidden md:inline-flex items-center justify-center gap-1.5 h-10 px-5 rounded-lg bg-[#005580] hover:bg-[#003d5d] active:scale-[0.98] text-white text-[14px] font-semibold transition-all shadow-sm group cursor-pointer"
          >
            <span>{lang === 'KOR' ? '온라인 문의' : 'Online Inquiry'}</span>
            <span className="material-symbols-outlined text-[16px] group-hover:translate-x-0.5 transition-transform">
              arrow_forward
            </span>
          </button>

          {/* User / Enterprise Portal Menu */}
          <div className="relative">
            <button
              onClick={() => setUserDropdownOpen(!userDropdownOpen)}
              className="w-9 h-9 rounded-full bg-[#003d5d] hover:bg-[#005580] active:scale-95 transition-all flex items-center justify-center shrink-0 shadow-sm cursor-pointer"
              title="고객사 전용 포털"
            >
              <span className="material-symbols-outlined text-white text-[18px]">person</span>
            </button>

            {userDropdownOpen && (
              <div className="absolute right-0 mt-2 w-64 rounded-xl bg-white p-3 shadow-xl border border-[#D5E2EA] z-50 text-[13px] animate-in fade-in zoom-in-95 duration-150">
                <div className="p-2 border-b border-[#EBF1F5] pb-2.5 mb-2">
                  <div className="flex items-center gap-2">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="font-bold text-[#071d2c]">B2B 고객사 발주 포털</span>
                  </div>
                  <p className="text-[11px] text-[#41474e] mt-1">24시간 안전재고 발주 및 배송 관제</p>
                </div>
                <div className="space-y-1">
                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                      onOpenInquiry();
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#F4F8FA] text-[#071d2c] flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px] text-[#005580]">assignment</span>
                    <span>가스 공급 견적 신청</span>
                  </button>
                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                      onOpenMsds();
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#F4F8FA] text-[#071d2c] flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px] text-[#005580]">description</span>
                    <span>MSDS 물질안전보건자료</span>
                  </button>
                  <button
                    onClick={() => {
                      setUserDropdownOpen(false);
                      onOpenBranches();
                    }}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-[#F4F8FA] text-[#071d2c] flex items-center gap-2 transition-colors cursor-pointer"
                  >
                    <span className="material-symbols-outlined text-[18px] text-[#005580]">location_on</span>
                    <span>전국 17개 물류 거점망</span>
                  </button>
                </div>
                <div className="mt-2.5 pt-2 border-t border-[#EBF1F5] flex items-center justify-between text-[11px] text-[#41474e] px-1">
                  <span>안전상황실 1588-0000</span>
                  <span className="font-semibold text-emerald-600">정상 운영중</span>
                </div>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="xl:hidden w-9 h-9 rounded-lg bg-[#EBF1F5] hover:bg-[#d0e5f9] flex items-center justify-center text-[#003d5d] cursor-pointer"
            aria-label="Toggle Navigation"
          >
            <span className="material-symbols-outlined text-[22px]">
              {mobileMenuOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#D5E2EA] px-6 py-5 shadow-lg animate-in slide-in-from-top-2 duration-200">
          <div className="flex items-center justify-between pb-4 border-b border-[#EBF1F5] mb-4">
            <span className="px-2.5 py-0.5 rounded-full bg-[#E0F4FC] text-[#003d5d] text-[12px] font-bold">
              SINCE 1974 · (주)MS가스
            </span>
            <div className="flex items-center bg-[#EBF1F5] rounded-full p-1">
              <button
                onClick={() => setLang('KOR')}
                className={`px-3 py-1 rounded-full text-[12px] font-bold ${
                  lang === 'KOR' ? 'bg-white text-[#003d5d] shadow-sm' : 'text-[#41474e]'
                }`}
              >
                KOR
              </button>
              <button
                onClick={() => setLang('ENG')}
                className={`px-3 py-1 rounded-full text-[12px] font-bold ${
                  lang === 'ENG' ? 'bg-white text-[#003d5d] shadow-sm' : 'text-[#41474e]'
                }`}
              >
                ENG
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-3 font-semibold text-[#071d2c]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCompanyIntro();
              }}
              className="text-left py-2 px-3 rounded-lg hover:bg-[#F4F8FA] flex items-center justify-between"
            >
              <span>{lang === 'KOR' ? '회사소개' : 'About Us'}</span>
              <span className="material-symbols-outlined text-[16px] text-[#41474e]">chevron_right</span>
            </button>
            <a
              href="#products"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#F4F8FA] flex items-center justify-between"
            >
              <span>{lang === 'KOR' ? '제품소개' : 'Products'}</span>
              <span className="material-symbols-outlined text-[16px] text-[#41474e]">chevron_right</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenCatalog();
              }}
              className="text-left py-2 px-3 rounded-lg hover:bg-[#F4F8FA] flex items-center justify-between"
            >
              <span>{lang === 'KOR' ? '솔루션 및 서비스 (가스 규격서)' : 'Solutions & Catalog'}</span>
              <span className="material-symbols-outlined text-[16px] text-[#41474e]">chevron_right</span>
            </button>
            <a
              href="#quality-esg"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#F4F8FA] flex items-center justify-between"
            >
              <span>{lang === 'KOR' ? 'ESG경영 (친환경 암모니아)' : 'ESG & Ammonia Project'}</span>
              <span className="material-symbols-outlined text-[16px] text-[#41474e]">chevron_right</span>
            </a>
            <a
              href="#notices"
              onClick={() => setMobileMenuOpen(false)}
              className="py-2 px-3 rounded-lg hover:bg-[#F4F8FA] flex items-center justify-between"
            >
              <span>{lang === 'KOR' ? '공지사항 및 입찰' : 'Notices & Biddings'}</span>
              <span className="material-symbols-outlined text-[16px] text-[#41474e]">chevron_right</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBranches();
              }}
              className="text-left py-2 px-3 rounded-lg hover:bg-[#F4F8FA] flex items-center justify-between"
            >
              <span>{lang === 'KOR' ? '전국 17개 물류 거점망' : '17 Branch Network'}</span>
              <span className="material-symbols-outlined text-[16px] text-[#41474e]">chevron_right</span>
            </button>
          </div>
          <div className="pt-4 mt-3 border-t border-[#EBF1F5]">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3 rounded-lg bg-[#005580] text-white font-bold flex items-center justify-center gap-2 shadow-sm"
            >
              <span>{lang === 'KOR' ? '온라인 문의 바로가기' : 'Submit Inquiry'}</span>
              <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
