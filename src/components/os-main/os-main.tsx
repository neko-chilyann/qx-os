import { Component, Host, h, ComponentInterface } from '@stencil/core';
import { SystemController } from '../../controller';

/**
 * OS主入口
 *
 * @export
 * @class OsMain
 */
@Component({
  tag: 'os-main',
  styleUrl: 'os-main.scss',
  shadow: true,
})
export class OsMain implements ComponentInterface {
  /**
   * 系统上下文
   *
   * @type {SystemContext}
   * @memberof OsMain
   */
  sys: SystemController = window.sys;

  componentWillLoad() {
    this.sys.createDesktop();
  }

  render() {
    const arr = [];
    this.sys.store.desktops.forEach(item => {
      arr.push(<os-desktop key={item.uuid} controller={item}/>);
    });
    return <Host class='os-main'>{arr}</Host>;
  }
}
