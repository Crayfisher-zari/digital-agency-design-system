/**
 * 指定した期間の和暦（元号）と西暦の配列を生成します
 * @param startYear 開始する西暦年
 * @param yearCount 生成する年数
 * @returns {label: string, value: number}[] labelに和暦、valueに西暦を含むオブジェクトの配列
 */
export const getEraYearList = (startYear: number, yearCount: number) => {
  const yearList = [];
  
  for (let i = 0; i < yearCount; i++) {
    const year = startYear - i;
    const eraLabel = convertToEraLabel(year);
    yearList.push({
      label: eraLabel,
      value: year
    });
  }
  
  return yearList;
};

/**
 * 西暦を和暦（元号）に変換します
 * @param year 西暦年
 * @returns 和暦の文字列（例: "令和7年（2025年）"）
 */
const convertToEraLabel = (year: number): string => {
  const date = new Date(year, 0, 1);
  const eraYear = date.toLocaleString('ja-JP-u-ca-japanese', { 
    era: 'long',
    year: 'numeric'
  });
  return `${eraYear}（${year}年）`;
};