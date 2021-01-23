import { Component, Host, h } from '@stencil/core';

/**
 * OS桌面
 *
 * @export
 * @class OsDesktop
 */
@Component({
  tag: 'os-desktop',
  styleUrl: 'os-desktop.scss',
  shadow: true,
})
export class OsDesktop {
  render() {
    return (
      <Host class='os-desktop'>
        <div
          class='os-background-img-wrapper'
          style={{
            background: 'url(./assets/images/default_bk_img.jpg) no-repeat center',
            'background-size': 'cover',
          }}
        />
        <div class='os-desktop-container'>
          <div class='os-desktop-content'>桌面内容</div>
          <div class='os-desktop-task'>任务栏</div>
        </div>
      </Host>
    );
  }
}
