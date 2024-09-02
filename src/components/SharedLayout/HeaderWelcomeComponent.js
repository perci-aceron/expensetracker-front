import React from 'react';
import { Box, Flex, Text, Heading, useTheme } from '@chakra-ui/react';

function Header() {
  const theme = useTheme();
  return (
    <Box
      as="section"
      pt="0"
      pr={{ base: '20px', sm: '20px', md: '161px', lg: '50px', xl: '100px' }}
      pl={{ base: '20px', sm: '20px', md: '32px', lg: '25px', xl: '54px' }}
      pb={{ base: '30px', sm: '20px', md: '40px', lg: '20px', xl: '40px' }}
      bg={theme.colors.black}
      w="100%"
      maxW="1440px"
    >
      <Flex flex={1} direction="column" align="flex-start">
        <Text
          pb="10px"
          fontSize={{ base: 'sm', md: 'md' }}
          lineHeight="normal"
          letterSpacing="2.8px"
          color={theme.colors.alphaWhite}
        >
          EXPENSE LOG
        </Text>
        <Heading
          as="h2"
          fontSize={{ base: '32px', md: '56px', xl: '56px' }}
          fontWeight="normal"
          pb={{ base: '14px', md: '20px' }}
        >
          Manage Your{' '}
          <span
            style={{
              textDecoration: 'underline',
              color: theme.colors.green,
            }}
          >
            Finances
          </span>{' '}
          Masterfully!
        </Heading>
        <Text
          width={{ base: '335px', md: '533px' }}
          fontSize={{ base: 'sm', md: 'md' }}
          color={theme.colors.alphaWhite}
        >
          ExpenseTracker effortlessly empowers you to take control of your
          finances! With intuitive features, it simplifies the process of
          tracking and managing expenses, allowing for a stress-free mastery
          over your financial world.
        </Text>
      </Flex>
    </Box>
  );
}

export default Header;
