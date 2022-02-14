import { Flex, Icon } from '@chakra-ui/react';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';

const SlickArrow = props => {
  const { onClick, isLeft } = props;
  return (
    <Flex
      w="50px"
      h="50px"
      border="1px solid #f3f5f8"
      rounded="full"
      align="center"
      justify="center"
      onClick={onClick}
      position="absolute"
      zIndex="1"
      top="40%"
      left={isLeft ? '-60px' : 'auto'}
      right={isLeft ? 'auto' : '-60px'}
      boxShadow="0 20px 30px 0 rgb(12 0 46 / 6%)"
      _hover={{ cursor: 'pointer', bg: '#1B9AA6' }}
      role="group"
    >
      <Icon
        w={8}
        h={8}
        as={isLeft ? FiChevronLeft : FiChevronRight}
        color="gray.400"
        _groupHover={{ color: 'white' }}
      />
    </Flex>
  );
};

export default SlickArrow;
