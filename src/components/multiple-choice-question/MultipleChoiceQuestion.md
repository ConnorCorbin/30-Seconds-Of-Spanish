# Multiple Choice Question features

* Ability to set question title and text.
* Pass array of possible answers consumer can pick.
* Set correct result title and text.
* Set incorrect result title and text.

Consumed components:

* ResultBanner

## Data Model

| Configurable Fields | Type | Component | Default | Description |
| ------------------- | ---- | --------- | ------- | ----------- |
| titleText | `string` | MultipleChoiceQuestion | | Question title such as `Mark the correct one` |
| questionText | `string` | MultipleChoiceQuestion | | Question text such as `One, Two, Three!` |
| possibleAnswers | `array` | MultipleChoiceQuestion | | Array of possible answers for question |
| correctAnswer | `array` | MultipleChoiceQuestion | | Correct answer for question |
| buttonText | `string` | ResultBanner | | Text for undecided result banner button |
| correctResultTitle | `string` | ResultBanner | | Correct answer title |
| correctResultText | `string` | ResultBanner | | Correct answer text |
| incorrectResultTitle | `string` | ResultBanner | | Incorrect answer title |
| incorrectResultText | `string` | ResultBanner | | Incorrect answer text |
