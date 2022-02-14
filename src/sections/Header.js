import { useState, useEffect } from 'react';

import { Flex, Image } from '@chakra-ui/react';
import logo from '../assets/images/logo.webp';

const space = {
  base: '80%',
  md: '80%',
  lg: '80%',
  xl: '960px',
  '2xl': '80%',
};

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <header>
      <Flex
        zIndex="5"
        w="100%"
        bg="white"
        height="60px"
        position="fixed"
        top="0"
        justify="center"
        align="center"
        boxShadow={
          scrollPosition > 100 ? '0 20px 40px 0 rgb(12 0 46 / 6%)' : 'none'
        }
      >
        <Flex w={space}>
          <Image src={logo} w="120px" alt="logo" />
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
