import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Flex, Heading, Text, Icon } from '@chakra-ui/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import useSpace from '../hooks/useSpace';
import RevealFlex from '../components/homepage/RevealFlex';
import CardFeedback from '../components/homepage/CardFeedback';

const PrevArrow = props => {
  const { onClick } = props;
  return (
    <Flex
      w="50px"
      h="50px"
      border="1px solid #f3f5f8"
      rounded="full"
      align="center"
      justify="center"
      onClick={onClick}
      position="absolute"
      zIndex="1"
      top="30%"
      left="-60px"
      boxShadow="0 20px 30px 0 rgb(12 0 46 / 6%)"
      _hover={{ cursor: 'pointer', bg: '#1B9AA6' }}
      role="group"
    >
      <Icon
        w={8}
        h={8}
        as={FiChevronLeft}
        color="gray.400"
        _groupHover={{ color: 'white' }}
      />
    </Flex>
  );
};

const NextArrow = props => {
  const { onClick } = props;
  return (
    <Flex
      w="50px"
      h="50px"
      rounded="full"
      align="center"
      border="1px solid #f3f5f8"
      justify="center"
      onClick={onClick}
      position="absolute"
      zIndex="1"
      top="30%"
      right="-60px"
      boxShadow="0 20px 30px 0 rgb(12 0 46 / 6%)"
      _hover={{ cursor: 'pointer', bg: '#1B9AA6' }}
      role="group"
    >
      <Icon
        w={8}
        h={8}
        as={FiChevronRight}
        color="gray.400"
        _groupHover={{ color: 'white' }}
      />
    </Flex>
  );
};

const SectionFeedback = () => {
  const { space } = useSpace();
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
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

  return (
    <Flex w="100%" justify="center" py="40px" px="20px">
      <Flex w={space} align="center" direction="column">
        <RevealFlex>
          <Heading>粉絲回饋</Heading>
        </RevealFlex>
        <RevealFlex y="35" duration=".75">
          <Text py="20px">真實引擎的專案合作，喚起粉絲最深的情感連結</Text>
        </RevealFlex>
        <Flex
          w={{ base: '100%', lg: '75%' }}
          py="20px"
          pb="48px"
          justify="center"
        >
          <Slider
            {...settings}
            style={{
              position: 'relative',
              width: '100%',
              borderRadius: '5px',
            }}
          >
            <CardFeedback />
            <CardFeedback />
            <CardFeedback />
            <CardFeedback />
            <CardFeedback />
          </Slider>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SectionFeedback;
