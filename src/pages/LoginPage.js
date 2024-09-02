import React from 'react';
import { Link } from 'react-router-dom';
import { Stack, Box, Text, useTheme } from '@chakra-ui/react';
import LoginForm from 'components/Auth/LoginComponent';

const LoginPage = () => {
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
        pr={{ base: '20px', xl: '255px' }}
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
            Sign In
          </Text>
          <Text
            color={theme.colors.alphaWhite}
            fontSize="14px"
            fontWeight="normal"
            lineHeight="normal"
            letterSpacing="-0.28px"
            pb="40px"
          >
            Welcome back to effortless expense tracking! Your financial
            dashboard awaits.
          </Text>
          <LoginForm />
          <Text
            color={theme.colors.alphaWhite}
            fontSize="12px"
            fontWeight="normal"
            lineHeight="18px"
            pt="20px"
            pb={{ base: '186px', lg: '0' }}
          >
            Already have an account?{' '}
            <Link to="/register">
              <span
                style={{
                  textDecoration: 'underline',
                  color: theme.colors.white,
                  fontSize: '12px',
                  fontWeight: 'normal',
                  lineHeight: '18px',
                }}
              >
                Sign Up
              </span>
            </Link>
          </Text>
        </Box>
      </Stack>
    </>
  );
};

export default LoginPage;

// The component renders at the route /login.
// The component consists of:
// - page header
// - page description
// - AuthForm - a component with an authorization form for the registration/login page (the general logic of this component is described above)
