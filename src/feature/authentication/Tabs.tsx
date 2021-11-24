import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { StyleSheet, View, Text, Image } from 'react-native';
import { Themes } from 'assets/themes';
import Images from 'assets/images';
import Home from './components/Home';
import Search from './components/Search';
import Schedule from './components/Schedule';
import Photo from './components/Photo';
import Follow from './components/Follow';

const Tab = createBottomTabNavigator();
const Tabs = () => {
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: { backgroundColor: Themes.COLORS.backgroundColorHeader },
                showLabel: false,
            }}
        >
            <Tab.Screen
                name="ホーム"
                component={Home}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.styleView}>
                            <Image
                                source={Images.icons.tab.home}
                                style={[
                                    styles.styleIcon,
                                    { tintColor: focused ? Themes.COLORS.backRoundSignIn : Themes.COLORS.textInput },
                                ]}
                            />
                            <Text
                                style={[
                                    styles.styleText,
                                    { color: focused ? Themes.COLORS.backRoundSignIn : Themes.COLORS.textInput },
                                ]}
                            >
                                ホーム
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="検索"
                component={Search}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.styleView}>
                            <Image
                                source={Images.icons.tab.search}
                                style={[
                                    styles.styleIcon,
                                    { tintColor: focused ? Themes.COLORS.backRoundSignIn : Themes.COLORS.textInput },
                                ]}
                            />
                            <Text
                                style={[
                                    styles.styleText,
                                    { color: focused ? Themes.COLORS.backRoundSignIn : Themes.COLORS.textInput },
                                ]}
                            >
                                検索
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="スナップフォト"
                component={Photo}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.styleView}>
                            <Image
                                source={Images.icons.tab.bag}
                                style={[
                                    styles.styleIcon,
                                    { tintColor: focused ? Themes.COLORS.backRoundSignIn : Themes.COLORS.textInput },
                                ]}
                            />
                            <Text
                                style={[
                                    styles.styleText,
                                    { color: focused ? Themes.COLORS.backRoundSignIn : Themes.COLORS.textInput },
                                ]}
                            >
                                スナップフォト
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="スケジュール"
                component={Schedule}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.styleView}>
                            <Image
                                source={Images.icons.tab.calendar}
                                style={[
                                    styles.styleIcon,
                                    { tintColor: focused ? Themes.COLORS.backRoundSignIn : Themes.COLORS.textInput },
                                ]}
                            />
                            <Text
                                style={[
                                    styles.styleText,
                                    { color: focused ? Themes.COLORS.backRoundSignIn : Themes.COLORS.textInput },
                                ]}
                            >
                                スケジュール
                            </Text>
                        </View>
                    ),
                }}
            />
            <Tab.Screen
                name="フォロー"
                component={Follow}
                options={{
                    tabBarIcon: ({ focused }) => (
                        <View style={styles.styleView}>
                            <Image
                                source={Images.icons.tab.follow}
                                style={[
                                    styles.styleIcon,
                                    { tintColor: focused ? Themes.COLORS.backRoundSignIn : Themes.COLORS.textInput },
                                ]}
                            />
                            <Text
                                style={[
                                    styles.styleText,
                                    { color: focused ? Themes.COLORS.backRoundSignIn : Themes.COLORS.textInput },
                                ]}
                            >
                                フォロー
                            </Text>
                        </View>
                    ),
                }}
            />
        </Tab.Navigator>
    );
};
const styles = StyleSheet.create({
    styleView: {
        justifyContent: 'center',
        alignItems: 'center',
        top: 10,
    },
    styleIcon: {
        width: 25,
        height: 25,
        resizeMode: 'contain',
    },
    styleText: {
        fontSize: 10,
    },
});
export default Tabs;
