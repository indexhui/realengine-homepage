import { Button } from '@chakra-ui/react';

const MainButton = props => {
  return (
    <Button
      bg="#148191"
      color="white"
      borderRadius="0"
      _hover={{ bg: '#1B9AA6' }}
    >
      {props.children}
    </Button>
  );
};

export default MainButton;
