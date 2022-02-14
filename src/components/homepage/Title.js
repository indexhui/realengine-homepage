import { Flex, Heading, Text } from '@chakra-ui/react';
import RevealFlex from './RevealFlex';

const Title = props => {
  return (
    <Flex direction="column" align="center" py="40px">
      <RevealFlex>
        <Heading as="h4" fontSize="36px" fontWeight="bold" mb={4}>
          {props.title}
        </Heading>
      </RevealFlex>
      {props.subTitle && (
        <RevealFlex y="35" duration=".75">
          <Text fontSize="24px" textAlign="center">
            {props.subTitle}
          </Text>
        </RevealFlex>
      )}
    </Flex>
  );
};

export default Title;
