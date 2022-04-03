import { Flex, Box, Image, Heading, Text } from '@chakra-ui/react';
import RevealFlex from './RevealFlex';

const Content = props => {
  return (
    <Flex
      w="100%"
      wrap="wrap"
      direction={props.index % 2 === 0 ? 'row' : 'row-reverse'}
    >
      <Flex w={{ base: '100%', lg: '50%' }}>
        <Box
          w="100%"
          h={{ base: '220px', lg: '630px' }}
          overflow="hidden"
          mr={{ base: '0', lg: '10%' }}
        >
          <Image
            // _hover={{ transform: 'scale(1)' }}
            // transform="scale(1.25)"
            // transition="transform .5s"
            src={props.image}
            alt="props.title"
          />
        </Box>
      </Flex>
      <Flex
        direction="column"
        justify="center"
        w={{ base: '100%', lg: '50%' }}
        px={{ base: '0px', lg: '55px' }}
      >
        <RevealFlex>
          <Heading
            as="h3"
            color="#1b9aa6"
            fontSize="48px"
            pb="60px"
            pt={{ base: '32px', lg: '0' }}
          >
            {props.title}
          </Heading>
        </RevealFlex>
        <RevealFlex y="35" duration="1">
          <Text fontSize="30px" lineHeight="36px">
            {props.content}
          </Text>
        </RevealFlex>
      </Flex>
    </Flex>
  );
};

export default Content;
