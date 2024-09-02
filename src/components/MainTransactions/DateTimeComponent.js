// import React from 'react';

import { Stack, Box, Input, FormLabel, useTheme } from '@chakra-ui/react';

const Calendar = () => {
  const theme = useTheme();

  return (
    <Stack
      spacing="14px"
      direction="row"
      pl={{ base: '20px' }}
      pb={{ base: '20px' }}
    >
      <Box>
        <FormLabel
          htmlFor="date"
          color={theme.colors.white}
          fontSize="14px"
          fontWeight="normal"
          lineHeight="normal"
          letterSpacing="-0.28px"
          m="0"
          pb="6px"
        >
          Date
        </FormLabel>
        <Input
          as={Input}
          id="date"
          name="date"
          type="date"
          autoComplete="true"
          placeholder="mm/dd/yy"
          height="42px"
          p="12px"
          fontSize="14px"
          fontWeight="normal"
          lineHeight="18px"
          borderRadius="12px"
          color={theme.colors.alphaWhite}
          bg={theme.colors.totalBlack}
          borderColor={theme.colors.darkWhite}
          focusBorderColor={theme.colors.green}
          width={{ base: '113px', sm: '140px' }}
        />
      </Box>

      <Box>
        <FormLabel
          htmlFor="time"
          color={theme.colors.white}
          fontSize="14px"
          fontWeight="normal"
          lineHeight="normal"
          letterSpacing="-0.28px"
          m="0"
          pb="6px"
        >
          Time
        </FormLabel>
        <Input
          as={Input}
          id="time"
          name="time"
          type="time"
          autoComplete="true"
          placeholder="00:00:00"
          height="42px"
          p="12px"
          fontSize="14px"
          fontWeight="normal"
          lineHeight="18px"
          borderRadius="12px"
          color={theme.colors.alphaWhite}
          bg={theme.colors.totalBlack}
          borderColor={theme.colors.darkWhite}
          focusBorderColor={theme.colors.green}
          width={{ base: '113px', sm: '140px' }}
        />
      </Box>
    </Stack>
  );
};

export default Calendar;

//todo: defaulting to the current date (needs to be styled as shown in the layout),
