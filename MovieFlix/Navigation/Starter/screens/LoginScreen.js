import { useState } from 'react';
import { View, Text, StyleSheet, TextInput, Alert } from 'react-native';
import Colors from '../utilities/constants/colors';
import MainButton from '../components/ui/MainButton';
import AppHeader from '../components/ui/AppHeader';

const LoginScreen = ({ onLogIn }) => {
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');

  const onChangeUserNameHandler = (value) => {
    setUserName(value);
  };

  const onChangePasswordHandler = (value) => {
    setPassword(value);
  };

  const onResetLogin = () => {
    setUserName('');
    setPassword('');
  };

  const onLoginHandler = () => {
    if (userName.trim().length === 0 || password.trim().length === 0) {
      Alert.alert(
        'Problem med inloggning',
        'Mejl adress och lösenord måste anges',
        [{ text: 'OK', style: 'cancel', onPress: onResetLogin }]
      );

      return;
    }
    // console.log(userName, password);
    onLogIn(true);
  };

  const onRegisterUserHandler = () => {
    Alert.alert('Registrera konto', 'Välkommen till MovieFlix', [
      { text: 'Klart', style: 'default' },
    ]);
  };

  return (
    <>
      {/* <Text style={styles.text}>MovieFlix</Text> */}
      <AppHeader>MovieFlix</AppHeader>
      <View style={styles.inputContainer}>
        <TextInput
          style={styles.userNameInput}
          placeholder='E-Post'
          keyboardType='email-address'
          placeholderTextColor={Colors.light}
          autoCapitalize='none'
          autoCorrect={false}
          value={userName}
          onChangeText={onChangeUserNameHandler}
        />
        <TextInput
          style={styles.passwordInput}
          placeholder='Lösenord'
          keyboardType='default'
          placeholderTextColor={Colors.light}
          secureTextEntry={true}
          value={password}
          onChangeText={onChangePasswordHandler}
        />
        <View style={styles.buttonsContainer}>
          <View style={styles.buttonContainer}>
            <MainButton onPress={onLoginHandler}>Logga In</MainButton>
          </View>
          <View style={styles.buttonContainer}>
            <MainButton onPress={onRegisterUserHandler}>Registrera</MainButton>
          </View>
        </View>
      </View>
    </>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  text: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    color: Colors.primary,
    fontSize: 24,
  },
  inputContainer: {
    padding: 16,
    marginTop: 100,
    marginHorizontal: 24,
    backgroundColor: Colors.secondaryBackground,
    borderRadius: 10,
    elevation: 8,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 6,
    shadowOpacity: 0.9,
  },
  userNameInput: {
    height: 28,
    fontSize: 16,
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 1,
    marginVertical: 6,
    paddingVertical: 4,
    color: Colors.secondary,
  },
  passwordInput: {
    height: 28,
    fontSize: 16,
    borderBottomColor: Colors.secondary,
    borderBottomWidth: 1,
    marginVertical: 6,
    paddingVertical: 6,
    color: Colors.secondary,
  },
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
