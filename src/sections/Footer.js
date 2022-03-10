import {
  Flex,
  Image,
  Text,
  VStack,
  HStack,
  Icon,
  Link,
} from '@chakra-ui/react';
import { FaFacebookF, FaInstagram, FaLine } from 'react-icons/fa';
import { useMemo } from 'react';

import useSpace from '../hooks/useSpace';
import logo from '../assets/images/logo_w.svg';

const socialMediaLink = [
  {
    link: 'https://www.facebook.com/TheRealEngine',
    icon: FaFacebookF,
  },
  {
    link: 'https://www.facebook.com/TheRealEngine',
    icon: FaInstagram,
  },
  {
    link: 'https://line.me/R/ti/p/%40894leitt',
    icon: FaLine,
  },
];

const Footer = () => {
  const { space } = useSpace();
  const year = useMemo(() => new Date().getFullYear(), [])
  return (
    <Flex
      bg="#1B9AA6"
      py="40px"
      justify="center"
      px="20px"
      color="white"
      textAlign="left"
    >
      <Flex w={space} px={{ base: '0', lg: '100px' }}>
        <VStack direction="column" align="flex-start" spacing="2px">
          <Image w="120px" src={logo} mb="20px" />
          <Text>106 台北市復興南路一段352號5樓</Text>
          <Text>
            5F., No. 352, Sec. 1, Fuxing S. Rd., Da’an Dist., Taipei City 106 , Taiwan
          </Text>
          <HStack py="15px" spacing="20px">
            {socialMediaLink.map((item, index) => (
              <Link href={item.link} isExternal key={index}>
                <Flex
                  w="50px"
                  h="50px"
                  align="center"
                  justify="center"
                  rounded="full"
                  border="1px solid white"
                  _hover={{ bg: 'white' }}
                  role="group"
                >
                  <Icon
                    fontSize="20px"
                    as={item.icon}
                    _groupHover={{ color: '#1B9AA6' }}
                  />
                </Flex>
              </Link>
            ))}
          </HStack>
          <Text opacity=".9">Copyright © {year}. All rights reserved.</Text>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Footer;
