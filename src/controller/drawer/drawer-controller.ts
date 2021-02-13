/**
 * 抽屉展示控制器
 *
 * @export
 * @class DrawerController
 */
export class DrawerController {
  /**
   * 抽屉容器列表
   *
   * @private
   * @type {HTMLOsDrawerElement[]}
   * @memberof DrawerController
   */
  private drawers: HTMLOsDrawerElement[] = [];

  async open() {
    const container = document.createElement('os-drawer');
    container.zIndex = sys.store.zIndexIncrease();
    document.body.appendChild(container);
    this.drawers.push(container);
  }
}
