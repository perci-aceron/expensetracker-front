import React from 'react';
import { Flex, Stack, Box, Text, useTheme } from '@chakra-ui/react';
import ArrowIcon from '../../assets/arrowIcon.svg';

function TransactionTotal() {
  const theme = useTheme();

  return (
    <Stack
      as="aside"
      spacing={3}
      bg={theme.colors.black}
      px={{ base: '20px' }}
      py={{ base: '20px' }}
    >
      <Box
        p="20px"
        width="335px"
        height="81px"
        borderRadius="20px"
        bg={theme.colors.totalBlack}
      >
        <Flex flex={1} direction="row" alignItems="center">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="36px"
            height="36px"
            borderRadius="10px"
            bg={theme.colors.green}
          >
            <img src={ArrowIcon} alt="icon for arrow" />
          </Box>
          <Box ml="12px">
            <Flex direction="column" justifyContent="center">
              <Text
                fontSize="12px"
                color={theme.colors.afiftyWhite}
                fontWeight="normal"
              >
                Total Income
              </Text>
              <Text
                fontSize="18px"
                color={theme.colors.white}
                fontWeight="bold"
              >
                $632.000
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
      <Box
        p="20px"
        width="335px"
        height="81px"
        borderRadius="20px"
        bg={theme.colors.totalBlack}
      >
        <Flex flex={1} direction="row" alignItems="center">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="center"
            width="36px"
            height="36px"
            borderRadius="10px"
            bg={theme.colors.green}
          >
            <img src={ArrowIcon} alt="icon for arrow" />
          </Box>
          <Box ml="12px">
            <Flex direction="column" justifyContent="center">
              <Text
                fontSize="12px"
                color={theme.colors.afiftyWhite}
                fontWeight="normal"
              >
                Total Expense
              </Text>
              <Text
                fontSize="18px"
                color={theme.colors.white}
                fontWeight="bold"
              >
                $632.000
              </Text>
            </Flex>
          </Box>
        </Flex>
      </Box>
    </Stack>
  );
}

export default TransactionTotal;
