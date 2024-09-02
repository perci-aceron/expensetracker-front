import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Formik } from 'formik';
import * as yup from 'yup';
import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  InputGroup,
  InputRightElement,
  useTheme,
  useToast,
  Box,
} from '@chakra-ui/react';
import axiosInstance from '../../api/axios';
import UnivBtn from '../buttons/UnivBtnComponent';
import EyeOffIcon from '../../assets/eyeOff.svg';
import EyeOnIcon from '../../assets/eyeOn.svg';

const RegisterForm = () => {
  const theme = useTheme();
  const toast = useToast();
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);

  const handleClick = () => setShowPassword(!showPassword);

  const handleSubmit = async (values, { setSubmitting }) => {
    try {
      const response = await axiosInstance.post(
        'http://localhost:3001/api/auth/register',
        values
      );
      const { token } = response.data;
      localStorage.setItem('authToken', token);
      navigate('/:type');

      toast({
        title: 'Account Created',
        description: "We've created your account for you.",
        status: 'success',
        duration: 9000,
        isClosable: true,
        // render: () => (
        //   <Box color="white" p={3} bg="blue.500">
        //     Hello World
        //   </Box>
        // ),
      });
      navigate('/login');
    } catch (error) {
      console.error('Registration failed:', error);
      toast({
        title: 'Registration Failed',
        description: 'Registration failed.',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    } finally {
      setSubmitting(false);
    }
  };

  const validationSchema = yup.object({
    name: yup.string().required('Name is required'),
    email: yup
      .string()
      .email('Enter a valid email')
      .required('Email is required'),
    password: yup
      .string()
      .min(8, 'Password should be of minimum 8 characters length')
      .required('Password is required'),
  });

  return (
    <Formik
      initialValues={{ name: '', email: '', password: '' }}
      validationSchema={validationSchema}
      onSubmit={handleSubmit}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
      }) => (
        <form onSubmit={handleSubmit}>
          <FormControl
            isInvalid={errors.name && touched.name}
            pb={{ base: '20px', xl: '24px' }}
          >
            <FormLabel htmlFor="name" display="none">
              Name
            </FormLabel>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Name"
              autoComplete="true"
              bg={theme.colors.black}
              color={theme.colors.alphaWhite}
              focusBorderColor={theme.colors.green}
              borderColor={
                errors.name ? theme.colors.red : theme.colors.darkWhite
              }
              fontSize="14px"
              fontWeight="normal"
              lineHeight="18px"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
              borderRadius="12px"
              w="399px"
            />
            <FormErrorMessage
              color={theme.colors.red}
              fontSize="10px"
              fontWeight="400"
              lineHeight="normal"
            >
              {errors.name}
            </FormErrorMessage>
          </FormControl>
          {/* email */}
          <FormControl isInvalid={errors.email && touched.email} pb="20px">
            <FormLabel display="none" htmlFor="email">
              Email address
            </FormLabel>
            <Input
              as={Input}
              id="email"
              name="email"
              type="email"
              placeholder="Email"
              autoComplete="true"
              bg={theme.colors.black}
              color={theme.colors.alphaWhite}
              focusBorderColor={theme.colors.green}
              borderColor={
                errors.email ? theme.colors.red : theme.colors.darkWhite
              }
              fontSize="14px"
              fontWeight="normal"
              lineHeight="18px"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
              borderRadius={'12px'}
              w="399px"
            />
            <FormErrorMessage
              color={theme.colors.red}
              fontSize="10px"
              fontWeight="400"
              lineHeight="normal"
            >
              {errors.email}
            </FormErrorMessage>
          </FormControl>
          {/* password */}
          <FormControl isInvalid={errors.password && touched.password} pb="0">
            <FormLabel display="none" htmlFor="password">
              Password
            </FormLabel>
            <InputGroup size="md" width="399px">
              <Input
                id="password"
                type={showPassword ? 'text' : 'password'}
                name="password"
                placeholder="Password"
                bg={theme.colors.black}
                color="white"
                focusBorderColor="green"
                borderColor={errors.password ? 'red' : 'darkWhite'}
                fontSize="14px"
                fontWeight="normal"
                lineHeight="18px"
                onChange={handleChange}
                onBlur={handleBlur}
                value={values.password}
                borderRadius="12px"
              />
              <InputRightElement
                width="4.5rem"
                right="0"
                top="50%"
                transform="translateY(-50%)"
              >
                <Box
                  as="button"
                  onClick={handleClick}
                  bg="transparent"
                  border="none"
                  p={0}
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                >
                  {showPassword ? (
                    <img
                      src={EyeOnIcon}
                      alt="eye on icon"
                      width="16px"
                      height="16px"
                    />
                  ) : (
                    <img
                      src={EyeOffIcon}
                      alt="eye off icon"
                      width="16px"
                      height="16px"
                    />
                  )}
                </Box>
              </InputRightElement>
            </InputGroup>
            <FormErrorMessage
              color={theme.colors.red}
              fontSize="10px"
              fontWeight="400"
              lineHeight="normal"
            >
              {errors.password}
            </FormErrorMessage>
            {!errors.password && touched.password && values.password && (
              <FormHelperText
                color="#097B45"
                fontSize="10px"
                fontWeight="400"
                lineHeight="normal"
              >
                Password is secure
              </FormHelperText>
            )}
          </FormControl>
          {/* send btn */}
          <Box pt={{ base: '80px', lg: '132px' }}>
            <UnivBtn
              type="submit"
              isLoading={isSubmitting}
              width="138px"
              p="14px 44px"
              color={theme.colors.black}
              bg={theme.colors.green}
              rounded="full"
              fontSize="14px"
              fontWeight="normal"
              lineHeight="normal"
              letterSpacing="-0.28px"
              _hover={{
                bg: theme.colors.alphaGreen,
              }}
            >
              Sign Up
            </UnivBtn>
          </Box>
        </form>
      )}
    </Formik>
  );
};

export default RegisterForm;
