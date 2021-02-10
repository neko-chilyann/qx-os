import { Component, Host, h, Prop, Method, Element, Listen } from '@stencil/core';

/**
 * 系统上下文菜单
 *
 * @export
 * @class OsContextMenu
 */
@Component({
  tag: 'os-context-menu',
  styleUrl: 'os-context-menu.scss',
})
export class OsContextMenu {
  @Element()
  el: HTMLElement;
  /**
   * 菜单数据
   *
   * @type {any[]}
   * @memberof OsContextMenu
   */
  @Prop()
  menus: any[] = [];
  /**
   * 是否悬浮在菜单中
   *
   * @memberof OsContextMenu
   */
  hover = false;

  @Listen('mouseenter')
  mouseenter(): void {
    this.hover = true;
  }

  @Listen('mouseleave')
  mouseleave(): void {
    this.hover = false;
  }

  @Listen('contextmenu')
  contextmenu(e: MouseEvent): void {
    e.preventDefault();
    e.stopPropagation();
  }

  render() {
    return <Host class='os-context-menu'>上下文菜单</Host>;
  }

  /**
   * 是否悬浮
   *
   * @return {*}  {Promise<boolean>}
   * @memberof OsContextMenu
   */
  @Method()
  async isHover(): Promise<boolean> {
    return this.hover;
  }

  /**
   * 显示菜单
   *
   * @param {MouseEvent} e
   * @return {*}  {Promise<void>}
   * @memberof OsContextMenu
   */
  @Method()
  async show(e: MouseEvent): Promise<void> {
    this.el.style.top = e.pageY + 'px';
    this.el.style.left = e.pageX + 'px';
  }
}
