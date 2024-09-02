import React from 'react';
import { Box, FormLabel, useTheme, Textarea } from '@chakra-ui/react';

function Comment() {
  const theme = useTheme();
  return (
    <Box pl={{ base: '20px' }} pb={{ base: '20px' }} pr={{ base: '20px' }}>
      <FormLabel
        htmlFor="comment"
        color={theme.colors.white}
        fontSize="14px"
        fontWeight="normal"
        lineHeight="normal"
        letterSpacing="-0.28px"
        m="0"
        pb="6px"
      >
        Category
      </FormLabel>
      <Textarea
        as="textarea"
        id="comment"
        name="comment"
        type="text"
        placeholder="Enter the text"
        _placeholder={{
          verticalAlign: 'top',
        }}
        p="12px"
        fontSize="14px"
        fontWeight="normal"
        lineHeight="18px"
        borderRadius="12px"
        color={theme.colors.alphaWhite}
        bg={theme.colors.totalBlack}
        borderColor={theme.colors.darkWhite}
        focusBorderColor={theme.colors.green}
        width="100%"
        resize="none"
        rows="3"
        // width={{ base: '240px', sm: '295px' }}
      />
    </Box>
  );
}

export default Comment;
