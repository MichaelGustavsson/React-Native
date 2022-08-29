import { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Alert } from 'react-native';

import Colors from '../utilities/constants/colors';

import MainButton from '../components/ui/MainButton';
import AppHeader from '../components/ui/AppHeader';

const LoginScreen = ({ onLogin }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUserNameHandler = (value) => {
    setUserName(value);
  };

  const onChangePasswordHandler = (value) => {
    setPassword(value);
  };

  const onResetLoginHandler = () => {
    setUserName('');
  };

  const onLoginHandler = () => {
    if (userName.trim().length === 0 || password.trim().length === 0) {
      Alert.alert(
        'Problem med inloggning',
        'Användarnamn och lösenord måste anges!',
        [{ text: 'OK', style: 'default', onPress: onResetLoginHandler }]
      );
      return;
    }
    onLogin(true);
  };

  const onRegisterHandler = () => {
    console.log('Duttat på registrera');
  };

  return (
    <View style={styles.screen}>
      <AppHeader>MovieFlix</AppHeader>
      <View>
        <Text style={styles.titleText}>Vänligen logga in</Text>
      </View>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.userNameInput}
          placeholder='E-Post'
          placeholderTextColor={'#cecccc'}
          keyboardType='email-address'
          autoCapitalize='none'
          autoCorrect={false}
          value={userName}
          onChangeText={onChangeUserNameHandler}
        />
        <TextInput
          style={styles.userNameInput}
          placeholder='Lösenord'
          placeholderTextColor={'#cecccc'}
          keyboardType='default'
          secureTextEntry={true}
          value={password}
          onChangeText={onChangePasswordHandler}
        />
        <View style={styles.buttonsContainer}>
          <MainButton onPressed={onLoginHandler}>Logga In</MainButton>
          <MainButton onPressed={onRegisterHandler}>Registrera</MainButton>
        </View>
      </View>
    </View>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
  },
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: '#611313',
    borderRadius: 10,
    elevation: 10,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 3 },
    shadowRadius: 6,
    shadowOpacity: 0.9,
  },
  userNameInput: {
    height: 28,
    fontSize: 16,
    borderBottomColor: '#ddb52f',
    borderBottomWidth: 1,
    paddingVertical: 4,
    marginVertical: 6,
    color: '#ddb52f',
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  titleText: {
    color: Colors.lightText,
    textAlign: 'center',
    fontSize: 28,
    fontWeight: 'bold',
    borderWidth: 2,
    borderColor: Colors.lightText,
    padding: 12,
    marginHorizontal: 20,
    marginVertical: 30,
    borderRadius: 5,
  },
});
