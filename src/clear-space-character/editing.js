/**
 * @module clear-space-character/editing
 */
import { Plugin } from '@ckeditor/ckeditor5-core';
import { ClearSpaceCharacterCommand } from './command';
import { ATTRIBUTE } from './index';

export class ClearSpaceCharacterEditing extends Plugin {
  /**
	 * @inheritDoc
	 */
  static get pluginName() {
    return 'ClearSpaceEditing';
  }

  /**
	 * @inheritDoc
	 */
  init() {
    const editor = this.editor;
    editor.commands.add(ATTRIBUTE, new ClearSpaceCharacterCommand(editor));
  }
}
