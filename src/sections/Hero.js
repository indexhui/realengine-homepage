import { Flex, VStack, Box, Heading } from '@chakra-ui/react';
import { motion } from 'framer-motion';

import useSpace from '../hooks/useSpace';
import MainButton from '../components/homepage/button/MainButton';

import video from '../assets/video/hero.mp4';
import texture from '../assets/images/texture.png';

const MotionHeading = motion(Heading);
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
      mt="60px"
      px="20px"
    >
      <Flex w={space} align="center">
        <VStack align="flex-start" spacing="20px">
          <MotionBox
            width="0"
            bg="#494949"
            color="#494949"
            h={{ base: '48px', lg: '60px' }}
            overflow="hidden"
            animate={{ width: 'auto', padding: '0 8px' }}
            transition={{ duration: 0.5 }}
          >
            <MotionHeading
              fontSize={{ base: '25px', lg: '38px' }}
              color="white"
              p="8px"
              opacity="0"
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.75 }}
            >
              專屬創作者的遊戲開發系統
            </MotionHeading>
          </MotionBox>
          <MotionBox position="relative" overflow="hidden">
            {/* 色塊會根據下方文字寬度變化 */}
            <MotionBox
              w="0%"
              bg="white"
              animate={{
                width: '100%',
                opacity: [1, 1, 0],
              }}
              transition={{ duration: 1, times: [0, 0.99, 1] }}
              position="absolute"
              h="100%"
            ></MotionBox>
            <MotionHeading
              bg="#388292"
              opacity="0"
              lineHeight="1.35"
              fontSize={{ base: '16px', lg: '30px' }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.65 }}
              color="white"
              maxW="580px"
              px={{ base: '15px', lg: '20px' }}
              py={{ base: '10px', lg: '20px' }}
            >
              透過真實引擎，創作者有效率地開發出個性化的實體桌上遊戲與周邊商品
            </MotionHeading>
          </MotionBox>
          {/* <MotionBox
            opacity="0"
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.65 }}
          >
            <MainButton>合作洽詢</MainButton>
          </MotionBox> */}
        </VStack>
      </Flex>
      <Box
        zIndex="-1"
        opacity="0.6"
        position="absolute"
        w="100%"
        h={{ base: '60vh', lg: '80vh' }}
        bgColor="rgba(0,0,0,0.5)"
        bgImage={`url('${texture}')`}
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
      {/* <video loop muted autoPlay preload="auto" style={videoStyle}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video> */}
    </Flex>
  );
};

export default Hero;
