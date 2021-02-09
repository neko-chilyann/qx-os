# os-desktop



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute | Description | Type                | Default     |
| ------------ | --------- | ----------- | ------------------- | ----------- |
| `controller` | --        | 桌面控制        | `DesktopController` | `undefined` |


## Dependencies

### Used by

 - [os-main](../os-main)

### Depends on

- [os-window](../os-window)
- [os-background-img](../os-background-img)
- [os-desktop-panel](../os-desktop-panel)
- [os-taskbar](../os-taskbar)

### Graph
```mermaid
graph TD;
  os-desktop --> os-window
  os-desktop --> os-background-img
  os-desktop --> os-desktop-panel
  os-desktop --> os-taskbar
  os-window --> os-background-img
  os-window --> os-window-title
  os-window --> ion-icon
  os-taskbar --> os-window-tasks
  os-window-tasks --> ion-icon
  os-main --> os-desktop
  style os-desktop fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
