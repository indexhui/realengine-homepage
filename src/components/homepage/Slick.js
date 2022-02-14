import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import SlickArrow from './SlickArrow';

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  autoplay: true,
  slidesToShow: 4,
  slidesToScroll: 1,
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
    <Slider {...settings} {...props}>
      {props.children}
    </Slider>
  );
};

export default Slick;
