import { Flex, Heading, Text, Box } from '@chakra-ui/react';

const DecorationTitle = props => {
  const { subTitle } = props;
  return (
    <Flex pb="50px" direction="column" align="center">
      <Box w="1px" h="85px" bg="#1b9aa6" />
      <Heading color="#1b9aa6" fontSize="48px">
        {props.children}
      </Heading>
      {subTitle && (
        <Text pt="20px" fontSize="24px">
          {subTitle}
        </Text>
      )}
    </Flex>
  );
};

export default DecorationTitle;
