import { Component, Host, h, Prop } from '@stencil/core';

/**
 * 窗口标题
 *
 * @export
 * @class OsWindowTitle
 */
@Component({
  tag: 'os-window-title',
  styleUrl: 'os-window-title.scss',
  shadow: true,
})
export class OsWindowTitle {
  /**
   * 标题
   *
   * @type {string}
   * @memberof OsWindowTitle
   */
  @Prop()
  caption: string;

  render() {
    return <Host class='os-window-title'>{this.caption}</Host>;
  }
}
