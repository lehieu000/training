import React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import { TabProps } from 'react-native-scrollable-tab-view';

const ShowAll = (props: TabProps) => {
    console.log(props);
    return (
        <View style={styles.wrapperAll}>
            <Text>全て</Text>
        </View>
    );
};
const styles = StyleSheet.create({
    wrapperAll: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ShowAll;
