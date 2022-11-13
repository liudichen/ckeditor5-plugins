/*
 * @Description:
 * @Author: 柳涤尘 https://www.iimm.ink
 * @LastEditors: 柳涤尘 liudichen@foxmail.com
 * @Date: 2022-11-13 15:46:53
 * @LastEditTime: 2022-11-13 17:58:59
 */
/**
 * @module outline/index
 */
import { Plugin } from '@ckeditor/ckeditor5-core';
import { OutlineUI } from './ui';
import { OutlineEditing } from './editing';

/** 轮廓线框 Plugin: Outline, toolbar: outline */
export default class Outline extends Plugin {
  /**
	 * @inheritDoc
	 * @return {(OutlineUi|OutlineEditing)[]} deps
	 */
  static get requires() {
    return [ OutlineUI, OutlineEditing ];
  }

  /**
	 * @inheritDoc
	 */
  static get pluginName() {
    return 'Outline';
  }
}

export { Outline };
