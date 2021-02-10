/**
 * 上下文菜单控制器
 *
 * @export
 * @class ContextMenuController
 */
export class ContextMenuController {
  /**
   * 上下文菜单控制器
   *
   * @protected
   * @type {HTMLOsContextMenuElement}
   * @memberof ContextMenuController
   */
  protected container: HTMLOsContextMenuElement;

  protected addEvents(): void {
    window.addEventListener('mousedown', this.mouseDown);
  }

  protected removeEvents(): void {
    window.removeEventListener('mousedown', this.mouseDown);
  }

  /**
   * 鼠标按下
   *
   * @memberof ContextMenuController
   */
  protected mouseDown = async (): Promise<void> => {
    if ((await this.container.isHover()) === false) {
      this.close();
    }
  };

  /**
   * 打开右键菜单
   *
   * @protected
   * @param {MouseEvent} e
   * @param {any[]} menus
   * @memberof ContextMenuController
   */
  protected open(e: MouseEvent, menus: any[]): void {
    this.close();
    this.addEvents();
    this.container = document.createElement('os-context-menu');
    document.body.appendChild(this.container);
    this.container.menus = menus;
    this.container.show(e);
  }

  /**
   * 关闭右键菜单
   *
   * @protected
   * @memberof ContextMenuController
   */
  protected close(): void {
    if (this.container) {
      document.body.removeChild(this.container);
      this.container = undefined;
    }
    this.removeEvents();
  }

  /**
   * 注册DOM右键菜单
   *
   * @param {HTMLElement} dom
   * @param {any[]} menus
   * @memberof ContextMenuController
   */
  register(dom: HTMLElement, menus: any[]): void {
    dom.oncontextmenu = (e: MouseEvent): void => {
      e.preventDefault();
      e.stopPropagation();
      this.open(e, menus);
    };
  }

  /**
   * 取消右键菜单注册
   *
   * @param {HTMLElement} dom
   * @memberof ContextMenuController
   */
  unregister(dom: HTMLElement): void {
    dom.oncontextmenu = undefined;
  }
}
