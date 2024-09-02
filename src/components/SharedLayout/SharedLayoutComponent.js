import React from 'react';
import { Box, Stack } from '@chakra-ui/react';
import { Outlet, useLocation } from 'react-router-dom';
import HeaderLogo from '../SharedLayout/HeaderLogoComponent';
import BgImageWrapper from '../SharedLayout/BgImgWrapperComponent';
import DecorationTab from '../SharedLayout/DecorationTabComponent';

const SharedLayout = () => {
  const location = useLocation();
  const hideComponents = ['/login', '/register'].includes(location.pathname);

  return (
    <Box
      display={{ lg: 'flex' }}
      alignItems={{ lg: 'center' }}
      justifyContent={{ lg: 'center' }}
      minH={{ lg: '100vh' }}
    >
      <Box
        w="100%"
        maxW="1440px"
        borderRadius={{ lg: '20px' }}
        overflow="hidden"
      >
        <HeaderLogo />
        <Stack
          direction={{ base: 'column', lg: 'row-reverse' }}
          spacing={0}
          flex={1}
          w="100%"
        >
          <Box flex="1" flexGrow={1} flexShrink={0}>
            <Outlet />
          </Box>
          {!hideComponents && (
            <>
              <BgImageWrapper flex="1" flexGrow={1} flexShrink={0} />
              <DecorationTab />
            </>
          )}
        </Stack>
      </Box>
    </Box>
  );
};

export default SharedLayout;
