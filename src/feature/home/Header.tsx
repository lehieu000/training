import React from 'react';
import { Themes } from 'assets/themes';
import { View, StyleSheet } from 'react-native';

const Header = () => {
    return <View style={styles.wrapperAll} />;
};
const styles = StyleSheet.create({
    wrapperAll: {
        backgroundColor: Themes.COLORS.backgroundColorHeader,
        height: 100,
    },
});

export default Header;
