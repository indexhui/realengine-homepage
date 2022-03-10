import { Flex, Image, Heading } from '@chakra-ui/react';
import useSpace from '../hooks/useSpace';
import RevealFlex from '../components/homepage/RevealFlex';

import mirrorFiction from '../assets/images/mirror_fiction.png';
import theNothingSeal from '../assets/images/the_nothing_seal.png';
import mrDoumiao from '../assets/images/mr_doumiao.png';
import momogaga from '../assets/images/momogaga.png';

const partners = [
  {
    name: 'the_nothing_seal',
    src: theNothingSeal,
  },
  {
    name: 'mirrorFiction',
    src: mirrorFiction,
  },
  {
    name: 'mr_doumiao',
    src: mrDoumiao,
  },
  {
    name: 'momogaga',
    src: momogaga,
  },
];

const SectionPartner = () => {
  const { space } = useSpace();
  return (
    <Flex w="100%" justify="center" py="60px">
      <Flex w={space} justify="center" align="center" direction="column">
        <RevealFlex>
          <Heading as="h2" color="#3D3D3D">
            合作夥伴
          </Heading>
        </RevealFlex>
        <Flex
          wrap="wrap"
          my="32px"
          w={{ base: '100%', lg: '80%' }}
          justify="space-between"
        >
          {partners.map(partner => (
            <Flex
              key={partner.name}
              w={{ base: '50%', lg: 'auto' }}
              filter="opacity(.5)"
              transition="opacity .5s"
              justify="center"
              _hover={{
                filter: 'opacity(1)',
              }}
            >
              <Image h="80px" src={partner.src} alt={partner.name} />
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default SectionPartner;
