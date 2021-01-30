import { Component, Host, h, Prop, ComponentInterface, forceUpdate } from '@stencil/core';
import { DesktopController, WindowController } from '../../controller';

/**
 * 窗口任务
 *
 * @export
 * @class OsWindowTasks
 */
@Component({
  tag: 'os-window-tasks',
  styleUrl: 'os-window-tasks.scss',
})
export class OsWindowTasks implements ComponentInterface {
  /**
   * 桌面控制器
   *
   * @type {DesktopController}
   * @memberof OsTaskbar
   */
  @Prop()
  desktop: DesktopController;
  /**
   * 当前激活窗口
   *
   * @type {WindowController}
   * @memberof OsWindowTasks
   */
  window: WindowController;

  connectedCallback(): void {
    this.desktop.evt.on('activeWindow', this.activeWindowEvent);
    this.desktop.evt.on('destroyWindow', this.destroyWindowEvent);
  }

  disconnectedCallback(): void {
    this.desktop.evt.off('activeWindow', this.activeWindowEvent);
    this.desktop.evt.off('destroyWindow', this.destroyWindowEvent);
  }

  activeWindowEvent = (): void => {
    this.tick();
  };

  destroyWindowEvent = (): void => {
    this.tick();
  };

  activeWindow(e: MouseEvent, window: WindowController): void {
    e.stopPropagation();
    window.active();
  }

  render() {
    const arr = [];
    this.desktop.store.windows.forEach(item => {
      arr.push(
        <div
          key={item.uuid}
          class={{
            'os-window-task-item': true,
            'os-window-active': item.isActive,
          }}
          onClick={(e: MouseEvent) => this.activeWindow(e, item)}
        >
          <div class='task-icon'>
            <ion-icon name='apps'></ion-icon>
          </div>
          <div class='task-label'>{item.store.title}</div>
        </div>,
      );
    });
    return (
      <Host class='os-window-tasks'>
        <div class='os-window-task-list'>{arr}</div>
      </Host>
    );
  }

  tick(): void {
    forceUpdate(this);
  }
}
