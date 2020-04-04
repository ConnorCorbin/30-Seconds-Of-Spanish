import React from 'react';

import ResultBanner from 'components/result-banner/result-banner';

export default {
  'resultBanner-1': <ResultBanner correctTitle="Correct Result!" correctText="Well Done." incorrectTitle="Correct Result:" incorrectText="Better luck next time!" buttonText="Check Result" answerStatus="undecided" isActive={false} />,
  'resultBanner-2': <ResultBanner correctTitle="Correct Result!" correctText="Well Done." incorrectTitle="Correct Result:" incorrectText="Better luck next time!" buttonText="Check Result" answerStatus="correct" isActive={false} />,
  'resultBanner-3': <ResultBanner correctTitle="Correct Result!" correctText="Well Done." incorrectTitle="Correct Result:" incorrectText="Better luck next time!" buttonText="Check Result" answerStatus="incorrect" isActive={false} />,
};
