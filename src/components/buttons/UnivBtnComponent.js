import React from 'react';
import { Button } from '@chakra-ui/react';

const UnivBtn = ({
  isLoading,
  children,
  type = 'button',
  onClick,
  ...props
}) => {
  return (
    <Button type={type} onClick={onClick} isLoading={isLoading} {...props}>
      {children}
    </Button>
  );
};

export default UnivBtn;
