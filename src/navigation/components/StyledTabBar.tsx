import React from 'react';
import { View, Image, StyleSheet } from 'react-native';
import { StyledText, StyledTouchable } from 'components/base';
import { Themes } from 'assets/themes';
import Size from 'assets/sizes';

const StyledTabBar = ({ state, descriptors, navigation }: any) => {
    return (
        <View style={styles.tabContainer}>
            {state.routes.map((route: any, index: any) => {
                const { options } = descriptors[route.key];
                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });

                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                };

                const onLongPress = () => {
                    navigation.emit({
                        type: 'tabLongPress',
                        target: route.key,
                    });
                };

                return (
                    <StyledTouchable
                        accessibilityRole="button"
                        // accessibilityStates={isFocused ? ['selected'] : []}
                        accessibilityLabel={options.tabBarAccessibilityLabel}
                        testID={options.tabBarTestID}
                        onPress={onPress}
                        onLongPress={onLongPress}
                        key={route.key}
                        customStyle={[styles.tabButton]}
                    >
                        <Image
                            source={options?.icon}
                            style={[
                                styles.tabIcon,
                                { tintColor: isFocused ? Themes.COLORS.backRoundSignIn : Themes.COLORS.textInput },
                            ]}
                        />
                        <StyledText
                            customStyle={[
                                styles.tabLabel,
                                { color: isFocused ? Themes.COLORS.backRoundSignIn : Themes.COLORS.textInput },
                            ]}
                            i18nText={options?.title || ''}
                        />
                    </StyledTouchable>
                );
            })}
        </View>
    );
};

const styles = StyleSheet.create({
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        height: '9%',
        backgroundColor: Themes.COLORS.backgroundColorHeader,
    },
    tabButton: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    tabIcon: {
        width: 20,
        height: 20,
        resizeMode: 'contain',
        marginBottom: 5,
    },
    tabLabel: {
        paddingLeft: Size.PADDING.defaultTextPadding,
        textAlign: 'center',
        fontSize: 10,
    },
});

export default StyledTabBar;
