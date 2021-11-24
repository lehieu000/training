import React from 'react';
import { TouchableOpacity, Text, View, StyleSheet, FlatList, Image } from 'react-native';
import Images from 'assets/images';
import { Themes } from 'assets/themes';
import { TabProps } from 'react-native-scrollable-tab-view';

const ShowAll = (props: TabProps) => {
    console.log(props);
    return (
        <FlatList
            data={[
                { NameText: 'かおり', Content: '新着メッセージの内容' },
                { NameText: 'かおり', Content: '新着メッセージの内容' },
                { NameText: 'かおり', Content: '新着メッセージの内容' },
            ]}
            renderItem={({ item }) => (
                <View style={styles.wrapperAll}>
                    <View style={styles.borderStyle} />
                    <View style={styles.viewStyle}>
                        <Text style={styles.styleWord}>{item.NameText}</Text>
                        <Text style={styles.styleWord}>{item.Content}</Text>
                    </View>
                    <TouchableOpacity style={styles.styleButton}>
                        <Image source={Images.icons.tab.delete} style={styles.img} />
                    </TouchableOpacity>
                </View>
            )}
        />
    );
};
const styles = StyleSheet.create({
    wrapperAll: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        padding: 10,
    },
    borderStyle: {
        borderRadius: 45 / 2,
        width: 50,
        height: 50,
        backgroundColor: Themes.COLORS.backgroundImage,
    },
    viewStyle: {
        marginRight: 70,
    },
    styleWord: {
        color: Themes.COLORS.white,
        fontSize: 17,
    },
    img: {
        width: 25,
        height: 25,
    },
    styleButton: {
        justifyContent: 'center',
    },
});

export default ShowAll;
