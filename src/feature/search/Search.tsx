import { Themes } from 'assets/themes';
import React from 'react';
import { View, StyleSheet } from 'react-native';

const Search = () => {
    return <View style={styles.wrapperAll} />;
};
const styles = StyleSheet.create({
    wrapperAll: { backgroundColor: Themes.COLORS.backgroundColorHeader },
});

export default Search;
