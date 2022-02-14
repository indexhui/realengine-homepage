import { Flex, Grid } from '@chakra-ui/react';

import useSpace from '../hooks/useSpace';
import Title from '../components/homepage/Title';
import CardProject from '../components/homepage/CardProject';

const fundingProjects = [
  {
    owner: '街頭故事',
    name: '小故事|創造屬於你的旅程',
    set: 1546,
    goal: 511,
    finished: true,
  },
  {
    owner: '街頭故事',
    name: '小故事|創造屬於你的旅程',
    set: 1546,
    goal: 511,
    finished: true,
  },
  {
    owner: '街頭故事',
    name: '小故事|創造屬於你的旅程',
    set: 1546,
    goal: 511,
    finished: true,
  },
  {
    owner: '街頭故事',
    name: '小故事|創造屬於你的旅程',
    set: 1546,
    goal: 511,
    finished: true,
  },
  {
    owner: '街頭故事',
    name: '小故事|創造屬於你的旅程',
    set: 1546,
    goal: 511,
    finished: true,
  },
  {
    owner: '街頭故事',
    name: '小故事|創造屬於你的旅程',
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
        <Grid
          w="100%"
          templateColumns={{ base: 'repeat(1, 1fr)', lg: 'repeat(3, 1fr)' }}
          gap={6}
        >
          {fundingProjects.map(project => (
            <CardProject {...project} key={project.name} />
          ))}
        </Grid>
      </Flex>
    </Flex>
  );
};

export default SectionClassic;
