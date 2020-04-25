# Translate Text Question component

**Translate Text Question features:**

* Renders Translate text question component
* Question can be English to Spanish translation or Spanish to English translation

Consumed components:

* ChallengeHeader
* ResultBanner

## Data Model

| Configurable Fields | Type | Component | Default | Description |
| ------------------- | ---- | --------- | ------- | ----------- |
| correctAnswer | `string` | TranslateTextQuestion | | The correct answer for the question |
| typedInLanguage | `string` | TranslateTextQuestion | | Value used for `lang` textarea attribute. Restricted values: `spanish`, `english` |
| questionTitle | `string` | ChallengeHeader | | Title of the question |
| questionText | `string` | ChallengeHeader | | text containing the question |
| buttonText | `string` | ResultBanner | | Text for undecided result banner button |
| correctTitle | `string` | ResultBanner | | Correct answer title for correct result banner |
| correctText | `string` | ResultBanner | | Correct answer text for correct result banner |
| incorrectTitle | `string` | ResultBanner | | Incorrect answer title for incorrect result banner |
| incorrectText | `string` | ResultBanner | | Incorrect answer text for incorrect result banner |
