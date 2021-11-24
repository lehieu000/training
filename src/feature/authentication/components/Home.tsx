import { Themes } from 'assets/themes';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import Memorized from './Memorized';
import ShowAll from './ShowAll';
import NeedPractice from './NeedPractice';

const Home = () => {
    return (
        <View style={styles.wrapperAll}>
            <View style={styles.styleHeader}>
                <Text style={styles.styleTextHeader}>メッセージ</Text>
                <TouchableOpacity>
                    <Text style={styles.styleTextHeader}>+</Text>
                </TouchableOpacity>
            </View>
            <ScrollableTabView
                style={styles.styleScrollableTabView}
                tabBarBackgroundColor={Themes.COLORS.backgroundColorHeader}
                tabBarInactiveTextColor={Themes.COLORS.white}
                tabBarUnderlineStyle={styles.underlineTabbar}
                tabBarActiveTextColor={Themes.COLORS.white}
            >
                <ShowAll tabLabel="全て" />
                <Memorized tabLabel="未読" />
                <NeedPractice tabLabel="既読" />
            </ScrollableTabView>
        </View>
    );
};
const styles = StyleSheet.create({
    wrapperAll: {
        flex: 1,
        backgroundColor: Themes.COLORS.backgroundColorLogIn,
    },
    styleHeader: {
        height: 100,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Themes.COLORS.backgroundColorHeader,
        paddingTop: 50,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    styleTextHeader: {
        color: Themes.COLORS.white,
        fontSize: 24,
    },
    styleScrollableTabView: {
        backgroundColor: Themes.COLORS.backgroundColorLogIn,
        borderTopColor: 'white',
        borderTopWidth: 0.5,
    },
    underlineTabbar: {
        backgroundColor: Themes.COLORS.backRoundSignIn,
    },
});

export default Home;
