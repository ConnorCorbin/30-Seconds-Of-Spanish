import React from 'react';

import ResultBanner from 'components/result-banner/result-banner';

export default {
  'resultBanner-1': <ResultBanner correctResultTitle="Correct Result!" correctResultText="Well Done." incorrectResultTitle="Correct Result:" incorrectResultText="Better luck next time!" buttonText="Check Result" bannerType="undecided" isActive={false} />,
  'resultBanner-2': <ResultBanner correctResultTitle="Correct Result!" correctResultText="Well Done." incorrectResultTitle="Correct Result:" incorrectResultText="Better luck next time!" buttonText="Check Result" bannerType="correct" isActive={false} />,
  'resultBanner-3': <ResultBanner correctResultTitle="Correct Result!" correctResultText="Well Done." incorrectResultTitle="Correct Result:" incorrectResultText="Better luck next time!" buttonText="Check Result" bannerType="incorrect" isActive={false} />,
};
