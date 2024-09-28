// LoginScreen.js
import React, { useState } from 'react';
// import { StatusBar } from 'react-native';

import { NativeBaseProvider, Box, FormControl, Input, Button, VStack, HStack, Heading, Text, Center } from 'native-base';

const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Handle login logic here (validation, API call, etc.)
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <Box safeArea p="2" w="90%" maxW="290" py="8">
          <Heading size="lg" fontWeight="600" color="coolGray.800">
            Welcome
          </Heading>
          <Heading mt="1" color="coolGray.600" fontWeight="medium" size="xs">
            Sign in to continue!
          </Heading>

          <VStack space={3} mt="5">
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

            <Button mt="2" colorScheme="indigo" onPress={handleLogin}>
              Sign In
            </Button>

            <HStack mt="6" justifyContent="center">
              <Text fontSize="sm" color="coolGray.600">
                I'm a new user.{' '}
              </Text>
              <Text fontSize="sm" color="indigo.500" fontWeight="medium">
                Sign Up
              </Text>
            </HStack>
          </VStack>
        </Box>
      </Center>
    </NativeBaseProvider>
  );
};

export default LoginScreen;
