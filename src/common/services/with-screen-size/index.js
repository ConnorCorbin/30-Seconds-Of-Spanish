import React, { PureComponent } from 'react';

import { SCREEN_SIZES, MEDIA_DEFAULTS, getEmFromPx } from 'common/services/dimensions-service';

const {
  SMALL,
  MEDIUM,
  LARGE,
} = SCREEN_SIZES;

export default (Component) => class SizeDetector extends PureComponent {
  state = {
    currentSize: SMALL,
  };

  componentDidMount() {
    this.handleResize();
    window.addEventListener('resize', this.handleResize);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize);
  }

  getCurrentSize = () => {
    const currentWidth = getEmFromPx(window.innerWidth);
    if (currentWidth < MEDIA_DEFAULTS.MEDIUM) {
      return SMALL;
    }
    if (currentWidth < MEDIA_DEFAULTS.LARGE) {
      return MEDIUM;
    }
    return LARGE;
  };

  handleResize = () => {
    const currentSize = this.getCurrentSize();
    if (currentSize !== this.state.currentSize) {
      this.setState(() => ({
        currentSize,
      }));
    }
  };

  render() {
    return <Component currentSize={this.state.currentSize} {...this.props} />;
  }
};
