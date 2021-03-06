import { XStatus, XPlace } from '@ng-nest/ui/core';
import { XAlertOption } from '@ng-nest/ui/alert';
import { Subscription, Subject } from 'rxjs';
import { XPortalOverlayRef } from '@ng-nest/ui/portal';
import { XMessageComponent } from './message.component';

/**
 * Message
 * @selector x-message
 * @decorator component
 */
export const XMessagePrefix = 'x-message';

export const XMessagePortal = 'x-message-portal';

/**
 * Message Option
 */
export interface XMessageOption extends XAlertOption {
  /**
   * @zh_CN 方位，九宫格
   * @en_US Direction, nine grid
   * @default 'top'
   */
  placement?: XPlace;
  /**
   * @zh_CN 偏移距离
   * @en_US Offset distance
   * @default '2rem'
   */
  offset?: string | string[];
  /**
   * @zh_CN 类型
   * @en_US Types of
   * @default 'info'
   */
  type?: XMessageType;
  /**
   * @zh_CN 宽度
   * @en_US Width
   * @default '16rem'
   */
  width?: string;
  /**
   * @zh_CN 高度
   * @en_US Height
   */
  height?: string;
  /**
   * @zh_CN 延迟关闭时间
   * @en_US Delay off time
   * @default 3000
   */
  duration?: number;
  /**
   * @zh_CN 隐藏关闭按钮
   * @en_US Hide close button
   * @default true
   */
  hideClose?: boolean;
  /**
   * @zh_CN 显示图标
   * @en_US Show icon
   * @default true;
   */
  showIcon?: boolean;
  /**
   * @zh_CN 延迟关闭订阅后的对象，用来释放或取消
   * @en_US Delayed closing the subscribed object, used to release or cancel
   */
  duration$?: Subscription | null;
  /**
   * @zh_CN 延迟关闭订阅对象
   * @en_US Delay in closing the subscription object
   */
  durationSub?: Subject<any>;
}

/**
 * @zh_CN 创建的消息对象
 * @en_US Message object created
 */
export interface XMessageOverlayRef extends XPortalOverlayRef<XMessageComponent> {}

/**
 * @zh_CN 九宫格中的消息对象
 * @en_US Message object in Jiugongge
 */
export interface XMessagePlacement {
  [property: string]: XMessageRef;
}

export interface XMessageRef {
  ref?: XMessageOverlayRef;
  list?: XMessageOption[];
}

/**
 * @zh_CN 类型
 * @en_US Types of
 */
export type XMessageType = XStatus;
