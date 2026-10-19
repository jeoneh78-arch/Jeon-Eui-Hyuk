import React, { useState } from 'react';
import { NoticeItem } from '../../data/mockData';

interface NoticeDetailModalProps {
  notice: NoticeItem | null;
  onClose: () => void;
}

export const NoticeDetailModal: React.FC<NoticeDetailModalProps> = ({
  notice,
  onClose,
}) => {
  const [downloadMsg, setDownloadMsg] = useState<string | null>(null);

  if (!notice) return null;

  const handleDownload = (filename: string) => {
    setDownloadMsg(filename);
    setTimeout(() => setDownloadMsg(null), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-3xl bg-white rounded-2xl shadow-2xl border border-[#D5E2EA] overflow-hidden flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 bg-[#003d5d] text-white flex items-center justify-between shrink-0">
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-[#E0F4FC] text-[#003d5d] text-[12px] font-bold">
              {notice.category}
            </span>
            <span className="text-[13px] text-[#81cfff] font-medium">{notice.date}</span>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors cursor-pointer"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        </div>

        {/* Download notice toast */}
        {downloadMsg && (
          <div className="bg-emerald-600 text-white px-6 py-2 text-[12px] flex items-center justify-between shrink-0 animate-in slide-in-from-top-1">
            <span>첨부파일 <strong>[{downloadMsg}]</strong> 다운로드가 완료되었습니다.</span>
            <button onClick={() => setDownloadMsg(null)}>
              <span className="material-symbols-outlined text-[16px]">close</span>
            </button>
          </div>
        )}

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-6 flex-1">
          <div>
            <h3 className="text-[20px] sm:text-[22px] font-bold text-[#071d2c] leading-snug">
              {notice.title}
            </h3>
            <div className="flex items-center gap-4 text-[12px] text-[#41474e] mt-2 pt-2 border-t border-[#EBF1F5]">
              <span>작성부서: <strong className="text-[#071d2c]">{notice.department}</strong></span>
              <span>담당: <strong className="text-[#071d2c]">{notice.author}</strong></span>
              <span>등록일자: <strong>{notice.date}</strong></span>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-[#F4F8FA] border border-[#D5E2EA] text-[14px] text-[#071d2c] leading-relaxed whitespace-pre-line font-normal">
            {notice.content}
          </div>

          {/* Attachments */}
          {notice.attachments && notice.attachments.length > 0 && (
            <div className="space-y-2.5">
              <h4 className="text-[13px] font-bold text-[#071d2c] flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[18px] text-[#003d5d]">attach_file</span>
                <span>공식 입찰 및 공고 첨부파일</span>
              </h4>
              <div className="space-y-2">
                {notice.attachments.map((file, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-lg border border-[#D5E2EA] bg-white flex items-center justify-between hover:bg-[#F4F8FA] transition-colors"
                  >
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[20px] text-[#005580]">description</span>
                      <div>
                        <p className="text-[13px] font-medium text-[#071d2c]">{file.name}</p>
                        <span className="text-[11px] text-[#41474e]">{file.size}</span>
                      </div>
                    </div>
                    <button
                      onClick={() => handleDownload(file.name)}
                      className="px-3 py-1.5 rounded-lg bg-[#003d5d] hover:bg-[#005580] text-white text-[12px] font-semibold flex items-center gap-1 transition-all cursor-pointer active:scale-98"
                    >
                      <span className="material-symbols-outlined text-[14px]">download</span>
                      <span>내려받기</span>
                    </button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="px-6 py-3.5 bg-[#F4F8FA] border-t border-[#D5E2EA] flex items-center justify-between text-[12px] text-[#41474e] shrink-0">
          <span>입찰 및 제안 관련 문의: (주)MS가스 대표번호 051-000-0000</span>
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
