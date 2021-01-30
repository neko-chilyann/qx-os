import { Component, Host, h, Prop } from '@stencil/core';
import { DesktopController } from '../../controller';

/**
 * 任务栏
 *
 * @export
 * @class OsTaskbar
 */
@Component({
  tag: 'os-taskbar',
  styleUrl: 'os-taskbar.scss',
})
export class OsTaskbar {
  /**
   * 桌面控制器
   *
   * @type {DesktopController}
   * @memberof OsTaskbar
   */
  @Prop()
  desktop: DesktopController;

  render() {
    return (
      <Host class='os-taskbar'>
        <os-window-tasks desktop={this.desktop} />
      </Host>
    );
  }
}
