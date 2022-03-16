import { forwardRef } from 'react';
import {
  Button,
  Box,
  SimpleGrid,
  useRadio,
  useRadioGroup,
} from '@chakra-ui/react';
import { useController } from 'react-hook-form';

const CustomRadio = forwardRef(({ children, ...props }, ref) => {
  const { state, getInputProps, getCheckboxProps } = useRadio(props);
  const input = getInputProps({ ref });
  const checkbox = getCheckboxProps();

  return (
    <Box as="label">
      <input {...input} />
      <Button
        as="div"
        {...checkbox}
        cursor="pointer"
        colorScheme={state.isChecked ? 'blue' : 'gray'}
      >
        {children}
      </Button>
    </Box>
  );
});

export const Toggle = forwardRef(
  ({ control, name, stateOption, defaultValue, ...props }, ref) => {
    const { field } = useController({
      name,
      control,
      rules: { required: '必填' },
      defaultValue,
    });

    console.log(field);
    const { getRootProps, getRadioProps } = useRadioGroup({
      ...field,
    });

    return (
      <SimpleGrid {...getRootProps()} columns={2} spacing={1}>
        <CustomRadio {...getRadioProps({ value: 'creator' })}>
          個人創作者
        </CustomRadio>
        <CustomRadio {...getRadioProps({ value: 'designer' })}>
          桌遊設計師
        </CustomRadio>
        <CustomRadio {...getRadioProps({ value: 'publication' })}>
          出版社
        </CustomRadio>
        {/* This child will be skipped in keyboard navigation */}
        <CustomRadio {...getRadioProps({ value: 'company' })}>
          企業組織
        </CustomRadio>
      </SimpleGrid>
    );
  }
);
