import { SystemController } from '../controller';

declare global {
  const sys: SystemController;
  interface Window {
    /**
     * 系统是否已安装
     *
     * @type {boolean}
     * @memberof Window
     */
    ___qx_os_install: boolean;
    /**
     * 全局唯一系统控制器
     *
     * @type {SystemController}
     * @memberof Window
     */
    sys: SystemController;
  }
}
