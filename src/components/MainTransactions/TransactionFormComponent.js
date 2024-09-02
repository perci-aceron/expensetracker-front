import { Box, useTheme } from '@chakra-ui/react';
import RadioBtn from 'components/buttons/RadioButtons';
import Calendar from './DateTimeComponent';
import Category from './CategoryComponent';
import Currency from './CurrencyComponent';
import Comment from './CommentComponent';
import UnivBtn from 'components/buttons/UnivBtnComponent';

function TransactionForm() {
  const theme = useTheme();
  return (
    <Box bg={theme.colors.black} p={{ base: '20px' }}>
      <Box bg={theme.colors.totalBlack} borderRadius={'30px'}>
        <RadioBtn />
        <Calendar />
        <Category />
        <Currency />
        <Comment />
        <Box pl={{ base: '20px' }} pb={{ base: '28px' }}>
          <UnivBtn
            p="14px 44px"
            w="114px"
            rounded="full"
            fontSize="14px"
            fontWeight="normal"
            lineHeight="normal"
            letterSpacing="-0.28px"
            color={theme.colors.black}
            bg={theme.colors.green}
            _hover={{
              bg: theme.colors.alphaGreen,
            }}
          >
            Add
          </UnivBtn>
        </Box>
      </Box>
    </Box>
  );
}

export default TransactionForm;

//todo: All fields must be validated according to the backend documentation.
//todo: The button to submit the form checks for validity and submits the data if they pass validation, or displays an error message as shown in the layout.
//todo: success - the form fields are reset to their initial state
//todo: error - the user is displayed a push notification (any library can be used for this implementation).
