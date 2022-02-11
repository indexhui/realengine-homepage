import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Flex, Image, Heading, Text, Icon } from '@chakra-ui/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import useSpace from '../hooks/useSpace';

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
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };

  return (
    <Flex w="100%" justify="center" py="40px">
      <Flex w={space} align="center" direction="column">
        <Heading>粉絲回饋</Heading>
        <Text py="20px">真實引擎的專案合作，喚起粉絲最深的情感連結</Text>
        <Flex w="75%" py="20px" pb="48px" justify="center">
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
                  w="260px"
                  // w="70%"
                  align="center"
                  zIndex="2"
                  bg="white"
                  p="20px"
                  m="20px"
                  direction="column"
                  rounded="sm"
                  boxShadow="0 20px 40px 0 rgb(12 0 46 / 6%)"
                >
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
                  w="260px"
                  // w="70%"
                  align="center"
                  zIndex="2"
                  bg="white"
                  p="20px"
                  m="20px"
                  direction="column"
                  rounded="sm"
                  boxShadow="0 20px 40px 0 rgb(12 0 46 / 6%)"
                >
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
                  w="260px"
                  // w="70%"
                  align="center"
                  zIndex="2"
                  bg="white"
                  p="20px"
                  m="20px"
                  direction="column"
                  rounded="sm"
                  boxShadow="0 20px 40px 0 rgb(12 0 46 / 6%)"
                >
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
                  w="260px"
                  // w="70%"
                  align="center"
                  zIndex="2"
                  bg="white"
                  p="20px"
                  m="20px"
                  direction="column"
                  rounded="sm"
                  boxShadow="0 20px 40px 0 rgb(12 0 46 / 6%)"
                >
                  <Heading as="h4" fontSize="20px" pt="18px" pb="10px">
                    豆苗先生
                  </Heading>
                  <Text maxW="400px" textAlign="center">
                    能夠協助創作者作出完善的桌遊規劃，從零也可以跟著做，是值得信任ㄉ好夥伴。
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

export default SectionFeedback;
