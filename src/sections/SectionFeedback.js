import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import { Flex, Heading, Text, Icon } from '@chakra-ui/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

import useSpace from '../hooks/useSpace';
import RevealFlex from '../components/homepage/RevealFlex';
import CardFeedback from '../components/homepage/CardFeedback';

const fansFeedback = [
  {
    name: '莫札瑞拉起司',
    project: '豆苗先生',
    feedback:
      '成為起司豆苗大概是2、3年前的事 高中的時候曾經被你的圖文拯救過好多次',
  },
  {
    name: 'Du YM',
    project: '豆苗先生',
    feedback:
      '我從豆苗大概百人追蹤，陪伴豆苗到現在，一開始單純覺得豆苗的圖文很可愛，後面就越來越喜歡豆苗的文筆',
  },
  {
    name: '余竹君',
    project: '豆苗先生',
    feedback: '謝謝你的創作帶給我們治癒 未來也要一起加油！豆苗教永遠不退教！',
  },
  {
    name: '洪仙映',
    project: '豆苗先生',
    feedback:
      '有時候豆苗的圖會讓我覺得心裡有東西被觸碰， 有時候看到豆苗更新會是我那天唯一能微笑的事情。',
  },
  {
    name: '莊瑜',
    project: '豆苗先生',
    feedback:
      '真的很喜歡你的圖文，是你的圖文治癒了我，能夠描寫出我的心聲大概只有豆苗了(ಥ_ಥ)',
  },
  {
    name: '洪Grace Luo',
    project: '豆苗先生',
    feedback:
      '謝謝你總是如此努力的溫暖我們，未來的每一天，請也讓我們同樣溫暖你❤️',
  },
];

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
            {fansFeedback.map(feedback => (
              <CardFeedback key={feedback.name} {...feedback} />
            ))}
          </Slider>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SectionFeedback;
