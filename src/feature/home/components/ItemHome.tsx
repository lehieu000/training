import Images from 'assets/images';
import { Themes } from 'assets/themes';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

interface IItemData {
    title: string;
    content: string;
}

const ItemHome = ({ item }: { item: IItemData }) => {
    return (
        <View style={styles.wrapperAll}>
            <View style={styles.borderStyle} />
            <View style={styles.viewStyle}>
                <Text style={styles.styleWord}>{item.title}</Text>
                <Text style={styles.styleWord}>{item.content}</Text>
            </View>
            <View style={styles.styleButtonView}>
                <TouchableOpacity style={styles.styleButton}>
                    <Image source={Images.icons.tab.rectangle} style={styles.img} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.styleButton}>
                    <Image source={Images.icons.tab.delete} style={styles.img} />
                </TouchableOpacity>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    wrapperAll: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        padding: 10,
    },
    borderStyle: {
        borderRadius: 25,
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
        alignItems: 'center',
        marginLeft: 15,
    },
    styleButtonView: {
        flexDirection: 'row',
    },
});

export default ItemHome;
