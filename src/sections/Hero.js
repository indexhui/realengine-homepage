import { Flex, VStack, Box, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import useSpace from '../hooks/useSpace';
import MainButton from '../components/homepage/button/MainButton';

import video from '../assets/video/hero.mp4';

const MotionHeading = motion(Heading);
const MotionText = motion(Text);

const MotionBox = motion(Box);

const videoStyle = {
  position: 'absolute',
  zIndex: '-2',
  width: '100%',
  objectFit: 'cover',
};

const Hero = () => {
  const { space } = useSpace();
  return (
    <Flex
      w="100%"
      h={{ base: '60vh', lg: '80vh' }}
      justify="center"
      align="center"
      mt="60px"
      px="20px"
    >
      <Flex w={space} align="center" justify="center">
        <VStack align="center" spacing="68px">
          <MotionHeading
            fontSize="86px"
            color="white"
            initial={{ y: '50px', opacity: '.5' }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            專屬創作者的遊戲開發系統
          </MotionHeading>
          <MotionText
            textAlign="center"
            fontSize="48px"
            color="white"
            initial={{ y: '50px', opacity: '.5' }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
            maxW="860px"
          >
            透過真實引擎，創作者有效率地開發出個性化的實體桌上遊戲與周邊商品
          </MotionText>
          <MotionBox
            opacity="0"
            initial={{ y: '50px', opacity: '.5' }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <MainButton bg="#1b9aa6" w="345px" h="80px" rounded="sm">
              合作洽詢
            </MainButton>
          </MotionBox>
        </VStack>
      </Flex>
      <Box
        zIndex="-1"
        opacity="1"
        position="absolute"
        w="100%"
        h={{ base: '60vh', lg: '80vh' }}
        bg="rgba(0,0,0,0.9)"
      ></Box>
      <Box
        as="video"
        src={video}
        h={{ base: '60vh', lg: '80vh' }}
        loop
        muted
        autoPlay
        preload="auto"
        type="video/mp4"
        style={videoStyle}
      ></Box>
    </Flex>
  );
};

export default Hero;
