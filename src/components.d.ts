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
          * 背景图片
          * @memberof OsBackgroundImg
         */
        "img": string;
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
    interface OsMain {
    }
    interface OsTaskbar {
        "desktop": DesktopController;
    }
    interface OsWindow {
        /**
          * window控制器
          * @memberof OsWindow
         */
        "controller": WindowController;
    }
}
declare global {
    interface HTMLOsBackgroundImgElement extends Components.OsBackgroundImg, HTMLStencilElement {
    }
    var HTMLOsBackgroundImgElement: {
        prototype: HTMLOsBackgroundImgElement;
        new (): HTMLOsBackgroundImgElement;
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
    interface HTMLOsMainElement extends Components.OsMain, HTMLStencilElement {
    }
    var HTMLOsMainElement: {
        prototype: HTMLOsMainElement;
        new (): HTMLOsMainElement;
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
    interface HTMLElementTagNameMap {
        "os-background-img": HTMLOsBackgroundImgElement;
        "os-desktop": HTMLOsDesktopElement;
        "os-desktop-panel": HTMLOsDesktopPanelElement;
        "os-main": HTMLOsMainElement;
        "os-taskbar": HTMLOsTaskbarElement;
        "os-window": HTMLOsWindowElement;
    }
}
declare namespace LocalJSX {
    interface OsBackgroundImg {
        /**
          * 背景图片
          * @memberof OsBackgroundImg
         */
        "img"?: string;
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
    interface OsMain {
    }
    interface OsTaskbar {
        "desktop"?: DesktopController;
    }
    interface OsWindow {
        /**
          * window控制器
          * @memberof OsWindow
         */
        "controller"?: WindowController;
    }
    interface IntrinsicElements {
        "os-background-img": OsBackgroundImg;
        "os-desktop": OsDesktop;
        "os-desktop-panel": OsDesktopPanel;
        "os-main": OsMain;
        "os-taskbar": OsTaskbar;
        "os-window": OsWindow;
    }
}
export { LocalJSX as JSX };
declare module "@stencil/core" {
    export namespace JSX {
        interface IntrinsicElements {
            "os-background-img": LocalJSX.OsBackgroundImg & JSXBase.HTMLAttributes<HTMLOsBackgroundImgElement>;
            "os-desktop": LocalJSX.OsDesktop & JSXBase.HTMLAttributes<HTMLOsDesktopElement>;
            "os-desktop-panel": LocalJSX.OsDesktopPanel & JSXBase.HTMLAttributes<HTMLOsDesktopPanelElement>;
            "os-main": LocalJSX.OsMain & JSXBase.HTMLAttributes<HTMLOsMainElement>;
            "os-taskbar": LocalJSX.OsTaskbar & JSXBase.HTMLAttributes<HTMLOsTaskbarElement>;
            "os-window": LocalJSX.OsWindow & JSXBase.HTMLAttributes<HTMLOsWindowElement>;
        }
    }
}
