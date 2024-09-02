// pages/RegisterPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Box, Text, useTheme } from '@chakra-ui/react';
import RegisterForm from '../components/Auth/RegisterComponent';

export default function RegisterPage() {
  const theme = useTheme();
  return (
    <>
      <Stack
        direction={{ base: 'column' }}
        alignContent={'center'}
        spacing={0}
        bg={theme.colors.black}
        mx="auto"
        pl={{ base: '20px', lg: '25px', xl: '54px' }}
        pr={{ base: '20px', xl: '121px' }}
        h={'100%'}
      >
        <Box pt={{ base: '66px', xl: '18px' }}>
          <Text
            color={theme.colors.white}
            fontSize="32px"
            fontWeight="normal"
            lineHeight="normal"
            letterSpacing="-0.64px"
            pb="20px"
          >
            Sign Up
          </Text>
          <Text
            color={theme.colors.alphaWhite}
            fontSize="14px"
            fontWeight="normal"
            lineHeight="normal"
            letterSpacing="-0.28px"
            pb="40px"
            w="533px"
          >
            Step into a world of hassle-free expense management! Your journey
            towards financial mastery begins here.
          </Text>
          <RegisterForm />
          <Text
            color={theme.colors.alphaWhite}
            fontSize="12px"
            fontWeight="normal"
            lineHeight="18px"
            pt="20px"
            pb={{ base: '170px', lg: '0' }}
          >
            Already have an account?{' '}
            <Link to="/login">
              <span
                style={{
                  textDecoration: 'underline',
                  color: theme.colors.white,
                  fontSize: '12px',
                  fontWeight: 'normal',
                  lineHeight: '18px',
                }}
              >
                Sign In
              </span>
            </Link>
          </Text>
        </Box>
      </Stack>
    </>
  );
}
