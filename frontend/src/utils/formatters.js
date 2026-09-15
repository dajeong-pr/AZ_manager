export function formatDateMMDD(val) {
  if (!val) return "";
  const cleaned = String(val).replace(/[^0-9]/g, "").trim();
  let m = 0;
  let d = 0;
  if (cleaned.length === 8) {
    m = parseInt(cleaned.substring(4, 6), 10);
    d = parseInt(cleaned.substring(6, 8), 10);
  } else if (cleaned.length === 6) {
    m = parseInt(cleaned.substring(2, 4), 10);
    d = parseInt(cleaned.substring(4, 6), 10);
  } else if (cleaned.length === 4) {
    m = parseInt(cleaned.substring(0, 2), 10);
    d = parseInt(cleaned.substring(2, 4), 10);
  } else if (cleaned.length === 3) {
    m = parseInt(cleaned.substring(0, 1), 10);
    d = parseInt(cleaned.substring(1, 3), 10);
  }
  if (m >= 1 && m <= 12 && d >= 1 && d <= 31) {
    return m + "월 " + d + "일";
  }
  return String(val).trim();
}

export function formatTimeHHMM(rawVal, optVal = "이후") {
  if (!rawVal) return "";
  const opt = optVal ? " " + optVal : "";
  const sanitized = String(rawVal).replace(/[^0-9:]/g, "").trim();
  let hour = null;
  let minute = null;

  if (sanitized.includes(":")) {
    const parts = sanitized.split(":");
    if (parts[0]) hour = parseInt(parts[0], 10);
    if (parts[1]) minute = parseInt(parts[1], 10);
  } else {
    const digits = sanitized.replace(/[^0-9]/g, "");
    if (digits.length === 4) {
      hour = parseInt(digits.substring(0, 2), 10);
      minute = parseInt(digits.substring(2, 4), 10);
    } else if (digits.length === 3) {
      hour = parseInt(digits.substring(0, 1), 10);
      minute = parseInt(digits.substring(1, 3), 10);
    } else if (digits.length >= 1 && digits.length <= 2) {
      hour = parseInt(digits, 10);
      minute = 0;
    }
  }

  if (hour !== null && !isNaN(hour)) {
    if (minute === null || minute === 0 || isNaN(minute)) {
      return hour + " 시" + opt;
    }
    return hour + " : " + String(minute).padStart(2, "0") + " 분" + opt;
  }
  return String(rawVal).trim() + opt;
}