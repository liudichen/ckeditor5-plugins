/**
 * @module line-height/index
 */
import { Plugin } from '@ckeditor/ckeditor5-core';
import { LineHeightEditing } from './editing';
import { LineHeightUI } from './ui';

const ATTRIBUTE = 'lineHeight';

/** 段落行距(行高)  Plugin: LineHeight, toolbar: lineHeight, config: lineHeight:{options?:['Default',number],unit?: 'px' | 'pt'}*/
export default class LineHeight extends Plugin {
  /**
	 * @inheritDoc
	 */
  static get requires() {
    return [ LineHeightEditing, LineHeightUI ];
  }

  /**
	 * @inheritDoc
	 */
  static get pluginName() {
    return 'LineHeight';
  }
}

export { ATTRIBUTE, LineHeightUI, LineHeightEditing, LineHeight };
