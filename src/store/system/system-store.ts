import { DesktopController } from '../../controller';
import { StoreBase } from '../base/store-base';

/**
 * 系统数据存储
 *
 * @export
 * @class SystemStore
 * @extends {StoreBase}
 */
export class SystemStore extends StoreBase {
  /**
   * 所有桌面
   *
   * @type {Map<string, DesktopController>}
   * @memberof SystemStore
   */
  readonly desktops: Map<string, DesktopController> = new Map();
  /**
   * 当前激活桌面
   *
   * @readonly
   * @memberof SystemStore
   */
  activeDesktop: DesktopController;
  /**
   * 当前激活最高层级
   *
   * @readonly
   * @type {number}
   * @memberof SystemStore
   */
  zIndex = 0;
  /**
   * 背景图片
   *
   * @readonly
   * @type {string}
   * @memberof SystemStore
   */
  backgroundImage = './assets/images/default_bk_img.jpg';

  /**
   * 新增桌面
   *
   * @param {DesktopController} controller
   * @memberof SystemStore
   */
  addDesktop(controller: DesktopController): void {
    this.desktops.set(controller.uuid, controller);
  }

  /**
   * 销毁桌面
   *
   * @param {DesktopController} controller
   * @memberof SystemStore
   */
  destroyDesktop(controller: DesktopController): void {
    this.desktops.delete(controller.uuid);
  }

  /**
   * 设置激活桌面
   *
   * @param {*} desktop
   * @param {*} DesktopController
   * @memberof SystemStore
   */
  setActiveDesktop(desktop: DesktopController): void {
    this.activeDesktop = desktop;
  }

  /**
   * 设置ZIndex
   *
   * @param {number} i
   * @memberof SystemStore
   */
  setZIndex(i: number): void {
    this.zIndex = i;
  }

  /**
   * 增长zIndex层级
   *
   * @return {*}  {number}
   * @memberof SystemStore
   */
  zIndexIncrease(): number {
    this.zIndex += 30;
    return this.zIndex;
  }

  /**
   * 减少zIndex层级
   *
   * @return {*}  {number}
   * @memberof SystemStore
   */
  zIndexReduce(): number {
    this.zIndex -= 30;
    return this.zIndex;
  }
}
