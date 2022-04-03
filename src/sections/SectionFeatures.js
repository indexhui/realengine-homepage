import { Flex, Stack, Heading, Button } from '@chakra-ui/react';

import useSpace from '../hooks/useSpace';
import RevealFlex from '../components/homepage/RevealFlex';

import DecorationTitle from '../components/homepage/DecorationTitle';
import Content from '../components/homepage/Content';
import CardFeature from '../components/homepage/CardFeature';

import trophy from '../assets/images/trophy.png';
import rocket from '../assets/images/rocket.png';
import gear from '../assets/images/gear.png';
import sealDemo from '../assets/images/seal_demo.jpg';
// import profit from '../assets/images/profit.png';
import mrDoumiaoProduct from '../assets/images/mr_doumiao_product.jpg';
import analyze from '../assets/images/analyze.png';

import feature01 from '../assets/images/feature/asset-1-3-x@2x.webp';
import feature02 from '../assets/images/feature/asset-2-3-x@2x.webp';
import feature03 from '../assets/images/feature/asset-3-3-x@2x.webp';
import oval1 from '../assets/images/feature/oval-1.svg';
import oval2 from '../assets/images/feature/oval-2.svg';
import oval3 from '../assets/images/feature/oval-3.svg';
import bg from '../assets/images/feature/bg.svg';
import benefit01 from '../assets/images/feature/asset-4-3-x.webp';
import benefit02 from '../assets/images/feature/asset-5-3-x@3x.webp';
import benefit03 from '../assets/images/feature/asset-6-3-x@3x.webp';

const features = [
  {
    title: '產品團隊',
    content:
      '由台灣唯一獲得【德國埃森桌遊展】大會邀約，並為【大英博物館】指定合作夥伴，國際級的遊戲開發團隊參與執行。',
    image: feature01,
    oval: oval1,
  },
  {
    title: '遊戲加速器',
    content:
      '首創 Real Engine Core (真實引擎遊戲加速器)，最高節省 80% 的遊戲開發時間，為合作雙方創造最高效益價值。',
    image: feature02,
    oval: oval2,
  },
  {
    title: '數位平台',
    content:
      '為創作者打造 Real Engine Digital (真實引擎數位平台)，提供獨家粉絲洞察報告，建立長遠經營效益。',
    image: feature03,
    oval: oval3,
  },
];

const benefits = [
  {
    title: '個性商品',
    content: '用桌上遊戲引領出 IP 作品的獨特性，包含角色、故事、世界觀等元素。',
    image: benefit01,
  },
  // {
  //   title: '優質分潤',
  //   content:
  //     '打破傳統的平面化授權分潤，採用深度參與、價值共享的平台化合作機制。',
  //   image: profit,
  // },
  {
    title: '品牌建立',
    content:
      '透過個性化商品與深度互動，周邊開發不再消耗粉絲熱情，而是建立品牌價值。',
    image: benefit02,
  },
  {
    title: '粉絲洞察',
    content:
      '合作過程中，真實引擎將為 IP 作品的「消費型粉絲」建立完整的洞察報告，讓創作者未來經營可以走得更穩健。',
    image: benefit03,
  },
];

const SectionFeatures = () => {
  const { space } = useSpace();
  return (
    <Flex w="100%" align="center" pb="100px" bg="#fffef9" direction="column">
      <DecorationTitle>專業團隊，為你打造獨一無二的 IP 遊戲</DecorationTitle>
      <Flex
        w="90%"
        justify="center"
        align="center"
        direction="column"
        px="20px"
      >
        <RevealFlex>
          <Heading as="h2" color="#3D3D3D">
            專業團隊，為你打造獨一無二的 IP 遊戲
          </Heading>
        </RevealFlex>
        {/* features */}
        <Stack
          maxWidth="90%"
          py="32px"
          spacing="40px"
          direction={{ base: 'column', lg: 'row' }}
        >
          {features.map((feature, index) => (
            <CardFeature order={index} {...feature} key={feature.title} />
          ))}
        </Stack>
      </Flex>
      {/* benefits */}
      <Flex w="100%" justify="center" bgImage={`url('${bg}')`} bgSize="cover">
        <Flex w="90%" justify="center" align="center" direction="column">
          <Stack w="100%" spacing="200px" direction="column" py="60px">
            {benefits.map((benefit, index) => (
              <Content key={benefit.title} {...benefit} index={index} />
            ))}
          </Stack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SectionFeatures;
