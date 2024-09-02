import React from 'react';
import { Box, Stack, Text, Flex, useTheme } from '@chakra-ui/react';
import { PieChart, Pie, Cell } from 'recharts';

const data = [
  { name: 'Rent', value: 400, color: '#0EF387' },
  { name: 'Groceries', value: 300, color: '#0EBB69' },
  { name: 'Utilities', value: 200, color: '#FAFAFA' },
  { name: 'Entertainment', value: 100, color: '#FAFAFA33' },
];
// const total = data.reduce((sum, entry) => sum + entry.value, 0);
const totalExpenses = 10000;
const percentage = 100;

function TransactionChart() {
  const theme = useTheme();
  return (
    <Box
      bg={theme.colors.black}
      pt={{ base: '20px' }}
      pr={{ base: '20px' }}
      pl={{ base: '20px' }}
      pb={{ base: '80px' }}
    >
      <Box bg={theme.colors.totalBlack} borderRadius="30px">
        <Text
          color={theme.colors.afiftyWhite}
          fontSize="14px"
          fontWeight="400"
          lineHeight="normal"
          pt={{ base: '28px' }}
          pl={{ base: '20px' }}
          pb={{ base: '55px' }}
        >
          Expenses Categories
        </Text>
        <Stack spacing={0}>
          <Box textAlign="center" pb={{ base: '40px' }}>
            <PieChart width={400} height={180}>
              <Pie
                data={data}
                cx="50%"
                cy="100%"
                startAngle={180}
                endAngle={0}
                innerRadius={115}
                outerRadius={175}
                dataKey="value"
                stroke="none"
              >
                {data.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
            </PieChart>
            <Text
              color={theme.colors.white}
              fontSize="24px"
              fontWeight="700"
              lineHeight="normal"
            >
              {percentage}%
            </Text>
          </Box>
          <Stack
            spacing="14px"
            pl={{ base: '20px' }}
            pb={{ base: '40px' }}
            pr={{ base: '46px' }}
          >
            {data.map(entry => (
              <Box key={entry.name}>
                <Flex
                  width="100%"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <Flex flexDirection="row" alignItems="center">
                    <Box
                      width="12px"
                      height="12px"
                      borderRadius="50%"
                      bg={entry.color}
                      mr={2}
                    />
                    <Text
                      color={theme.colors.afiftyWhite}
                      fontSize="16px"
                      fontWeight="normal"
                      lineHeight="normal"
                    >
                      {entry.name}:{' '}
                    </Text>
                  </Flex>
                  <Text
                    color={theme.colors.white}
                    fontSize="16px"
                    fontWeight="700"
                    lineHeight="normal"
                    textAlign="right"
                    flex="1"
                  >
                    {Math.round((entry.value / totalExpenses) * 1000)}%
                  </Text>
                </Flex>
              </Box>
            ))}
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
}

export default TransactionChart;

//todo:
// The component receives data regarding the total expenses by all user expense categories, coming from the backend.
// The component consists of:

// - a header,
// - a chart - a semicircle divided into colored sectors,
// - a list of categories - a list of user expense categories for the current month.

// Each sector of the chart represents the percentage equivalent of the user's transaction amount for the corresponding expense category for the current month relative to the total user expenses for the same month.
// The list of categories contains elements each consisting of:
// - a colored marker corresponding to the color of the sector on the chart for the corresponding category,
// - category name,
// - percentage value of the total expenses.

// When adding an expense transaction through the TransactionForm component, the chart and the list should update the value for the corresponding category.
