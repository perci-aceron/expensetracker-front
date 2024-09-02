import React from 'react';
import { Box, Image, useTheme } from '@chakra-ui/react';
export default function BgImageWrapper() {
  const theme = useTheme();
  return (
    <Box
      bg={theme.colors.black}
      pr={{ base: '20px', md: '32px', lg: '0' }}
      pl={{ base: '20px', md: '32px', xl: '100px' }}
      pb={{ base: '20px', md: '32px', xl: '100px' }}
      w="100%"
    >
      <Image
        src="/images/expensetrackerbg.jpg"
        alt="Happy couple having fun while online shopping at home"
        objectFit="cover"
        borderRadius="20px"
        width={{ base: '335px', md: '705px', xl: '611px' }}
        height={{ base: '381px', md: '482px', xl: '568px' }}
      />
    </Box>
  );
}
