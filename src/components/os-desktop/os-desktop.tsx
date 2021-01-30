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
})
export class OsDesktop implements ComponentInterface {
  /**
   * 桌面控制
   *
   * @memberof OsDesktop
   */
  @Prop()
  controller: DesktopController;

  componentWillLoad(): void {
    this.controller.setComponent(this);
  }

  addWindow = () => {
    this.controller.createWindow({ title: '标题!' });
  };

  render() {
    const { store } = this.controller;
    const arr = [];
    store.windows.forEach(item => {
      arr.push(<os-window key={item.uuid} controller={item} style={{ 'z-index': item.store.zIndex as any }} />);
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
