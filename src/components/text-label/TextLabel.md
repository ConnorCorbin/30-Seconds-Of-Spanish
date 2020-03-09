# Text Label component

Text Label features:

* Render label with passed in text
* Pass both onClick and onKeyPress functions to execute when onClick and onKeyPress event is fired

Consumed components:

* None

## Data Model

| Configurable Fields | Type | Component | Default | Description |
| ------------------- | ---- | --------- | ------- | ----------- |
| labelText | `string` | TextLabel | | Label text |
| isLabelActive | `bool` | TextLabel | | Boolean value used to determine active and non-active CSS styles |
| isAnswerSubmitted | `bool` | TextLabel | | Boolean value used to determine active and non-active CSS styles |
| onClickFunction | `func` | TextLabel | | Function which is executed when labels onClick event is fired |
| onKeyPressFunction | `func` | TextLabel | | Function which is executed when labels onChange event is fired |
