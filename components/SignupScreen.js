// SignUpScreen.js
import React, { useState } from 'react';
import { NativeBaseProvider, Box, FormControl, Input, Button, VStack, Heading, HStack, Text, Center } from 'native-base';

const SignUpScreen = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignUp = () => {
    // Handle sign-up logic here (validation, API call, etc.)
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Box safeArea p="2" w="90%" maxW="290" py="8">
          <Heading size="lg" fontWeight="600" color="coolGray.800">
            Create Account
          </Heading>
          <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
            Sign up to get started!
          </Heading>

          <VStack space={3} mt="5">
            <FormControl>
              <FormControl.Label>Name</FormControl.Label>
              <Input 
                value={name}
                onChangeText={(text) => setName(text)}
                placeholder="Enter your name"
              />
            </FormControl>

            <FormControl>
              <FormControl.Label>Email</FormControl.Label>
              <Input 
                value={email}
                onChangeText={(text) => setEmail(text)}
                placeholder="Enter your email"
              />
            </FormControl>

            <FormControl>
              <FormControl.Label>Password</FormControl.Label>
              <Input 
                value={password}
                onChangeText={(text) => setPassword(text)}
                placeholder="Enter your password"
                type="password"
              />
            </FormControl>

            <Button mt="2" colorScheme="indigo" onPress={handleSignUp}>
              Sign Up
            </Button>

            <HStack mt="6" justifyContent="center">
              <Text fontSize="sm" color="coolGray.600">
                Already have an account?{' '}
              </Text>
              <Text fontSize="sm" color="indigo.500" fontWeight="medium">
                Sign In
              </Text>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default SignUpScreen;