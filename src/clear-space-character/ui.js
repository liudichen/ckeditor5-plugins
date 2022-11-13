/**
 * @module clear-space-character/ui
 */
import { Plugin } from '@ckeditor/ckeditor5-core';
import { ButtonView } from '@ckeditor/ckeditor5-ui';
import { ATTRIBUTE } from './index';
import trimIcon from '../../theme/icons/trim.svg';

export class ClearSpaceCharacterUI extends Plugin {
  /**
	 * @inheritDoc
	 */
  static get pluginName() {
    return 'ClearSpaceCharacterUI';
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
        label: '清除选择块的空格（注意:会清除有意的空格）',
        icon: trimIcon,
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
