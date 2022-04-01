import { Image, Heading, Text, Flex, Box } from '@chakra-ui/react';
import RevealFlex from './RevealFlex';

const CardFeature = props => {
  return (
    <RevealFlex
      order={props.order}
      w={{ base: '100%', lg: '30%' }}
      align="center"
      justify="center"
      px="24px"
      direction="column"
      py="36px"
      rounded="sm"
      margin="200px 0 0 0 0"
      // boxShadow="0 3px 10px 0 rgb(38 59 94 / 10%)"
      // _hover={{ boxShadow: '0 30px 60px 0 rgb(38 59 94 / 10%)' }}
      // transition="box-shadow .5s"
    >
      <Flex
        direction="column"
        justify="space-between"
        flex="1"
        align="center"
        textAlign="center"
      >
        <Image
          w="520px"
          h="460px"
          src={props.image}
          alt={props.title}
          objectFit="contain"
        />
        <Box>
          <Heading as="h4" color="#3D3D3D" fontSize="30px">
            {props.title}
          </Heading>
          <Text
            color="#6a7697"
            pt="12px"
            pb="16px"
            lineHeight="1.75"
            fontSize="24px"
          >
            {props.content}
          </Text>
        </Box>
      </Flex>
    </RevealFlex>
  );
};

export default CardFeature;
