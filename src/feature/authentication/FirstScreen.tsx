import Images from 'assets/images';
import { Themes } from 'assets/themes';
import React from 'react';
import { useTranslation } from 'react-i18next';
import { AUTHENTICATE_ROUTE } from 'navigation/config/routes';
import { navigate } from 'navigation/NavigationService';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

const FirstScreen = () => {
    const { t } = useTranslation();
    const onLogIn = () => {
        navigate(AUTHENTICATE_ROUTE.LOGIN_SCREENS);
    };
    const onSignUp = () => {
        navigate(AUTHENTICATE_ROUTE.SIGNUP_SCREEN);
    };
    return (
        <ImageBackground source={Images.imageFirstScreen} style={styles.imageStyle}>
            <View style={styles.bodyText}>
                <Text style={styles.textStyle}>{t('firstScreen.title1')}</Text>
                <Text style={styles.textStyle1}>{t('firstScreen.title2')}</Text>
                <Text style={styles.txtText}>{t('firstScreen.title3')}</Text>
            </View>
            <View style={styles.bottomStyle}>
                <TouchableOpacity style={styles.bottomSignIn} onPress={onLogIn}>
                    <Text style={styles.textBottom}>{t('authen.login.buttonLogin')}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.bottomLogIn} onPress={onSignUp}>
                    <Text style={styles.textBottom}>{t('firstScreen.bottomSignUp')}</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.txtBottomLogIn}>
                    <Text style={styles.txtBottom}>{t('firstScreen.guestAccountLogin')}</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    imageStyle: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Themes.COLORS.ColorBackRoundImage,
    },
    bodyText: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomStyle: { width: '100%', paddingHorizontal: 30, marginBottom: 30, alignItems: 'center' },
    textStyle: {
        fontFamily: 'Helvetica Neue',
        fontSize: 35,
        color: Themes.COLORS.white,
        marginTop: 150,
    },
    textStyle1: { fontFamily: 'Helvetica Neue', fontSize: 35, color: Themes.COLORS.white },
    txtText: {
        fontFamily: 'Helvetica Neue',
        color: Themes.COLORS.white,
        padding: 12,
    },

    bottomSignIn: {
        width: '100%',
        height: 52,
        backgroundColor: Themes.COLORS.backRoundSignIn,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    bottomLogIn: {
        width: '100%',
        margin: 5,
        height: 52,
        backgroundColor: Themes.COLORS.colorBottomLogIn,
        justifyContent: 'center',
        alignItems: 'center',
    },
    textBottom: {
        fontSize: 15,
        color: Themes.COLORS.white,
    },
    txtBottomLogIn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
    },
    txtBottom: {
        fontSize: 15,
        color: Themes.COLORS.white,
    },
});

export default FirstScreen;
