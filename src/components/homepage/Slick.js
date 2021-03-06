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
  .slick-dots li button:before {
    color: rgba(0, 0, 0, 0);
    border: 1px solid white;
    border-radius: 50px;
    opacity: 1 !important;
    padding: 0px !important;
  }
  .slick-dots li.slick-active button:before {
    padding: 0px !important;
    background: white;
  }
`;

const settings = {
  dots: false,
  infinite: true,
  speed: 1000,
  autoplay: false,
  slidesToShow: 3,
  slidesToScroll: 1,
  nextArrow: <SlickArrow isLeft={false} />,
  prevArrow: <SlickArrow isLeft={true} />,
  responsive: [
    {
      breakpoint: 600,
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
