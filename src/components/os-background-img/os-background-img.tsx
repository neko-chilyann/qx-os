import { Component, Host, h, Prop } from '@stencil/core';

/**
 * 背景图片展示
 *
 * @export
 * @class OsBackgroundImg
 */
@Component({
  tag: 'os-background-img',
  styleUrl: 'os-background-img.scss',
  shadow: true,
})
export class OsBackgroundImg {
  /**
   * 背景图片
   *
   * @memberof OsBackgroundImg
   */
  @Prop()
  img = 'url(./assets/images/default_bk_img.jpg)';

  render() {
    return (
      <Host class='os-background-img-wrapper'>
        <div
          class='os-background-img'
          style={{
            background: this.img + ' no-repeat center',
            'background-size': 'cover',
          }}
        />
      </Host>
    );
  }
}
