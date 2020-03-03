import imageConfigs from 'components/image/config/image.config';
import imageBannerConfigs from 'components/image-banner/config/image-banner.config';
import multipleChoiceQuestionConfigs from 'components/multiple-choice-question/config/multiple-choice-question.config';
import resultBannerConfigs from 'components/result-banner/config/result-banner.config';
import textInputConfigs from 'components/text-input/config/text-input.config';
import challengeHeader from 'components/question-header/config/challenge-header.config';

export default {
  ...imageConfigs,
  ...imageBannerConfigs,
  ...multipleChoiceQuestionConfigs,
  ...resultBannerConfigs,
  ...textInputConfigs,
  ...challengeHeader,
};
