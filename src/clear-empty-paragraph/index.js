/**
 * @module clear-empty-paragraph/index
 */
import { Plugin } from '@ckeditor/ckeditor5-core';
import { ClearEmptyParagraphUI } from './ui';
import { ClearEmptyPragraphEditing } from './editing';

const ATTRIBUTE = 'clearEmptyParagraph';

export default class ClearEmptyParagraph extends Plugin {
  /**
	 * @inheritDoc
	 */
  static get requires() {
    return [ ClearEmptyParagraphUI, ClearEmptyPragraphEditing ];
  }

  /**
	 * @inheritDoc
	 */
  static get pluginName() {
    return 'ClearEmptyParagraph';
  }
}

export { ATTRIBUTE, ClearEmptyParagraphUI, ClearEmptyPragraphEditing, ClearEmptyParagraph };
