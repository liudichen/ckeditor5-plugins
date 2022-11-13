/**
 * @module quick-style/index
 */
import { Plugin } from '@ckeditor/ckeditor5-core';
import { QuickStyleUI } from './ui';
import { QuickStyleEditing } from './editing';

const ATTRIBUTE = 'quickStyle';
const STORAGE_KEY = 'ck-quick-style-pref';

/** 快速格式化 Plugin:QuickStle toolbar:quickStyle */
export default class QuickStyle extends Plugin {
  /**
	 * @inheritDoc
	 */
  static get requires() {
    return [ QuickStyleEditing, QuickStyleUI ];
  }

  /**
	 * @inheritDoc
	 */
  static get pluginName() {
    return 'QuickStyle';
  }
}

export { ATTRIBUTE, STORAGE_KEY, QuickStyleUI, QuickStyleEditing, QuickStyle };
