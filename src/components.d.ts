/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from "@stencil/core/internal";
import { DesktopController, WindowController } from "./controller";
export namespace Components {
    interface OsBackgroundImg {
        /**
          * 背景颜色
          * @default 'black'
          * @type {string}
          * @memberof OsBackgroundImg
         */
        "color": string;
        /**
          * 背景图片
          * @memberof OsBackgroundImg
         */
        "img": string;
        "showMode": 'image' | 'color';
    }
    interface OsContextMenu {
        /**
          * 是否悬浮
          * @return {Promise<boolean>}
          * @memberof OsContextMenu
         */
        "isHover": () => Promise<boolean>;
        /**
          * 菜单数据
          * @type {any[]}
          * @memberof OsContextMenu
         */
        "menus": any[];
        /**
          * 显示菜单
          * @param e
          * @return {Promise<void>}
          * @memberof OsContextMenu
         */
        "show": (e: MouseEvent) => Promise<void>;
    }
    interface OsDesktop {
        /**
          * 桌面控制
          * @memberof OsDesktop
         */
        "controller": DesktopController;
    }
    interface OsDesktopPanel {
        "desktop": DesktopController;
    }
    interface OsDrawer {
        /**
          * 抽屉打开方向
          * @type {('top' | 'right' | 'bottom' | 'left')}
          * @memberof OsDrawer
         */
        "position": 'top' | 'right' | 'bottom' | 'left';
        /**
          * 显示层级
          * @type {number}
          * @memberof OsDrawer
         */
        "zIndex": number;
    }
    interface OsMain {
    }
    interface OsPopper {
    }
    interface OsTaskbar {
        /**
          * 桌面控制器
          * @type {DesktopController}
          * @memberof OsTaskbar
         */
        "desktop": DesktopController;
    }
    interface OsWindow {
        /**
          * window控制器
          * @memberof OsWindow
         */
        "controller": WindowController;
    }
    interface OsWindowHeaderToolbar {
    }
    interface OsWindowTasks {
        /**
          * 桌面控制器
          * @type {DesktopController}
          * @memberof OsTaskbar
         */
        "desktop": DesktopController;
    }
    interface OsWindowTitle {
        /**
          * 标题
          * @type {string}
          * @memberof OsWindowTitle
         */
        "caption": string;
    }
}
declare global {
    interface HTMLOsBackgroundImgElement extends Components.OsBackgroundImg, HTMLStencilElement {
    }
    var HTMLOsBackgroundImgElement: {
        prototype: HTMLOsBackgroundImgElement;
        new (): HTMLOsBackgroundImgElement;
    };
    interface HTMLOsContextMenuElement extends Components.OsContextMenu, HTMLStencilElement {
    }
    var HTMLOsContextMenuElement: {
        prototype: HTMLOsContextMenuElement;
        new (): HTMLOsContextMenuElement;
    };
    interface HTMLOsDesktopElement extends Components.OsDesktop, HTMLStencilElement {
    }
    var HTMLOsDesktopElement: {
        prototype: HTMLOsDesktopElement;
        new (): HTMLOsDesktopElement;
    };
    interface HTMLOsDesktopPanelElement extends Components.OsDesktopPanel, HTMLStencilElement {
    }
    var HTMLOsDesktopPanelElement: {
        prototype: HTMLOsDesktopPanelElement;
        new (): HTMLOsDesktopPanelElement;
    };
    interface HTMLOsDrawerElement extends Components.OsDrawer, HTMLStencilElement {
    }
    var HTMLOsDrawerElement: {
        prototype: HTMLOsDrawerElement;
        new (): HTMLOsDrawerElement;
    };
    interface HTMLOsMainElement extends Components.OsMain, HTMLStencilElement {
    }
    var HTMLOsMainElement: {
        prototype: HTMLOsMainElement;
        new (): HTMLOsMainElement;
    };
    interface HTMLOsPopperElement extends Components.OsPopper, HTMLStencilElement {
    }
    var HTMLOsPopperElement: {
        prototype: HTMLOsPopperElement;
        new (): HTMLOsPopperElement;
    };
    interface HTMLOsTaskbarElement extends Components.OsTaskbar, HTMLStencilElement {
    }
    var HTMLOsTaskbarElement: {
        prototype: HTMLOsTaskbarElement;
        new (): HTMLOsTaskbarElement;
    };
    interface HTMLOsWindowElement extends Components.OsWindow, HTMLStencilElement {
    }
    var HTMLOsWindowElement: {
        prototype: HTMLOsWindowElement;
        new (): HTMLOsWindowElement;
    };
    interface HTMLOsWindowHeaderToolbarElement extends Components.OsWindowHeaderToolbar, HTMLStencilElement {
    }
    var HTMLOsWindowHeaderToolbarElement: {
        prototype: HTMLOsWindowHeaderToolbarElement;
        new (): HTMLOsWindowHeaderToolbarElement;
    };
    interface HTMLOsWindowTasksElement extends Components.OsWindowTasks, HTMLStencilElement {
    }
    var HTMLOsWindowTasksElement: {
        prototype: HTMLOsWindowTasksElement;
        new (): HTMLOsWindowTasksElement;
    };
    interface HTMLOsWindowTitleElement extends Components.OsWindowTitle, HTMLStencilElement {
    }
    var HTMLOsWindowTitleElement: {
        prototype: HTMLOsWindowTitleElement;
        new (): HTMLOsWindowTitleElement;
    };
    interface HTMLElementTagNameMap {
        "os-background-img": HTMLOsBackgroundImgElement;
        "os-context-menu": HTMLOsContextMenuElement;
        "os-desktop": HTMLOsDesktopElement;
        "os-desktop-panel": HTMLOsDesktopPanelElement;
        "os-drawer": HTMLOsDrawerElement;
        "os-main": HTMLOsMainElement;
        "os-popper": HTMLOsPopperElement;
        "os-taskbar": HTMLOsTaskbarElement;
        "os-window": HTMLOsWindowElement;
        "os-window-header-toolbar": HTMLOsWindowHeaderToolbarElement;
        "os-window-tasks": HTMLOsWindowTasksElement;
        "os-window-title": HTMLOsWindowTitleElement;
    }
}
declare namespace LocalJSX {
    interface OsBackgroundImg {
        /**
          * 背景颜色
          * @default 'black'
          * @type {string}
          * @memberof OsBackgroundImg
         */
        "color"?: string;
        /**
          * 背景图片
          * @memberof OsBackgroundImg
         */
        "img"?: string;
        "showMode"?: 'image' | 'color';
    }
    interface OsContextMenu {
        /**
          * 菜单数据
          * @type {any[]}
          * @memberof OsContextMenu
         */
        "menus"?: any[];
    }
    interface OsDesktop {
        /**
          * 桌面控制
          * @memberof OsDesktop
         */
        "controller"?: DesktopController;
    }
    interface OsDesktopPanel {
        "desktop"?: DesktopController;
    }
    interface OsDrawer {
        /**
          * 抽屉打开方向
          * @type {('top' | 'right' | 'bottom' | 'left')}
          * @memberof OsDrawer
         */
        "position"?: 'top' | 'right' | 'bottom' | 'left';
        /**
          * 显示层级
          * @type {number}
          * @memberof OsDrawer
         */
        "zIndex"?: number;
    }
    interface OsMain {
    }
    interface OsPopper {
    }
    interface OsTaskbar {
        /**
          * 桌面控制器
          * @type {DesktopController}
          * @memberof OsTaskbar
         */
        "desktop"?: DesktopController;
    }
    interface OsWindow {
        /**
          * window控制器
          * @memberof OsWindow
         */
        "controller"?: WindowController;
    }
    interface OsWindowHeaderToolbar {
    }
    interface OsWindowTasks {
        /**
          * 桌面控制器
          * @type {DesktopController}
          * @memberof OsTaskbar
         */
        "desktop"?: DesktopController;
    }
    interface OsWindowTitle {
        /**
          * 标题
          * @type {string}
          * @memberof OsWindowTitle
         */
        "caption"?: string;
    }
    interface IntrinsicElements {
        "os-background-img": OsBackgroundImg;
        "os-context-menu": OsContextMenu;
        "os-desktop": OsDesktop;
        "os-desktop-panel": OsDesktopPanel;
        "os-drawer": OsDrawer;
        "os-main": OsMain;
        "os-popper": OsPopper;
        "os-taskbar": OsTaskbar;
        "os-window": OsWindow;
        "os-window-header-toolbar": OsWindowHeaderToolbar;
        "os-window-tasks": OsWindowTasks;
        "os-window-title": OsWindowTitle;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "os-background-img": LocalJSX.OsBackgroundImg & JSXBase.HTMLAttributes<HTMLOsBackgroundImgElement>;
            "os-context-menu": LocalJSX.OsContextMenu & JSXBase.HTMLAttributes<HTMLOsContextMenuElement>;
            "os-desktop": LocalJSX.OsDesktop & JSXBase.HTMLAttributes<HTMLOsDesktopElement>;
            "os-desktop-panel": LocalJSX.OsDesktopPanel & JSXBase.HTMLAttributes<HTMLOsDesktopPanelElement>;
            "os-drawer": LocalJSX.OsDrawer & JSXBase.HTMLAttributes<HTMLOsDrawerElement>;
            "os-main": LocalJSX.OsMain & JSXBase.HTMLAttributes<HTMLOsMainElement>;
            "os-popper": LocalJSX.OsPopper & JSXBase.HTMLAttributes<HTMLOsPopperElement>;
            "os-taskbar": LocalJSX.OsTaskbar & JSXBase.HTMLAttributes<HTMLOsTaskbarElement>;
            "os-window": LocalJSX.OsWindow & JSXBase.HTMLAttributes<HTMLOsWindowElement>;
            "os-window-header-toolbar": LocalJSX.OsWindowHeaderToolbar & JSXBase.HTMLAttributes<HTMLOsWindowHeaderToolbarElement>;
            "os-window-tasks": LocalJSX.OsWindowTasks & JSXBase.HTMLAttributes<HTMLOsWindowTasksElement>;
            "os-window-title": LocalJSX.OsWindowTitle & JSXBase.HTMLAttributes<HTMLOsWindowTitleElement>;
        }
    }
}
