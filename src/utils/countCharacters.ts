import { canUseIntlSegmenter } from "./canUseIntlSegmenter";

/**
 * 文字数を返します
 */
export const countCharacters = (text: string) => {
  // Intl.Segmenterが使える場合はそれを利用。正確
  if (canUseIntlSegmenter()) {
    const segmenter = new Intl.Segmenter("ja", { granularity: "grapheme" });
    const segments = segmenter.segment(text);
    return [...segments].length;
  } else {
    // Intl.Segmenterが使えない場合はスプレッド演算子+lengthでカウント（主にFirefox）。ただし絵文字を使った場合に不正確になる
    // @see https://qiita.com/suin/items/3da4fb016728c024eacaにて詳説
    return [...text].length;
  }
};
