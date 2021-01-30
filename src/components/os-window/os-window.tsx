import { Component, Host, h, Element, ComponentInterface, Prop, forceUpdate } from '@stencil/core';
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
  dragHandle: HTMLDivElement;

  connectedCallback(): void {
    window.addEventListener('resize', this.browserResize);
  }

  disconnectedCallback(): void {
    window.removeEventListener('resize', this.browserResize);
  }

  componentDidLoad(): void {
    const { state } = this.controller;
    // 注册窗口拖拽
    interact(this.dragHandle).draggable({
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
          // 计算偏移量保持位置
          state.x += event.dx;
          state.y += event.dy;
          this.setStyle();
        },
      },
    });
    // 注册窗口大小变更
    interact(this.el).resizable({
      // 可拖拽的边缘
      edges: { top: true, right: true, bottom: true, left: true },
      modifiers: [
        // 保持在父对象内部
        interact.modifiers.restrictEdges({ outer: '.os-desktop-content' }),
        // 缩放最小宽度
        interact.modifiers.restrictSize({ min: { width: state.minWidth, height: state.minHeight } }),
      ],
      inertia: true,
      listeners: {
        move: event => {
          state.x += event.deltaRect.left;
          state.y += event.deltaRect.top;
          // 更新宽高
          state.width = event.rect.width;
          state.height = event.rect.height;
          this.setStyle();
        },
      },
    });
  }

  /**
   * 设置样式
   *
   * @memberof OsWindow
   */
  setStyle(): void {
    Object.assign(this.el.style, this.calcStyle());
  }

  /**
   * 计算窗口样式
   *
   * @memberof OsWindow
   */
  calcStyle(): any {
    return {
      transform: `translate(${this.controller.state.x}px, ${this.controller.state.y}px)`,
      height: this.controller.state.height + 'px',
      width: this.controller.state.width + 'px',
    };
  }

  /**
   * 浏览器大小变化
   *
   * @memberof OsWindow
   */
  browserResize = (): void => {
    const { body } = document;
    const { state } = this.controller;
    if (body.offsetHeight - 50 < state.y) {
      const num = body.offsetHeight - 60;
      if (num > 0) {
        state.y = num;
      }
    }
    if (body.offsetWidth < state.x) {
      let num = state.x;
      if (state.width > body.offsetWidth) {
        num = body.offsetWidth - 100;
      } else {
        num = body.offsetWidth - state.width;
      }
      if (num > 0) {
        state.x = num;
      }
    }
    this.setStyle();
  };

  /**
   * 激活当前窗口
   *
   * @memberof OsWindow
   */
  active = () => {
    this.controller.active();
  };

  renderResizeLine() {
    return [
      <div class='resize-line top' />,
      <div class='resize-line right' />,
      <div class='resize-line bottom' />,
      <div class='resize-line left' />
    ];
  }

  render() {
    return (
      <Host class={{ 'os-window': true, 'full-screen': this.controller.state.fullScreen }} style={this.calcStyle()}>
        <os-background-img />
        <div class='os-window-header' onMouseDown={this.active}>
          <div class='drag-handle' ref={ref => (this.dragHandle = ref)} />
          <os-window-title caption='窗口头部' />
        </div>
        <div class='os-window-content'>窗口内容</div>
      </Host>
    );
  }

  tick(): void {
    forceUpdate(this);
  }
}
