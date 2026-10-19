/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { MetricsSection } from './components/MetricsSection';
import { ProductPortfolio } from './components/ProductPortfolio';
import { QualityEsgHeritage } from './components/QualityEsgHeritage';
import { NoticePress } from './components/NoticePress';
import { QuickSupportPortals } from './components/QuickSupportPortals';
import { Footer } from './components/Footer';

import { GasProduct, NoticeItem } from './data/mockData';
import { OnlineInquiryModal } from './components/modals/OnlineInquiryModal';
import { ProductDetailModal } from './components/modals/ProductDetailModal';
import { GasCatalogModal } from './components/modals/GasCatalogModal';
import { MsdsModal } from './components/modals/MsdsModal';
import { BranchNetworkModal } from './components/modals/BranchNetworkModal';
import { FleetTelemetryModal } from './components/modals/FleetTelemetryModal';
import { NoticeDetailModal } from './components/modals/NoticeDetailModal';
import { CompanyIntroModal } from './components/modals/CompanyIntroModal';
import { EsgProjectModal } from './components/modals/EsgProjectModal';
import { LegalInfoModal } from './components/modals/LegalInfoModal';

export default function App() {
  const [lang, setLang] = useState<'KOR' | 'ENG'>('KOR');

  // Modal States
  const [inquiryModalOpen, setInquiryModalOpen] = useState(false);
  const [inquiryDefaultGas, setInquiryDefaultGas] = useState<string | undefined>(undefined);

  const [selectedProduct, setSelectedProduct] = useState<GasProduct | null>(null);
  const [selectedNotice, setSelectedNotice] = useState<NoticeItem | null>(null);

  const [catalogModalOpen, setCatalogModalOpen] = useState(false);
  const [catalogCategory, setCatalogCategory] = useState<string | undefined>(undefined);

  const [msdsModalOpen, setMsdsModalOpen] = useState(false);
  const [branchesModalOpen, setBranchesModalOpen] = useState(false);
  const [telemetryModalOpen, setTelemetryModalOpen] = useState(false);
  const [companyIntroModalOpen, setCompanyIntroModalOpen] = useState(false);
  const [esgModalOpen, setEsgModalOpen] = useState(false);

  const [legalModal, setLegalModal] = useState<{
    isOpen: boolean;
    title: string;
    content: string;
  }>({
    isOpen: false,
    title: '',
    content: '',
  });

  const handleOpenInquiry = (defaultGas?: string) => {
    setInquiryDefaultGas(defaultGas);
    setInquiryModalOpen(true);
  };

  const handleOpenCatalog = (initialCat?: string) => {
    setCatalogCategory(initialCat);
    setCatalogModalOpen(true);
  };

  const handleOpenLegalModal = (title: string, content: string) => {
    setLegalModal({ isOpen: true, title, content });
  };

  const handleOpenSafetyPolicy = () => {
    setLegalModal({
      isOpen: true,
      title: '안전보건경영방침 (Safety First Policy)',
      content: `(주)MS가스는 모든 임직원 및 사업 파트너의 생명과 안전을 경영의 최우선 가치로 확립합니다.

1. 안전법규 및 KGS 표준 100% 준수
  - 산업안전보건법, 중대재해처벌법 및 고압가스안전관리법을 철저히 준수하여 무재해 현장을 유지합니다.
2. 24시간 실시간 IoT 안전 관제
  - 초저온 탱크로리 및 전국 17개 충전 기지에 대해 디지털 압력/온도 모니터링을 상시 가동합니다.
3. 전사적 위험성평가(HAZOP) 정례화
  - 모든 고압 배관 및 이송 프로세스에 정성적·정량적 위험도 분석을 사전 실시하여 이상 징후를 원천 차단합니다.
4. 비상대응 훈련 및 신속 구조체계
  - 1588-0000 24시간 안전상황실을 통해 비상사태 발생 시 10분 이내 긴급 대응팀을 출동 조치합니다.`,
    });
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#f6f9ff] text-[#071d2c]">
      {/* Sticky Navigation Header */}
      <Header
        onOpenInquiry={handleOpenInquiry}
        onOpenCompanyIntro={() => setCompanyIntroModalOpen(true)}
        onOpenBranches={() => setBranchesModalOpen(true)}
        onOpenMsds={() => setMsdsModalOpen(true)}
        onOpenCatalog={() => handleOpenCatalog()}
        lang={lang}
        setLang={setLang}
      />

      {/* Main Content Sections */}
      <main className="w-full pt-20 flex-1">
        {/* Hero Section with Tanker Fleet & Telemetry Highlight */}
        <HeroSection
          onOpenInquiry={() => handleOpenInquiry()}
          onOpenTelemetry={() => setTelemetryModalOpen(true)}
          lang={lang}
        />

        {/* Performance & Network Strip (Deep Slate) */}
        <MetricsSection
          onOpenBranches={() => setBranchesModalOpen(true)}
          lang={lang}
        />

        {/* Product Categories Portfolio (6 Cards) */}
        <ProductPortfolio
          onSelectProduct={(prod) => setSelectedProduct(prod)}
          onOpenCatalog={() => handleOpenCatalog()}
          lang={lang}
        />

        {/* Quality, ESG & Heritage Bento Grid */}
        <QualityEsgHeritage
          onOpenEsgProject={() => setEsgModalOpen(true)}
          onOpenCompanyIntro={() => setCompanyIntroModalOpen(true)}
          onOpenMsds={() => setMsdsModalOpen(true)}
          lang={lang}
        />

        {/* Notice & Press Section */}
        <NoticePress
          onSelectNotice={(notice) => setSelectedNotice(notice)}
          onOpenInquiry={() => handleOpenInquiry()}
          lang={lang}
        />

        {/* Quick Support Portals */}
        <QuickSupportPortals
          onOpenCompanyIntro={() => setCompanyIntroModalOpen(true)}
          onOpenInquiry={() => handleOpenInquiry()}
          onOpenBranches={() => setBranchesModalOpen(true)}
          onScrollToNotices={() => {
            const el = document.getElementById('notices');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          lang={lang}
        />
      </main>

      {/* Enterprise Footer */}
      <Footer
        onOpenMsds={() => setMsdsModalOpen(true)}
        onOpenCatalog={handleOpenCatalog}
        onOpenBranches={() => setBranchesModalOpen(true)}
        onOpenSafetyPolicy={handleOpenSafetyPolicy}
        onOpenLegalModal={handleOpenLegalModal}
      />

      {/* Floating 24H Emergency Situation Room Badge / Fast CTA */}
      <aside aria-label="긴급 안전 지원" className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        <div className="bg-[#111111]/90 backdrop-blur-md text-white p-3 rounded-2xl shadow-2xl border border-white/15 flex items-center gap-3 animate-in slide-in-from-bottom-3 duration-300">
          <div className="w-9 h-9 rounded-xl bg-[#FDD000] text-[#111111] flex items-center justify-center font-bold">
            <span className="material-symbols-outlined text-[20px]">phone_in_talk</span>
          </div>
          <div className="text-left pr-1">
            <span className="text-[11px] text-[#81cfff] font-bold block leading-none">24H 긴급상황실</span>
            <span className="text-[15px] font-extrabold text-[#FDD000] tracking-tight">1588-0000</span>
          </div>
          <button
            onClick={() => handleOpenInquiry()}
            className="px-3.5 py-1.5 rounded-lg bg-[#005580] hover:bg-[#003d5d] text-white text-[12px] font-bold transition-colors cursor-pointer shrink-0 shadow-sm active:scale-95"
          >
            빠른 견적
          </button>
        </div>
      </aside>

      {/* Interactive Modal Dialogs */}
      <OnlineInquiryModal
        isOpen={inquiryModalOpen}
        onClose={() => setInquiryModalOpen(false)}
        defaultGas={inquiryDefaultGas}
      />

      <ProductDetailModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onInquiryForProduct={(gas) => handleOpenInquiry(gas)}
      />

      <GasCatalogModal
        isOpen={catalogModalOpen}
        onClose={() => setCatalogModalOpen(false)}
        onInquiryForGas={(gas) => handleOpenInquiry(gas)}
        initialCategory={catalogCategory}
      />

      <MsdsModal
        isOpen={msdsModalOpen}
        onClose={() => setMsdsModalOpen(false)}
      />

      <BranchNetworkModal
        isOpen={branchesModalOpen}
        onClose={() => setBranchesModalOpen(false)}
      />

      <FleetTelemetryModal
        isOpen={telemetryModalOpen}
        onClose={() => setTelemetryModalOpen(false)}
      />

      <NoticeDetailModal
        notice={selectedNotice}
        onClose={() => setSelectedNotice(null)}
      />

      <CompanyIntroModal
        isOpen={companyIntroModalOpen}
        onClose={() => setCompanyIntroModalOpen(false)}
        onOpenBranches={() => {
          setCompanyIntroModalOpen(false);
          setBranchesModalOpen(true);
        }}
      />

      <EsgProjectModal
        isOpen={esgModalOpen}
        onClose={() => setEsgModalOpen(false)}
        onOpenInquiry={() => {
          setEsgModalOpen(false);
          handleOpenInquiry('울산 규제특구 암모니아 벙커링 컨설팅');
        }}
      />

      <LegalInfoModal
        isOpen={legalModal.isOpen}
        title={legalModal.title}
        content={legalModal.content}
        onClose={() => setLegalModal({ isOpen: false, title: '', content: '' })}
      />
    </div>
  );
}
