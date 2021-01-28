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
   * 桌面控制
   *
   * @memberof OsDesktop
   */
  @Prop()
  controller: DesktopController;

  componentWillLoad() {
    this.controller.createWindow();
  }

  render() {
    const arr = [];
    this.controller.store.windows.forEach(item => {
      arr.push(<os-window key={item.uuid} controller={item} />);
    });
    return (
      <Host class='os-desktop'>
        <os-background-img />
        <div class='os-desktop-container'>
          <div class='os-desktop-content'>
            <os-desktop-panel desktop={this.controller} />
            {arr}
          </div>
          <div class='os-desktop-task'>
            <os-taskbar desktop={this.controller} />
          </div>
        </div>
      </Host>
    );
  }
}
