# Result Banner component

ResultBanner features:

* Renders undecided, correct and incorrect Result Banner based on answer status
* Displays appropriate Title dependng on Result Banner rendered

Consumed components:

* None

## Data Model

| Configurable Fields | Type | Component | Default | Description |
| ------------------- | ---- | --------- | ------- | ----------- |
| correctTitle | `string` | ResultBanner | | Correct answer title |
| correctText | `string` | ResultBanner | | Correct answer text |
| incorrectTitle | `string` | ResultBanner | | Incorrect answer title |
| incorrectText | `string` | ResultBanner | | Incorrect answer text |
| answerStatus | `string` | ResultBanner | `undecided` | Status of Answer: `correct`, `incorrect` and `undecided` |
| onClickFunction | `func` | ResultBanner | | Function which is executed when undecided result banner button is clicked |
| buttonText | `string` | ResultBanner | | Text for undecided result banner button |
| isActive | `bool` | ResultBanner | `false` | Should button be clickable for undecided result banner |
