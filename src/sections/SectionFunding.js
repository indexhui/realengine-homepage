import { Flex, Grid } from '@chakra-ui/react';

import useSpace from '../hooks/useSpace';
import Title from '../components/homepage/Title';
import CardProject from '../components/homepage/CardProject';

const fundingProjects = [
  {
    owner: '街頭故事',
    name: '小故事|創造屬於你的旅程',
    description:
      '專案介紹專案介紹專案介紹專案介紹專案介紹專案介紹專案介紹專案介紹專案介紹專案介紹專案介紹專案',
    process: 43,
    remain: 20,
  },
  {
    owner: '街頭故事',
    name: '小故事|創造屬於你的旅程2',
    description:
      '專案介紹專案介紹專案介紹專案介紹專案介紹專案介紹專案介紹專案介紹專案介紹專案介紹專案介紹專案',
    process: 43,
    remain: 20,
  },
  {
    owner: '街頭故事',
    name: '小故事|創造屬於你的旅程3',
    description:
      '專案介紹專案介紹專案介紹專案介紹專案介紹專案介紹專案介紹專案介紹專案介紹專案介紹專案介紹專案',
    process: 43,
    remain: 20,
  },
];

const SectionFunding = () => {
  const { space } = useSpace();
  return (
    <Flex
      w="100%"
      justify="center"
      py="50px"
      px="20px"
      bg="hsla(40, 55%, 96%, 1);
"
    >
      <Flex
        w={space}
        justify="center"
        align="center"
        direction="column"
        px={{ base: 0, lg: '50px' }}
      >
        <Title
          title="進行中的集資"
          subTitle="他們需要你的支持，一起實現夢想吧"
        />
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

export default SectionFunding;
