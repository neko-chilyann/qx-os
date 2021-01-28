import { DesktopController } from '../../controller';
import { StoreBase } from '../base/store-base';
import { SystemStoreOptions } from './system-store-options';

/**
 * 系统数据存储
 *
 * @export
 * @class SystemStore
 * @extends {StoreBase}
 */
export class SystemStore extends StoreBase {
  private readonly cache: SystemStoreOptions = {
    zIndex: 1
  };
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
  get activeDesktop() {
    return this.cache.activateDesktop;
  }
  /**
   * 当前激活最高层级
   *
   * @readonly
   * @type {number}
   * @memberof SystemStore
   */
  get zIndex(): number {
    return this.cache.zIndex;
  }

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
    this.cache.activateDesktop = desktop;
  }

  /**
   * 设置ZIndex
   *
   * @param {number} i
   * @memberof SystemStore
   */
  setZIndex(i: number): void {
    this.cache.zIndex = i;
  }

  /**
   * 增长zIndex层级
   *
   * @return {*}  {number}
   * @memberof SystemStore
   */
  zIndexIncrease(): number {
    this.cache.zIndex += 10;
    return this.cache.zIndex;
  }

  /**
   * 减少zIndex层级
   *
   * @return {*}  {number}
   * @memberof SystemStore
   */
  zIndexReduce(): number {
    this.cache.zIndex -= 10;
    return this.cache.zIndex;
  }
}
