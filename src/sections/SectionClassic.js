import { Flex, Grid } from '@chakra-ui/react';

import useSpace from '../hooks/useSpace';
import Title from '../components/homepage/Title';
import CardProject from '../components/homepage/CardProject';
import Slick from '../components/homepage/Slick';

const fundingProjects = [
  {
    owner: '街頭故事',
    name: '小故事|創造屬於你的旅程',
    set: 546,
    goal: 221,
    finished: true,
  },
  {
    owner: '街頭故事',
    name: '小故事|創造屬於你的旅程01',
    set: 1546,
    goal: 511,
    finished: true,
  },
  {
    owner: '街頭故事',
    name: '小故事|創造屬於你的旅程02',
    set: 1546,
    goal: 511,
    finished: true,
  },
  {
    owner: '街頭故事',
    name: '小故事|創造屬於你的旅程03',
    set: 1546,
    goal: 511,
    finished: true,
  },
  {
    owner: '街頭故事',
    name: '小故事|創造屬於你的旅程04',
    set: 1546,
    goal: 511,
    finished: true,
  },
  {
    owner: '街頭故事',
    name: '小故事|創造屬於你的旅程05',
    set: 1546,
    goal: 511,
    finished: true,
  },
];

const SectionClassic = () => {
  const { space } = useSpace();
  return (
    <Flex w="100%" justify="center" py="50px" px="20px">
      <Flex
        w={space}
        justify="center"
        align="center"
        direction="column"
        px={{ base: 0, lg: '50px' }}
      >
        <Title title="精選專案" subTitle="過去的軌跡，是我們進步的動力" />

        <Flex
          w="100%"
          // w={{ base: '100%', lg: '75%' }}
          pb="48px"
          justify="center"
        >
          <Slick
            style={{
              display: 'flex',
              padding: '20px 0',
              alignItems: 'stretch',
              // border: '1px solid blue',
              position: 'relative',
              width: '100%',
              borderRadius: '0px',
            }}
            dots
            slidesToShow={4}
          >
            {fundingProjects.map(project => (
              <CardProject
                {...project}
                key={project.name}
                shadow="none"
                mx="10px"
                my="20px"
                h="90%"
                border="1px solid #e6e6e6"
              />
            ))}
          </Slick>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SectionClassic;
