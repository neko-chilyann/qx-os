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
})
export class OsDesktop implements ComponentInterface {
  /**
   * 桌面控制
   *
   * @memberof OsDesktop
   */
  @Prop()
  controller: DesktopController;

  connectedCallback(): void {
    this.controller.evt.on('activeWindow', this.activeWindow);
    this.controller.evt.on('destroyWindow', this.destroyWindow);
  }

  disconnectedCallback(): void {
    this.controller.evt.off('activeWindow', this.activeWindow);
    this.controller.evt.off('destroyWindow', this.destroyWindow);
  }

  activeWindow = (): void => {
    forceUpdate(this);
  };

  destroyWindow = (): void => {
    forceUpdate(this);
  };

  addWindow = () => {
    this.controller.createWindow();
  };

  render() {
    const zIndex = sys.store.zIndex;
    const { store } = this.controller;
    const list = Array.from(store.windows);
    const arr = list.map(([_key, item], i) => {
      const index = store.activeWindow.uuid === item.uuid ? zIndex : ((zIndex - list.length + i) as any);
      return <os-window key={item.uuid} controller={item} style={{ zIndex: index }} />;
    });
    return (
      <Host class='os-desktop'>
        <os-background-img img={store.backgroundImage} />
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
