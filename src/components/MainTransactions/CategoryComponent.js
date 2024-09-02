import { Box, FormLabel, Input, useTheme } from '@chakra-ui/react';
import React from 'react';

function Category() {
  const theme = useTheme();

  return (
    <Box pl={{ base: '20px' }} pb={{ base: '20px' }} pr={{ base: '20px' }}>
      <FormLabel
        htmlFor="category"
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
      <Input
        as={Input}
        id="category"
        name="category"
        type="text"
        autoComplete="true"
        placeholder="Different"
        height="42px"
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
      />
    </Box>
  );
}

export default Category;

//TODO: a field to select the category, click/focus on the field should open the CategoriesModal modal with categories of the selected type using radio buttons
