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

export const ToggleM = forwardRef(
  ({ control, name, options, defaultValue, labelContent, ...props }, ref) => {
    const { field } = useController({
      name,
      control,
      rules: { required: '必填' },
      defaultValue,
    });

    const { getRootProps, getRadioProps } = useRadioGroup({
      ...field,
    });

    return (
      <SimpleGrid {...getRootProps()} columns={2} spacing={1}>
        {options.map(item => (
          <CustomRadio key={item} {...getRadioProps({ value: item })}>
            {labelContent ? labelContent[item].label : item}
          </CustomRadio>
        ))}

        {/* {stateOption[0]} */}
      </SimpleGrid>
    );
  }
);
