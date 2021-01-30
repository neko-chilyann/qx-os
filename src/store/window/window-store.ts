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
