import { Component, Host, h, ComponentInterface } from '@stencil/core';
import { SystemController } from '../../controller';

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
   * 系统上下文
   *
   * @type {SystemContext}
   * @memberof OsMain
   */
  sys: SystemController = window.sys;

  render() {
    return (
      <Host class='os-main'>
        <os-desktop sys={this.sys} />
      </Host>
    );
  }
}
