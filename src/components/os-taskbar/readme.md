# os-taskbar



<!-- Auto Generated Below -->


## Properties

| Property  | Attribute | Description | Type                | Default     |
| --------- | --------- | ----------- | ------------------- | ----------- |
| `desktop` | --        | 桌面控制器       | `DesktopController` | `undefined` |


## Dependencies

### Used by

 - [os-desktop](../os-desktop)

### Depends on

- [os-window-tasks](../os-window-tasks)

### Graph
```mermaid
graph TD;
  os-taskbar --> os-window-tasks
  os-window-tasks --> ion-icon
  os-desktop --> os-taskbar
  style os-taskbar fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
