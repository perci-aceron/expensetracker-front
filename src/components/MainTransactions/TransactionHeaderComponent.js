import React from 'react';
import { Flex, Box, useTheme } from '@chakra-ui/react';
import BareLogo from '../BareLogoComponent';
import BurgerBtn from 'components/buttons/BurgerBtnComponent';

function TransactionHeader() {
  const theme = useTheme();
  return (
    <Flex
      borderBottom="1px solid rgba(250, 250, 250, 0.10)"
      as="header"
      px="20px"
      pt={{ base: '20px', md: '32px' }}
      pb={{ base: '20px', md: '96px', xl: '74px' }}
      bg={theme.colors.black}
      h="64px"
      alignItems="center"
      justifyContent={'space-between'}
    >
      <Box>
        <BareLogo />
      </Box>
      <Box>
        <BurgerBtn />
      </Box>
    </Flex>
  );
}

export default TransactionHeader;
