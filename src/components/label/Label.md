# Label component

Label features:

* Render text label containing only text
* Render image label containing image and text
* Pass both onClick and onKeyPress functions to execute when onClick or onKeyPress event is fired

Consumed components:

* None

## Data Model

| Configurable Fields | Type | Component | Default | Description |
| ------------------- | ---- | --------- | ------- | ----------- |
| labelText | `string` | Label | | Label text |
| imageUrl | `string` | Label | | Image alt tag |
| imageAltTag | `string` | Label | | Image alt tag |
| isLabelActive | `bool` | Label | | Boolean value used to determine active and non-active CSS styles |
| isAnswerSubmitted | `bool` | Label | | Boolean value used to determine active and non-active CSS styles |
| onClickFunction | `func` | Label | | Function which is executed when labels onClick event is fired |
| onKeyPressFunction | `func` | Label | | Function which is executed when labels onChange event is fired |
