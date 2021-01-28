import { Component, Host, h, ComponentInterface, Prop, forceUpdate } from '@stencil/core';
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

  addWindow = () => {
    this.controller.createWindow();
    forceUpdate(this);
  };

  render() {
    const zIndex = sys.store.zIndex;
    const list = Array.from(this.controller.store.windows);
    const arr = list.map(([_key, item], i) => {
      const index =
        this.controller.store.activeWindow.uuid === item.uuid ? zIndex : ((zIndex - list.length + i) as any);
      return <os-window key={item.uuid} controller={item} style={{ zIndex: index }} />;
    });
    return (
      <Host class='os-desktop'>
        <os-background-img />
        <div class='os-desktop-container'>
          <div class='os-desktop-content'>
            <button onClick={this.addWindow}>添加window</button>
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
