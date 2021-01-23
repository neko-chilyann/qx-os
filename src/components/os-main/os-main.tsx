import { Component, Host, h, ComponentInterface, Element } from '@stencil/core';
import interact from 'interactjs';

/**
 * OS主入口
 *
 * @export
 * @class OsMain
 */
@Component({
  tag: 'os-main',
  styleUrl: 'os-main.scss',
  shadow: true,
})
export class OsMain implements ComponentInterface {
  /**
   * 当前组件DOM实例
   *
   * @type {HTMLOsMainElement}
   * @memberof OsMain
   */
  @Element()
  el: HTMLOsMainElement;

  componentDidLoad() {
    interact(this.el);
  }

  render() {
    return (
      <Host class='os-main'>
        <os-desktop></os-desktop>
      </Host>
    );
  }
}
