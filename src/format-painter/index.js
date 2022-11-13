import { Plugin } from '@ckeditor/ckeditor5-core';
import { FormatPainterUI } from './ui';
import { FormatPainterEditing } from './editing';

const ATTRIBUTE = 'formatPainter';

/** 格式刷，复制所选区域的格式并应用于新的选择区域 Plugin:FormatPainter, toolbar:formatPainter  */
export default class FormatPainter extends Plugin {
  /**
	 * @inheritDoc
	 * @return {string} FormatPainter
	 */
  static get pluginName() {
    return 'FormatPainter';
  }

  /**
	 * @inheritDoc
	 * @return {(FormatPainterUI|FormatPainterEditing)[]} 依赖数组
	 */
  static get requires() {
    return [ FormatPainterUI, FormatPainterEditing ];
  }
}

export { ATTRIBUTE, FormatPainterUI, FormatPainterEditing, FormatPainter };
