/**
 * @module indent-first-line/command
 */
import { Command } from '@ckeditor/ckeditor5-core';
import { ATTRIBUTE } from './index';
import { findFirst, EXCLUDEBLOCK } from '../utils';

/**
 * The indent-first command plugin.
 *
 * @augments module:core/command~Command
 */
export class IndentFirstLineCommand extends Command {
  /**
	 * @inheritDoc
	 */
  refresh() {
    const first = findFirst(
      this.editor.model.document.selection.getSelectedBlocks(),
      (item) => !this._exclude(item),
      EXCLUDEBLOCK
    );
    this.isEnabled = !!first && this._executable(this.editor.model.schema, first);

    // 设置按钮状态
    if (this.isEnabled && first.hasAttribute(ATTRIBUTE)) {
      this.value = first.getAttribute(ATTRIBUTE);
    } else {
      this.value = null;
    }
  }

  /**
	 * @inheritDoc
	 */
  execute() {
    const model = this.editor.model;
    const schema = model.schema;
    const selection = model.document.selection.getSelectedBlocks();

    model.change((writer) => {
      let isRemove;
      for (const block of selection) {
        if (!this._executable(schema, block)) {
          continue;
        }
        if (typeof isRemove !== 'boolean') {
          const attr = block.getAttribute(ATTRIBUTE);
          isRemove = attr === ATTRIBUTE || !ATTRIBUTE;
        }
        if (isRemove) {
          writer.removeAttribute(ATTRIBUTE, block);
        } else {
          writer.setAttribute(ATTRIBUTE, ATTRIBUTE, block);
        }
      }
    });
  }

  /**
	 * Elements that need to be excluded during command execution and condition judgment
	 *
	 * @param {object}block selected block
	 * @return {boolean} whether is exclued
	 * @private
	 */
  _exclude(block) {
    return [ 'image', 'media', 'table' ].includes(block.name);
  }

  /**
	 * Identify whether the indent first button can be executed
	 *
	 * @param {object} schema model.schema
	 * @param {object} block selected block
	 * @return {boolean} whether the indent first button can be executed	 *
	 */
  _executable(schema, block) {
    return schema.checkAttribute(block, ATTRIBUTE);
  }
}
