import React from 'react';
import { Flex, Box, Image, Text, Show, useTheme } from '@chakra-ui/react';

export default function AllUsersTab() {
  const theme = useTheme();
  return (
    <Show above="lg">
      <Flex
        flexDirection={'row'}
        gap={'32px'}
        pl={{ lg: '25px', xl: '54px' }}
        pb="100px"
        bg={theme.colors.black}
      >
        <Box>
          <Flex flexDirection={'row'}>
            <Image src="/images/amanda.jpg" />
            <Image src="/images/ethan.jpg" />
            <Image src="/images/fleur.jpg" />
          </Flex>
        </Box>
        <Box w="210px">
          <Flex flexDirection={'column'} gap="12px">
            <Text
              color="#FAFAFA"
              fontSize="28px"
              fontWeight="400"
              lineHeight="normal"
              letterSpacing="-0.56px"
            >
              1000 users +{' '}
            </Text>
            <Text
              color="alphaWhite"
              fontSize="16px"
              fontStyle="normal"
              fontWeight="400"
              lineHeight="normal"
              letterSpacing="-0.32px"
            >
              Trusted by users for reliable expense tracking!
            </Text>
          </Flex>
        </Box>
      </Flex>
    </Show>
  );
}

// The component displays information about the number of users registered in the application.
// The component consists of:
// -list of images of abstract users,
// -message with the number of users using the application,
// -text description.
