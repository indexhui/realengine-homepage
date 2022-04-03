import { Image, Heading, Text, Flex, Box } from '@chakra-ui/react';
import { motion, useViewportScroll, useTransform } from 'framer-motion';

import oval from '../../assets/images/feature/oval-1.svg';

const MotionImage = motion(Image);

const CardFeature = props => {
  const { scrollYProgress } = useViewportScroll();
  const y = useTransform(scrollYProgress, [0, 0.25], [150, -200]);

  return (
    <Flex
      order={props.order}
      w={{ base: '100%', lg: '30%' }}
      align="center"
      justify="center"
      px="24px"
      direction="column"
      py="36px"
      rounded="sm"
      margin="200px 0 0 0 0"
    >
      <Flex
        direction="column"
        justify="space-between"
        flex="1"
        align="center"
        textAlign="center"
      >
        <Flex w="520px" h="480px" position="relative">
          <MotionImage
            // position="absolute"
            w="520px"
            src={props.oval}
            style={{ y: y }}
          />
          <MotionImage
            w="520px"
            src={props.image}
            alt={props.title}
            objectFit="contain"
            position="absolute"
            zIndex="1"
            // style={{ y: y }}
          />
        </Flex>
        <Box zIndex="1">
          <Heading as="h4" color="#3D3D3D" fontSize="30px" fontWeight="900">
            {props.title}
          </Heading>
          <Text
            color="#181818"
            maxW="395px"
            pt="12px"
            pb="16px"
            px="20px"
            lineHeight="1.75"
            fontSize="24px"
          >
            {props.content}
          </Text>
        </Box>
      </Flex>
    </Flex>
  );
};

export default CardFeature;
