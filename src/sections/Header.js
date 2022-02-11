import { Flex, Image } from '@chakra-ui/react';
import logo from '../assets/images/logo.jpg';

const space = {
  base: '80%',
  md: '80%',
  lg: '80%',
  xl: '960px',
  '2xl': '80%',
};

const Header = () => {
  return (
    <header>
      <Flex
        w="100%"
        bg="white"
        height="60px"
        position="fixed"
        top="0"
        justify="center"
        align="center"
      >
        <Flex w={space}>
          <Image src={logo} alt="logo" />
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
