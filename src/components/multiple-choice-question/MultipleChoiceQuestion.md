# Multiple Choice Question features

* Ability to set question title and text.
* Pass array of possible answers consumer can pick.
* Set correct result title and text.
* Set incorrect result title and text.

Consumed components:

* ChallengeHeader
* ResultBanner

## Data Model

| Configurable Fields | Type | Component | Default | Description |
| ------------------- | ---- | --------- | ------- | ----------- |
| possibleAnswers | `array` | MultipleChoiceQuestion | | Array of possible answers for question |
| correctAnswer | `array` | MultipleChoiceQuestion | | Correct answer for question |
| buttonText | `string` | ResultBanner | | Text for undecided result banner button |
| questionTitle | `string` | ChallengeHeader | | Question title such as `Mark the correct one` |
| questionText | `string` | ChallengeHeader | | Question text such as `One, Two, Three!` |
| correctResultTitle | `string` | ResultBanner | | Correct answer title |
| correctResultText | `string` | ResultBanner | | Correct answer text |
| incorrectResultTitle | `string` | ResultBanner | | Incorrect answer title |
| incorrectResultText | `string` | ResultBanner | | Incorrect answer text |
