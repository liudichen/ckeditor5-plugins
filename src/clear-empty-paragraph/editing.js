/**
 * @module clear-empty-paragraph/editing
 */
import { Plugin } from '@ckeditor/ckeditor5-core';
import { ClearEmptyParagraphCommand } from './command';
import { ATTRIBUTE } from './index';

export class ClearEmptyPragraphEditing extends Plugin {
  /**
	 * @inheritDoc
	 */
  static get pluginName() {
    return 'ClearEmptyPragraphEditing';
  }

  /**
	 * @inheritDoc
	 */
  init() {
    const editor = this.editor;
    editor.commands.add(ATTRIBUTE, new ClearEmptyParagraphCommand(editor));
  }
}
