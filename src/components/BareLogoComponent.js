import React from 'react';
import { Flex, Box, Heading } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import LogoIcon from '../assets/LogoIcon.svg';
function BareLogo() {
  return (
    <Link to="/">
      <Flex flex={1} direction="row" align="center" justify="center" gap={2}>
        <Box
          width="27px"
          height="16px"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <img src={LogoIcon} alt="expense tracker logo" />
        </Box>
        <Heading
          as="h1"
          color="#FAFAFA"
          fontSize={{ base: 'lg', md: 'xl' }}
          fontWeight="bold"
          lineHeight="1.4"
          letterSpacing="-0.36px"
          height={{ base: '23px', md: '26px' }}
        >
          EXPENSETRACKER
        </Heading>
      </Flex>
    </Link>
  );
}

export default BareLogo;
