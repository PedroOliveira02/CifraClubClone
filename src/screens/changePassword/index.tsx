import React, { useState } from 'react';
import {  
  View, 
  Text,   
  SafeAreaView,  
  ToastAndroid 
} from 'react-native';
import { styles } from '../login/styles';
import { useNavigation } from '@react-navigation/native';
import { InputLogin } from '../../components/InputLogin';
import { ButtonLogin } from '../../components/ButtonLogin';

const Password = () => {

    const navigation = useNavigation();

    const [emailField, setEmailField] = useState('');

    const handleChangePassword = () => {
        if (emailField == '') {
            ToastAndroid.show('Favor inserir um email!', ToastAndroid.SHORT)
        } else {
            navigation.navigate('Login' as never)
            ToastAndroid.show('Email enviado para sua conta para troca de senha!', ToastAndroid.SHORT)
        }
    }

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: '#fff' }}>
            <View style={{ padding: 10}}>
                <Text>E-mail</Text>
                <InputLogin
                    placeholder='E-mail'
                    style={[styles.boxes, styles.boxInput]}
                    value={emailField}
                    onChangeText={t => setEmailField(t)}
                    autoCapitalize='none'
                    keyboardType='email-address'
                />
                <ButtonLogin 
                    onPress={handleChangePassword}
                    styleText={[styles.boxes, styles.login, styles.centerAlign]}
                    text='Change password'
                />
            </View>
        </SafeAreaView>
    );
};

export default Password;