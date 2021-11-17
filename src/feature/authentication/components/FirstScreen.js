import Images from 'assets/images';
import React from 'react';
import { Text, View, ImageBackground, StyleSheet, TouchableOpacity } from 'react-native';

const FirstScreen = () => {
    return (
        <ImageBackground source={Images.firstScreen} style={styles.ImageStyle}>
            <View style={{ flex: 1 }} />
            <View style={styles.bodyText}>
                <Text style={styles.TextStyle}>元気</Text>
                <Text style={styles.TextStyle}>SUITE SELECTION</Text>
                <Text style={styles.txtText}>
                    スイートセレクションは、質の高いプロフェッショナルと、質を求めているお客様をつなげるアプリです。
                </Text>
            </View>
            <View style={{ flex: 1, margin: 12 }}>
                <TouchableOpacity style={styles.bottomSignIn}>
                    <Text style={styles.TextBottom}>ログイン</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.bottomLogIn}>
                    <Text style={styles.TextBottom}>新規登録</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.txtBottomLogIn}>
                    <Text style={styles.txtBottom}>Đăng nhập tài khoản khách</Text>
                </TouchableOpacity>
            </View>
        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    ImageStyle: {
        flex: 4,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#101110',
    },
    bodyText: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextStyle: {
        fontFamily: 'Helvetica Neue',
        fontSize: 35,
        color: '#FFFFFF',
    },
    txtText: {
        fontFamily: 'Helvetica Neue',
        color: '#FFFFFF',
        padding: 12,
    },
    bottomSignIn: {
        width: 327,
        height: 52,
        backgroundColor: '#FFB900',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 5,
    },
    bottomLogIn: {
        margin: 5,
        width: 327,
        height: 52,
        backgroundColor: '#353A50',
        justifyContent: 'center',
        alignItems: 'center',
    },
    TextBottom: {
        fontSize: 15,
        color: '#FFFFFF',
    },
    txtBottomLogIn: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
    },
    txtBottom: {
        fontSize: 15,
        color: '#FFFFFF',
    },
});

export default FirstScreen;
