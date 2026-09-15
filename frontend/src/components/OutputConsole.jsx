import React from 'react';

export default function OutputConsole({ formattedOutput, onCopy }) {
  const lineCount = formattedOutput ? formattedOutput.split("\n").length : 0;

  return (
    <div className="bg-slate-900/90 border border-slate-800 rounded-2xl shadow-xl overflow-hidden sticky top-6">
      <div className="p-4 border-b border-slate-800 bg-slate-950/60 flex justify-between items-center">
        <h2 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
          표준 규격 실시간 출력
        </h2>
        <span className="text-[10px] font-mono text-slate-400 bg-slate-800 px-2 py-0.5 rounded-full border border-slate-700">
          {lineCount}개 항목
        </span>
      </div>
      <div className="p-4 bg-slate-950/90 min-h-[380px] max-h-[480px] overflow-y-auto font-mono text-xs text-emerald-400 leading-relaxed whitespace-pre-wrap select-all">
        {formattedOutput || "선택된 출력 항목이 없습니다."}
      </div>
      <div className="p-4 border-t border-slate-800 bg-slate-900">
        <button
          type="button"
          onClick={onCopy}
          className="w-full py-3 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-bold text-xs shadow-lg transition active:scale-95"
        >
          📋 표준 규격 텍스트 복사하기
        </button>
      </div>
    </div>
  );
}