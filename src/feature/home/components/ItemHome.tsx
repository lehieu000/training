import React from 'react';
import Images from 'assets/images';
import { Themes } from 'assets/themes';
import { Text, View, StyleSheet, TouchableOpacity, Image } from 'react-native';

interface IItemData {
    title: string;
    content: string;
    id: number;
}

interface IItemHome {
    item: IItemData;
    onDeleteItem(id: number): void;
    onEditItem(item: any): void;
}

const ItemHome = (props: IItemHome) => {
    const { item, onDeleteItem, onEditItem } = props;
    return (
        <View style={styles.wrapperAll}>
            <View style={styles.borderStyle} />
            <View style={styles.viewStyle}>
                <Text style={styles.styleWord}>{item.title}</Text>
                <Text style={styles.styleWord}>{item.content}</Text>
            </View>
            <View style={styles.styleButtonView}>
                {/* <TouchableOpacity style={styles.styleButton} onPress={() => onAddItem()}>
                    <Image source={Images.icons.tab.rectangle} style={styles.img} />
                </TouchableOpacity> */}
                <TouchableOpacity style={styles.styleButton} onPress={() => onEditItem(item)}>
                    <Image source={Images.icons.tab.edit} style={styles.img} />
                </TouchableOpacity>
                <TouchableOpacity style={styles.styleButton} onPress={() => onDeleteItem(item.id)}>
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
