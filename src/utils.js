export const EXCLIDEBLOCK = 'imageBlock';

/**
 * Find the first successful validation object 找到第1个满足条件的block对象
 *
 * @param {IterableIterator} iterator selectedBlocks 选择区域可迭代对象
 * @param {() => boolean} validateFn function to check block is valid 检查block是否符合的函数
 * @param {string | string[]} excludeBlock excluded block name(s)  排除的block name
 * @return {null|*} 返回第1个区块
 */
export function findFirst(iterator, validateFn, excludeBlock) {
  const item = iterator.next();

  if (item.done) {
    return null;
  }

  const value = item.value;
  if (excludeBlock && (typeof excludeBlock === 'string' && value.name === excludeBlock || Array.isArray(excludeBlock) && excludeBlock.includes(value.name))) {
    return findFirst(iterator, validateFn, excludeBlock);
  }
  if (validateFn(value)) {
    return value;
  }

  return findFirst(iterator, validateFn);
}

/**
 * Find the positions (interval) of a text/word in a string
 *
 * @param {string} word target word 要查找的单词/文本
 * @param {string} text target string text 搜索范围文本
 * @param {boolean} caseSensitive caseSensitive? 大小写敏感?
 * @return {number[]} array of indexs of find word in the string 在字符串中找到对应的index的数组
 */
export function findIndicesOf(word, text, caseSensitive) {
  const searchStrLen = word.length;
  if (searchStrLen === 0) {
    return [];
  }

  let startIndex = 0;
  let index;
  const indices = [];
  if (!caseSensitive) {
    text = text.toLowerCase();
    word = word.toLowerCase();
  }
  while ((index = text.indexOf(word, startIndex)) > -1) {
    indices.push(index);
    startIndex = index + searchStrLen;
  }
  return indices;
}
