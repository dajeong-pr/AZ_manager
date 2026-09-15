import React from 'react';

export default function BasicSection({ formData, activeChecks, onChange, onToggleCheck, getDimClass }) {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <h2 className="text-sm font-bold text-teal-400 flex items-center gap-2">
          {/* <span>2.</span> 세부 1: 기본 및 유입 설정 */}
        </h2>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
        <div className={"space-y-1 " + getDimClass("companyName")}>
          <div className="flex justify-between items-center">
            <label className="text-xs text-slate-300">업체명</label>
            <input
              type="checkbox"
              checked={activeChecks.companyName}
              onChange={() => onToggleCheck('companyName')}
            />
          </div>
          <input
            name="companyName"
            value={formData.companyName}
            onChange={onChange}
            placeholder="예: ABC 커머스"
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className={"space-y-1 " + getDimClass("platform")}>
          <div className="flex justify-between items-center">
            <label className="text-xs text-slate-300">플랫폼</label>
            <input
              type="checkbox"
              checked={activeChecks.platform}
              onChange={() => onToggleCheck('platform')}
            />
          </div>
          <select
            name="platform"
            value={formData.platform}
            onChange={onChange}
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs outline-none focus:ring-2 focus:ring-emerald-500"
          >
            <option>스마트스토어</option>
            <option>쿠팡</option>
            <option>오늘의집</option>
            <option>자사몰</option>
            <option>지마켓/옥션</option>
            <option>11번가</option>
            <option>기타</option>
          </select>
        </div>

        <div className={"sm:col-span-2 space-y-1 " + getDimClass("productLink")}>
          <div className="flex justify-between items-center">
            <label className="text-xs text-slate-300">
              상품링크 <span className="text-rose-400">*</span>
            </label>
            <input
              type="checkbox"
              checked={activeChecks.productLink}
              onChange={() => onToggleCheck('productLink')}
            />
          </div>
          <input
            name="productLink"
            value={formData.productLink}
            onChange={onChange}
            placeholder="https://..."
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className={"space-y-1 " + getDimClass("sameDayDelivery")}>
          <div className="flex justify-between items-center">
            <label className="text-xs text-slate-300">당일발송(오늘출발) 제품인가요?</label>
            <input
              type="checkbox"
              checked={activeChecks.sameDayDelivery}
              onChange={() => onToggleCheck('sameDayDelivery')}
            />
          </div>
          <select
            name="sameDayDelivery"
            value={formData.sameDayDelivery}
            onChange={onChange}
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {/* <option value=""></option> */}
            <option value="X">X (당일발송 불가능 / 무관)</option>
            <option value="O">O (당일발송 가능)</option>
          </select>
        </div>

        <div className={"space-y-1 " + getDimClass("sameDayCutoff")}>
          <div className="flex justify-between items-center">
            <label className="text-xs text-slate-300">당일발송 마감시간</label>
            <input
              type="checkbox"
              checked={activeChecks.sameDayCutoff}
              onChange={() => onToggleCheck('sameDayCutoff')}
            />
          </div>
          <input
            name="sameDayCutoff"
            value={formData.sameDayCutoff}
            onChange={onChange}
            placeholder="예: 1400"
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className={"space-y-1 " + getDimClass("startDate")}>
          <div className="flex justify-between items-center">
            <label className="text-xs text-slate-300">시작일</label>
            <input
              type="checkbox"
              checked={activeChecks.startDate}
              onChange={() => onToggleCheck('startDate')}
            />
          </div>
          <input
            name="startDate"
            value={formData.startDate}
            onChange={onChange}
            placeholder="예: 0909"
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>

        <div className={"space-y-1 " + getDimClass("progressTime")}>
          <div className="flex justify-between items-center">
            <label className="text-xs text-slate-300">진행 시간</label>
            <input
              type="checkbox"
              checked={activeChecks.progressTime}
              onChange={() => onToggleCheck('progressTime')}
            />
          </div>
          <div className="flex gap-2">
            <input
              name="progressTime"
              value={formData.progressTime}
              onChange={onChange}
              placeholder="예: 1000"
              className="flex-1 bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs outline-none focus:ring-2 focus:ring-emerald-500"
            />
            <select
              name="progressTimeOption"
              value={formData.progressTimeOption}
              onChange={onChange}
              className="bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs outline-none focus:ring-2 focus:ring-emerald-500"
            >
              <option>이후</option>
              <option>이전</option>
            </select>
          </div>
        </div>

        <div className={"sm:col-span-2 space-y-1 " + getDimClass("trafficDetail")}>
          <div className="flex justify-between items-center">
            <label className="text-xs text-slate-300">유입방식 (상세 내용만 단독 출력)</label>
            <input
              type="checkbox"
              checked={activeChecks.trafficDetail}
              onChange={() => onToggleCheck('trafficDetail')}
            />
          </div>
          <input
            name="trafficDetail"
            value={formData.trafficDetail}
            onChange={onChange}
            placeholder="예: 무선 가습기, 미니 가습기 (키워드/링크 내용 입력)"
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
      </div>
    </div>
  );
}