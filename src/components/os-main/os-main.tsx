import { Component, Host, h, ComponentInterface } from '@stencil/core';

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
  render() {
    return (
      <Host class='os-main'>
        <os-desktop></os-desktop>
      </Host>
    );
  }
}
