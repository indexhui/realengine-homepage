import { Flex, Heading, Text, Icon } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

const CardFeedback = props => {
  return (
    <Flex w="100%">
      <Flex w="100%" justify="center">
        <Flex
          w={{ base: '100%', lg: '260px' }}
          align="flex-start"
          zIndex="2"
          bg="white"
          p="20px"
          m="20px"
          direction="column"
          rounded="sm"
          boxShadow="0 20px 40px 0 rgb(12 0 46 / 6%)"
        >
          <Flex>
            {Array.apply(null, new Array(5)).map((_, index) => (
              <Icon as={FaStar} key={index} size="20px" color="#f5c10d" />
            ))}
          </Flex>
          <Heading as="h4" fontSize="20px" pt="18px">
            {props.project}
          </Heading>
          <Text maxW="400px" textAlign="left" color="#7b7b93" py="16px">
            {props.feedback}
          </Text>
          <Text color="#909095" fontSize="12px">
            {props.name}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CardFeedback;
