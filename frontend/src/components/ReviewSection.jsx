import React from 'react';
import { COURIER_OPTIONS } from '../constants/campaign';

export default function ReviewSection({ formData, activeChecks, onChange, onToggleCheck, getDimClass }) {
  return (
    <div className="bg-slate-900/80 border border-slate-800 rounded-2xl p-5 shadow-sm space-y-4">
      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
        <h2 className="text-sm font-bold text-cyan-400 flex items-center gap-2">
          <span>3.</span> 세부 3 : 리뷰 옵션 설정
        </h2>
      </div>
{/* 리뷰 옵션 */}
        <div className={"space-y-1 " + getDimClass("reviewOption")}>
          <div className="flex justify-between items-center">
            <label className="text-xs text-slate-300">원고나 사진 제공/자율</label>
            <input
              type="checkbox"
              checked={activeChecks.reviewOption}
              onChange={() => onToggleCheck('reviewOption')}
            />
          </div>
          <select
            name="reviewOption"
            value={formData.reviewOption}
            onChange={onChange}
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs outline-none focus:ring-2 focus:ring-emerald-500"
          >
            {/* <option value=""></option> */}
            <option value="제공">제공</option>
            <option value="자율">자율</option>
          </select>
            <input
              type="text"
              name="customReviewOption"
              onChange={onChange}
              placeholder="(가이드제공, 기타 전달 사항 등)"
              className="w-full mt-2 bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs outline-none focus:ring-2 focus:ring-emerald-500"
            />
        </div>
        <div className={"space-y-1 " + getDimClass("photoReviewCount")}>
          <div className="flex justify-between items-center">
            <label className="text-xs text-slate-300">포토</label>
            <input
              type="checkbox"
              checked={activeChecks.photoReviewCount}
              onChange={() => onToggleCheck('photoReviewCount')}
            />
          </div>
          <input
            name="photoReviewCount"
            value={formData.photoReviewCount}
            onChange={onChange}
            placeholder="포토 리뷰 수량"
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div className={"space-y-1 " + getDimClass("textReviewCount")}>
          <div className="flex justify-between items-center">
            <label className="text-xs text-slate-300">텍스트</label>
            <input
              type="checkbox"
              checked={activeChecks.textReviewCount}
              onChange={() => onToggleCheck('textReviewCount')}
            />
          </div>
          <input
            name="textReviewCount"
            value={formData.textReviewCount}
            onChange={onChange}
            placeholder="텍스트 리뷰 수량"
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
        <div className={"space-y-1 " + getDimClass("ratingCount")}>
          <div className="flex justify-between items-center">
            <label className="text-xs text-slate-300">별점</label>
            <input
              type="checkbox"
              checked={activeChecks.ratingCount}
              onChange={() => onToggleCheck('ratingCount')}
            />
          </div>
          <input
            name="ratingCount"
            value={formData.ratingCount}
            onChange={onChange}
            placeholder="별점 리뷰 수량"
            className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-xs outline-none focus:ring-2 focus:ring-emerald-500"
          />
        </div>
    </div>
  );
}