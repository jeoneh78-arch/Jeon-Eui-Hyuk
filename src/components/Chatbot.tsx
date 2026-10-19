import React, { useState, useRef, useEffect } from 'react';

interface ChatbotProps {
  onOpenInquiry: (defaultGas?: string) => void;
  onOpenMsds: () => void;
  onOpenBranches: () => void;
  onOpenCatalog: () => void;
}

interface Message {
  id: string;
  role: 'user' | 'model';
  text: string;
  timestamp: string;
}

const QUICK_PROMPTS = [
  '반도체 6N 초고순도 가스 스펙',
  '초저온 액화질소(LN₂) 벌크 공급',
  'MSDS 물질안전보건자료 조회',
  '가스 플랜트 시공 & KGS 인허가',
  '전국 17개 영업소 위치 안내',
  '맞춤 가스 견적 신청 방법',
];

export const Chatbot: React.FC<ChatbotProps> = ({
  onOpenInquiry,
  onOpenMsds,
  onOpenBranches,
  onOpenCatalog,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hasUnread, setHasUnread] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome-1',
      role: 'model',
      text: `반갑습니다! **(주)MS가스 AI 가스 전문 어드바이저**입니다.\n\n1974년 창립 이래 50년간 축적된 정밀 가스 정제 기술과 전국 17개 물류 거점망을 기반으로, 고객사 현장에 최적화된 맞춤 가스 솔루션을 안내해 드립니다.\n\n궁금하신 가스 품목의 순도 스펙, 공급 형태(탱크로리, LGC, 실린더), MSDS 자료 또는 견적 문의를 편하게 말씀해 주세요.`,
      timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
    },
  ]);
  const [inputText, setInputText] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      setHasUnread(false);
      messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [isOpen, messages]);

  const handleSend = async (textToSend?: string) => {
    const query = (textToSend || inputText).trim();
    if (!query || isLoading) return;

    const userMsg: Message = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: query,
      timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
    };

    setMessages((prev) => [...prev, userMsg]);
    setInputText('');
    setIsLoading(true);

    try {
      const historyPayload = messages.map((m) => ({
        role: m.role,
        text: m.text,
      }));

      const res = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          history: historyPayload,
          message: query,
        }),
      });

      if (!res.ok) {
        throw new Error(`HTTP error! status: ${res.status}`);
      }

      const data = await res.json();
      const botReply = data.reply || '답변을 불러오지 못했습니다. 잠시 후 다시 시도해 주세요.';

      const modelMsg: Message = {
        id: `bot-${Date.now()}`,
        role: 'model',
        text: botReply,
        timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
      };

      setMessages((prev) => [...prev, modelMsg]);
      if (!isOpen) setHasUnread(true);
    } catch (err) {
      console.error('Chat error:', err);
      // Fallback response
      const fallbackMsg: Message = {
        id: `bot-fallback-${Date.now()}`,
        role: 'model',
        text: `죄송합니다. 현재 네트워크 통신이 원활하지 않아 로컬 지식베이스로 응답드립니다.\n\n가스 견적 및 기술 문의는 **온라인 문의** 폼을 통해 접수하시거나, 긴급 상황 시 **24시간 안전상황실(1588-0000)**로 전화 주시면 전문 엔지니어가 즉시 안내해 드립니다.`,
        timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
      };
      setMessages((prev) => [...prev, fallbackMsg]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  const renderFormattedText = (text: string) => {
    // Process markdown bold (**text**), line breaks, bullet points
    const lines = text.split('\n');
    return lines.map((line, lIdx) => {
      // Split bold parts
      const parts = line.split(/(\*\*.*?\*\*)/g);
      const renderedLine = parts.map((part, pIdx) => {
        if (part.startsWith('**') && part.endsWith('**')) {
          return (
            <strong key={pIdx} className="font-bold text-[#003d5d]">
              {part.slice(2, -2)}
            </strong>
          );
        }
        return part;
      });

      return (
        <span key={lIdx} className="block min-h-[1.2em]">
          {renderedLine}
        </span>
      );
    });
  };

  // Determine contextual action buttons based on message content
  const renderActionButtons = (text: string) => {
    const actions = [];

    if (text.includes('견적') || text.includes('온라인 문의') || text.includes('가격') || text.includes('발주')) {
      actions.push(
        <button
          key="inquiry"
          onClick={() => onOpenInquiry()}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#003d5d] text-white hover:bg-[#005580] text-[12px] font-bold shadow-sm transition-all cursor-pointer active:scale-95"
        >
          <span className="material-symbols-outlined text-[15px]">assignment</span>
          <span>온라인 견적 신청</span>
        </button>
      );
    }

    if (text.includes('MSDS') || text.includes('물질안전보건자료') || text.includes('유해성')) {
      actions.push(
        <button
          key="msds"
          onClick={onOpenMsds}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#E0F4FC] text-[#003d5d] hover:bg-[#d0e5f9] text-[12px] font-bold border border-[#81cfff] transition-all cursor-pointer active:scale-95"
        >
          <span className="material-symbols-outlined text-[15px]">description</span>
          <span>MSDS 자료실 열람</span>
        </button>
      );
    }

    if (text.includes('17개') || text.includes('지점') || text.includes('영업소') || text.includes('위치')) {
      actions.push(
        <button
          key="branches"
          onClick={onOpenBranches}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F4F8FA] text-[#071d2c] hover:bg-[#EBF1F5] text-[12px] font-bold border border-[#D5E2EA] transition-all cursor-pointer active:scale-95"
        >
          <span className="material-symbols-outlined text-[15px]">location_on</span>
          <span>전국 17개 거점망</span>
        </button>
      );
    }

    if (text.includes('규격서') || text.includes('스펙') || text.includes('순도') || text.includes('카탈로그')) {
      actions.push(
        <button
          key="catalog"
          onClick={onOpenCatalog}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-[#F4F8FA] text-[#071d2c] hover:bg-[#EBF1F5] text-[12px] font-bold border border-[#D5E2EA] transition-all cursor-pointer active:scale-95"
        >
          <span className="material-symbols-outlined text-[15px]">menu_book</span>
          <span>가스 규격서 전체 열람</span>
        </button>
      );
    }

    if (actions.length === 0) return null;

    return <div className="flex flex-wrap gap-2 pt-2">{actions}</div>;
  };

  return (
    <>
      {/* Floating Launcher Button */}
      <div className="fixed bottom-24 right-6 z-40">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-[#003d5d] text-white shadow-2xl hover:bg-[#005580] active:scale-95 transition-all cursor-pointer border border-white/20"
          title="MS가스 AI 가스 어드바이저 챗봇"
          aria-label="챗봇 열기"
        >
          <div className="relative">
            <span className="material-symbols-outlined text-[24px]">smart_toy</span>
            <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-white"></span>
          </div>
          <div className="text-left hidden sm:block">
            <span className="text-[11px] text-[#81cfff] font-bold block leading-none">24H 가스 상담</span>
            <span className="text-[13px] font-bold leading-tight">AI 어드바이저</span>
          </div>

          {hasUnread && (
            <span className="absolute -top-1 -left-1 flex h-4 w-4">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[9px] text-white font-bold items-center justify-center">
                !
              </span>
            </span>
          )}
        </button>
      </div>

      {/* Chatbot Window */}
      {isOpen && (
        <div className="fixed bottom-24 right-4 sm:right-6 z-50 w-[calc(100vw-2rem)] sm:w-[420px] max-h-[620px] h-[82vh] bg-white rounded-2xl shadow-2xl border border-[#D5E2EA] flex flex-col overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
          {/* Header */}
          <div className="px-5 py-4 bg-[#003d5d] text-white flex items-center justify-between shrink-0 shadow-sm">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-[#81cfff] border border-white/15">
                <span className="material-symbols-outlined text-[24px]">smart_toy</span>
              </div>
              <div>
                <div className="flex items-center gap-2">
                  <h3 className="text-[15px] font-bold tracking-tight">MS가스 AI 어드바이저</h3>
                  <span className="inline-flex items-center gap-1 px-2 py-0.2 rounded-full bg-emerald-500/20 text-emerald-300 text-[10px] font-semibold">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                    상담 가능
                  </span>
                </div>
                <p className="text-[11px] text-[#81cfff]/90">고압·특수·의료용 가스 스펙 & 견적 안내</p>
              </div>
            </div>

            <div className="flex items-center gap-1">
              <button
                onClick={() =>
                  setMessages([
                    {
                      id: `reset-${Date.now()}`,
                      role: 'model',
                      text: `새로운 대화가 시작되었습니다. 필요하신 가스 품목이나 기술 질문을 말씀해 주세요.`,
                      timestamp: new Date().toLocaleTimeString('ko-KR', { hour: '2-digit', minute: '2-digit' }),
                    },
                  ])
                }
                className="w-8 h-8 rounded-lg hover:bg-white/10 text-white/80 hover:text-white flex items-center justify-center transition-colors cursor-pointer"
                title="대화 초기화"
              >
                <span className="material-symbols-outlined text-[18px]">refresh</span>
              </button>
              <button
                onClick={() => setIsOpen(false)}
                className="w-8 h-8 rounded-lg hover:bg-white/10 text-white flex items-center justify-center transition-colors cursor-pointer"
                title="닫기"
              >
                <span className="material-symbols-outlined text-[20px]">close</span>
              </button>
            </div>
          </div>

          {/* Quick Prompts Bar */}
          <div className="px-4 py-2.5 bg-[#F4F8FA] border-b border-[#D5E2EA] overflow-x-auto whitespace-nowrap scrollbar-none flex gap-1.5 shrink-0">
            {QUICK_PROMPTS.map((prompt, idx) => (
              <button
                key={idx}
                onClick={() => handleSend(prompt)}
                className="inline-block px-3 py-1 rounded-full bg-white text-[#003d5d] text-[11px] font-semibold border border-[#D5E2EA] hover:bg-[#E0F4FC] hover:border-[#81cfff] transition-all cursor-pointer shrink-0 shadow-2xs"
              >
                {prompt}
              </button>
            ))}
          </div>

          {/* Message List */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-[#f8fbff]/50">
            {messages.map((msg) => (
              <div
                key={msg.id}
                className={`flex gap-2.5 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
              >
                {msg.role === 'model' && (
                  <div className="w-8 h-8 rounded-lg bg-[#003d5d] text-[#81cfff] flex items-center justify-center shrink-0 mt-0.5 shadow-xs">
                    <span className="material-symbols-outlined text-[18px]">smart_toy</span>
                  </div>
                )}

                <div
                  className={`max-w-[85%] rounded-2xl p-3.5 text-[13px] leading-relaxed shadow-sm ${
                    msg.role === 'user'
                      ? 'bg-[#003d5d] text-white rounded-tr-xs'
                      : 'bg-white text-[#071d2c] border border-[#D5E2EA] rounded-tl-xs space-y-2'
                  }`}
                >
                  <div className="whitespace-pre-wrap">{renderFormattedText(msg.text)}</div>
                  {msg.role === 'model' && renderActionButtons(msg.text)}
                  <span
                    className={`block text-[10px] mt-1 text-right ${
                      msg.role === 'user' ? 'text-white/60' : 'text-[#41474e]/60'
                    }`}
                  >
                    {msg.timestamp}
                  </span>
                </div>
              </div>
            ))}

            {isLoading && (
              <div className="flex gap-2.5 justify-start items-center">
                <div className="w-8 h-8 rounded-lg bg-[#003d5d] text-[#81cfff] flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-[18px]">smart_toy</span>
                </div>
                <div className="p-3.5 rounded-2xl bg-white border border-[#D5E2EA] text-[12px] text-[#41474e] flex items-center gap-2 shadow-sm">
                  <div className="flex gap-1 items-center">
                    <span className="w-2 h-2 rounded-full bg-[#005580] animate-bounce"></span>
                    <span className="w-2 h-2 rounded-full bg-[#005580] animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-2 h-2 rounded-full bg-[#005580] animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                  <span>MS가스 지식베이스 검색 중...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Area */}
          <div className="p-3.5 bg-white border-t border-[#D5E2EA] shrink-0">
            <div className="flex items-center gap-2">
              <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="가스 품목, 순도 스펙, 견적 문의 등을 입력하세요..."
                className="flex-1 h-10 px-3.5 rounded-xl border border-[#D5E2EA] text-[13px] focus:outline-none focus:border-[#003d5d] bg-[#F4F8FA] focus:bg-white transition-colors"
                disabled={isLoading}
              />
              <button
                onClick={() => handleSend()}
                disabled={!inputText.trim() || isLoading}
                className="w-10 h-10 rounded-xl bg-[#003d5d] hover:bg-[#005580] disabled:bg-gray-300 text-white flex items-center justify-center transition-all cursor-pointer shrink-0 shadow-sm disabled:cursor-not-allowed"
                title="전송"
              >
                <span className="material-symbols-outlined text-[20px]">send</span>
              </button>
            </div>
            <div className="flex items-center justify-between mt-2 px-1 text-[11px] text-[#41474e]/70">
              <span>긴급 안전상황실: <strong>1588-0000</strong></span>
              <span>(주)MS가스 전담 AI</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
