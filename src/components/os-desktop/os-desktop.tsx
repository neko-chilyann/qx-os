import { Component, Host, h, ComponentInterface, Prop } from '@stencil/core';
import { DesktopController } from '../../controller';

/**
 * OS桌面
 *
 * @export
 * @class OsDesktop
 */
@Component({
  tag: 'os-desktop',
  styleUrl: 'os-desktop.scss',
  shadow: true,
})
export class OsDesktop implements ComponentInterface {
  /**
   * 控制器
   *
   * @type {DesktopController}
   * @memberof OsDesktop
   */
  @Prop()
  controller: DesktopController;

  /**
   * 内容DOM根节点
   *
   * @type {HTMLDivElement}
   * @memberof OsDesktop
   */
  content: HTMLDivElement;

  componentDidLoad() {
    this.controller.win.setDesktopContainer(this.content);
    this.controller.win.open(document.createElement('div'));
    this.controller.win.open(document.createElement('div'));
  }

  render() {
    return (
      <Host class='os-desktop'>
        <os-background-img />
        <div class='os-desktop-container'>
          <div class='os-desktop-content' ref={ref => (this.content = ref)}>
            桌面内容
          </div>
          <div class='os-desktop-task'>任务栏</div>
        </div>
      </Host>
    );
  }
}
