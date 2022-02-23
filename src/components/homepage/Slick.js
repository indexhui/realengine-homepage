import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import styled from '@emotion/styled';

import SlickArrow from './SlickArrow';

const StyledSlider = styled(Slider)`
.slick-track {
  display: flex;
}

.slick-slide {
  height: inherit;
  > div {
    height: 100%;
  }
}
`

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: false,
  slidesToShow: 3,
  slidesToScroll: 3,
  nextArrow: <SlickArrow isLeft={false} />,
  prevArrow: <SlickArrow isLeft={true} />,
  responsive: [
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        arrows: false,
      },
    },
  ],
};

const Slick = props => {
  return (
    <StyledSlider {...settings} {...props}>
      {props.children}
    </StyledSlider>
  );
};

export default Slick;
