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
  position: 'top' | 'right' | 'bottom' | 'left' = 'right';
  /**
   * 显示层级
   *
   * @type {number}
   * @memberof OsDrawer
   */
  @Prop()
  zIndex: number;

  render() {
    return (
      <Host class='os-drawer-container' style={{ 'z-index': (this.zIndex - 1) as any }}>
        <div class={{ 'os-drawer': true, [this.position]: true }} style={{ 'z-index': this.zIndex as any }}>
          <os-background-img img={sys.store.backgroundImage} />
          抽屉
        </div>
      </Host>
    );
  }
}
