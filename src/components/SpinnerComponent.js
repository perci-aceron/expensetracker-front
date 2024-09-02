import React from 'react';
import { Box, keyframes } from '@chakra-ui/react';

// Coin flip animation keyframes
const coinFlip = keyframes`
  0%, 100% {
    animation-timing-function: cubic-bezier(0.5, 0, 1, 0.5);
  }
  0% {
    transform: rotateY(0deg);
  }
  50% {
    transform: rotateY(1800deg);
    animation-timing-function: cubic-bezier(0, 0.5, 0.5, 1);
  }
  100% {
    transform: rotateY(3600deg);
  }
`;

// CoinFlipLoader component
const Spinners = () => {
  return (
    <Box
      display="inline-block"
      width="50px"
      height="50px"
      borderRadius="50%"
      textAlign="center"
      lineHeight="40px"
      fontSize="32px"
      fontWeight="bold"
      backgroundColor="#FFD700"
      color="#DAA520"
      border="4px double"
      boxSizing="border-box"
      boxShadow="2px 2px 2px 1px rgba(0, 0, 0, .1)"
      animation={`${coinFlip} 10s cubic-bezier(0, 0.2, 0.8, 1) infinite`}
    >
      $
    </Box>
  );
};

// Spinner component
const Spinner = () => {
  return (
    <Box
      position="absolute"
      height="100vh"
      width="100vw"
      display="flex"
      justifyContent="center"
      alignItems="center"
      bgGradient="linear(to right, #02B15A 20%, #4DC274 50%, #FFFFFF 80%)"
    >
      <Spinners />
    </Box>
  );
};

export default Spinner;
