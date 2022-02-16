import { Flex } from '@chakra-ui/react';

import useSpace from '../hooks/useSpace';
import Slick from '../components/homepage/Slick';
import ContentRecommend from '../components/homepage/ContentRecommend';
import Title from '../components/homepage/Title';

import doumiao from '../assets/images/doumiao.jfif';
import seal from '../assets/images/seal.jfif';

const Recommends = [
  {
    name: '豆苗先生',
    content:
      '能夠協助創作者作出完善的桌遊規劃，從零也可以跟著做，是值得信任ㄉ好夥伴。',
    image: doumiao,
  },
  {
    name: '《無所事事小海豹》作者',
    content: '有了真實引擎的協助，你的品牌將到達另一個高度。',
    image: seal,
  },
];

const SectionRecommend = () => {
  const { space } = useSpace();
  const settings = {
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
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
        <Title
          title="創作者推薦"
          // subTitle="真實引擎成為創作者的合作夥伴"
        />
        <Flex
          w={{ base: '100%', lg: '75%' }}
          py="30px"
          pb="48px"
          justify="center"
          boxShadow="0 20px 40px 0 rgb(12 0 46 / 6%)"
        >
          <Slick
            {...settings}
            style={{
              position: 'relative',
              width: '100%',
              borderRadius: '5px',
            }}
          >
            {Recommends.map(recommend => (
              <ContentRecommend key={recommend.name} {...recommend} />
            ))}
          </Slick>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SectionRecommend;
