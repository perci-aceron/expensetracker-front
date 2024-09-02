import React from 'react';
import { Stack, Flex, Box, Text, useTheme } from '@chakra-ui/react';
import ArrowIcon from '../../assets/arrowIcon.svg';
export default function DecorationTab() {
  const theme = useTheme();
  return (
    <Stack
      as="aside"
      spacing={0}
      p="20px"
      width="248px"
      height="81px"
      borderRadius="20px"
      bg={theme.colors.white}
      position="absolute"
      zIndex={2}
      left={{ base: '10px', md: '16px', lg: '20px', xl: '55px', xxl: '610px' }}
      bottom={{
        base: '80px',
        md: '78px',
        lg: '220px',
        xl: '270px',
        xxl: '500px',
      }}
    >
      <Flex flex={1} direction="row" alignItems="center">
        <Box
          display="flex"
          alignItems="center"
          justifyContent="center"
          width="36px"
          height="36px"
          borderRadius="10px"
          bg={theme.colors.green}
        >
          <img src={ArrowIcon} alt="icon for arrow" />
        </Box>
        <Box ml="12px">
          <Flex direction="column" justifyContent="center">
            <Text
              fontSize="12px"
              color={theme.colors.alphaBlack}
              fontWeight="normal"
            >
              Your Balance
            </Text>
            <Text fontSize="18px" color={theme.colors.black} fontWeight="bold">
              $632.000
            </Text>
          </Flex>
        </Box>
        <Box
          ml="auto"
          borderRadius="13px"
          bg={theme.colors.percentageBox}
          width="58px"
          height="22px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Text color={theme.colors.percentage}>+1.29%</Text>
        </Box>
      </Flex>
    </Stack>
  );
}
