import { Flex, Image, Heading, Text, VStack } from '@chakra-ui/react';

const ContentRecommend = props => {
  return (
    <Flex w="100%">
      <Flex w="100%" justify="center">
        <Flex w="100%" align="flex-start" zIndex="2" rounded="sm">
          <Image
            src={props.image}
            rounded="full"
            w="200px"
            h="200px"
            mr="20px"
          />
          <VStack alignItems="flex-start" pl="20px">
            <Text fontSize="86px" textAlign="left" fontWeight="900">
              {props.content}
            </Text>
            <Heading
              as="h4"
              fontSize="48px"
              pt="18px"
              pb="10px"
              textAlign="left"
            >
              {props.name}
            </Heading>
          </VStack>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default ContentRecommend;
