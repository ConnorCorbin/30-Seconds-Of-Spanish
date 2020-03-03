# Text Input features

* Renders textarea allowing for user input.
* If `en` passed in for language prop, `Type in English` placeholder text is used.
* If `es` passed in for language prop, `Type in Spanish` placeholder text is used.

Consumed components:

* None

## Data Model

| Configurable Fields | Type | Component | Default | Description |
| ------------------- | ---- | --------- | ------- | ----------- |
| language | `string` | ResultBanner | `es` | Value used for `lang` textarea attribute. Restricted values: `es`, `en` |
