/**
 * @module indent-first-line/editing
 */

import { Plugin } from '@ckeditor/ckeditor5-core';
import { IndentFirstLineCommand } from './command';
import { ATTRIBUTE } from './index';

export class IndentFirstLineEditing extends Plugin {
  /**
	 * @inheritDoc
	 */
  static get pluginName() {
    return 'IndentFirstLineEditing';
  }

  /**
	 * @inheritDoc
	 */
  constructor(editor) {
    super(editor);

    editor.config.define('indentFirstLineValue', '2em');
  }

  /**
	 * @inheritDoc
	 */
  init() {
    const editor = this.editor;
    const schema = editor.model.schema;

    const indentFirstLineValue = editor.config.get('indentFirstLineValue');

    // Allow indentFirstLine attribute on all blocks.
    schema.extend('$block', { allowAttributes: ATTRIBUTE });
    editor.model.schema.setAttributeProperties(ATTRIBUTE, {
      isFormatting: true,
    });

    const definition = {
      model: {
        key: ATTRIBUTE,
        values: [ ATTRIBUTE ],
      },
      view: {
        indentFirstLine: {
          key: 'style',
          value: {
            'text-indent': indentFirstLineValue,
          },
        },
      },
    };

    editor.conversion.attributeToAttribute(definition);

    editor.commands.add(ATTRIBUTE, new IndentFirstLineCommand(editor));
  }
}
