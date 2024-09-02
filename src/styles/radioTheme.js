import { radioAnatomy } from '@chakra-ui/anatomy';
import { createMultiStyleConfigHelpers } from '@chakra-ui/react';

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys);
const baseStyle = definePartsStyle({
  control: {
    width: '24px',
    height: '24px',
    borderRadius: '50%',
    border: '3px solid',
    borderColor: '#FAFAFA33',
    position: 'relative',
    _checked: {
      borderColor: '#4DC274',
      bg: 'transparent',
      _after: {
        content: '""',
        width: '11px',
        height: '11px',
        borderRadius: '50%',
        bg: '#4DC274',
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
      },
    },
  },
});

export const radioTheme = defineMultiStyleConfig({ baseStyle });
