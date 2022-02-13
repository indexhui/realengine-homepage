import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Flex, Image, Heading, Text, Icon } from '@chakra-ui/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import RevealFlex from '../components/homepage/RevealFlex';

import useSpace from '../hooks/useSpace';
import doumiao from '../assets/images/doumiao.jfif';
import seal from '../assets/images/seal.jfif';

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

const SectionRecommend = () => {
  const { space } = useSpace();
  const settings = {
    dots: true,
    infinite: true,
    autoplay: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    appendDots: dots => (
      <div
        style={{
          borderRadius: '10px',
          marginBottom: '-10px',
        }}
      >
        <ul style={{ margin: '0px' }}> {dots} </ul>
      </div>
    ),
    responsive: [
      {
        breakpoint: 480,
        settings: {
          arrows: false,
        },
      },
    ],
  };
  return (
    <Flex w="100%" justify="center" py="40px" px="20px">
      <Flex w={space} align="center" direction="column">
        <RevealFlex>
          <Heading>創作者推薦</Heading>
        </RevealFlex>
        <RevealFlex y="35" duration=".75">
          <Text py="20px">真實引擎位與每一位創作者建立合作夥伴關係</Text>
        </RevealFlex>
        <Flex
          w={{ base: '100%', lg: '75%' }}
          py="30px"
          pb="48px"
          justify="center"
          boxShadow="0 20px 40px 0 rgb(12 0 46 / 6%)"
        >
          <Slider
            {...settings}
            style={{
              position: 'relative',
              width: '100%',
              borderRadius: '5px',
            }}
          >
            <Flex w="100%">
              <Flex w="100%" justify="center">
                <Flex
                  maxWidth="1200px"
                  w="70%"
                  align="center"
                  zIndex="2"
                  bg="white"
                  direction="column"
                  rounded="sm"
                >
                  <Image src={doumiao} rounded="full" />
                  <Heading as="h4" fontSize="20px" pt="18px" pb="10px">
                    豆苗先生
                  </Heading>
                  <Text maxW="400px" textAlign="center">
                    能夠協助創作者作出完善的桌遊規劃，從零也可以跟著做，是值得信任ㄉ好夥伴。
                  </Text>
                </Flex>
              </Flex>
            </Flex>
            <Flex w="100%">
              <Flex w="100%" justify="center">
                <Flex
                  maxWidth="1200px"
                  w="70%"
                  align="center"
                  zIndex="2"
                  bg="white"
                  direction="column"
                  rounded="sm"
                >
                  <Image src={seal} rounded="full" />
                  <Heading as="h4" fontSize="20px" pt="18px" pb="10px">
                    《無所事事小海豹》作者
                  </Heading>
                  <Text maxW="400px" textAlign="center">
                    有了真實引擎的協助，你的品牌將到達另一個高度。
                  </Text>
                </Flex>
              </Flex>
            </Flex>
          </Slider>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SectionRecommend;
