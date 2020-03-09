# Multiple Choice Question component

Multiple Choice Question features:

* Render multiple choice question
* Set ChallengeHeader question title and question text
* Set range of possible answers consumers can select
* set the correct answer to the question
* Set the correct result banner title and text
* Set the incorrect result banner title and text

Consumed components:

* ChallengeHeader
* TextLabel
* ResultBanner

## Data Model

| Configurable Fields | Type | Component | Default | Description |
| ------------------- | ---- | --------- | ------- | ----------- |
| possibleAnswers | `array` | MultipleChoiceQuestion | | A array of possible answer consumers can pick from |
| correctAnswer | `string` | MultipleChoiceQuestion | | The correct answer for the question |
| questionTitle | `string` | ChallengeHeader | | Title of the question |
| questionText | `string` | ChallengeHeader | | text containing the question |
| buttonText | `string` | ResultBanner | | Text for undecided result banner button |
| correctResultTitle | `string` | ResultBanner | | Correct answer title for correct result banner |
| correctResultText | `string` | ResultBanner | | Correct answer text for correct result banner |
| incorrectResultTitle | `string` | ResultBanner | | Incorrect answer title for incorrect result banner |
| incorrectResultText | `string` | ResultBanner | | Incorrect answer text for incorrect result banner |
