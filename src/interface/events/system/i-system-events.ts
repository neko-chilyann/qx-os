import { IEventsBase } from "../base/i-events-base";

/**
 * 系统级事件定义
 *
 * @export
 * @interface ISystemEvents
 */
export interface ISystemEvents extends IEventsBase {
  /**
   * 系统初始化完成
   *
   * @type {void}
   * @memberof ISystemEvents
   */
  initialized: void;
}
