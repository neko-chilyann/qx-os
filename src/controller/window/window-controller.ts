/**
 * 窗口控制器
 *
 * @export
 * @class WindowController
 */
export class WindowController {
  /**
   * 桌面内容承载器
   *
   * @type {HTMLDivElement}
   * @memberof WindowController
   */
  container: HTMLDivElement;

  /**
   * 打开窗口
   *
   * @param {HTMLElement} content
   * @memberof WindowController
   */
  open(content: HTMLElement) {
    const el = document.createElement('os-window');
    el.appendChild(content);
    this.container.appendChild(el);
    return el;
  }

  /**
   * 设置桌面承载容器
   *
   * @param {HTMLDivElement} el
   * @memberof WindowController
   */
  setDesktopContainer(el: HTMLDivElement):void {
    this.container = el;
  }
}
