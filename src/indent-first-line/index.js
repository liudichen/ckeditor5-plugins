/**
 * @module indent-first-line/index
 */
import { Plugin } from '@ckeditor/ckeditor5-core';

import { IndentFirstLineEditing } from './editing';
import { IndentFirstLineUi } from './ui';

const ATTRIBUTE = 'indentFirstLine';

/** 首行缩进 Plugin:IndentFirstLine, toolbar:indentFirstLine */
export default class IndentFirstLine extends Plugin {
  /**
	 * @inheritDoc
	 */
  static get requires() {
    return [ IndentFirstLineEditing, IndentFirstLineUi ];
  }

  /**
	 * @inheritDoc
	 */
  static get pluginName() {
    return 'IndentFirstLine';
  }
}

export { ATTRIBUTE, IndentFirstLineUi, IndentFirstLineEditing, IndentFirstLine };
