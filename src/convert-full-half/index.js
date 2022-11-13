/**
 * @module convert-full-half/index
 */

import { Plugin } from '@ckeditor/ckeditor5-core';
import { ConvertFullHalfUI } from './ui';
import { ConvertFullHalfEditing } from './editing';

const ATTRIBUTE = 'convertFullHalf';

/** 标点符号的全角和半角（中/英文）转换 Plugin:ConvertFullHalf, toolbar:convertFullHalf */
export default class ConvertFullHalf extends Plugin {
  /**
	 * @inheritDoc
	 */
  static get requires() {
    return [ ConvertFullHalfUI, ConvertFullHalfEditing ];
  }

  /**
	 * @inheritDoc
	 */
  static get pluginName() {
    return 'ConvertFullHalf';
  }
}

export { ATTRIBUTE, ConvertFullHalfUI, ConvertFullHalfEditing, ConvertFullHalf };
