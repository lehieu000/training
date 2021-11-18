import React, { useState } from 'react';
import { Text, View, StyleSheet, TextInput } from 'react-native';
import { Themes } from 'assets/themes';

interface ICustomInputAuthenticationProps {
    title: string;
    isPassword: boolean;
}

const CustomInputAuthentication = (props: ICustomInputAuthenticationProps) => {
    const { title, isPassword } = props || {};
    const [isFocused, setIsFocused] = useState(false);
    return (
        <View
            style={[
                styles.wrapperAll,
                { borderColor: isFocused ? Themes.COLORS.backRoundSignIn : Themes.COLORS.white },
            ]}
        >
            <Text
                style={[
                    styles.textStyle,
                    {
                        fontSize: isFocused ? 12 : 15,
                        marginTop: isFocused ? 3 : 10,
                    },
                ]}
            >
                {title}
            </Text>
            <TextInput
                onFocus={() => setIsFocused(true)}
                onBlur={() => setIsFocused(false)}
                secureTextEntry={isPassword}
                style={styles.textInput}
            />
        </View>
    );
};
const styles = StyleSheet.create({
    wrapperAll: {
        width: '100%',
        height: 52,
        backgroundColor: Themes.COLORS.white,
        margin: 10,
        justifyContent: 'center',
        padding: 10,
        borderWidth: 1.5,
    },
    textInput: {
        paddingVertical: 3,
        fontSize: 15,
    },
    textStyle: {
        color: Themes.COLORS.textInput,
        fontSize: 15,
    },
});

export default CustomInputAuthentication;
