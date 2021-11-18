import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import navigationConfigs from 'navigation/config/options';
import { isIos } from 'utilities/helper';
import { AUTHENTICATE_ROUTE } from 'navigation/config/routes';
import LoginScreen from 'feature/authentication/LoginScreen';
import RegisterScreen from 'feature/authentication/RegisterScreen';
import ForgotPasswordScreen from 'feature/authentication/ForgotPwdScreen';
import SendOTP from 'feature/authentication/SendOtp';
import ChangePassword from 'feature/authentication/ChangePassword';
import FirstScreen from 'feature/authentication/FirstScreen';
import LogInScreens from 'feature/authentication/LogInScreens';
import SignUpScreen from 'feature/authentication/SignUpScreen';

const MainStack = createStackNavigator();

const AuthStack = () => (
    <MainStack.Navigator headerMode={'none'} screenOptions={navigationConfigs} keyboardHandlingEnabled={isIos}>
        <MainStack.Screen name={AUTHENTICATE_ROUTE.FIRST_LOGIN} component={FirstScreen} />
        <MainStack.Screen name={AUTHENTICATE_ROUTE.LOGIN_SCREENS} component={LogInScreens} />
        <MainStack.Screen name={AUTHENTICATE_ROUTE.SIGNUP_SCREEN} component={SignUpScreen} />
        <MainStack.Screen name={AUTHENTICATE_ROUTE.LOGIN} component={LoginScreen} />
        <MainStack.Screen name={AUTHENTICATE_ROUTE.REGISTER} component={RegisterScreen} />
        <MainStack.Screen name={AUTHENTICATE_ROUTE.FORGOT_PASS} component={ForgotPasswordScreen} />
        <MainStack.Screen name={AUTHENTICATE_ROUTE.SEND_OTP} component={SendOTP} />
        <MainStack.Screen name={AUTHENTICATE_ROUTE.CHANGE_PASS} component={ChangePassword} />
    </MainStack.Navigator>
);

export default AuthStack;
