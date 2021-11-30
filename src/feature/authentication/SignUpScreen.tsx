import { Themes } from 'assets/themes';
import { useTranslation } from 'react-i18next';
import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import { nameReg, emailReg, passReg } from './components/Regex ';
import Header from '../home/Header';
import CustomInputAuthentication from './components/CustomInputAuthentication';

const SignUpScreen = () => {
    const { t } = useTranslation();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [isValidName, setIsValidName] = useState(false);
    const [isValidEmail, setIsValidEmail] = useState(false);
    const [isValidPass, setIsValidPass] = useState(false);
    const [isValidRetypePass, setIsValidRetypePass] = useState(false);

    useEffect(() => {
        if (nameReg.test(name) === false) return setIsValidName(true);
        return setIsValidName(false);
    }, [name]);

    useEffect(() => {
        if (emailReg.test(email) === false) return setIsValidEmail(true);
        return setIsValidEmail(false);
    }, [email]);

    useEffect(() => {
        if (passReg.test(password) === false) return setIsValidPass(true);
        return setIsValidPass(false);
    }, [password]);

    useEffect(() => {
        if (passReg.test(retypePassword) === false) return setIsValidRetypePass(true);
        if (retypePassword !== password) return setIsValidRetypePass(true);
        return setIsValidRetypePass(false);
    }, [retypePassword]);

    return (
        <View style={styles.wrapperAll}>
            <Header />
            <View style={styles.body}>
                <Text style={styles.logInStyle}>{t('logInScreens.signUp')}</Text>
                <CustomInputAuthentication
                    title={t('logInScreens.nameSignUp')}
                    isPassword={false}
                    value={name}
                    onChangeText={setName}
                    isValid={isValidName}
                    textError={t('logInScreens.errorTextName')}
                />
                <CustomInputAuthentication
                    title={t('logInScreens.telephone')}
                    isPassword={false}
                    value={email}
                    onChangeText={setEmail}
                    isValid={isValidEmail}
                    textError={t('logInScreens.errorTextEmail')}
                />
                <CustomInputAuthentication
                    title={t('logInScreens.password')}
                    isPassword={true}
                    value={password}
                    onChangeText={setPassword}
                    isValid={isValidPass}
                    textError={t('logInScreens.errorTextPass')}
                />
                <CustomInputAuthentication
                    title={t('logInScreens.retypePassword')}
                    isPassword={true}
                    value={retypePassword}
                    onChangeText={setRetypePassword}
                    isValid={isValidRetypePass}
                    textError={t('logInScreens.errorRetypePass')}
                />
            </View>
            <View style={styles.bodyBottom}>
                <TouchableOpacity style={styles.bottomSignIn}>
                    <Text style={styles.textBottom}>{t('logInScreens.signUp')}</Text>
                </TouchableOpacity>
                <View style={styles.titleStyle}>
                    <Text style={styles.title}>{t('logInScreens.title')}</Text>
                    <TouchableOpacity>
                        <Text style={styles.titleHere}>{t('logInScreens.hereTitle')}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    wrapperAll: {
        backgroundColor: Themes.COLORS.backgroundColorLogIn,
        flex: 1,
    },
    body: {
        flex: 1,
        paddingHorizontal: 30,
        alignItems: 'center',
    },
    logInStyle: {
        fontSize: 17,
        color: Themes.COLORS.white,
        marginTop: 30,
        paddingBottom: 20,
        alignSelf: 'flex-start',
    },
    bottomStyle: {
        alignSelf: 'flex-end',
    },
    forgotPasswordStyle: {
        fontSize: 14,
        color: Themes.COLORS.white,
        padding: 10,
    },
    bottomSignIn: {
        width: '100%',
        height: 52,
        backgroundColor: Themes.COLORS.backRoundSignIn,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodyBottom: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: 30,
    },
    textBottom: {
        fontSize: 15,
        color: Themes.COLORS.black,
    },
    titleStyle: {
        flexDirection: 'row',
        margin: 20,
        paddingBottom: 20,
    },
    title: {
        fontSize: 14,
        color: Themes.COLORS.white,
    },
    titleHere: {
        fontSize: 14,
        color: Themes.COLORS.titleColor,
    },
});

export default SignUpScreen;
