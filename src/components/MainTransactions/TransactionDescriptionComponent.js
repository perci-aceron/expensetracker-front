import React from 'react';
import { Flex, Box, Heading, Text, useTheme } from '@chakra-ui/react';
function TransactionDescription() {
  const theme = useTheme();
  return (
    <Box
      as="section"
      pt={{ base: '66px' }}
      px={{ base: '20px' }}
      pb={{ base: '20px' }}
      bg={theme.colors.black}
      w="100%"
      maxW="1440px"
    >
      <Flex flex={1} direction="column" align="flex-start">
        <Heading
          as="h2"
          fontSize="32px"
          fontWeight="normal"
          lineHeight="normal"
          letterSpacing="-0.64px"
          color={theme.colors.white}
          pb="20px"
        >
          Expense Log
        </Heading>
        <Text
          fontSize="14px"
          lineHeight="normal"
          letterSpacing="-0.28px"
          color={theme.colors.alphaWhite}
          w={{ base: '335px' }}
        >
          Capture and organize every penny spent with ease! A clear view of your
          financial habits at your fingertips.
        </Text>
      </Flex>
    </Box>
  );
}

export default TransactionDescription;
