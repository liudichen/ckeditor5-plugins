/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-11-13 15:46:53
 * @LastEditTime: 2022-11-13 17:06:37
 */
/**
 * @module clear-space-character/index
 */
import { Plugin } from '@ckeditor/ckeditor5-core';
import { ClearSpaceCharacterUI } from './ui';
import { ClearSpaceCharacterEditing } from './editing';

const ATTRIBUTE = 'clearSpaceCharacter';

/** 清除多余空格字符，注意会清除掉特意的空格，Plugin:ClearSpaceCharacter, toolbar:clearSpaceCharacter */
export default class ClearSpaceCharacter extends Plugin {
  /**
	 * @inheritDoc
	 */
  static get requires() {
    return [ ClearSpaceCharacterUI, ClearSpaceCharacterEditing ];
  }

  /**
	 * @inheritDoc
	 */
  static get pluginName() {
    return 'ClearSpaceCharacter';
  }
}

export { ATTRIBUTE, ClearSpaceCharacterUI, ClearSpaceCharacterEditing, ClearSpaceCharacter };
