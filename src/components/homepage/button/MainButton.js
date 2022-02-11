import { Button } from '@chakra-ui/react';

const MainButton = props => {
  return (
    <Button
      bg="black"
      fontSize={{ base: '18px', lg: '24px' }}
      p={{ base: '16px', lg: '24px' }}
      color="white"
      borderRadius="0"
      _hover={{ bg: '#0C5A6A' }}
    >
      {props.children}
    </Button>
  );
};

export default MainButton;
