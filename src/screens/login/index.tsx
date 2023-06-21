
import React, { useState } from 'react';
import { 
  ScrollView, 
  View, 
  Text, 
  Image, 
  TouchableOpacity, 
  SafeAreaView, 
  TouchableWithoutFeedback, 
  ToastAndroid,
  Linking,  
} from 'react-native';
import { styles } from './styles';
import { useNavigation } from '@react-navigation/native';
import { InputLogin } from '../../components/InputLogin';
import { ButtonLogin } from '../../components/ButtonLogin';

const Login = () => {
  const [emailField, setEmailField] = useState('');
  const [passwordField, setPasswordField] = useState('');
  const navigation = useNavigation();

  const handleHomeClick = () => {
    navigation.navigate('Home' as never)
  }

  const handleHomeClickLog = () => {
    if(emailField === 'pedro@123.com' && passwordField === '123456') {
      navigation.navigate('Home', { emailField });
      ToastAndroid.show('Login feito com sucesso!', ToastAndroid.SHORT);
    } else {
      ToastAndroid.show('Email ou senha inválido!', ToastAndroid.SHORT)
    }
  }

  const handleChangePassword = () => {
    navigation.navigate('Password Reset' as never)
  }

  const handleFacebook = () => {
    Linking.openURL('https://web.facebook.com/help?_rdc=1&_rdr')
  }

  const handleGoogle = () => {
    Linking.openURL('https://www.google.com/')
  }

  const handleApple = () => {
    Linking.openURL('https://support.apple.com/pt-br/HT204053')
  }

  const handleRegister = () => {
    Linking.openURL('https://suporte.cifraclub.com.br/pt-BR/support/solutions/articles/64000270872-como-posso-fazer-login-no-site-do-cifra-club-')
  }

  const handleTermsOfUse = () => {
    Linking.openURL('https://m.cifraclub.com.br/aviso-legal.html?hl=en')
  }

  const handlePrivacyPolice = () => {
    Linking.openURL('https://m.cifraclub.com.br/politica-privacidade.html?hl=en')
  }

  return (
    <SafeAreaView style={styles.container}>
      <Image source={require('../../../assets/fundoLogin.png')} style={styles.backgroundImage} />
      <ScrollView>
        <TouchableOpacity onPress={handleHomeClick}>
          <Text style={styles.iconX}>X</Text>
        </TouchableOpacity>
        <View>
          <Image source={require('../../../assets/LogoCifraClub.png')} style={styles.cifraImg}/>
        </View>
        <View style={styles.box}>
         <View style={styles.inputs}>
            <InputLogin 
              placeholder='exemplo@exemplo.com.br'
              style={[styles.boxes, styles.boxInput]}
              value={emailField}
              onChangeText={t => setEmailField(t)}
              autoCapitalize='none'
              keyboardType='email-address'           
            />
            <InputLogin 
              placeholder='password'
              style={[styles.boxes, styles.boxInput]}
              secureTextEntry
              value={passwordField}
              onChangeText={t => setPasswordField(t)}
            />
            <ButtonLogin 
              onPress={handleHomeClickLog}
              styleText={[styles.boxes, styles.login, styles.centerAlign]}
              text='LOGIN'
            />
            <ButtonLogin 
              onPress={handleChangePassword}
              styleText={[styles.boxes, styles.forgot, styles.centerAlign]}
              text='FORGOT MY PASSWORD'
            />
            <View style={styles.grayLine}></View>
            <ButtonLogin 
              style={styles.row}
              onPress={handleFacebook}
              styleText={[styles.boxes, styles.center, styles.facebook]} 
              text='Login with Facebook'
              icon={require('../../../assets/facebook.png')}
            />
            <ButtonLogin 
              onPress={handleGoogle}
              styleText={[styles.boxes, styles.center, styles.google]}
              text='Login with Google'
              icon={require('../../../assets/google.jpg')}
            />
            <ButtonLogin 
              onPress={handleApple}
              styleText={[styles.boxes, styles.center, styles.apple]}
              text='Sign in with Apple'
              icon={require('../../../assets/apple.png')}
            />
            <TouchableOpacity onPress={handleRegister}>
              <Text style={[styles.boxes, styles.centerAlign, styles.account]}>
                Don't have an account? <Text style={styles.register}>Register</Text>  
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <Image source={require('../../../assets/logoDown.png')} style={styles.logoDown} />
          <Text style={styles.finalText}>
            By signing up, you agree to our{' '}
            <TouchableWithoutFeedback onPress={handleTermsOfUse}>
              <Text style={styles.links}>Terms of Use</Text>
            </TouchableWithoutFeedback>{' '}
            and{' '}
            <TouchableWithoutFeedback onPress={handlePrivacyPolice}>
              <Text style={styles.links}>Privacy Policy</Text>
            </TouchableWithoutFeedback>
          </Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

export default Login;
