import React from 'react';

export default function Header({
  onFilterRequired,
  onToggleAll,
  allChecked,
  onReset,
  onSaveHistory,
  onCopy
}) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-3 bg-slate-900/90 p-4 rounded-2xl border border-slate-800 shadow-lg mb-6">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-600 flex items-center justify-center font-bold text-xl shadow-lg shadow-emerald-500/20">
          ⚡
        </div>
        <div>
          <h1 className="text-lg font-bold tracking-tight text-white flex items-center gap-2">
            가구매 캠페인 매니저
            <span className="text-[10px] bg-emerald-950 text-emerald-300 border border-emerald-800 px-2 py-0.5 rounded-full font-semibold uppercase">
              React Modular
            </span>
          </h1>
          <p className="text-xs text-slate-400">실시간 표준 규격 생성 & DB 접수 관리 대시보드</p>
        </div>
      </div>

      <div className="flex items-center gap-2 flex-wrap">
        <button
          type="button"
          onClick={onFilterRequired}
          className="px-3 py-1.5 rounded-lg bg-amber-950/40 text-amber-300 border border-amber-800/60 text-xs font-semibold hover:bg-amber-900/50 transition active:scale-95"
        >
          ⭐ 필수만 체크
        </button>
        <button
          type="button"
          onClick={onToggleAll}
          className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 border border-slate-700 text-xs font-semibold hover:bg-slate-700 transition active:scale-95"
        >
          ☑️ {allChecked ? "전체 해제" : "전체 선택"}
        </button>
        <button
          type="button"
          onClick={onReset}
          className="px-3 py-1.5 rounded-lg bg-slate-800/80 text-slate-300 border border-slate-700 text-xs font-semibold hover:bg-rose-950/50 hover:text-rose-300 transition active:scale-95"
        >
          🧹 전체 비우기
        </button>
        <button
          type="button"
          onClick={onSaveHistory}
          className="px-3 py-1.5 rounded-lg bg-indigo-600 text-white font-bold text-xs shadow hover:bg-indigo-500 transition active:scale-95"
        >
          💾 내역 저장
        </button>
        <button
          type="button"
          onClick={onCopy}
          className="px-3.5 py-1.5 rounded-lg bg-emerald-600 text-white font-bold text-xs shadow hover:bg-emerald-500 transition active:scale-95"
        >
          📋 결과 복사
        </button>
      </div>
    </header>
  );
}