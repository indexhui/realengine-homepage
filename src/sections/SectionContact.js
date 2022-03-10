import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
  Heading,
  Textarea,
} from '@chakra-ui/react';
import useSpace from '../hooks/useSpace';
import { useForm } from 'react-hook-form';

const fields = [
  {
    field: 'brand',
    label: '公司/角色名稱',
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
    label: '信箱',
  },
  {
    field: 'media',
    label: '社群網址/網站',
  },
];

const SectionContact = () => {
  const { space } = useSpace();
  const {
    register,
    watch,
    handleSubmit,
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
  });

  function onSubmit(values) {
    return new Promise(resolve => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        resolve();
      }, 1000);
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
          <Flex
            minH="80px"
            w="100%"
            px="8px"
            my="10px"
            pt="20px"
            align="flex-top"
          >
            <FormControl isInvalid={errors.memo}>
              <FormLabel
                htmlFor="name"
                position="absolute"
                transition="all 0.5s"
                top={watchFields.memo ? '-15px' : '0px'}
                fontSize={watchFields.memo ? '12px' : '14px'}
                color="white"
                _focus={{
                  opacity: '.75',
                  fontSize: '12px',
                  top: '-15px',
                  color: 'black',
                }}
              >
                合作事項
              </FormLabel>
              <Textarea
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
                {...register('memo', {
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
          </Flex>
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
