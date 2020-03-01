# Result Banner features

* Renders one of three types of result banner: correct, incorrect and undecided.
* Displays appropriate title and text for correct and incorrect result banner.
* Undecided result banner displays button which by default is inactive.

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
