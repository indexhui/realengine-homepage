import { Flex, Image, Heading, Text } from '@chakra-ui/react';

const ContentRecommend = props => {
  return (
    <Flex w="100%">
      <Flex w="100%" justify="center">
        <Flex
          maxWidth="1200px"
          w="70%"
          align="center"
          zIndex="2"
          bg="white"
          direction="column"
          rounded="sm"
        >
          <Image src={props.image} rounded="full" />
          <Heading as="h4" fontSize="20px" pt="18px" pb="10px">
            {props.name}
          </Heading>
          <Text maxW="400px" textAlign="center">
            {props.content}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ContentRecommend;
