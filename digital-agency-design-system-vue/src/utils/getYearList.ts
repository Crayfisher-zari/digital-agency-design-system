export const getYearList = () => {
  const yearList = [];
  const d = new Date();
  const thisYear = d.getFullYear();
  // NOTE: 2023年6月現在 日本・世界最高齢の方が1907年生まれ
  const OLDEST_YEAR = 1900;
  for (let i = thisYear; i >= OLDEST_YEAR; i--) {
    yearList.push(i);
  }
  return yearList;
};
