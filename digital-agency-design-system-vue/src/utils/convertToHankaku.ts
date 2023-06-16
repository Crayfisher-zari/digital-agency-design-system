/**
 * 全角数字を半角数字に変換します。全角数字以外はそのまま返します
 */
export const convertToHankaku = (str: string) => {
  const regex = /[０-９]/g;
  if (!str.match(regex)) {
    return str;
  }
  return str.replace(regex, (m) => {
    return String.fromCharCode(m.charCodeAt(0) - 0xfee0);
  });
};
