/**
 * @module soft-break-to-enter/index
 */
import { Plugin } from '@ckeditor/ckeditor5-core';

import { SoftBreakToEnterUI } from './ui';
import { SoftBreakToEnterEditing } from './editing';

const ATTRIBUTE = 'softBreakToEnter';

/** 软换行转硬换行 Plugin:SoftBreakToEnter, toolbar:softBreakEnter */
export default class SoftBreakToEnter extends Plugin {
  /**
	 * @inheritDoc
	 */
  static get requires() {
    return [ SoftBreakToEnterUI, SoftBreakToEnterEditing ];
  }

  /**
	 * @inheritDoc
	 */
  static get pluginName() {
    return 'SoftBreakToEnter';
  }
}

export { ATTRIBUTE, SoftBreakToEnterUI, SoftBreakToEnterEditing, SoftBreakToEnter };
