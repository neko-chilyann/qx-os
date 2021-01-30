import { WindowController } from '../../controller';
import { StoreBase } from '../base/store-base';

/**
 * 桌面数据存储
 *
 * @export
 * @class DesktopStore
 * @extends {StoreBase}
 */
export class DesktopStore extends StoreBase {
  /**
   * 所有桌面
   *
   * @type {Map<string, WindowController>}
   * @memberof DesktopStore
   */
  readonly windows: Map<string, WindowController> = new Map();
  /**
   * 激活历史记录
   *
   * @type {Map<string, WindowController>}
   * @memberof DesktopStore
   */
  readonly activeHistory: Map<string, WindowController> = new Map();
  /**
   * 当前激活窗口
   *
   * @readonly
   * @type {WindowController}
   * @memberof DesktopStore
   */
  activeWindow: WindowController;
  /**
   * 背景图片
   *
   * @readonly
   * @type {string}
   * @memberof DesktopStore
   */
  backgroundImage = './assets/images/default_bk_img.jpg';

  /**
   * 新增窗口
   *
   * @param {WindowController} window
   * @memberof DesktopStore
   */
  addWindow(window: WindowController): void {
    this.windows.set(window.uuid, window);
  }

  /**
   * 删除窗口
   *
   * @param {WindowController} window
   * @memberof DesktopStore
   */
  destroyWindow(window: WindowController): void {
    this.windows.delete(window.uuid);
    this.activeHistory.delete(window.uuid);
  }

  /**
   * 新增历史记录
   *
   * @param {WindowController} window
   * @memberof DesktopStore
   */
  addHistory(window: WindowController): void {
    if (this.activeHistory.has(window.uuid)) {
      this.activeHistory.delete(window.uuid);
    }
    this.activeHistory.set(window.uuid, window);
  }

  /**
   * 计算历史记录窗口层级
   *
   * @param {number} zIndex
   * @memberof DesktopStore
   */
  calcHistoryZIndex(zIndex: number): void {
    let i = 1;
    for (const key of this.activeHistory.keys()) {
      const win = this.activeHistory.get(key);
      win.store.zIndex = zIndex - (this.activeHistory.size - i) * 10;
      i++;
    }
  }
}
