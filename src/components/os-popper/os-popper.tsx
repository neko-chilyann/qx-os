import { Component, Host, h } from '@stencil/core';

@Component({
  tag: 'os-popper',
  styleUrl: 'os-popper.scss',
})
export class OsPopper {
  render() {
    return <Host class='os-popper'>飘窗</Host>;
  }
}
