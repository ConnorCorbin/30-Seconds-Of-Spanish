Message Box features:

* Renders either correct or incorrect message with correct color theme.
* Correct message has one title and text
* Incorrect message has two titles and texts

Consumed components:

* None

## Data Model

| Configurable Fields | Type | Component | Default | Description |
| ------------------- | ---- | --------- | ------- | ----------- |
| correctTitle1 | `string` | MessageBox | | First title text for when answer is correct. |
| correctText1 | `string` | MessageBox | | First text for under title for when answer is correct. |
| incorrectTitle1 | `string` | MessageBox | | First title text for when answer is incorrect. |
| incorrectText1 | `string` | MessageBox | | First text for under title for when answer is incorrect. |
| incorrectTitle2 | `string` | MessageBox | | Second title text for when answer is incorrect. |
| incorrectText2 | `string` | MessageBox | | Second text for under title for when answer is incorrect. |
| isAnswerCorrect | `bool` | MessageBox | `false` | Should color theme be for correct or incorrect answer. `false` causes incorrect color theme to be displayed, `true` causes correct color theme. |
