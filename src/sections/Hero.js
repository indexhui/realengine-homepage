import { Flex, VStack, Box, Heading, Button } from '@chakra-ui/react';
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
  height: '80vh',
  objectFit: 'cover',
};

const Hero = () => {
  const { space } = useSpace();
  return (
    <Flex w="100%" h="80vh" justify="center" mt="60px">
      <Flex w={space} align="center">
        <VStack align="flex-start">
          <MotionBox
            width="0"
            bg="#494949"
            h="30px"
            overflow="hidden"
            animate={{ width: 'auto' }}
            transition={{ duration: 1 }}
          >
            <MotionHeading
              fontSize="24px"
              color="#494949"
              px="2px"
              animate={{ color: 'white' }}
              // animate={{ x: 20 }}
              // transition={{ duration: 1 }}

              // initial="hidden"
              // whileInView="visible"
              // viewport={{ once: true, amount: 'all' }}
              // variants={variants}
              // transition={delayTransition}
            >
              專屬創作者的遊戲開發系統
            </MotionHeading>
          </MotionBox>
          <MotionBox
            width="0"
            bg="#494949"
            h="58px"
            overflow="hidden"
            animate={{ width: 'auto' }}
            transition={{ duration: 1 }}
          >
            <Heading
              fontSize="24px"
              color="#494949"
              bg="white"
              maxW="480px"
              px="5px"
            >
              透過真實引擎，創作者有效率地開發出個性化的實體桌上遊戲與周邊商品
            </Heading>
          </MotionBox>
          <MotionBox
            opacity="0"
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <MainButton>合作洽詢</MainButton>
          </MotionBox>
        </VStack>
      </Flex>
      <Box
        zIndex="-1"
        opacity="0.6"
        position="absolute"
        w="100%"
        h="80vh"
        bgColor="rgba(0,0,0,0.5)"
        bgImage={`url('${texture}')`}
      ></Box>
      <video loop muted autoPlay preload="auto" style={videoStyle}>
        <source src={video} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </Flex>
  );
};

export default Hero;
