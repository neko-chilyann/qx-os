import { Component, Host, h, Element, ComponentInterface, Prop } from '@stencil/core';
import interact from 'interactjs';
import { WindowController } from '../../controller';

/**
 * window窗口
 *
 * @export
 * @class OsWindow
 */
@Component({
  tag: 'os-window',
  styleUrl: 'os-window.scss',
  shadow: true,
})
export class OsWindow implements ComponentInterface {
  /**
   * window控制器
   *
   * @memberof OsWindow
   */
  @Prop()
  controller: WindowController;

  /**
   * 组件DOM实例
   *
   * @type {HTMLOsMainElement}
   * @memberof OsWindow
   */
  @Element()
  el: HTMLOsMainElement;

  /**
   * 头部DOM实例
   *
   * @type {HTMLDivElement}
   * @memberof OsWindow
   */
  header: HTMLDivElement;

  componentDidLoad() {
    interact(this.header).draggable({
      modifiers: [
        interact.modifiers.restrictRect({
          restriction: '.os-desktop-content',
          endOnly: true,
        }),
      ],
      cursorChecker: () => {
        return 'default';
      },
      listeners: {
        move: event => {
          const { state } = this.controller;
          // 计算偏移量保持位置
          state.x += event.dx;
          state.y += event.dy;
          // 偏移样式设置
          this.el.style.transform = `translate(${state.x}px, ${state.y}px)`;
        },
      },
    });
    interact(this.el).resizable({
      // 可拖拽的边缘
      edges: { top: true, right: true, bottom: true, left: true },
      modifiers: [
        // 保持在父对象内部
        interact.modifiers.restrictEdges({ outer: '.os-desktop-content' }),
        // 缩放最小宽度
        interact.modifiers.restrictSize({ min: { width: 300, height: 200 } }),
      ],
      inertia: true,
      listeners: {
        move: event => {
          const target = event.target;
          const { state } = this.controller;
          state.x += event.deltaRect.left;
          state.y += event.deltaRect.top;
          // 更新宽高
          target.style.width = event.rect.width + 'px';
          target.style.height = event.rect.height + 'px';
          // 偏移样式设置
          target.style.transform = `translate(${state.x}px, ${state.y}px)`;
        },
      },
    });
  }

  render() {
    return (
      <Host class='os-window'>
        <os-background-img />
        <div class='os-window-header' ref={ref => (this.header = ref)}>
          窗口头部
        </div>
        <div class='os-window-content'>窗口内容</div>
      </Host>
    );
  }
}
