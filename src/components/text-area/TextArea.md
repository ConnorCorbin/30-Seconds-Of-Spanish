# Text Area component

Text Area features:

* Render textArea HTML element
* If `spanish` is passed in for `language` prop, lang attribute on textarea HTML element will be `es`.
* If `english` is passed in for `language` prop, lang attribute on textarea HTML element will be `en`.

Consumed components:

* None

## Data Model

| Configurable Fields | Type | Component | Default | Description |
| ------------------- | ---- | --------- | ------- | ----------- |
| language | `string` | TextArea | `spanish` | Value used for `lang` textarea attribute. Restricted values: `spanish`, `english` |
| onChangeFunction | `func` | TextArea | | Function executed when value of textarea changes|
| onKeyPressFunction | `func` | TextArea | | Function executed when key is pressed |
| isTextAreaDisabled | `bool` | TextArea | | Is textarea disabled. If `true`, no text can be written in textarea |
