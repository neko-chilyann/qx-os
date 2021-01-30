# os-main



<!-- Auto Generated Below -->


## Dependencies

### Depends on

- [os-desktop](../os-desktop)

### Graph
```mermaid
graph TD;
  os-main --> os-desktop
  os-desktop --> os-window
  os-desktop --> os-background-img
  os-desktop --> os-desktop-panel
  os-desktop --> os-taskbar
  os-window --> os-background-img
  os-window --> os-window-title
  os-window --> ion-icon
  os-taskbar --> os-window-tasks
  style os-main fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
