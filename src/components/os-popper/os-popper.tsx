import { Placement } from '@popperjs/core';
import { Component, Host, h, Prop } from '@stencil/core';

/**
 * 飘窗组件
 *
 * @export
 * @class OsPopper
 */
@Component({
  tag: 'os-popper',
  styleUrl: 'os-popper.css',
})
export class OsPopper {
  /**
   * 飘窗位置
   *
   * @type {Placement}
   * @memberof OsPopper
   */
  @Prop()
  position: Placement = 'right';

  render() {
    return <Host class='os-popper'>飘窗组件</Host>;
  }
}
