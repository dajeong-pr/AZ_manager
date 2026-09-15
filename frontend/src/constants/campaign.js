// 담당자 마스터 목록 (지정 7인 + 직접 입력)
export const SALES_REPRESENTATIVES = [
  "백천하", "김영래", "변지원", "오진호", "나광수", "옥찬혁", "윤상현", "__custom__"
];

// 국내 주요 택배사 목록 (CJ대한통운 기본)
export const COURIER_OPTIONS = [
  "CJ대한통운", "롯데택배", "로젠택배", "한진택배", "우체국택배",
  "경동택배", "대신택배", "일양로지스", "합동택배", "편의점택배 (GS25/CU)", "__custom__"
];

// 기본 체크 13개 필드 상태 (지정 12개 + 영업자)
export const DEFAULT_ACTIVE_CHECKS = {
  sales: true,
  companyName: true,
  platform: false,
  productLink: true,
  sameDayDelivery: true,
  sameDayCutoff: false,
  startDate: true,
  progressTime: false,
  trafficDetail: true,
  productOption: true,
  optionPrice: false,
  totalQuantity: true,
  dailyQuantity: true,
  campaignType: false,
  courier: true,
  use3PL: true,
  weekendSupport: true,
  photoReviewCount: false,
  textReviewCount: false,
  ratingCount: false,
  reviewRatio: false
};

// 폼 초기 상태
export const INITIAL_FORM_STATE = {
  salesRep: "백천하",
  customSalesRep: "",
  companyName: "",
  platform: "스마트스토어",
  productLink: "",
  sameDayDelivery: "",
  sameDayCutoff: "",
  startDate: "",
  progressTime: "",
  progressTimeOption: "이후",
  trafficType: "키워드",
  trafficDetail: "",
  productOption: "",
  optionPrice: "",
  totalQuantity: "",
  dailyQuantity: "",
  campaignType: "실배송",
  courier: "CJ대한통운",
  customCourier: "",
  use3PL: "O",
  weekendSupport: "X",
  photoReviewCount: "",
  photoReviewOption: "제공",
  textReviewCount: "",
  textReviewOption: "자율",
  ratingCount: "",
  reviewRatio: ""
};