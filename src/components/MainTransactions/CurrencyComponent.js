import React, { useState } from 'react';
import {
  Box,
  FormLabel,
  Input,
  //   InputGroup,
  //   InputRightElement,
  useTheme,
} from '@chakra-ui/react';
// import Select from 'react-select';

// const currencyOptions = [
//   { value: 'USD', label: 'USD' },
//   { value: 'EUR', label: 'EUR' },
//   { value: 'JPY', label: 'JPY' },
//   // Add more currencies as needed
// ];

function Currency() {
  const theme = useTheme();
  //   const [selectedCurrency, setSelectedCurrency] = useState(currencyOptions[0]);
  const [amount, setAmount] = useState('');
  return (
    <Box pl={{ base: '20px' }} pb={{ base: '20px' }} pr={{ base: '20px' }}>
      <FormLabel
        htmlFor="sum"
        color={theme.colors.white}
        fontSize="14px"
        fontWeight="normal"
        lineHeight="normal"
        letterSpacing="-0.28px"
        m="0"
        pb="6px"
      >
        Sum
      </FormLabel>
      {/* <InputGroup width={{ base: '240px', sm: '295px' }}> */}
      <Input
        as={Input}
        id="sum"
        name="sum"
        type="number"
        value={amount}
        onChange={e => setAmount(e.target.value)}
        autoComplete="true"
        placeholder="Enter the sum"
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
        // width={{ base: '240px', sm: '295px' }}
        width="100%"
      />
      {/* <InputRightElement width="100px" height="40px">
          <Select
            height="20px"
            value={selectedCurrency}
            onChange={setSelectedCurrency}
            options={currencyOptions}
            isSearchable={false}
            components={{
              IndicatorSeparator: () => null, // Remove the separator between dropdown and input
            }}
            styles={{
              control: provided => ({
                ...provided,
                width: '80px', // Set dropdown width
                height: '42px',
                borderRadius: '0px 12px 12px 0px', // Match input field border radius
                backgroundColor: '#171719',
              }),
              focusBorderColor: '#4DC274',
              bg: theme.colors.totalBlack,
              singleValue: provided => ({
                ...provided,
                color: '#4DC274', // Customize selected currency color
              }),
            }}
          />
        </InputRightElement>
      </InputGroup> */}
    </Box>
  );
}

export default Currency;

//todo: for entering the transaction amount
