import { StoreBase } from '../base/store-base';
import { WindowStoreOptions } from './window-store-options';

/**
 * 桌面数据存储
 *
 * @export
 * @class WindowStore
 * @extends {StoreBase}
 */
export class WindowStore extends StoreBase {
  private readonly cache: WindowStoreOptions = {
    zIndex: sys.store.zIndexIncrease(),
  };

  get zIndex(): number {
    return this.cache.zIndex;
  }
}
