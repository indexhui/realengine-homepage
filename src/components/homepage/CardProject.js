import { Flex, Text, Box, Image, Progress } from '@chakra-ui/react';

const CardProject = props => {
  const { isSingle, finished, ...reset } = props;
  return (
    <Flex h="100%">
      <Flex
        w="100%"
        h="100%"
        borderWidth={isSingle && '1px'}
        // maxW={!props.isSingle && '400px'}
        direction={{ base: 'column', lg: isSingle ? 'row' : 'column' }}
        bg="white"
        rounded="md"
        p="20px"
        my="5px"
        shadow="0px 4px 12px rgba(169, 169, 169, 0.2)"
        {...reset}
      >
        <Flex
          w={{ base: '100%', lg: isSingle ? '45%' : '100%' }}
          pr={{ lg: isSingle && '20px' }}
        >
          <Box
            w="100%"
            bg="gray.200"
            h={{ base: '162px', lg: isSingle ? '290px' : '162px' }}
            mb={{ base: '20px', lg: isSingle ? '0' : '20px' }}
          >
            <Image />
          </Box>
        </Flex>
        <Flex flex="1" direction="column">
          <Text color="#1DA4AF" fontSize="14px">
            {props.owner}
          </Text>
          <Text fontSize="20px" fontWeight="700">
            {props.name}
          </Text>
          {finished ? (
            <Flex flex="1" direction="column" pt="50px" justify="flex-end">
              <Text>集資套數：{props.set} 套</Text>
              <Text>目標達成：{props.goal}%</Text>
            </Flex>
          ) : (
            <Flex direction="column" flex="1">
              <Flex flex="1" py="18px">
                <Text
                  flex="1"
                  noOfLines={3}
                  h="72px"
                  overflow="hidden"
                  color="#7b7b93"
                >
                  {props.description}
                </Text>
              </Flex>
              <Flex justify="space-between">
                <Text>已達成 43 %</Text>
                <Text>還有 13 天</Text>
              </Flex>
              <Progress value={40} color="yellow" rounded="lg" mt="5px" />
            </Flex>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default CardProject;
