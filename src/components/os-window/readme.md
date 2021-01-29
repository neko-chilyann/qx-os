# os-window



<!-- Auto Generated Below -->


## Properties

| Property     | Attribute | Description | Type               | Default     |
| ------------ | --------- | ----------- | ------------------ | ----------- |
| `controller` | --        | window控制器   | `WindowController` | `undefined` |


## Dependencies

### Used by

 - [os-desktop](../os-desktop)

### Depends on

- [os-background-img](../os-background-img)
- [os-window-title](../os-window-title)

### Graph
```mermaid
graph TD;
  os-window --> os-background-img
  os-window --> os-window-title
  os-desktop --> os-window
  style os-window fill:#f9f,stroke:#333,stroke-width:4px
```

----------------------------------------------

*Built with [StencilJS](https://stenciljs.com/)*
