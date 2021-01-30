import { StoreBase } from '../base/store-base';

/**
 * 桌面数据存储
 *
 * @export
 * @class WindowStore
 * @extends {StoreBase}
 */
export class WindowStore extends StoreBase {
  /**
   * 当前显示层级
   *
   * @default 10
   * @type {number}
   * @memberof WindowStore
   */
  zIndex = 10;
  /**
   * 标题
   *
   * @type {string}
   * @memberof WindowStore
   */
  title: string;
  /**
   * 背景图片
   *
   * @memberof WindowStore
   */
  backgroundImage = './assets/images/default_bk_img.jpg';
}
