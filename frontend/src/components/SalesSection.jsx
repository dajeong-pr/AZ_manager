import React from 'react';
import { SALES_REPRESENTATIVES } from '../constants/campaign';

export default function SalesSection({ formData, activeChecks, onChange, onToggleCheck }) {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-sm space-y-3">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <h2 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
          <span>1.</span> 영업 담당자 정보
        </h2>
        <label className="text-xs text-slate-400 flex items-center gap-1.5 cursor-pointer select-none">
          <input
            type="checkbox"
            checked={activeChecks.sales}
            onChange={() => onToggleCheck('sales')}
            className="rounded bg-slate-950 border-slate-700 text-emerald-500"
          />
          출력 포함
        </label>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        <div>
          <label className="text-xs text-slate-300 block mb-1">
            담당자 선택 <span className="text-rose-400">*</span>
          </label>
          <select
            name="salesRep"
            value={formData.salesRep}
            onChange={onChange}
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-slate-100 outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {SALES_REPRESENTATIVES.map((r) => (
              <option key={r} value={r}>
                {r === "__custom__" ? "✏️ 직접 입력" : r}
              </option>
            ))}
          </select>
        </div>
        {formData.salesRep === "__custom__" && (
          <div>
            <label className="text-xs text-slate-300 block mb-1">
              이름 직접 입력 <span className="text-rose-400">*</span>
            </label>
            <input
              type="text"
              name="customSalesRep"
              value={formData.customSalesRep}
              onChange={onChange}
              placeholder="이름 입력"
              className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs text-slate-100 outline-none focus:ring-2 focus:ring-emerald-500"
            />
          </div>
        )}
      </div>
    </div>
  );
}