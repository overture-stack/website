import React from 'react';

export default class ImageCrossfade extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      topSrc: props.src,
      bottomOpacity: 0,
      bottomSrc: props.src,
    };
  }
  componentWillReceiveProps(newProps) {
    const oldSrc = this.state.topSrc;
    const newSrc = newProps.src;
    if (newSrc !== oldSrc) {
      // Reset the component everytime we receive new prop, to
      // cancel out any animation that's still going on
      this.setState({ bottomSrc: false, topSrc: false }, () =>
        this.setState(
          // Opacity less than 1 takes precendence in stacking order
          { bottomSrc: oldSrc, topSrc: newSrc, bottomOpacity: 0.99 },
          () => {
            if (!this.timeout) clearTimeout(this.timeout);
            this.timeout = setTimeout(() => this.setState({ bottomOpacity: 0 }), 20);
          }
        )
      );
    }
  }
  render() {
    const { duration, timingFunction, delay, style, alt = '' } = this.props;
    const { topSrc, bottomOpacity, bottomSrc } = this.state;
    // Styles
    const topImgStyle = {
      ...defaultStyle,
      ...style,
      ...{ position: 'absolute' },
    };
    const btmImageStyles = {
      ...defaultStyle,
      style,
      ...{
        opacity: bottomOpacity,
        transition: `opacity ${duration / 1000}s ${timingFunction} ${delay / 1000}s`,
      },
    };
    return (
      <div style={{ ...defaultStyle, ...{ position: 'relative' } }}>
        {topSrc && <img style={topImgStyle} src={topSrc} alt={alt} />}
        {bottomSrc && <img style={btmImageStyles} src={bottomSrc} alt={alt} />}
      </div>
    );
  }
}

ImageCrossfade.defaultProps = {
  duration: 500,
  timingFunction: 'ease',
  delay: 0,
};

const defaultStyle = { maxWidth: '100%', maxHeight: '100%' };
