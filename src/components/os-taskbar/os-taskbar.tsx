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
  shadow: true,
})
export class OsTaskbar {
  @Prop()
  desktop: DesktopController;

  render() {
    return <Host class='os-taskbar'>任务栏</Host>;
  }
}
