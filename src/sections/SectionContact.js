import { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Heading,
  Text,
  Textarea,
  RadioGroup,
  Radio,
  VStack,
  HStack,
} from '@chakra-ui/react';
import useSpace from '../hooks/useSpace';
import { Toggle } from '../components/homepage/Toggle';
import { ToggleM } from '../components/homepage/ToggleM';
import { useForm, Controller } from 'react-hook-form';

const fields = [
  {
    field: 'brand',
    label: '作品 IP 或單位名稱',
    validate: {
      minLength: {
        value: 4,
        message: 'Minimum length should be 4',
      },
    },
  },
  {
    field: 'name',
    label: '姓名',
  },
  {
    field: 'phone',
    label: '電話',
  },
  {
    field: 'mail',
    label: '聯絡信箱',
  },
  {
    field: 'media',
    label: '社群網址/網站',
  },
];

const workFields = [
  {
    field: 'work',
    label: '提案人身分',
    option: [
      {
        value: 'creator',
        label: '個人創作者',
      },
      {
        value: 'designer',
        label: '桌遊設計師',
      },
      {
        value: 'publish',
        label: '出版社',
      },
      {
        value: 'company',
        label: '公司',
      },
    ],
  },
];

const charactors = [
  {
    field: 'creator',
    label: '個人創作者',
  },
];

const stateOptions = {
  creator: [
    '還沒有想法，希望共同開發自己的桌遊',
    '已經有桌遊雛形，希望與真實引起一起實現',
    '桌遊已經完成，想上集資',
  ],
  designer: [
    '有桌遊設計想提案',
    '已經有桌遊雛形，希望與真實引起一起實現',
    '桌遊已經完成，想上集資',
  ],
  publication: [
    '還沒有想法，希望共同開發自己的桌遊',
    '已經有桌遊雛形，希望與真實引起一起實現',
    '桌遊已經完成，想上集資',
  ],
  company: ['開發品牌專屬的桌遊', '希望與真實引擎的過去的產品合作'],
};

const fromWhere = {
  friend: {
    fields: 'friend',
    label: '朋友',
    following: {
      fields: 'recommender',
      label: '推薦人',
    },
  },
  fromProject: {
    fields: 'fromProject',
    label: '看見集資專案',
    following: {
      fields: 'whichProject',
      label: '哪一款遊戲',
    },
  },
  internet: {
    fields: 'internet',
    label: '網路',
    following: {
      label: '網路',
    },
  },
  other: {
    fields: 'other',
    label: '其他',
    following: {
      fields: 'otherContent',
      label: '哪一款遊戲',
    },
  },
};

const SectionContact = () => {
  const { space } = useSpace();

  const {
    register,
    watch,
    handleSubmit,
    control,
    formState: { errors, isSubmitting },
  } = useForm({
    mode: 'onSubmit',
    shouldFocusError: false,
  });

  const watchFields = watch({
    brand: 'brand',
    name: 'name',
    phone: 'phone',
    mail: 'mail',
    memo: 'memo',
    toggle: 'toggle',
    fromWhere: 'fromWhere',
  });

  function onSubmit(values) {
    return new Promise(resolve => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 400);
    });
  }
  return (
    <Flex
      w="100%"
      justify="center"
      bgGradient="linear(180deg, #109EAB 0%, #0BAAB7 6.06%, #0BAAB7 90%,#109EAB 100%)"
      py="120px"
    >
      <Flex w={space} direction="column">
        <Heading pt="40px" color="white" px="12px">
          Contact
        </Heading>
        <form onSubmit={handleSubmit(onSubmit)}>
          <VStack spacing="20px" w="100%">
            {/* 基本資料 */}
            <Flex wrap="wrap">
              {fields.map(item => (
                <Flex
                  minH="80px"
                  w="50%"
                  px="8px"
                  my="10px"
                  pt="20px"
                  align="flex-top"
                  key={item.label}
                >
                  <FormControl isInvalid={errors[item.field]}>
                    <FormLabel
                      htmlFor="name"
                      position="absolute"
                      transition="all 0.5s"
                      top={watchFields[item.field] ? '-15px' : '0px'}
                      fontSize={watchFields[item.field] ? '12px' : '14px'}
                      color="white"
                      _invalid={{ color: 'fff' }}
                      _focus={{
                        opacity: '.75',
                        fontSize: '12px',
                        top: '-15px',
                      }}
                    >
                      {item.label}
                    </FormLabel>
                    <Input
                      id="name"
                      name={item.field}
                      borderTop="0"
                      borderRight="0"
                      borderLeft="0"
                      rounded="0"
                      color="white"
                      _focus={{
                        outline: 'none',
                        borderColor: 'black',
                        color: 'black',
                      }}
                      _invalid={{
                        border: '0',
                        borderBottom: '1px',
                        borderColor: 'yellow.400',
                      }}
                      {...register(item.field, {
                        required: '必填',
                        ...item.validate,
                      })}
                    />
                    <FormErrorMessage color="yellow.400">
                      {errors[item.field] && errors[item.field]?.message}
                    </FormErrorMessage>
                  </FormControl>
                </Flex>
              ))}
            </Flex>

            {/* 詢問者身分 */}
            <Flex direction="column" w="100%">
              <FormControl isInvalid={errors.toggle}>
                <FormLabel htmlFor="toggle" color="white">
                  您是
                </FormLabel>
                <Toggle name="toggle" control={control} />
                <FormErrorMessage>
                  {errors.toggle && errors.toggle.message}
                </FormErrorMessage>
              </FormControl>

              {watchFields.toggle && (
                <>
                  <FormControl isInvalid={errors.state}>
                    <FormLabel mt="20px">桌遊啟動狀態</FormLabel>
                    <ToggleM
                      name="state"
                      options={stateOptions[watchFields.toggle]}
                      control={control}
                    />
                    <FormErrorMessage>
                      {errors.state && errors.state.message}
                    </FormErrorMessage>
                  </FormControl>
                  <FormControl>
                    <FormLabel mt="20px">預計推出時間 </FormLabel>
                    <input
                      id="date"
                      type="date"
                      {...register('date', {
                        required: '必填',
                      })}
                    ></input>
                  </FormControl>
                  <FormControl>
                    <FormLabel>需求說明</FormLabel>
                    <Textarea
                      type="file"
                      id="document"
                      name="document"
                      {...register('detail', {
                        required: '必填',
                      })}
                    />
                  </FormControl>

                  <FormControl isInvalid={errors.document}>
                    <FormLabel>上傳企劃</FormLabel>
                    <input
                      type="file"
                      id="document"
                      name="document"
                      {...register('document', {
                        required: '必填',
                      })}
                    ></input>
                  </FormControl>
                </>
              )}
            </Flex>

            <Flex w="100%" py="20px" direction="column" justify="flex-start">
              <FormControl isInvalid={errors.fromWhere}>
                <FormLabel
                  htmlFor="fromWhere"
                  color="white"
                  fontSize="20px"
                  textAlign="left"
                >
                  在哪得知真實引擎
                </FormLabel>
                <ToggleM
                  name="fromWhere"
                  options={Object.keys(fromWhere)}
                  labelContent={fromWhere}
                  control={control}
                />
                <FormErrorMessage>
                  {errors.fromWhere && errors.fromWhere.message}
                </FormErrorMessage>
              </FormControl>

              {watchFields.fromWhere && (
                <FormControl isInvalid={errors.fromWhereFollowing}>
                  <Input
                    _placeholder={{ color: 'rgba(255,255,255,.5)' }}
                    placeholder={
                      fromWhere[watchFields.fromWhere]?.following.label
                    }
                    id="memo"
                    borderTop="0"
                    borderRight="0"
                    borderLeft="0"
                    rounded="0"
                    color="white"
                    resize="none"
                    _focus={{
                      outline: 'none',
                      borderColor: 'black',
                      color: 'black',
                    }}
                    _invalid={{
                      border: '0',
                      borderBottom: '1px',
                      borderColor: 'red.300',
                    }}
                    {...register('fromWhereFollowing', {
                      maxLength: {
                        value: 25,
                        message: 'Maximum length should be 25',
                      },
                    })}
                  />
                  <FormErrorMessage color="orange.400">
                    {errors.memo && errors.memo?.message}
                  </FormErrorMessage>
                </FormControl>
              )}
            </Flex>
          </VStack>

          <Flex w="100%" justify="flex-end" px="12px">
            <Button
              mt={4}
              colorScheme="teal"
              isLoading={isSubmitting}
              type="submit"
              variant="outline"
              color="white"
            >
              送出
            </Button>
          </Flex>
        </form>
      </Flex>
    </Flex>
  );
};

export default SectionContact;
