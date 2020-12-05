import { Component, Host, h } from '@stencil/core';

@Component({
    tag: 'qx-desktop',
    styleUrl: 'qx-desktop.scss',
    shadow: true,
})
export class QxDesktop {
    render() {
        return (
            <Host>
                <slot></slot>
            </Host>
        );
    }
}
