/**
 * Intl.Segmenterが使えるかどうか？
 * 2023年5月現在、Firefox以外のモダンブラウザで使用可能
 * @see https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Global_Objects/Intl/Segmenter
 */
export const canUseIntlSegmenter = () => window.Intl.Segmenter !== undefined;
