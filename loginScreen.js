import React, { useState } from 'react';
import { View, Text, TextInput, Button } from 'react-native';

const LoginScreen = ({ navigation }) => {
  const   
 [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Implement your login logic here,   
    // For now, we'll simply navigate to the next screen
    navigation.navigate('Dashboard');
  };

  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}   

      />
      <TextInput
        placeholder="Password"
        secureTextEntry
        value={password}
        onChangeText={setPassword}
      />
      <Button title="Login"   
 onPress={handleLogin} />
    </View>
  );
};

export default LoginScreen;   
