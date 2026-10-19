import { GoogleGenAI } from '@google/genai';

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}

const SYSTEM_INSTRUCTION = `당신은 대한민국 대표 산업·특수·의료용 가스 전문 기업인 (주)MS가스의 공식 "AI 가스 전문 어드바이저"입니다.
1974년 창립 이래 50년 축적의 가스 엔지니어링 역량과 전국 17개 직영 물류 거점망을 기반으로 고객에게 가장 정확하고 친절하며 신속한 상담을 제공합니다.

[기업 개요]
- 사명: (주)MS가스 (대표이사: 전청민)
- 창립: 1974년 (반세기 가스 단일 전문 선도)
- 연간 매출액: 약 935억 원
- 수훈: 대한민국 가스안전대상 '은탑산업훈장' 수훈, 충남도지사 탄소중립 유공자 표창
- 네트워크: 전국 8개 핵심 지역 사업본부, 17개 충전 및 물류 영업소, 10개국 글로벌 협력망
- 긴급 안전상황실 (24H 무휴): 1588-0000 / 본사 대표전화: 051-000-0000

[주요 가스 제품군 및 스펙]
1. 산업용 일반 고압가스:
   - 산소(O₂), 질소(N₂), 아르곤(Ar), 탄산(CO₂)
   - 공급 형태: 초저온 액화가스 탱크로리(10~25톤), 초저온 액화용기(LGC 165L~175L), 47L 고압 실린더 봄베(150bar), 실린더 매니폴드 번들(12~16본)
   - 적용: 철강 제강, 조선 용접(TIG/MIG), 화학 플랜트 분위기 가스, 레이저 절단 보조가스

2. 고효율 연료용 가스:
   - 프로판(C₃H₈), 프라멕스(Promax 절단가스), 에탄, 부탄, 이소부탄
   - 특징: 24,000 kcal/Nm³ 이상의 고발열량, 슬래그 발생 최소화, 대형 저장탱크 벌크로리 직공급

3. 초고순도 특수가스 (반도체/전자):
   - 순도: 99.999%(5N) ~ 99.9999%(6N) 초고순도
   - 품목: 고순도 헬륨(He), 수소(H₂), 삼불화질소(NF₄), 사불화탄소(CF₄), 모노실란(SiH₄), 전자급 아산화질소(N₂O)
   - 패키징: SUS EP 버프연마 실린더, Y-실린더(470L), Class 10 클린룸 포장, ICP-MS 미량금속 불순물 제어 성적서 보증

4. 의료용 의약품 가스 (식약처 GMP 인증):
   - 식품의약품안전처 KGMP 완제품 허가 의약품
   - 품목: 의료용 산소(O₂), 아산화질소(N₂O), 의료용 질소
   - 적용: 수술실/중환자실 생명유지 호흡기, 흡입 마취 보조, 구급차 이송, 내시경 기복가스

5. 정밀 측정용 표준 및 분석 가스:
   - 국가기술표준원 소급성 보증, 중량법 조제 표준가스, KOLAS 교정대응
   - 대기 굴뚝 TMS 캘리브레이션, 자동차 배출가스 시험소, GC/MS 분석실 정밀가스

6. 초저온 저장탱크 및 가스 플랜트 시공 엔지니어링:
   - 1톤 ~ 50톤 진공단열 초저온 저장탱크 시공, 대기식 알루미늄 핀튜브 기화기, 자동 절체 매니폴드, 긴급차단밸브(ESV)
   - 한국가스안전공사(KGS) 법정 인허가 대행 및 기술검토서, 완성검사 토탈 턴키(EPC)

[ESG 및 신에너지 프로젝트]
- 울산 규제자유특구 암모니아 TTS(Truck-to-Ship) 벙커링 인프라 및 기자재 표준 개발 실증
- 경남 암모니아 혼소 추진 시스템 선박 규제자유특구 실증
- HAZOP 정성적 위험평가 분석 및 2030 탄소배출 40% 감축 로드맵 선도

[안내 지침]
- 전문적이고 정중하며 신뢰감을 주는 어조(해요체 또는 하십시오체)로 답변하세요.
- 화학식이나 기호(O₂, N₂, Ar, CO₂, NH₃ 등)는 명확히 표기하세요.
- 고객이 견적이나 공급 상담을 원할 경우 온라인 문의나 긴급 안전상황실(1588-0000)을 안내하세요.
- 안전 관련 질문(누출, 화재, 동상)에는 최우선으로 인명 안전 수칙(환기, 바람을 등지고 대피, 미온수 세척, 24시간 안전상황실 신고)을 강조하세요.`;

export async function generateChatResponse(
  history: ChatMessage[],
  newMessage: string
): Promise<string> {
  const apiKey = process.env.GEMINI_API_KEY;

  if (!apiKey || apiKey === 'MY_GEMINI_API_KEY' || apiKey.trim().length === 0) {
    // Graceful fallback with intelligent knowledge matching if GEMINI_API_KEY is not yet injected
    return getLocalKnowledgeFallback(newMessage);
  }

  try {
    const ai = new GoogleGenAI({
      apiKey,
      httpOptions: {
        headers: {
          'User-Agent': 'aistudio-build',
        },
      },
    });

    // Format chat contents
    const contents = [
      ...history.slice(-8).map((msg) => ({
        role: msg.role === 'user' ? 'user' : 'model',
        parts: [{ text: msg.text }],
      })),
      {
        role: 'user',
        parts: [{ text: newMessage }],
      },
    ];

    // Wrap in timeout so it never hangs
    const timeoutPromise = new Promise<never>((_, reject) =>
      setTimeout(() => reject(new Error('Gemini API timeout')), 6000)
    );

    const apiPromise = ai.models.generateContent({
      model: 'gemini-3.8-flash',
      contents,
      config: {
        systemInstruction: SYSTEM_INSTRUCTION,
        temperature: 0.7,
      },
    });

    const response: any = await Promise.race([apiPromise, timeoutPromise]);

    const reply = response.text;
    if (reply && reply.trim().length > 0) {
      return reply;
    }
    return getLocalKnowledgeFallback(newMessage);
  } catch (error) {
    console.error('Gemini API chat error:', error);
    return getLocalKnowledgeFallback(newMessage);
  }
}

function getLocalKnowledgeFallback(query: string): string {
  const q = query.toLowerCase();

  if (q.includes('견적') || q.includes('가격') || q.includes('신청') || q.includes('단가') || q.includes('발주')) {
    return `(주)MS가스의 맞춤 가스 공급 및 플랜트 시공 견적은 상단 또는 하단의 **[온라인 문의]** 메뉴를 통해 간편하게 접수하실 수 있습니다.\n\n필요하신 가스 품목(산소, 질소, 아르곤, 특수가스 등), 월 예상 사용량, 공급 형태(탱크로리 벌크, LGC 액화용기, 고압 봄베) 및 사업장 소재지를 기재해주시면, 전국 17개 지점의 전담 기술영업관이 24시간 이내에 정밀 견적서를 회신해 드립니다.\n\n긴급 상담은 **1588-0000 (24시간)**으로 연락 주시면 즉시 연결됩니다.`;
  }

  if (q.includes('반도체') || q.includes('특수') || q.includes('6n') || q.includes('순도') || q.includes('purity')) {
    return `(주)MS가스는 반도체, 디스플레이, 2차전지 첨단 공정에 필수적인 **99.9999%(6N) 초고순도 특수가스**를 생산 및 공급하고 있습니다.\n\n주요 취급 가스: 초고순도 He, H₂, NF₃, CF₄, SiH₄, 전자급 N₂O\n· 용기 사양: SUS EP 버프연마 실린더, Y-실린더(470L), Class 10 클린룸 포장\n· 품질 보증: ICP-MS 미량금속 및 미량 불순물 제어 시험성적서 기본 동봉\n\n상세 스펙 열람은 웹사이트의 **[전체 가스 규격서 열람]**에서 확인하실 수 있습니다.`;
  }

  if (q.includes('msds') || q.includes('물질안전') || q.includes('안전') || q.includes('위험')) {
    return `공급되는 모든 고압가스 및 특수가스의 법정 **MSDS(물질안전보건자료)**는 당사 웹사이트 내 **[MSDS 자료실]**에서 CAS 번호나 화학식(O₂, N₂, Ar, NH₃ 등)으로 실시간 검색 및 PDF 다운로드가 가능합니다.\n\n산업안전보건법 제110조 및 화학물질관리법에 따른 GHS 16개 항목이 모두 완비되어 있습니다.\n\n비상 상황 발생 시 **24시간 안전상황실 1588-0000**으로 즉시 연락해 주시기 바랍니다.`;
  }

  if (q.includes('영업소') || q.includes('지점') || q.includes('위치') || q.includes('오시는') || q.includes('주소')) {
    return `(주)MS가스는 부산 본사 및 중앙물류기지를 비롯하여 **전국 17개 물류 영업소와 충전 기지**를 운영하고 있습니다.\n\n· 영남권: 부산 사상 본사, 김해 물류센터, 울산 암모니아 실증기지, 창원, 포항\n· 수도권: 화성 첨단기술센터, 평택 반도체 서브허브, 인천 서해안 물류기지\n· 충청권: 천안 디스플레이 영업소, 서산 대산석유화학, 청주 오송 바이오\n· 호남권: 여수 국가산단, 광주 호남총괄본부, 군산 새만금 복합물류\n\n상단 또는 푸터의 **[오시는 길]** 메뉴에서 각 지점별 상세 주소, 연락처 및 보유 설비를 확인하실 수 있습니다.`;
  }

  if (q.includes('암모니아') || q.includes('esg') || q.includes('친환경') || q.includes('탄소')) {
    return `(주)MS가스는 무탄소 청정 에너지 시대를 선도하기 위해 국가 규제자유특구 실증 사업에 주도적으로 참여하고 있습니다.\n\n1. **울산 규제자유특구 암모니아 TTS(Truck-to-Ship) 벙커링 인프라 구축**: 특수 탱크로리-선박 간 친환경 연료 이송 배관 및 안전 방호 스크러버 설비 실증\n2. **경남 선박용 암모니아 혼소 추진 시스템 실증**: 온실가스 최대 70% 감축 기술 적용\n\n지속 가능한 ESG 미래 에너지 공급망 구축에 앞장서고 있습니다.`;
  }

  return `안녕하십니까! (주)MS가스 AI 가스 전문 어드바이저입니다.\n\n1974년 창립 이래 반세기 동안 대한민국 산업을 선도해 온 MS가스는 산업용 일반고압가스, 반도체용 6N 초고순도 특수가스, 식약처 GMP 의료용 가스, 정밀 표준가스 및 초저온 플랜트 시공까지 토탈 가스 솔루션을 제공합니다.\n\n궁금하신 품목의 스펙, 견적 신청, MSDS 자료, 전국 17개 지점 위치 등에 대해 무엇이든 편하게 질문해 주십시오.\n\n긴급 안전 상황실: 1588-0000 (24시간 무휴)`;
}
