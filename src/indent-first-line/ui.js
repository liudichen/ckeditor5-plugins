/**
 * @module indent-first-line/ui
 */

import { Plugin } from '@ckeditor/ckeditor5-core';
import { ButtonView } from '@ckeditor/ckeditor5-ui';
import { ATTRIBUTE } from './index';
import indentFirstLine from '../../theme/icons/indent-first-line.svg';

export class IndentFirstLineUi extends Plugin {
  /**
	 * @inheritDoc
	 */
  static get pluginName() {
    return 'IndentFirstLineUI';
  }

  /**
	 * @inheritDoc
	 */
  init() {
    const editor = this.editor;

    editor.ui.componentFactory.add(ATTRIBUTE, (locale) => {
      const command = editor.commands.get(ATTRIBUTE);
      const buttonView = new ButtonView(locale);

      buttonView.set({
        label: '首行缩进',
        icon: indentFirstLine,
        tooltip: true,
        isToggleable: true,
      });

      buttonView.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

      // Execute command.
      this.listenTo(buttonView, 'execute', () => {
        editor.execute(ATTRIBUTE);
        editor.editing.view.focus();
      });

      return buttonView;
    });
  }
}
