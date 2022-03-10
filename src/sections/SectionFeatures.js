import { Flex, Stack, Heading, Button } from '@chakra-ui/react';

import useSpace from '../hooks/useSpace';
import RevealFlex from '../components/homepage/RevealFlex';

import Content from '../components/homepage/Content';
import CardFeature from '../components/homepage/CardFeature';

import trophy from '../assets/images/trophy.png';
import rocket from '../assets/images/rocket.png';
import gear from '../assets/images/gear.png';
import sealDemo from '../assets/images/seal_demo.jpg';
// import profit from '../assets/images/profit.png';
import mrDoumiaoProduct from '../assets/images/mr_doumiao_product.jpg';
import analyze from '../assets/images/analyze.png';

const features = [
  {
    title: '產品團隊',
    content:
      '由台灣唯一獲得【德國埃森桌遊展】大會邀約，並為【大英博物館】指定合作夥伴，國際級的遊戲開發團隊參與執行。',
    image: trophy,
  },
  {
    title: '遊戲加速器',
    content:
      '首創 Real Engine Core (真實引擎遊戲加速器)，最高節省 80% 的遊戲開發時間，為合作雙方創造最高效益價值。',
    image: rocket,
  },
  {
    title: '數位平台',
    content:
      '為創作者打造 Real Engine Digital (真實引擎數位平台)，提供獨家粉絲洞察報告，建立長遠經營效益。',
    image: gear,
  },
];

const benefits = [
  {
    title: '個性商品',
    content: '用桌上遊戲引領出 IP 作品的獨特性，包含角色、故事、世界觀等元素。',
    image: sealDemo,
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
    image: mrDoumiaoProduct,
  },
  {
    title: '粉絲洞察',
    content:
      '合作過程中，真實引擎將為 IP 作品的「消費型粉絲」建立完整的洞察報告，讓創作者未來經營可以走得更穩健。',
    image: analyze,
  },
];

const SectionFeatures = () => {
  const { space } = useSpace();
  return (
    <Flex w="100%" justify="center" py="100px" px="20px">
      <Flex w={space} justify="center" align="center" direction="column">
        <RevealFlex>
          <Heading as="h2" color="#3D3D3D">
            專業團隊，為你打造獨一無二的 IP 遊戲
          </Heading>
        </RevealFlex>
        {/* features */}
        <Stack
          maxWidth="1024px"
          py="32px"
          spacing="32px"
          direction={{ base: 'column', lg: 'row' }}
        >
          {features.map((feature, index) => (
            <CardFeature order={index} {...feature} key={feature.title} />
          ))}
        </Stack>
        <Button variant="outline" size="lg" my="20px" colorScheme="teal">
          合作洽詢
        </Button>
        {/* benefits */}
        <Stack w="100%" spacing="100px" direction="column" py="60px">
          {benefits.map((benefit, index) => (
            <Content key={benefit.title} {...benefit} index={index} />
          ))}
        </Stack>
      </Flex>
    </Flex>
  );
};

export default SectionFeatures;
