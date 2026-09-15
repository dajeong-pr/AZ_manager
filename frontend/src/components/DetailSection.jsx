import React from 'react';
import { COURIER_OPTIONS } from '../constants/campaign';

export default function DetailSection({ formData, activeChecks, onChange, onToggleCheck, getDimClass }) {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <h2 className="text-sm font-bold text-cyan-400 flex items-center gap-2">
          <span>3.</span> 세부 2: 옵션 · 수량 및 배송 설정
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div className={"space-y-1 " + getDimClass("productOption")}>
          <div className="flex justify-between items-center">
            <label className="text-xs text-slate-300">상품 선택 옵션</label>
            <input
              type="checkbox"
              checked={activeChecks.productOption}
              onChange={() => onToggleCheck('productOption')}
            />
          </div>
          <input
            name="productOption"
            value={formData.productOption}
            onChange={onChange}
            placeholder="예: 화이트 / 기본형"
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className={"space-y-1 " + getDimClass("totalQuantity")}>
          <div className="flex justify-between items-center">
            <label className="text-xs text-slate-300">총 체험 수량</label>
            <input
              type="checkbox"
              checked={activeChecks.totalQuantity}
              onChange={() => onToggleCheck('totalQuantity')}
            />
          </div>
          <input
            name="totalQuantity"
            value={formData.totalQuantity}
            onChange={onChange}
            placeholder="예: 60개"
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className={"space-y-1 " + getDimClass("dailyQuantity")}>
          <div className="flex justify-between items-center">
            <label className="text-xs text-slate-300">하루 체험 수량</label>
            <input
              type="checkbox"
              checked={activeChecks.dailyQuantity}
              onChange={() => onToggleCheck('dailyQuantity')}
            />
          </div>
          <input
            name="dailyQuantity"
            value={formData.dailyQuantity}
            onChange={onChange}
            placeholder="예: 10개"
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className={"space-y-1 " + getDimClass("courier")}>
          <div className="flex justify-between items-center">
            <label className="text-xs text-slate-300">해당 스토어 출고 택배사</label>
            <input
              type="checkbox"
              checked={activeChecks.courier}
              onChange={() => onToggleCheck('courier')}
            />
          </div>
          <select
            name="courier"
            value={formData.courier}
            onChange={onChange}
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {COURIER_OPTIONS.map((c) => (
              <option key={c} value={c}>
                {c === "__custom__" ? "✏️ 직접 입력" : c}
              </option>
            ))}
          </select>
          {formData.courier === "__custom__" && (
            <input
              type="text"
              name="customCourier"
              value={formData.customCourier}
              onChange={onChange}
              placeholder="택배사명 직접 입력"
              className="w-full mt-2 bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs outline-none focus:ring-2 focus:ring-emerald-500"
            />
          )}
        </div>
      </div>
    </div>
  );
}