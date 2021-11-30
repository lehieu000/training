import { Themes } from 'assets/themes';
import React from 'react';
import { View, StyleSheet } from 'react-native';

const Photo = () => {
    return <View style={styles.wrapperAll} />;
};
const styles = StyleSheet.create({
    wrapperAll: { backgroundColor: Themes.COLORS.backgroundImage },
});

export default Photo;
