import { Component, Host, h, Prop, ComponentInterface } from '@stencil/core';
import { isNilOrEmpty, notNilEmpty } from 'qx-util';

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
export class OsBackgroundImg implements ComponentInterface {
  /**
   * 显示模式
   *
   * @default 'color'
   * @type {('image' | 'color')}
   * @memberof OsBackgroundImg
   */
  mode: 'image' | 'color' = 'color';
  @Prop()
  showMode: 'image' | 'color';
  /**
   * 背景图片
   *
   * @memberof OsBackgroundImg
   */
  @Prop()
  img: string;
  /**
   * 背景颜色
   *
   * @default 'black'
   * @type {string}
   * @memberof OsBackgroundImg
   */
  @Prop()
  color = 'black';

  componentWillLoad(): void {
    if (isNilOrEmpty(this.showMode)) {
      if (notNilEmpty(this.img)) {
        this.mode = 'image';
      }
    }
  }

  render() {
    const style: any = {};
    if (this.mode === 'image') {
      style.background = `url(${this.img}) no-repeat center`;
      style['background-size'] = 'cover';
    } else {
      style['background-color'] = this.color;
    }
    return (
      <Host class='os-background-img-wrapper'>
        <div class='os-background-img' style={style} />
      </Host>
    );
  }
}
