import { SystemController } from '../controller';

/**
 * 全局默认初始执行
 *
 * @export
 */
export default function () {
  // 如果已经初始化将不再初始化
  if (window.___qx_os_install === true) {
    return;
  }
  // 初始化系统控制器
  window.sys = new SystemController();
}
