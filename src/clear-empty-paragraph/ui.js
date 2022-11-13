/**
 * @module clear-empty-paragraph/ui
 */
import { Plugin } from '@ckeditor/ckeditor5-core';
import { ButtonView } from '@ckeditor/ckeditor5-ui';
import { ATTRIBUTE } from './index';
import clearEmptyParagraphIcon from '../../theme/icons/clear-empty-paragraph.svg';

export class ClearEmptyParagraphUI extends Plugin {
  /**
	 * @inheritDoc
	 */
  static get pluginName() {
    return 'ClearEmptyParagraphUI';
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
        // label: '清除多余空格和空行',
        label: '清除空行（注意:会清除有意的断行）',
        icon: clearEmptyParagraphIcon,
        tooltip: true,
      });

      buttonView.bind('isOn', 'isEnabled').to(command, 'value', 'isEnabled');

      this.listenTo(buttonView, 'execute', () => {
        editor.execute(ATTRIBUTE);
        editor.editing.view.focus();
      });

      return buttonView;
    });
  }
}
