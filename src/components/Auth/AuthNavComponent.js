import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Flex, useTheme } from '@chakra-ui/react';
import UnivBtn from '../../components/buttons/UnivBtnComponent';

const AuthButtons = () => {
  const theme = useTheme();
  return (
    <Box
      px={{ base: '20px', md: '32px', lg: '25px', xl: '54px' }}
      pb={{ base: '40px', md: '36px', xl: '166px' }}
      bg={theme.colors.black}
    >
      <Flex flex={1} align="flex-start" gap="20px">
        <Link to="/register">
          <UnivBtn
            type="button"
            p="14px 44px"
            rounded="full"
            fontSize="14px"
            fontWeight="normal"
            lineHeight="normal"
            letterSpacing="-0.28px"
            color={theme.colors.black}
            bg={theme.colors.green}
            _hover={{
              bg: theme.colors.alphaGreen,
            }}
          >
            Sign Up
          </UnivBtn>
        </Link>
        <Link to="/login">
          <UnivBtn
            type="button"
            p="14px 44px"
            rounded="full"
            fontSize="14px"
            fontWeight="normal"
            lineHeight="normal"
            letterSpacing="-0.28px"
            border={`1px solid ${theme.colors.alphaWhite}`}
            color={theme.colors.white}
            bg={theme.colors.black}
            _hover={{
              border: `1px solid ${theme.colors.green}`,
            }}
          >
            Sign In
          </UnivBtn>
        </Link>
      </Flex>
    </Box>
  );
};

export default AuthButtons;
