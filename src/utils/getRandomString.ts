/**
 * ランダムな文字列を返します。一意にしたいid属性やname属性に使ってください
 */
export const getRandomString = () => Math.random().toString(32).substring(2);
