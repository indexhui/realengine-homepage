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
          <Text>110臺北市信義區嘉興街181巷9弄54號1樓</Text>
          <Text>
            1F., No. 54, Aly. 9, Ln. 181, Jiaxing St., Xinyi Dist., Taipei City
            11053, Taiwan
          </Text>
          <HStack py="15px" spacing="20px">
            {socialMediaLink.map((item, index) => (
              <Link href={item.link} isExternal>
                <Flex
                  key={index}
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
          <Text opacity=".9">Copyright © 2022. All rights reserved.</Text>
        </VStack>
      </Flex>
    </Flex>
  );
};

export default Footer;
