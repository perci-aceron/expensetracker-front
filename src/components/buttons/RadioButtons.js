import React, { useState } from 'react';
import { RadioGroup, Radio, Stack, useTheme } from '@chakra-ui/react';

function RadioBtn() {
  const theme = useTheme();
  const [value, setValue] = useState();
  return (
    <RadioGroup
      onChange={setValue}
      value={value}
      pt={{ base: '28px', md: '40px' }}
      pl={{ base: '20px' }}
      pb={{ base: '20px' }}
    >
      <Stack
        spacing="20px"
        direction="row"
        color={theme.colors.white}
        fontSize="14px"
        fontWeight="400"
        lineHeight="normal"
        letterSpacing="-0.28px"
        colorscheme="green"
      >
        <Radio value="1" colorScheme="green">
          Expense
        </Radio>
        <Radio value="2" colorScheme="green">
          Income
        </Radio>
      </Stack>
    </RadioGroup>
  );
}

export default RadioBtn;

//todo: select the type of transaction being created. By default, the active type is for expense transactions
