import { Component, Host, h } from '@stencil/core';

/**
 * 窗口工具栏
 *
 * @export
 * @class OsWindowHeaderToolbar
 */
@Component({
  tag: 'os-window-header-toolbar',
  styleUrl: 'os-window-header-toolbar.scss',
  shadow: true,
})
export class OsWindowHeaderToolbar {
  render() {
    return <Host class='os-window-header-toolbar'>工具栏</Host>;
  }
}
