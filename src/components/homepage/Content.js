import { Flex, Box, Image, Heading, Text } from '@chakra-ui/react';

const Content = props => {
  return (
    <Flex
      w="100%"
      wrap="wrap"
      direction={props.index % 2 === 0 ? 'row' : 'row-reverse'}
    >
      <Flex w={{ base: '100%', lg: '50%' }}>
        <Box w="100%" h="300px" overflow="hidden" mr="10%">
          <Image
            _hover={{ transform: 'scale(1.1)' }}
            transform="scale(1.25)"
            transition="transform .5s"
            src={props.image}
            alt="props.title"
          />
        </Box>
      </Flex>
      <Flex
        w={{ base: '100%', lg: '50%' }}
        direction="column"
        justify="center"
        px="55px"
      >
        <Heading as="h3" color="#263b5e" fontSize="36px" pb="20px">
          {props.title}
        </Heading>
        <Text fontSize="22px" lineHeight="36px">
          {props.content}
        </Text>
      </Flex>
    </Flex>
  );
};

export default Content;
