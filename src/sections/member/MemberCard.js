import { Flex, Heading, Text, Avatar, Box } from '@chakra-ui/react';
import RevealFlex from '../../components/homepage/RevealFlex';

const MemberCard = props => {
  const { name, title, intro, avatar, order } = props;
  return (
    <RevealFlex order={order} position="relative" w="100%" h="100%">
      <Box bg="white" h="100%" right="0" w="90%" position="absolute"></Box>
      <Flex zIndex="1">
        <Flex align="center">
          <Avatar
            src={avatar}
            w="160px"
            h="160px"
            name={name}
            filter="grayscale(100%)"
            borderRadius="0"
          />
        </Flex>
        <Flex
          direction="column"
          py="20px"
          px="32px"
          color="#181818"
          minH="280px"
        >
          <Heading fontSize="30px" fontWeight="bold">
            {name}
          </Heading>
          <Text pt="8px" fontSize="18px">
            {title}
          </Text>
          <Text pt="10px" fontSize="18px">
            {intro}
          </Text>
        </Flex>
      </Flex>
    </RevealFlex>
  );
};

export default MemberCard;
