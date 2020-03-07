# Result Banner component

ResultBanner features:

* Renders undecided, correct and incorrect Result Banner based on answer status
* Displayes appropriate Title dependng on Result Banner rendered

Consumed components:

* None

## Data Model

| Configurable Fields | Type | Component | Default | Description |
| ------------------- | ---- | --------- | ------- | ----------- |
| correctResultTitle | `string` | ResultBanner | | Correct answer title |
| correctResultText | `string` | ResultBanner | | Correct answer text |
| incorrectResultTitle | `string` | ResultBanner | | Incorrect answer title |
| incorrectResultText | `string` | ResultBanner | | Incorrect answer text |
| bannerType | `string` | ResultBanner | `undecided` | Banner type: `correct`, `incorrect` and `undecided` |
| onClickFunction | `func` | ResultBanner | | Function which is executed when undecided result banner button is clicked |
| buttonText | `string` | ResultBanner | | Text for undecided result banner button |
| isActive | `bool` | ResultBanner | `false` | Should button be clickable for undecided result banner |
