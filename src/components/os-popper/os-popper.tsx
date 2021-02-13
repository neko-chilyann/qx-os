import { Component, Host, h, Prop, Element } from '@stencil/core';
import { createPopper, Instance } from '@popperjs/core/lib/popper-lite.js';
import preventOverflow from '@popperjs/core/lib/modifiers/preventOverflow.js';
import flip from '@popperjs/core/lib/modifiers/flip.js';

@Component({
  tag: 'os-popper',
  styleUrl: 'os-popper.scss',
})
export class OsPopper {
  /**
   * 展示位置
   *
   * @default 'auto'
   * @type {('top' | 'right' | 'bottom' | 'left' | 'auto' | 'auto-start' | 'auto-end' | 'top-start' | 'top-end' | 'bottom-start' | 'bottom-end' | 'right-start' | 'right-end' | 'left-start' | 'left-end')}
   * @memberof OsPopper
   */
  @Prop()
  position:
    | 'top'
    | 'right'
    | 'bottom'
    | 'left'
    | 'auto'
    | 'auto-start'
    | 'auto-end'
    | 'top-start'
    | 'top-end'
    | 'bottom-start'
    | 'bottom-end'
    | 'right-start'
    | 'right-end'
    | 'left-start'
    | 'left-end' = 'auto';

  @Element()
  el: HTMLDivElement;

  /**
   * 飘窗实例
   *
   * @private
   * @type {Instance}
   * @memberof OsPopper
   */
  private popperInstance: Instance;

  render() {
    return (
      <Host class='os-popper-container'>
        <div class='os-popper'>飘窗</div>
      </Host>
    );
  }

  async show(e: MouseEvent) {
    const el: HTMLElement = (e.target as any) || e.srcElement;
    this.popperInstance = createPopper(el, this.el, {
      placement: this.position,
      strategy: 'absolute',
      modifiers: [preventOverflow, flip],
    });
  }

  async destroy() {
    this.popperInstance.destroy();
  }
}
