import React from 'react';

export default function OutputConsole({ formattedOutput, onCopy }) {
  return (
     <div className="lg:col-span-5">
      <div
        className="lg:fixed lg:top-28 lg:w-[min(41.6667vw,32rem)] bg-slate-900/90 backdrop-blur-md border border-slate-800 rounded-2xl shadow-xl overflow-hidden z-30"
        style={{ right: 'max(1.5rem, calc((100vw - 80rem) / 2))' }}
      >
        
        {/* 헤더 */}
        <div className="p-4 border-b border-slate-800 bg-slate-950/60 flex justify-between items-center">
          <h2 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse" />
            표준 규격 실시간 출력
          </h2>
          <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full border border-slate-700">
            16개 항목
          </span>
        </div>

        {/* 본문 출력 영역 (스크롤시 상단에 붙었을 때 너무 길지 않게 max-h 조정) */}
        <div className="p-4 bg-slate-950/90 min-h-[320px] max-h-[60vh] overflow-y-auto font-mono text-xs text-emerald-400 leading-relaxed whitespace-pre-wrap select-all custom-scrollbar">
          {formattedOutput}
        </div>

        {/* 하단 복사 버튼 */}
        <div className="p-4 border-t border-slate-800 bg-slate-900">
          <button
            type="button"
            onClick={onCopy}
            className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-lg transition active:scale-95 flex items-center justify-center gap-2"
          >
            📋 표준 규격 텍스트 복사하기
          </button>
        </div>

      </div>
    </div>
  );
}