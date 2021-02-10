import { Component, Host, h, Prop } from '@stencil/core';

/**
 * 抽屉
 *
 * @export
 * @class OsDrawer
 */
@Component({
  tag: 'os-drawer',
  styleUrl: 'os-drawer.scss',
})
export class OsDrawer {
  /**
   * 抽屉打开方向
   *
   * @type {('top' | 'right' | 'bottom' | 'left')}
   * @memberof OsDrawer
   */
  @Prop()
  mode: 'top' | 'right' | 'bottom' | 'left' = 'right';

  render() {
    return <Host class='os-drawer'>抽屉</Host>;
  }
}
