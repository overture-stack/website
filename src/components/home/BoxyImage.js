import React from 'react';
import { TweenMax as Tween } from 'gsap';

class BoxyImage extends React.Component {
  tween = null;
  startAnimating() {
    this.tween = Tween.to(this.el, 1, {
      opacity: 1,
      y: 0,
      ease: Sine.easeOut,
      onComplete: () => {
        this.tween = Tween.to(this.el, 2, {
          ease: Sine.easeInOut,
          y: 10,
          repeat: -1,
          yoyo: true,
        });
      },
    });
  }
  stopAnimating() {
    if (this.tween) {
      this.tween.kill();
      this.tween = null;
    }
  }
  componentDidMount() {
    Tween.set(this.el, {
      opacity: 0,
      y: 20,
    });
  }
  componentWillUnmount() {
    this.stopAnimating();
  }
  componentDidUpdate(prevProps, prevState) {
    if (prevProps.shouldAnimate !== this.props.shouldAnimate) {
      if (this.props.shouldAnimate) {
        this.startAnimating();
      } else {
        this.stopAnimating();
      }
    }
  }
  render() {
    const { shouldAnimate, ...props } = this.props;
    return (
      <svg
        viewBox="0 0 224 187"
        xmlns="http://www.w3.org/2000/svg"
        xmlnsXlink="http://www.w3.org/1999/xlink"
        ref={el => (this.el = el)}
        {...props}
      >
        <defs>
          <path id="about-us-path-1" d="M43.145.189v31.896H.492V.19h42.653z" />
          <path id="about-us-path-3" d="M43.145.189v31.896H.492V.19h42.653z" />
        </defs>
        <g id="final" fill="none" fillRule="evenodd">
          <g id="Artboard-Copy-7" transform="translate(-546 -2170)">
            <g id="Group" transform="translate(546 2170)">
              <g id="about-guy-left" transform="translate(0 113)">
                <g id="Group-3" transform="translate(21.163 10.284)">
                  <mask id="mask-2" fill="#fff">
                    <use xlinkHref="#about-us-path-1" />
                  </mask>
                  <path
                    d="M2.375 31.565a2.266 2.266 0 0 1-1.85-2.617c.213-1.232 1.374-2.034 2.62-1.847 8.091 1.39 16.236-.445 22.94-5.175C32.79 17.196 37.25 10.14 38.642 2.059 38.857.827 40.027.043 41.262.212a2.263 2.263 0 0 1 1.85 2.616c-1.598 9.274-6.716 17.37-14.412 22.8-7.23 5.1-15.925 7.27-24.65 6.185-.56-.07-1.117-.153-1.675-.248z"
                    id="Fill-1"
                    fill="#003055"
                    mask="url(#mask-2)"
                  />
                </g>
                <path
                  d="M29.03 73.713l-.734-31.96a13.948 13.948 0 0 0-.28-2.48c-.98-4.782-5.5-8.014-10.385-7.9l-7.247.166C5.5 31.65 1.132 35.086.373 39.907c-.129.81-.186 1.641-.167 2.49l.735 31.316"
                  id="Fill-4"
                  fill="#44C7F3"
                />
                <path
                  d="M3.122 42.852l-.439.084A2.268 2.268 0 0 1 .04 41.122c-.23-1.23.58-2.4 1.814-2.64C9.88 37 16.923 32.427 21.567 25.667c4.642-6.76 6.373-14.926 4.869-22.988C26.207 1.45 27.033.2 28.25.04a2.268 2.268 0 0 1 2.644 1.812c1.725 9.252-.26 18.62-5.589 26.379-5.244 7.638-13.11 12.818-22.184 14.622"
                  id="Fill-6"
                  fill="#003055"
                />
                <path
                  d="M15.3 26.42h-1.49a6.352 6.352 0 0 1-6.355-6.348v-8.53a6.352 6.352 0 0 1 6.355-6.349h1.49a6.352 6.352 0 0 1 6.354 6.35v8.529a6.352 6.352 0 0 1-6.355 6.349"
                  id="Fill-8"
                  fill="#44C7F3"
                />
              </g>
              <g id="about-guy-right" transform="translate(113 118)">
                <path
                  d="M8.858 41.114l-.438.085a2.268 2.268 0 0 1-2.644-1.814c-.23-1.23.579-2.4 1.814-2.641 8.027-1.482 15.07-6.053 19.713-12.813 4.642-6.76 6.373-14.927 4.869-22.988-.228-1.23.597-2.48 1.815-2.641A2.268 2.268 0 0 1 36.631.114c1.725 9.251-.26 18.62-5.588 26.379-5.244 7.638-13.11 12.818-22.185 14.621"
                  id="Fill-6"
                  fill="#003055"
                  transform="rotate(90 21.487 19.75)"
                />
                <path
                  d="M69.03 68.713l-.734-31.96a13.948 13.948 0 0 0-.28-2.48c-.98-4.782-5.5-8.014-10.385-7.9l-7.247.166c-4.884.111-9.252 3.547-10.011 8.368-.129.81-.186 1.641-.167 2.49l.735 31.316"
                  id="Fill-4"
                  fill="#44C7F3"
                />
                <path
                  d="M55.3 21.42h-1.49a6.352 6.352 0 0 1-6.355-6.348v-8.53A6.352 6.352 0 0 1 53.81.193h1.49a6.352 6.352 0 0 1 6.354 6.35v8.529a6.352 6.352 0 0 1-6.355 6.349"
                  id="Fill-8"
                  fill="#44C7F3"
                />
                <g id="Group-3" transform="rotate(-121 61.604 9.81)">
                  <mask id="mask-4" fill="#fff">
                    <use xlinkHref="#about-us-path-3" />
                  </mask>
                  <path
                    d="M2.375 31.565a2.266 2.266 0 0 1-1.85-2.617c.213-1.232 1.374-2.034 2.62-1.847 8.091 1.39 16.236-.445 22.94-5.175C32.79 17.196 37.25 10.14 38.642 2.059 38.857.827 40.027.043 41.262.212a2.263 2.263 0 0 1 1.85 2.616c-1.598 9.274-6.716 17.37-14.412 22.8-7.23 5.1-15.925 7.27-24.65 6.185-.56-.07-1.117-.153-1.675-.248z"
                    id="Fill-1"
                    fill="#003055"
                    mask="url(#mask-4)"
                  />
                </g>
              </g>
              <g id="about-box" transform="translate(32)">
                <path
                  id="Fill-1"
                  fill="#FEFEFE"
                  d="M0 114.458L50 143V85.542L0 57z"
                />
                <path
                  id="Fill-2"
                  fill="#4BC6F0"
                  d="M97.608 0L49.451 27.794l-.058-.034L0 56.266 49.393 84.72V142l48.215-27.776v.016L147 85.786v-57.28z"
                />
              </g>
            </g>
          </g>
        </g>
      </svg>
    );
  }
}

export default BoxyImage;
