import { Box } from '@chakra-ui/react';
import React from 'react';
import burgerIcon from '../../assets/burgerIcon.svg';

function BurgerBtn() {
  return (
    <Box
      as="button"
      width="36px"
      height="36px"
      display="flex"
      alignItems="center"
      justifyContent="center"
      flex={1}
    >
      <img src={burgerIcon} alt="burger button icon" />
    </Box>
  );
}

export default BurgerBtn;
