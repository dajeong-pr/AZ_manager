import React from 'react';

export default function HistoryTable({ campaigns, onLoad, onDelete }) {
  return (
    <section className="mt-8 bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-lg">
      <h3 className="text-sm font-bold text-slate-100 mb-3 flex items-center gap-2">
        <span>🗄️</span> 캠페인 접수 DB 내역 ({campaigns.length}건)
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs">
          <thead className="bg-slate-950 text-slate-400 uppercase font-semibold border-b border-slate-800">
            <tr>
              <th className="p-2.5">ID</th>
              <th className="p-2.5">일시</th>
              <th className="p-2.5">담당자</th>
              <th className="p-2.5">업체명</th>
              <th className="p-2.5">상품링크</th>
              <th className="p-2.5">수량</th>
              <th className="p-2.5 text-right">관리</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-800/60 text-slate-300">
            {campaigns.length === 0 ? (
              <tr>
                <td colSpan={7} className="p-6 text-center text-slate-500">
                  아직 저장된 내역이 없습니다. 상단의 [💾 내역 저장] 버튼을 눌러보세요.
                </td>
              </tr>
            ) : (
              campaigns.map((c) => (
                <tr key={c.id} className="hover:bg-slate-800/30 transition">
                  <td className="p-2.5 text-slate-500 font-mono">#{c.id}</td>
                  <td className="p-2.5 text-slate-400">
                    {new Date(c.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                  </td>
                  <td className="p-2.5 text-emerald-400 font-semibold">{c.rep}</td>
                  <td className="p-2.5">{c.company}</td>
                  <td className="p-2.5 max-w-[200px] truncate text-slate-400">{c.link}</td>
                  <td className="p-2.5">{c.totalQty}</td>
                  <td className="p-2.5 text-right space-x-1.5">
                    <button
                      type="button"
                      onClick={() => onLoad(c)}
                      className="px-2 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-200 text-[11px] border border-slate-700 transition"
                    >
                      불러오기
                    </button>
                    <button
                      type="button"
                      onClick={() => onDelete(c.id)}
                      className="px-2 py-1 rounded bg-rose-950/40 hover:bg-rose-900/60 text-rose-300 text-[11px] border border-rose-800/50 transition"
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </section>
  );
}