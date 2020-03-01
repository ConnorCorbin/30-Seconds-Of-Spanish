# TestComponent features

* Searches localhost URL for `component` parameter which is compared with object key name which value contains a React component with example prop values.
* Renders Raect component based on specified config file in component folder.

Consumed components:

* None

## Data Model

| Configurable Fields | Type | Component | Default | Description |
| ------------------- | ---- | --------- | ------- | ----------- |
| componentName | `string` | TestComponent | | Component name which is passed in `component` parameter in URL |
