import { Component, Host, h, Element, ComponentInterface } from '@stencil/core';
import interact from 'interactjs';
import { WindowContext } from '../../context';

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
   * 组件DOM实例
   *
   * @type {HTMLOsMainElement}
   * @memberof OsWindow
   */
  @Element()
  el: HTMLOsMainElement;

  header: HTMLDivElement;

  ctx = new WindowContext();

  componentDidLoad() {
    interact(this.el)
      .draggable({
        // modifiers: [
        //   interact.modifiers.restrictRect({
        //     restriction: document.body,
        //     endOnly: true,
        //   }),
        // ],
        listeners: {
          move: event => {
            const { state } = this.ctx;
            // 计算偏移量保持位置
            state.x += event.dx;
            state.y += event.dy;
            // 偏移样式设置
            event.target.style.webkitTransform = event.target.style.transform = `translate(${state.x}px, ${state.y}px)`;
          },
        },
      })
      .resizable({
        // 可拖拽的边缘
        edges: { top: true, right: true, bottom: true, left: true },
        modifiers: [
          // 保持在父对象内部
          interact.modifiers.restrictEdges({ outer: document.body }),
          // 缩放最小宽度
          interact.modifiers.restrictSize({ min: { width: 100, height: 100 } }),
        ],
        inertia: true,
        listeners: {
          move: event => {
            const target = event.target;
            const { state } = this.ctx;
            state.x += event.deltaRect.left;
            state.y += event.deltaRect.top;
            // 更新宽高
            target.style.width = event.rect.width + 'px';
            target.style.height = event.rect.height + 'px';
            // 偏移样式设置
            target.style.webkitTransform = target.style.transform = `translate(${state.x}px, ${state.y}px)`;
          },
        },
      });
  }

  render() {
    return (
      <Host class='os-window'>
        <div class='os-window-header' ref={ref => (this.header = ref)}>
          窗口头部
        </div>
        <div class='os-window-content'>窗口内容</div>
      </Host>
    );
  }
}
