import React from 'react';
import {
  Box,
  Text,
  CloseButton,
  useTheme,
  Input,
  Flex,
  UnorderedList,
  ListItem,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react';
import UnivBtn from './buttons/UnivBtnComponent';

function CategoriesModal() {
  const theme = useTheme();
  return (
    <Box bg="transparent" px={{ base: '20px' }}>
      <Box
        bg={theme.colors.totalBlack}
        borderRadius="30px"
        p="20px 20px 40px 20px"
      >
        <Flex justifyContent={'flex-end'}>
          <CloseButton color={theme.colors.white} size="md" />
        </Flex>
        <Text
          color={theme.colors.white}
          fontSize="2xl"
          lineHeight="normal"
          letterSpacing="-0.48px"
          paddingBottom="20px"
        >
          Expenses
        </Text>
        <Text
          color={theme.colors.alphaWhite}
          fontSize="xs"
          lineHeight="normal"
          paddingBottom="10px"
        >
          All Category
        </Text>
        <UnorderedList>
          <ListItem></ListItem>
        </UnorderedList>
        <Text
          color={theme.colors.green}
          fontSize="14px"
          lineHeight="normal"
          letterSpacing="-0.28px"
          paddingBottom="8px"
        >
          New Category
        </Text>
        <InputGroup>
          <Input
            padding="12px 14px"
            borderRadius="12px"
            borderColor={theme.colors.darkWhite}
            placeholder="Enter the text"
            _placeholder={{
              color: theme.colors.alphaWhite,
              fontSize: '14px',
              lineHeight: '18px',
            }}
          />
          <InputRightElement width="auto">
            <UnivBtn
              padding="13px 44px"
              borderRadius="12px"
              bg={theme.colors.green}
              color={theme.colors.black}
              fontSize="14px"
              lineHeight="normal"
              letterSpacing="-0.28px"
            >
              Add
            </UnivBtn>
          </InputRightElement>
        </InputGroup>
      </Box>
    </Box>
  );
}

export default CategoriesModal;

//todo:
// Component receives from the backend categories of the corresponding type of transactions created by the user.
// The component displays a list of transaction categories and allows for creating these categories.
// The component consists of a backdrop and a modal window containing:
// - a button to close the modal
// - a header indicating the type of transactions for this category list,
// - a list of categories - each list item consists of the category name and buttons to select/edit/delete.
// - a form to add a category - contains a field for entering the category name and an Add button to submit the request. Clicking the submit button validates the data according to the backend documentation and sends a request if the data is valid, or displays an appropriate message near the form field if the data is invalid. After a successful data submission, the category is added to the list and the input field is cleared, and in case of an error, the user is shown a corresponding push notification.
// Clicking the select button - closes the modal and adds this category to the TransactionForm in the Category field.
// Clicking the edit button - fills the form field for adding a category with the name of this category and changes the submit button content from Add to Edit. After submitting the form for editing the category, upon a successful response, the category name in the list is changed to the new one and the form is cleared, and in case of an error response, the user is shown a corresponding push notification.
// Clicking the delete button - sends a request to delete the corresponding category from the list.
// If there are more categories in the list than it can contain according to the layout, the list should have a scroll.

// The modal should also close by clicking on the close button, clicking on the backdrop, or pressing the Esc key.
