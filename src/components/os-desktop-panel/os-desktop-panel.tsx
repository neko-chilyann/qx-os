import { Component, Host, h, Prop } from '@stencil/core';
import { DesktopController } from '../../controller';

/**
 * 桌面面板
 *
 * @export
 * @class OsDesktopPanel
 */
@Component({
  tag: 'os-desktop-panel',
  styleUrl: 'os-desktop-panel.scss',
})
export class OsDesktopPanel {
  @Prop()
  desktop: DesktopController;

  render() {
    return <Host class='os-desktop-panel'>桌面面板</Host>;
  }
}
