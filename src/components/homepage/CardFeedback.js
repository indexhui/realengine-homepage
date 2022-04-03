import { Flex, Heading, Text, Icon } from '@chakra-ui/react';
import { FaStar } from 'react-icons/fa';

const CardFeedback = props => {
  return (
    <Flex h="100%" justify="center">
      <Flex
        w={{ base: '100%', lg: '460px' }}
        align="flex-start"
        zIndex="2"
        p="20px"
        m="20px"
        direction="column"
        rounded="sm"
      >
        <Flex>
          {Array.apply(null, new Array(5)).map((_, index) => (
            <Icon as={FaStar} key={index} h="40px" w="40px" color="#1b9aa6" />
          ))}
        </Flex>
        <Heading as="h4" fontSize="40px" pt="60px" pb="40px">
          {props.project}
        </Heading>
        <Text fontSize="30px" textAlign="left" color="#181818" py="16px">
          {props.feedback}
        </Text>
        <Flex flex="1" align="flex-end">
          <Text fontSize="24px" color="#181818">
            {props.name}
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CardFeedback;
