import { Themes } from 'assets/themes';
import React from 'react';
import { Text, View, Image, SafeAreaView, StyleSheet, TouchableOpacity } from 'react-native';
import ScrollableTabView from 'react-native-scrollable-tab-view';
import { useTranslation } from 'react-i18next';
import Images from 'assets/images';
import Memorized from './components/Memorized';
import ShowAll from './components/ShowAll';
import NeedPractice from './components/NeedPractice';

const HomeScreen = () => {
    const { t } = useTranslation();
    return (
        <SafeAreaView style={styles.wrapperAll}>
            <View style={styles.styleHeader}>
                <Text style={styles.styleTextHeader}>メッセージ</Text>
                <TouchableOpacity>
                    <Image source={Images.icons.tab.rectangle} />
                </TouchableOpacity>
            </View>
            <ScrollableTabView
                style={styles.styleScrollableTabView}
                tabBarBackgroundColor={Themes.COLORS.backgroundColorHeader}
                tabBarInactiveTextColor={Themes.COLORS.white}
                tabBarUnderlineStyle={styles.underlineTabbar}
                tabBarActiveTextColor={Themes.COLORS.white}
            >
                <ShowAll tabLabel={t('tab.show')} />
                <Memorized tabLabel={t('tab.Memorized')} />
                <NeedPractice tabLabel={t('tab.NeedPractice')} />
            </ScrollableTabView>
        </SafeAreaView>
    );
};
const styles = StyleSheet.create({
    wrapperAll: {
        flex: 1,
        backgroundColor: Themes.COLORS.backgroundColorHeader,
    },
    styleHeader: {
        height: 70,
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: Themes.COLORS.backgroundColorHeader,
        alignItems: 'center',
        paddingHorizontal: 20,
    },
    styleTextHeader: {
        color: Themes.COLORS.white,
        fontSize: 24,
    },
    styleScrollableTabView: {
        backgroundColor: Themes.COLORS.backgroundColorLogIn,
        borderTopColor: Themes.COLORS.backgroundImage,
        borderTopWidth: 0.5,
    },
    underlineTabbar: {
        backgroundColor: Themes.COLORS.backRoundSignIn,
    },
});

export default HomeScreen;
