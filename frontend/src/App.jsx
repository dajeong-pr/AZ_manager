import React, { useState, useMemo } from 'react';
import { DEFAULT_ACTIVE_CHECKS, INITIAL_FORM_STATE } from './constants/campaign';
import { formatDateMMDD, formatTimeHHMM } from './utils/formatters';

import Header from './components/Header';
import SalesSection from './components/SalesSection';
import BasicSection from './components/BasicSection';
import DeliverySection from './components/DeliverySection';
import ReviewSection from './components/ReviewSection';
import OutputConsole from './components/OutputConsole';
import HistoryTable from './components/HistoryTable';

export default function App() {
  const [formData, setFormData] = useState(INITIAL_FORM_STATE);
  const [activeChecks, setActiveChecks] = useState(DEFAULT_ACTIVE_CHECKS);
  const [campaigns, setCampaigns] = useState([]);
  const [toast, setToast] = useState(null);
  const [allChecked, setAllChecked] = useState(false);

  const showToast = (msg, icon = "ℹ️") => {
    setToast({ msg, icon });
    setTimeout(() => setToast(null), 2500);
  };

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const toggleCheck = (key) => {
    setActiveChecks((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  // 실시간 규격 텍스트 생성
  const formattedOutput = useMemo(() => {
    const lines = [];
    if (activeChecks.sales) {
      const name = formData.salesRep === "__custom__" ? formData.customSalesRep : formData.salesRep;
      lines.push("▶ 영업자 : " + (name || "").trim());
    }
    if (activeChecks.companyName) lines.push("▶ 업체명 : " + (formData.companyName || "").trim());
    if (activeChecks.platform) lines.push("▶ 플랫폼 : " + (formData.platform || "").trim());
    if (activeChecks.productLink) lines.push("▶ 상품링크 : " + (formData.productLink || "").trim());
    if (activeChecks.sameDayDelivery) lines.push("▶ 당일발송(오늘출발) 제품인가요? : " + (formData.sameDayDelivery || "").trim());
    if (activeChecks.sameDayCutoff) lines.push("▶ 당일발송 마감시간 : " + (formData.sameDayCutoff ? formatTimeHHMM(formData.sameDayCutoff, "").trim() : ""));
    if (activeChecks.startDate) lines.push("▶ 시작일 : " + formatDateMMDD(formData.startDate));
    if (activeChecks.progressTime) lines.push("▶ 진행 시간 : " + formatTimeHHMM(formData.progressTime, formData.progressTimeOption));
    if (activeChecks.trafficDetail) lines.push("▶ 유입방식 (링크 or 키워드 기재) : " + (formData.trafficDetail || "").trim());
    if (activeChecks.productOption) lines.push("▶ 상품 선택 옵션 : " + (formData.productOption || "").trim());
    if (activeChecks.totalQuantity) lines.push("▶ 총 체험 수량(최소 5개) : " + (formData.totalQuantity || "").trim());
    if (activeChecks.dailyQuantity) lines.push("▶ 하루 체험 수량 : " + (formData.dailyQuantity || "").trim());
    if (activeChecks.courier) {
      const c = formData.courier === "__custom__" ? formData.customCourier : formData.courier;
      lines.push("▶ 해당 스토어 출고 택배사 : " + (c || "").trim());
    }
    if (activeChecks.use3PL) lines.push("▶ 배송대행 시스템(3PL) 사용하실지 : " + (formData.use3PL || "").trim());
    if (activeChecks.weekendSupport) lines.push("▶ 주말 대행 여부 : " + (formData.weekendSupport || "").trim());
    if (activeChecks.reviewOption){
      console.log("reviewOption: ", formData.reviewOption, "customReviewOption: ", formData.customReviewOption)
      
      const c = (formData.reviewOption || "").trim()+" "+(formData.customReviewOption || "").trim()
      lines.push("▶ 원고나 사진 전달 주실지 : " + c.trim());

    }
    if (activeChecks.textReviewCount) lines.push("▶ 텍스트 리뷰 수량 : " + (formData.textReviewCount || "").trim());
    if (activeChecks.photoReviewCount) lines.push("▶ 포토 리뷰 수량 : " + (formData.photoReviewCount || "").trim());
    if (activeChecks.ratingCount) lines.push("▶ 별점 리뷰 수량 : " + (formData.ratingCount || "").trim());

    return lines.join("\n");
  }, [formData, activeChecks]);

  // 클립보드 복사
  const handleCopy = () => {
    const rep = formData.salesRep === "__custom__" ? formData.customSalesRep : formData.salesRep;
    if (activeChecks.sales && !rep) return showToast("영업자명을 입력해주세요!", "⚠️");
    if (activeChecks.productLink && !formData.productLink) return showToast("상품링크를 입력해주세요!", "⚠️");

    const ta = document.createElement('textarea');
    ta.value = formattedOutput;
    document.body.appendChild(ta);
    ta.select();
    document.execCommand('copy');
    document.body.removeChild(ta);
    showToast("표준 규격 텍스트가 복사되었습니다!", "📋");
  };

  // 내역 저장/불러오기/삭제
  const saveHistory = () => {
    const rep = formData.salesRep === "__custom__" ? formData.customSalesRep : formData.salesRep;
    if (activeChecks.sales && !rep) return showToast("영업자명을 입력해주세요!", "⚠️");
    if (activeChecks.productLink && !formData.productLink) return showToast("상품링크를 입력해주세요!", "⚠️");

    const newEntry = {
      id: String(Date.now()).slice(-4),
      createdAt: new Date().toISOString(),
      rep: rep || "-",
      company: formData.companyName || "(미입력)",
      link: formData.productLink || "-",
      totalQty: formData.totalQuantity || "-",
      savedForm: { ...formData },
      savedChecks: { ...activeChecks }
    };
    setCampaigns((prev) => [newEntry, ...prev]);
    showToast("접수 내역이 테이블에 저장되었습니다!", "💾");
  };

  const loadHistory = (entry) => {
    if (entry.savedForm) setFormData(entry.savedForm);
    if (entry.savedChecks) setActiveChecks(entry.savedChecks);
    showToast("#" + entry.id + " 건을 폼으로 불러왔습니다!", "📥");
  };

  const deleteHistory = (id) => {
    setCampaigns((prev) => prev.filter((item) => item.id !== id));
    showToast("내역이 삭제되었습니다.", "🗑️");
  };

  const resetForm = () => {
    setFormData(INITIAL_FORM_STATE);
    setActiveChecks(DEFAULT_ACTIVE_CHECKS);
    showToast("전체 입력값이 초기화되었습니다.", "🧹");
  };

  const toggleAll = () => {
    const nextState = !allChecked;
    setAllChecked(nextState);
    const next = {};
    Object.keys(activeChecks).forEach((k) => (next[k] = nextState));
    setActiveChecks(next);
    showToast(nextState ? "전체 선택 완료" : "전체 해제 완료", "☑️");
  };

  const filterRequired = () => {
    const next = {};
    Object.keys(activeChecks).forEach((k) => (next[k] = k === 'sales' || k === 'productLink'));
    setActiveChecks(next);
    setAllChecked(false);
    showToast("필수(영업자, 링크)만 선택했습니다.", "⭐");
  };

  const getDimClass = (key) => (!activeChecks[key] ? "opacity-40 brightness-75 transition-all" : "transition-all");

  return (
    <div className="bg-slate-950 text-slate-100 min-h-screen font-sans p-4 sm:p-6 selection:bg-emerald-500/30">
      <div className="max-w-7xl mx-auto">
        <Header
          allChecked={allChecked}
          onFilterRequired={filterRequired}
          onToggleAll={toggleAll}
          onReset={resetForm}
          onSaveHistory={saveHistory}
          onCopy={handleCopy}
        />
        <main className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          <div className="lg:col-span-7 space-y-4">
            <SalesSection formData={formData} activeChecks={activeChecks} onChange={handleFormChange} onToggleCheck={toggleCheck} />
            <BasicSection formData={formData} activeChecks={activeChecks} onChange={handleFormChange} onToggleCheck={toggleCheck} getDimClass={getDimClass} />
            <DeliverySection formData={formData} activeChecks={activeChecks} onChange={handleFormChange} onToggleCheck={toggleCheck} getDimClass={getDimClass} />
            <ReviewSection formData={formData} activeChecks={activeChecks} onChange={handleFormChange} onToggleCheck={toggleCheck} getDimClass={getDimClass} />
          </div>
          <div className="lg:col-span-5">
            <OutputConsole formattedOutput={formattedOutput} onCopy={handleCopy} />
          </div>
        </main>
        <HistoryTable campaigns={campaigns} onLoad={loadHistory} onDelete={deleteHistory} />
      </div>
      {toast && (
        <div className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-4 py-3 rounded-xl bg-slate-900 border border-slate-700 text-slate-100 text-xs shadow-2xl">
          <span>{toast.icon}</span>
          <span>{toast.msg}</span>
        </div>
      )}
    </div>
  );
}