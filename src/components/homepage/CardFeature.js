import { Image, Heading, Text } from '@chakra-ui/react';
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
      boxShadow="0 3px 10px 0 rgb(38 59 94 / 10%)"
      _hover={{ boxShadow: '0 30px 60px 0 rgb(38 59 94 / 10%)' }}
      transition="box-shadow .5s"
    >
      <Heading as="h4" color="#3D3D3D" fontSize="20px">
        {props.title}
      </Heading>
      <Text color="#6a7697" pt="12px" pb="16px" lineHeight="1.75">
        {props.content}
      </Text>
      <Image src={props.image} alt={props.title} />
    </RevealFlex>
  );
};

export default CardFeature;
