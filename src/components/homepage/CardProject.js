import { Flex, Text, Box, Image, Progress } from '@chakra-ui/react';

const CardProject = props => {
  return (
    <Flex
      w="100%"
      maxW="400px"
      direction="column"
      bg="white"
      rounded="md"
      p="20px"
      my="5px"
      shadow="0px 4px 12px rgba(169, 169, 169, 0.2)"
    >
      <Box w="100%" bg="gray.200" h="162px" mb="20px">
        <Image />
      </Box>
      <Text color="#1DA4AF" fontSize="14px">
        街頭故事
      </Text>
      <Text fontSize="20px" fontWeight="700">
        小故事|創造屬於你的旅程
      </Text>
      {props.finished ? (
        <Flex direction="column" pt="50px">
          <Text>集資套數：1548 套</Text>
          <Text>目標達成：511%</Text>
        </Flex>
      ) : (
        <Flex direction="column">
          <Text noOfLines={3} py="18px" color="#7b7b93">
            專案介紹專案介紹專案介紹專案介紹專案介紹專案介紹專案介紹專案介紹專案介紹專案介紹專案介紹專案
          </Text>
          <Flex justify="space-between">
            <Text>已達成 43 %</Text>
            <Text>還有 13 天</Text>
          </Flex>
          <Progress value={40} color="yellow" rounded="lg" mt="5px" />
        </Flex>
      )}
    </Flex>
  );
};

export default CardProject;
