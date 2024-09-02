import React from 'react';
import { Box, useTheme } from '@chakra-ui/react';
import BareLogo from '../BareLogoComponent';

function Logo() {
  const theme = useTheme();

  return (
    <Box
      as="header"
      pt={{ base: '20px', sm: '20px', md: '32px' }}
      pb={{ base: '60px', sm: '60px', md: '96px', xl: '74px' }}
      bg={theme.colors.black}
      alignItems="center"
      maxW="1440px"
      w="100%"
      mx="auto"
    >
      <BareLogo />
    </Box>
  );
}

export default Logo;
