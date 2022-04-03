import { Flex } from '@chakra-ui/react';

import useSpace from '../hooks/useSpace';
import Slick from '../components/homepage/Slick';
import DecorationTitle from '../components/homepage/DecorationTitle';
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
    autoplay: false,
    dots: true,
    arrows: false,
    autoplaySpeed: 3000,
    // appendDots: dots => (
    //   <div
    //     style={{
    //       borderRadius: '10px',
    //       marginBottom: '-10px',
    //     }}
    //   >
    //     <ul style={{ margin: '0px' }}> {dots} </ul>
    //   </div>
    // ),
    // responsive: [
    //   {
    //     breakpoint: 480,
    //     settings: {
    //       arrows: false,
    //     },
    //   },
    // ],
  };
  return (
    <Flex
      w="100%"
      align="center"
      direction="column"
      pb="40px"
      px="20px"
      bgColor="#f2edda"
    >
      <DecorationTitle>創作者推薦</DecorationTitle>
      <Flex w={space} align="center" direction="column">
        <Flex w="100%" py="30px" pb="48px" justify="center">
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
