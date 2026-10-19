export interface GasProduct {
  id: string;
  category: string;
  badge: string;
  badgeColor: string;
  name: string;
  titleKo: string;
  titleEn: string;
  descKo: string;
  descEn: string;
  tagsKo: string[];
  tagsEn: string[];
  footerActionKo: string;
  footerActionEn: string;
  imageUrl: string;
  purity: string;
  deliveryMethods: string[];
  specifications: {
    gasFormula: string;
    casNo: string;
    unNo: string;
    grades: string[];
    applications: string[];
    cylinders: string[];
  }[];
}

export interface NoticeItem {
  id: string;
  category: string;
  categoryType: 'bidding' | 'risk' | 'regulation' | 'citation' | 'honor';
  date: string;
  title: string;
  desc: string;
  author: string;
  department: string;
  content: string;
  attachments?: { name: string; size: string }[];
}

export interface BranchLocation {
  id: string;
  name: string;
  region: '영남권' | '수도권' | '충청권' | '호남권';
  type: '본사 및 중앙물류기지' | '특수가스 전용공장' | '충전소 및 물류영업소' | '기술영업소';
  address: string;
  phone: string;
  fax: string;
  keyFacilities: string[];
  manager: string;
}

export interface MsdsItem {
  id: string;
  nameKo: string;
  nameEn: string;
  formula: string;
  casNo: string;
  unNo: string;
  category: '산업용' | '특수가스' | '의료용' | '연료용';
  hazardClassification: string[];
  signalWord: '위험 (DANGER)' | '경고 (WARNING)';
  ghsPictograms: string[]; // e.g. 'gas_cylinder', 'flame', 'skull'
  storageTemp: string;
  firstAidSummary: string;
  emergencyPhone: string;
}

export interface TelemetryTruck {
  id: string;
  plateNumber: string;
  driver: string;
  cargo: string;
  cargoType: 'LO₂ (액화산소)' | 'LN₂ (액화질소)' | 'LAr (액화아르곤)' | 'L-NH₃ (액화암모니아)' | 'LCO₂ (액화탄산)';
  departure: string;
  destination: string;
  status: '운행 중' | '하역 중' | '복귀 중' | '대기';
  tankPressure: number; // bar
  tankTemperature: number; // °C
  fillLevelPercent: number;
  eta: string;
  speedKmH: number;
}

export const GAS_PRODUCTS: GasProduct[] = [
  {
    id: 'industrial-gas',
    category: '산업용 가스',
    badge: '산업용 가스',
    badgeColor: 'bg-primary text-on-primary',
    name: 'Industrial High-Pressure Gas',
    titleKo: '산업용 일반 고압가스',
    titleEn: 'Industrial High-Pressure Bulk Gases',
    descKo: '산소(O₂), 질소(N₂), 아르곤(Ar), 탄산(CO₂) 등 철강, 조선, 화학 및 금속가공 전반의 핵심 기초 원료 및 분위기 가스를 안정적으로 대량 공급합니다.',
    descEn: 'Reliable bulk supply of primary industrial gases including Oxygen (O₂), Nitrogen (N₂), Argon (Ar), and Carbon Dioxide (CO₂) for shipbuilding, steel, and chemical sectors.',
    tagsKo: ['액화산소(LO₂)', '액화질소(LN₂)', '액화아르곤(LAr)'],
    tagsEn: ['Liquid O₂ (LO₂)', 'Liquid N₂ (LN₂)', 'Liquid Ar (LAr)'],
    footerActionKo: '초저온 로리 및 실린더 공급',
    footerActionEn: 'Cryogenic Tanker & Cylinder Supply',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAOFFK_FSbMBi0WMEgUa5TjzKYjpZktnjsaTgnG2Tq-Lia0UK_vhGfO77g0w9cj-QBhdjyxrsQvhZF1uoWFvU9x_-ef-s0TnaRp-HqrZ_UXKqWhQ852QXomHlrfFBnwTrXZpIjyQLpFKNZWGo_iRZQc3OwTNpb_aQZlY_c1IqQxM4aynHH2kmqZgGn_h1CPqsTYaogh8NfRbb29OVVsIY5XeHndUS597f63mXL6C-kIOMQW6YVroMTomg',
    purity: '99.9% ~ 99.999%',
    deliveryMethods: ['초저온 탱크로리 (10톤~25톤)', '초저온 액화용기 (LGC 165L~175L)', '고압 봄베 실린더 (40L/47L 150bar)', '실린더 매니폴드 번들 (12~16본)'],
    specifications: [
      {
        gasFormula: 'O₂',
        casNo: '7782-44-7',
        unNo: 'UN 1072 (기체) / UN 1073 (액체)',
        grades: ['일반공업용 (99.6%)', '고순도용 (99.99%)', '초고순도용 (99.999%)'],
        applications: ['제철 제강 및 산소취입', '용접 및 절단작업', '화학산화 반응기', '폐수처리 포기조'],
        cylinders: ['47L 150bar 실린더', '175L 초저온 LGC', '대형 벌크탱크 직충전']
      },
      {
        gasFormula: 'N₂',
        casNo: '7727-37-9',
        unNo: 'UN 1066 (기체) / UN 1977 (액체)',
        grades: ['공업용 (99.9%)', '순수 N2 (99.999%)'],
        applications: ['불활성 분위기 형성 (패시베이션)', '배관 퍼징 및 기밀테스트', '식품 충전 질소포장', '레이저 절단 보조가스'],
        cylinders: ['47L 실린더', '초저온 저장탱크', '트레일러 공급']
      },
      {
        gasFormula: 'Ar',
        casNo: '7440-37-1',
        unNo: 'UN 1006 (기체) / UN 1951 (액체)',
        grades: ['용접용 (99.99%)', '분석용 (99.999%)'],
        applications: ['TIG/MIG 특수 비철금속 용접', '티타늄/스테인리스 보호분위기', '진공 열처리로'],
        cylinders: ['47L 150bar', '초저온 액화용기', '탱크로리 벌크공급']
      }
    ]
  },
  {
    id: 'fuel-gas',
    category: '연료용 가스',
    badge: '연료용 가스',
    badgeColor: 'bg-secondary text-on-secondary',
    name: 'High Efficiency Fuel Gases',
    titleKo: '고효율 연료용 가스 솔루션',
    titleEn: 'High Efficiency Industrial Fuel Gas Solutions',
    descKo: '프로판(C₃H₈), 프라멕스, 에탄, 부탄, 이소부탄 등 산업 현장의 열처리, 용단 및 에너지 효율 극대화에 필수적인 최적의 가스 연료 배합 시스템.',
    descEn: 'Optimized fuel blends including Propane, Promax, Ethane, and Isobutane tailored for high-thermal cutting, heat-treatment, and boiler efficiency.',
    tagsKo: ['프로판', '프라멕스', '이소부탄'],
    tagsEn: ['Propane', 'Promax Cut-Gas', 'Isobutane'],
    footerActionKo: '대용량 저장탱크 직공급',
    footerActionEn: 'Direct Bulk Storage Tank Supply',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCmOU_7AAUU-qIX8_wKn67E7sh6XeEuaLUOTHXt_t2B7iEtvTKkX-Xh6ieVevOB-satb6UsWRYgnLZRwe9cYz5l3hpp8QyLYrNXKv2ImITYSrzqG6vXde5aDDc8WeWat9PV36ktUCe389NOBzte5A0tNbHsgrl7UDJ0l0hxqfTBEKX-8bPUFIE90lTIs5JvL2yhbdf_bVl0emROFnKk2h07Q7R_p6GmypsPXdkHOz8fJwmErUGLYwynhA',
    purity: '발열량 24,000 kcal/Nm³ 이상',
    deliveryMethods: ['벌크로리 공급 (5톤~15톤)', '소형저장탱크 (0.5톤~2.9톤)', '50kg 고압 실린더'],
    specifications: [
      {
        gasFormula: 'C₃H₈ / C₄H₁₀',
        casNo: '74-98-6 (프로판) / 106-97-8 (부탄)',
        unNo: 'UN 1978 (프로판) / UN 1011 (부탄)',
        grades: ['산업용 프로판 (98% 이상)', '고효율 용단전용 프라멕스(Promax)'],
        applications: ['조선소 후판 CNC 화염절단', '주조 및 금속 단조 열처리로', '산업용 온수보일러 및 건조설비'],
        cylinders: ['50kg 기체/액체 배출 용기', '소형 벌크탱크 (2.45톤)', '로리 직공급']
      }
    ]
  },
  {
    id: 'specialty-gas',
    category: '특수 가스',
    badge: '특수 가스',
    badgeColor: 'bg-tertiary-container text-on-primary',
    name: 'Ultra-High Purity Specialty Gases',
    titleKo: '초고순도 특수가스 (반도체/전자)',
    titleEn: 'Ultra-High Purity Specialty Gases (Semiconductor/Display)',
    descKo: '반도체, 디스플레이, 광통신 및 2차전지 첨단 공정에 요구되는 99.999% 이상의 고순도 특수가스 및 미량 불순물 제어 혼합 가스 공급.',
    descEn: 'Sub-ppb impurity controlled gases exceeding 99.9999% purity for cutting-edge semiconductor lithography, etching, and battery electrode manufacturing.',
    tagsKo: ['Ultra-High Purity 6N', '전자소재용 공정가스'],
    tagsEn: ['Ultra-High Purity 6N', 'Process Gas for Electronics'],
    footerActionKo: 'Purity Certificate 보증',
    footerActionEn: 'Certified Purity Certificate Provided',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAyfl2_p_NG9yN0tQg7J-LvdKNp7mUtmS_0KOTmh31vYiX3ddilEIGbzYWj-_LtT8SdhXuXb4wZiesh12e6SSXD2auoN8hIeD_vAz8ddPKNlpoXRlgqHn86YWTnRPMMOkNY2q7MK6x4jVHi_hr8QIcqMIbnYMb4x0tdH1WqjAnxPZtvvj3Or7sSoY2kQJYEqhSXqfnb7tp1IVqEuDcU_5gWdo_OhC-d6JBnIEirrZpc920sjqDxBLaSrw',
    purity: '99.999% (5N) ~ 99.9999% (6N)',
    deliveryMethods: ['SUS EP 처리 실린더', 'Y-실린더 (470L)', 'ISO 튜브 트레일러', '전용 GC/ICP-MS 성적서 밀봉'],
    specifications: [
      {
        gasFormula: 'He, H₂, NF₃, CF₄, SiH₄, N₂O 5N',
        casNo: '혼합 및 단일 성분별 등록',
        unNo: 'UN 1046, UN 1049, UN 2421 등',
        grades: ['반도체 등급 5N5 (99.9995%)', '초고순도 6N (99.9999%)'],
        applications: ['웨이퍼 산화 및 식각(Etch) 공정', 'CVD/ALD 박막 증착', '광통신 프리폼 제조', '2차전지 전극 진공 건조'],
        cylinders: ['DGS 밸브 적용 47L 고압실린더', '내면 버프연마 용기', 'Class 10 클린룸 포장']
      }
    ]
  },
  {
    id: 'medical-gas',
    category: '의료용 가스',
    badge: '의료용 가스',
    badgeColor: 'bg-primary-container text-on-primary',
    name: 'Certified Medical Gases (GMP)',
    titleKo: '의료용 의약품 가스',
    titleEn: 'Pharmaceutical Grade Medical Gases (KGMP Certified)',
    descKo: '식약처 GMP 인증 및 엄격한 품질관리 기준을 준수하는 의료용 산소, 아산화질소, 질소 및 의료기기 검사용 특수 혼합 의료가스.',
    descEn: 'Ministry of Food and Drug Safety GMP-certified medical oxygen, nitrous oxide, and medical-grade nitrogen with rigorous pharmacopeia compliance.',
    tagsKo: ['의료용 산소(O₂)', '아산화질소(N₂O)', 'GMP인증'],
    tagsEn: ['Medical O₂', 'Nitrous Oxide (N₂O)', 'GMP Certified'],
    footerActionKo: '종합병원 정기 배송 계약',
    footerActionEn: 'General Hospital Periodic Delivery Contract',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCrWdYNGRnOmvncdfM66QRMmcUIxw0HQBcrMfz1mlCIKLa-fM9WoUjJcM79wNvdTJSQQobVkHYM7UcDTa2vwdUHct2pQocOy4iSVkumfHyaahs5lgmGeS1fqe4e28PCmsZCsiw72ObAs9IrqQqVMAen3tJO2ZlVWQoevpwsyLS62bwCCbhOTCBrkCwg-oXg7uDlT6KE7Xd-wqVftRmYHt44kqqHK3mrBX_uVWWqlsSFLKqE_2d3fhH4fQ',
    purity: '대한민국약전(KP) 기준 적합 99.5% 이상',
    deliveryMethods: ['병원 전용 액체산소 초저온 저장탱크', '의료용 알루미늄/스틸 봄베', '구급차용 휴대용 산소용기'],
    specifications: [
      {
        gasFormula: 'Medical O₂ / N₂O',
        casNo: '7782-44-7 / 10024-97-2',
        unNo: 'UN 1072 / UN 1070',
        grades: ['의약품 제조업 허가 GMP 완제품'],
        applications: ['중환자실 및 수술실 호흡보조', '흡입 마취 보조가스', '인큐베이터 및 응급구조 이송', '내시경 복강경 기복가스 (CO₂)'],
        cylinders: ['의료용 백색/녹색 도색 실린더', '핀인덱스(Pin-index) 밸브 용기', '초저온 진공배관 직결']
      }
    ]
  },
  {
    id: 'standard-gas',
    category: '표준 가스',
    badge: '표준 가스',
    badgeColor: 'bg-on-surface-variant text-on-primary',
    name: 'Precision Calibration & Standard Gas',
    titleKo: '정밀 측정용 표준 및 분석 가스',
    titleEn: 'Precision Environmental & Analytical Calibration Standards',
    descKo: '대기환경 측정기 교정, 연구원 분석장비(GC, MS) 캘리브레이션용 정밀 다성분 혼합 표준가스 제작 및 소급성 성적서 발급 지원.',
    descEn: 'Traceable multi-component calibration gas mixtures for environmental monitoring stations, GC/MS laboratories, and automotive emissions.',
    tagsKo: ['KOLAS 교정대응', 'ppm/ppb 단위 정밀제조'],
    tagsEn: ['KOLAS Traceable', 'ppm/ppb Precision Blending'],
    footerActionKo: '정밀 분석성적서 동봉',
    footerActionEn: 'Full Analytical Certificate Included',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCEkwVzSFLAZ37DvgLMmmG63FRGhXtHRnfeVKLqIv3nYTwvtDxza6IylP8c1btIcWHH4RY7GjRtaWgI8r1z2v9g2mTE2UVyb6pIQlsaQpMwf2ACRFMZm3WvDgply41GIhv_B_4x6wvoKIU-KXOzrsxkrLL9xN1vQKvIYfet_ETTzIguxaktQpXt6BtKaSBepBfgZvQfPsC33HaUrMZcOhm_8Z3tw0DuEZqTW9ba8wbohHQ4h2lVkXcBQw',
    purity: '상대불확도 ±1.0% 이내 보증',
    deliveryMethods: ['특수 알루미늄 실린더', 'Passivation 처리 특수강 용기', '휴대용 일회용 캔형 표준가스'],
    specifications: [
      {
        gasFormula: 'CO, CO₂, SO₂, NO/NOx, THC, VOCs Balance N₂/Air',
        casNo: '국가표준원 표준물질 소급',
        unNo: 'UN 1956 (압축가스 N.O.S.)',
        grades: ['중량법 조제 표준가스', 'KOLAS 인증 교정용 가스'],
        applications: ['굴뚝 TMS(원격감시체계) 교정', '자동차 배출가스 검사소 정기교정', '대학 및 기업부설연구소 기기분석', '가스누출경보기 정기점검'],
        cylinders: ['10L, 47L 알루미늄 내면부동태화 용기', '황동/SUS 고정밀 감압기 세트']
      }
    ]
  },
  {
    id: 'equipment-engineering',
    category: '기타 장비 & 엔지니어링',
    badge: '기타 장비 & 엔지니어링',
    badgeColor: 'bg-tertiary text-on-primary',
    name: 'Cryogenic Plant & Piping Engineering',
    titleKo: '초저온 저장탱크 및 가스 플랜트 시공',
    titleEn: 'Cryogenic Storage Tanks & High-Pressure Piping Plant Engineering',
    descKo: '초저온 액화가스 저장탱크, 고압 기화기, 자동 절체 매니폴드 시스템 설계, 인허가 대행 및 한국가스안전공사 법정 완성검사 토탈 엔지니어링.',
    descEn: 'Turnkey engineering for cryogenic bulk tanks, vaporizers, automatic switchover manifolds, regulatory licensing, and KGS safety compliance audits.',
    tagsKo: ['초저온 탱크 시공', '가스 배관 플랜트'],
    tagsEn: ['Cryo Bulk Tank Construction', 'High-Pressure Plant Piping'],
    footerActionKo: '엔지니어링 무료 현장 실측',
    footerActionEn: 'Free Engineering On-Site Inspection',
    imageUrl: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCzPmN_y-SN7vPyx5plrOkffi8_o90cduD8Fixi_Y7SuE1pR7Z_PUQEz2y6HOLGoGzEfK4uUIBnfPvkcdlU1mol5LGb6GOgwqColOjNfeMBuyzIpKKM3nYdHoqEgktJQ9zw87mGDw6EgtWfAXNIvbrVIe9_pKR72rAfUaIyf2b4Imc8lYJsZvTTHLpIycGd1fkrlw_2_XtaB3-huyYJvImqvjhPkP87egtUTD-UiNoxOHc5bsfjusHTyQ',
    purity: 'KGS 코드(고압가스안전관리법) 100% 충족',
    deliveryMethods: ['플랜트 턴키(EPC) 시공', '기화기/압력조정기 패키지', 'IoT 원격 레벨전송기 시스템'],
    specifications: [
      {
        gasFormula: '초저온 진공단열 설비 일체',
        casNo: '플랜트 설비 규격',
        unNo: '압력용기 인증 대상',
        grades: ['1톤 ~ 50톤 진공단열 초저온 저장탱크', '대기식 알루미늄 핀튜브 기화기'],
        applications: ['신축 반도체/이차전지 공장 중앙가스공급실(CGS)', '대형 철강 및 조선소 초저온 벌크스테이션', '식품동결 급냉설비 배관공사'],
        cylinders: ['저장탱크 기초 토목 및 방류벽 시공', '긴급차단밸브(ESV) 및 가스누출차단 연동']
      }
    ]
  }
];

export const NOTICES: NoticeItem[] = [
  {
    id: 'notice-2025-02',
    category: '입찰공고',
    categoryType: 'bidding',
    date: '2025.02',
    title: '울산 규제자유특구 『암모니아 TTS용 벙커링 인프라 구축 및 기자재·표준 개발 (실증R&D)』관련 “구축시스템 3자 안전진단 평가” 용역 입찰',
    desc: '친환경 해운 연료 전환을 위한 암모니아 트럭 대 선박(TTS) 벙커링 인프라 구축 실증 설비의 제3자 독립 안전성 진단 및 종합 평가 용역 공고입니다.',
    author: '신에너지R&D추진단',
    department: '기술연구소',
    content: `본 입찰은 중소벤처기업부 및 울산광역시 지원으로 수행 중인 『울산 친환경 선박 규제자유특구 암모니아 TTS(Truck-to-Ship) 벙커링 인프라 구축 및 기자재·표준 개발』 실증 과제와 관련하여, 시공 완료된 특수 탱크로리-선박 간 이송 배관, 비상차단시스템(ERC), 가스누출감지 및 스크러버 정화 설비의 제3자 독립 안전진단 평가를 전문 기관에 위탁하고자 공고합니다.

1. 입찰건명: 울산 규제자유특구 암모니아 TTS 벙커링 인프라 구축시스템 3자 안전진단 평가 용역
2. 과업기간: 계약체결일로부터 90일 이내
3. 주요 과업범위:
  - TTS 암모니아 공급 라인 및 커플링부의 구조적/열적 기밀 건전성 평가
  - 비상상황 시 ESD(Emergency Shutdown) 연동 속도 및 차단 신뢰도 검증
  - 고위험 독성가스 확산 시뮬레이션 모델 검증 및 주민 대피 프로토콜 부합성 검토
4. 제안서 제출마감: 2025년 2월 28일 17:00까지
5. 문의처: (주)MS가스 신에너지R&D추진단 (051-000-0000)`,
    attachments: [
      { name: '제안요청서(RFP)_암모니아_TTS_3자안전진단.pdf', size: '2.4 MB' },
      { name: '과업지시서_안전진단평가_규격.hwp', size: '840 KB' }
    ]
  },
  {
    id: 'notice-2025-01',
    category: '위험성평가 입찰',
    categoryType: 'risk',
    date: '2025.01',
    title: '울산 규제자유특구 『암모니아 TTS용 벙커링 인프라 구축 및 기자재·표준 개발 (실증R&D)』관련 “탱크로리를 이용한 암모니아 벙커링 설비 정성적 위험평가(HAZOP) 분석” 용역 입찰',
    desc: '탱크로리 기반 고압 액화 암모니아 이송 프로세스에 대한 HAZOP 정성적 위험도 분석 및 운전 절차 안전 최적화 용역입니다.',
    author: '안전환경경영실',
    department: '공정안전팀',
    content: `(주)MS가스 공정안전본부에서는 울산 규제자유특구 실증 사업의 현장 안전을 최고 수준으로 담보하기 위해, 암모니아 벌크 탱크로리 가압 및 이송 시스템에 대한 정성적 공정위험성평가(HAZOP: Hazard and Operability Study) 용역 입찰을 실시합니다.

1. 목적: 고압 액화 무수암모니아의 육상-해상 이송 중 발생 가능한 비정상 운전 상태, 파일럿 밸브 오작동, 외력 충격 등의 잠재적 위험 요인을 선제적으로 식별하고 방호 대책을 수립함.
2. 분석 대상: 20톤급 암모니아 전용 탱크로리, 긴급분리장치(PRD), 유량제어 스키드, BOG(증발가스) 회수 시스템
3. 참가 자격: 화학물질관리법 및 KOSHA 위험성평가 인증을 보유한 전문 엔지니어링 컨설팅 기업
4. 세부 일정: 제안서 접수 및 심사위원 평가 진행`,
    attachments: [
      { name: 'HAZOP_분석용역_제안공고문.pdf', size: '1.8 MB' }
    ]
  },
  {
    id: 'notice-2024-12',
    category: '실증특례 고지',
    categoryType: 'regulation',
    date: '2024.12',
    title: '경남 암모니아 혼소 연료추진시스템 선박 규제자유특구 실증특례 이용자고지',
    desc: '중소벤처기업부 규제특례제도에 따른 선박용 암모니아 혼소 연료 공급 시스템 실증 참여 및 안전관리 준수 규정 공지입니다.',
    author: '기획조정본부',
    department: '대외협력부',
    content: `중소벤처기업부 고시 「규제자유특구 및 지역특화발전특구에 관한 규제특례법」에 따라, (주)MS가스가 참여하는 경남 암모니아 혼소 추진 시스템 선박 실증에 관한 이용자 및 지역 주민 고지사항을 안내드립니다.

- 실증특례 명칭: 선박 배출가스 감축을 위한 암모니아-디젤 혼소 연료 공급 시스템 실증
- 실증구역: 경상남도 통영시 및 거제시 연안 해역
- 안전책임 보험: 가스사고 배상책임 및 특례사업 전용 영업배상 책임보험 가입 완료
- 비상연락망: 24시간 상황실 1588-0000`,
    attachments: [
      { name: '규제특례법_이용자고지_상세공문.pdf', size: '1.1 MB' }
    ]
  },
  {
    id: 'notice-2024-11',
    category: '도지사 표창',
    categoryType: 'citation',
    date: '2024.11',
    title: '(주)MS가스 충남 중소기업 탄소중립 성과 확산의 날 충남도지사 유공자 표창 수여',
    desc: '산업공정 온실가스 감축 기술 적용 및 지역 친환경 에너지 보급 기여 공로를 인정받아 충청남도 유공기업 표창을 수상하였습니다.',
    author: '홍보팀',
    department: '경영지원본부',
    content: `2024년 11월 충청남도 주최 '2024 충남 중소기업 탄소중립 성과 확산의 날' 행사에서 (주)MS가스가 지역 내 반도체·철강 기업들의 온실가스 감축 지원 및 고효율 친환경 가스 연소 설비 보급에 기여한 공로로 충남도지사 유공기업 표창을 수상하였습니다.

(주)MS가스는 앞으로도 산업현장의 탄소배출 제로화를 선도하는 신기술 개발과 안전한 가스 공급 체계 확립에 최선을 다하겠습니다.`,
    attachments: []
  },
  {
    id: 'notice-2024-10',
    category: '정부 훈장',
    categoryType: 'honor',
    date: '2024.10',
    title: '(주)MS가스 전청민 대표이사 은탑산업훈장 수훈',
    desc: '국가 고압가스 안전관리 수준 고도화 및 산업 경쟁력 제고, 청정에너지 전환에 선도적 기여를 이룩한 공적으로 은탑산업훈장을 수훈하였습니다.',
    author: '대표이사실',
    department: '비서실',
    content: `산업통상자원부 주최 '대한민국 가스안전대상' 기념식에서 (주)MS가스 전청민 대표이사가 국가 가스 산업 발전에 기여한 최고의 영예인 '은탑산업훈장'을 수훈하였습니다.

지난 1974년 창립 이래 50년간 반도체, 중화학, 의료 분야에 무사고 원칙으로 초고순도 가스를 안정 공급하고, 최근 차세대 무탄소 연료인 수소 및 친환경 암모니아 밸류체인 구축에 앞장선 점을 높이 평가받았습니다.

임직원 일동은 이번 수훈을 계기로 더욱 철저한 안전제일주의와 기술 혁신을 실천하겠습니다.`,
    attachments: [
      { name: '가스안전대상_은탑산업훈장_수훈기념사.pdf', size: '3.1 MB' }
    ]
  }
];

export const BRANCH_LOCATIONS: BranchLocation[] = [
  {
    id: 'headquarters',
    name: '부산 본사 및 종합물류기지',
    region: '영남권',
    type: '본사 및 중앙물류기지',
    address: '부산광역시 사상구 낙동대로 1234번길 18',
    phone: '051-000-0000',
    fax: '051-000-0001',
    keyFacilities: ['초저온 산소/질소/아르곤 대형 벌크기지', '자동 회전식 실린더 충전대', '24H 통합안전관제센터'],
    manager: '김상우 총괄본부장'
  },
  {
    id: 'gimhae-logistics',
    name: '김해 중앙 물류센터',
    region: '영남권',
    type: '충전소 및 물류영업소',
    address: '경상남도 김해시 진영읍 진산대로 542',
    phone: '055-345-0010',
    fax: '055-345-0011',
    keyFacilities: ['특수 고압가스 5000병 적재장', '용기 내면 건조 및 바코드 추적 시스템'],
    manager: '박정식 소장'
  },
  {
    id: 'ulsan-cryo',
    name: '울산 특수가스 및 암모니아 실증센터',
    region: '영남권',
    type: '특수가스 전용공장',
    address: '울산광역시 남구 여천로 98',
    phone: '052-258-0020',
    fax: '052-258-0021',
    keyFacilities: ['울산 규제자유특구 TTS 벙커링 시설', '초고순도 수소/암모니아 정제라인'],
    manager: '이민호 기술이사'
  },
  {
    id: 'changwon-branch',
    name: '창원 중공업 전용 충전소',
    region: '영남권',
    type: '충전소 및 물류영업소',
    address: '경상남도 창원시 성산구 공단로 210',
    phone: '055-282-0030',
    fax: '055-282-0031',
    keyFacilities: ['조선·방산 용접 혼합가스(Ar+CO₂) 전용라인', '초저온 20톤 로리 3기 보유'],
    manager: '정동건 소장'
  },
  {
    id: 'pohang-steel',
    name: '포항 철강산업영업소',
    region: '영남권',
    type: '충전소 및 물류영업소',
    address: '경상북도 포항시 남구 철강로 145',
    phone: '054-278-0040',
    fax: '054-278-0041',
    keyFacilities: ['대용량 고압산소 취입가스 충전시설', '야간 긴급공급 배차팀 상시 대기'],
    manager: '최규원 소장'
  },
  {
    id: 'hwaseong-semicon',
    name: '화성 첨단전자소재 기술센터',
    region: '수도권',
    type: '특수가스 전용공장',
    address: '경기도 화성시 동탄첨단산업1로 58',
    phone: '031-8015-0050',
    fax: '031-8015-0051',
    keyFacilities: ['Class 10 고청정 클린룸', 'ICP-MS 미량금속분석기', '반도체 6N 정제설비'],
    manager: '조경훈 연구소장'
  },
  {
    id: 'pyeongtaek-hub',
    name: '평택 반도체 서브허브',
    region: '수도권',
    type: '충전소 및 물류영업소',
    address: '경기도 평택시 고덕순환대로 112',
    phone: '031-667-0060',
    fax: '031-667-0061',
    keyFacilities: ['24H JIT(Just-In-Time) 직배송 트럭군', '의료용 의약품 산소 GMP 충전소'],
    manager: '한진수 지점장'
  },
  {
    id: 'incheon-port',
    name: '인천 서해안 물류기지',
    region: '수도권',
    type: '충전소 및 물류영업소',
    address: '인천광역시 서구 북항로 88',
    phone: '032-581-0070',
    fax: '032-581-0071',
    keyFacilities: ['ISO 튜브트레일러 통관 및 하역 독', '수입 원료가스 대형 저장설비'],
    manager: '윤태영 소장'
  },
  {
    id: 'cheonan-center',
    name: '천안 디스플레이 전용영업소',
    region: '충청권',
    type: '충전소 및 물류영업소',
    address: '충청남도 천안시 서북구 2공단4로 33',
    phone: '041-554-0080',
    fax: '041-554-0081',
    keyFacilities: ['초저온 질소 저장탱크 60톤', '자동절체 매니폴드 점검 기술팀'],
    manager: '송영우 지점장'
  },
  {
    id: 'seosan-chem',
    name: '서산 석유화학 콤비나트 영업소',
    region: '충청권',
    type: '충전소 및 물류영업소',
    address: '충청남도 서산시 대산읍 대죽1로 77',
    phone: '041-669-0090',
    fax: '041-669-0091',
    keyFacilities: ['화학 플랜트 배관 퍼징 전용 대용량 N2 기화기 트럭', '방폭 인증 차량'],
    manager: '강병준 소장'
  },
  {
    id: 'cheongju-bio',
    name: '청주 오송 바이오메디컬 지점',
    region: '충청권',
    type: '기술영업소',
    address: '충청북도 청주시 흥덕구 오송읍 오송생명1로 189',
    phone: '043-231-0100',
    fax: '043-231-0101',
    keyFacilities: ['세포배양용 초순수 CO2/N2 정밀 혼합실', '병원 의약품 가스 인허가 지원실'],
    manager: '오상민 소장'
  },
  {
    id: 'yeosu-petro',
    name: '여수 국가산업단지 물류센터',
    region: '호남권',
    type: '충전소 및 물류영업소',
    address: '전라남도 여수시 산단중앙로 450',
    phone: '061-683-0110',
    fax: '061-683-0111',
    keyFacilities: ['초저온 탄산(CO2) 벌크 저장탱크', '24시간 무중단 셔틀 로리 운용'],
    manager: '임재성 소장'
  },
  {
    id: 'gwangju-medical',
    name: '광주 호남총괄영업본부',
    region: '호남권',
    type: '본사 및 중앙물류기지',
    address: '광주광역시 광산구 하남산단5번로 82',
    phone: '062-951-0120',
    fax: '062-951-0121',
    keyFacilities: ['호남권 전역 종합병원 의료용가스 전담 배송망', '표준가스 조제 분석실'],
    manager: '서현우 본부장'
  },
  {
    id: 'gunsan-marine',
    name: '군산 새만금 복합물류센터',
    region: '호남권',
    type: '충전소 및 물류영업소',
    address: '전북특별자치도 군산시 자유무역로 102',
    phone: '063-467-0130',
    fax: '063-467-0131',
    keyFacilities: ['풍력 및 재생에너지 연계 수소저장 테스트베드', '초저온 액화가스 기화설비'],
    manager: '배종철 소장'
  }
];

export const MSDS_DATABASE: MsdsItem[] = [
  {
    id: 'msds-lo2',
    nameKo: '액화산소 / 고압산소',
    nameEn: 'Oxygen, refrigerated liquid / Compressed',
    formula: 'O₂',
    casNo: '7782-44-7',
    unNo: 'UN 1073 / UN 1072',
    category: '산업용',
    hazardClassification: ['산화성 가스 구분 1', '고압가스: 냉동액화가스', '급성 호흡기 자극'],
    signalWord: '위험 (DANGER)',
    ghsPictograms: ['local_fire_department', 'propane'],
    storageTemp: '-183°C 이하 (액체) / 상온 건랭소 (기체)',
    firstAidSummary: '동상 시 미온수로 서서히 가온. 다량 흡입 시 신선한 공기 지역으로 이동. 화기 및 가연물 엄금.',
    emergencyPhone: '1588-0000 (MS가스 24시간 안전상황실)'
  },
  {
    id: 'msds-ln2',
    nameKo: '액화질소 / 고압질소',
    nameEn: 'Nitrogen, refrigerated liquid / Compressed',
    formula: 'N₂',
    casNo: '7727-37-9',
    unNo: 'UN 1977 / UN 1066',
    category: '산업용',
    hazardClassification: ['고압가스: 냉동액화가스', '단순 질식성 가스'],
    signalWord: '경고 (WARNING)',
    ghsPictograms: ['propane'],
    storageTemp: '-196°C 이하 (액체) / 환기 양호 구역',
    firstAidSummary: '밀폐공간 진입 전 산소농도(18% 이상) 측정 필수. 질식 시 즉시 신선한 공기 흡입 및 산소호흡기 착용.',
    emergencyPhone: '1588-0000 (MS가스 24시간 안전상황실)'
  },
  {
    id: 'msds-lar',
    nameKo: '액화아르곤 / 고압아르곤',
    nameEn: 'Argon, refrigerated liquid / Compressed',
    formula: 'Ar',
    casNo: '7440-37-1',
    unNo: 'UN 1951 / UN 1006',
    category: '산업용',
    hazardClassification: ['고압가스: 냉동액화가스', '단순 질식성 가스'],
    signalWord: '경고 (WARNING)',
    ghsPictograms: ['propane'],
    storageTemp: '-186°C 이하 (액체)',
    firstAidSummary: '공기보다 무거워 바닥에 체류하므로 밀폐 지하공간 즉시 강제환기 실시.',
    emergencyPhone: '1588-0000 (MS가스 24시간 안전상황실)'
  },
  {
    id: 'msds-co2',
    nameKo: '액화탄산 / 이산화탄소',
    nameEn: 'Carbon dioxide, refrigerated liquid',
    formula: 'CO₂',
    casNo: '124-38-9',
    unNo: 'UN 2187 / UN 1013',
    category: '산업용',
    hazardClassification: ['고압가스: 액화가스', '고농도 흡입 시 질식 및 호흡중추 마비'],
    signalWord: '경고 (WARNING)',
    ghsPictograms: ['propane'],
    storageTemp: '-20°C (20bar 액체) / 환기 시설 구비',
    firstAidSummary: '고농도 폭로 시 심폐소생술 및 고농도 산소 투여.',
    emergencyPhone: '1588-0000 (MS가스 24시간 안전상황실)'
  },
  {
    id: 'msds-nh3',
    nameKo: '무수 암모니아 (친환경 실증연료)',
    nameEn: 'Ammonia, anhydrous',
    formula: 'NH₃',
    casNo: '7664-41-7',
    unNo: 'UN 1005',
    category: '특수가스',
    hazardClassification: ['인화성 가스 구분 2', '급성 독성(흡입) 구분 3', '피부 부식성 구분 1B'],
    signalWord: '위험 (DANGER)',
    ghsPictograms: ['skull', 'local_fire_department', 'propane'],
    storageTemp: '서늘하고 건조한 방폭 차광 구역',
    firstAidSummary: '물 분무로 증기 흡수. 누출 시 바람 반대방향 풍상측으로 긴급 대피. 제독용 보호복 필수.',
    emergencyPhone: '1588-0000 (MS가스 24시간 안전상황실)'
  },
  {
    id: 'msds-med-o2',
    nameKo: '의료용 산소 (KP 규격 의약품)',
    nameEn: 'Medical Oxygen USP/KP Grade',
    formula: 'O₂',
    casNo: '7782-44-7',
    unNo: 'UN 1072',
    category: '의료용',
    hazardClassification: ['산화성 가스 구분 1', '고압가스: 압축가스'],
    signalWord: '위험 (DANGER)',
    ghsPictograms: ['local_fire_department', 'propane'],
    storageTemp: '의약품 보관소 기준 40°C 이하 직사광선 차단',
    firstAidSummary: '의사의 처방 및 적정 유량에 따라 투여. 유지류(오일, 그리스) 접촉 엄금.',
    emergencyPhone: '1588-0000 (MS가스 24시간 안전상황실)'
  },
  {
    id: 'msds-n2o',
    nameKo: '의료용 아산화질소',
    nameEn: 'Nitrous oxide, medical grade',
    formula: 'N₂O',
    casNo: '10024-97-2',
    unNo: 'UN 1070',
    category: '의료용',
    hazardClassification: ['산화성 가스 구분 1', '특정표적장기 독성(마취작용)'],
    signalWord: '위험 (DANGER)',
    ghsPictograms: ['local_fire_department', 'propane'],
    storageTemp: '환기가 원활한 의약품 전용 보관실',
    firstAidSummary: '과다 흡입 시 즉시 신선한 공기를 호흡하고 의료진 조치.',
    emergencyPhone: '1588-0000 (MS가스 24시간 안전상황실)'
  },
  {
    id: 'msds-c3h8',
    nameKo: '산업용 프로판 (연료가스)',
    nameEn: 'Propane, industrial cut grade',
    formula: 'C₃H₈',
    casNo: '74-98-6',
    unNo: 'UN 1978',
    category: '연료용',
    hazardClassification: ['인화성 가스 구분 1', '고압가스: 액화가스'],
    signalWord: '위험 (DANGER)',
    ghsPictograms: ['local_fire_department', 'propane'],
    storageTemp: '방폭 환기 시설, 40°C 이하 보관',
    firstAidSummary: '누출 즉시 점화원(스위치, 정전기) 제거. 분말 소화약제 또는 CO2 소화기 사용.',
    emergencyPhone: '1588-0000 (MS가스 24시간 안전상황실)'
  }
];

export const TELEMETRY_FLEET: TelemetryTruck[] = [
  {
    id: 'TRUCK-01',
    plateNumber: '부산 85바 3412',
    driver: '이철호 부장',
    cargo: '초순도 액화산소 (LO₂ 18.5톤)',
    cargoType: 'LO₂ (액화산소)',
    departure: '부산 사상 중앙물류기지',
    destination: '포항제철소 3고로 CGS',
    status: '운행 중',
    tankPressure: 8.4,
    tankTemperature: -182.8,
    fillLevelPercent: 92,
    eta: '19:45 (정시 진행)',
    speedKmH: 78
  },
  {
    id: 'TRUCK-02',
    plateNumber: '경남 91아 7821',
    driver: '김성민 과장',
    cargo: '초고순도 6N 액화질소 (LN₂ 21.0톤)',
    cargoType: 'LN₂ (액화질소)',
    departure: '김해 중앙 물류센터',
    destination: '삼성전자 평택캠퍼스 FAB 4',
    status: '운행 중',
    tankPressure: 6.2,
    tankTemperature: -195.4,
    fillLevelPercent: 96,
    eta: '20:10 (정시 진행)',
    speedKmH: 82
  },
  {
    id: 'TRUCK-03',
    plateNumber: '울산 82자 1904',
    driver: '정우택 대리',
    cargo: '실증용 액화 무수암모니아 (L-NH₃ 14.0톤)',
    cargoType: 'L-NH₃ (액화암모니아)',
    departure: '울산 특수가스 전용기지',
    destination: '울산항만공사 벙커링 터미널',
    status: '하역 중',
    tankPressure: 12.1,
    tankTemperature: -32.5,
    fillLevelPercent: 35,
    eta: '완료 예정 19:30',
    speedKmH: 0
  },
  {
    id: 'TRUCK-04',
    plateNumber: '경기 88바 9940',
    driver: '강동원 차장',
    cargo: '의료용 초저온 액화산소 (KP 12.0톤)',
    cargoType: 'LO₂ (액화산소)',
    departure: '평택 물류서브허브',
    destination: '분당서울대학교병원 의료원',
    status: '운행 중',
    tankPressure: 7.8,
    tankTemperature: -183.1,
    fillLevelPercent: 88,
    eta: '19:20 (정시 진행)',
    speedKmH: 74
  },
  {
    id: 'TRUCK-05',
    plateNumber: '경남 83바 5519',
    driver: '윤석호 과장',
    cargo: '고순도 액화아르곤 (LAr 19.8톤)',
    cargoType: 'LAr (액화아르곤)',
    departure: '창원 중공업 전용기지',
    destination: '한화오션 거제사업장 선체블록',
    status: '운행 중',
    tankPressure: 8.9,
    tankTemperature: -185.6,
    fillLevelPercent: 94,
    eta: '20:05 (정시 진행)',
    speedKmH: 70
  }
];
