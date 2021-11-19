import { Themes } from 'assets/themes';
import { useTranslation } from 'react-i18next';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import Header from './components/Header';
import CustomInputAuthentication from './components/CustomInputAuthentication';

const LogInScreens = () => {
    const { t } = useTranslation();
    return (
        <View style={styles.wrapperAll}>
            <Header />
            <View style={styles.body}>
                <Text style={styles.logInStyle}>{t('authen.login.buttonLogin')}</Text>
                <CustomInputAuthentication title={t('logInScreens.telephone')} isPassword={false} />
                <CustomInputAuthentication title={t('logInScreens.password')} isPassword={true} />
                <TouchableOpacity style={styles.bottomStyle}>
                    <Text style={styles.forgotPasswordStyle}>{t('logInScreens.forgotPassword')}</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.bodyBottom}>
                <TouchableOpacity style={styles.bottomSignIn}>
                    <Text style={styles.textBottom}>{t('authen.login.buttonLogin')}</Text>
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
        height: 50,
        backgroundColor: Themes.COLORS.backRoundSignIn,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bodyBottom: {
        justifyContent: 'center',
        paddingHorizontal: 30,
        alignItems: 'center',
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

export default LogInScreens;
