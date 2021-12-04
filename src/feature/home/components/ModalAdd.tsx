import { Themes } from 'assets/themes';
import React from 'react';
import { Text, View, StyleSheet, Modal, TextInput, TouchableOpacity } from 'react-native';

interface IItemData {
    title: string;
    content: string;
    id: number;
}

interface IItemHome {
    isModalVisible: boolean;
    currentItem: IItemData;
    setCurrentItem(item: IItemData): void;
    onPressSaveAdd(): void;
}
const ModalAdd = (props: IItemHome) => {
    const { isModalVisible, currentItem, setCurrentItem, onPressSaveAdd } = props;
    return (
        <Modal visible={isModalVisible} animationType="none" transparent={true}>
            <View style={styles.styleModal}>
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Enter title "
                    onChangeText={(text) => setCurrentItem({ ...currentItem, title: text })}
                    defaultValue={currentItem.title}
                    editable={true}
                    multiline={false}
                />
                <TextInput
                    style={styles.inputStyle}
                    placeholder="Enter content "
                    onChangeText={(text) => setCurrentItem({ ...currentItem, content: text })}
                    defaultValue={currentItem.content}
                    editable={true}
                    multiline={false}
                />
                <TouchableOpacity style={styles.styleButtonModal} onPress={() => onPressSaveAdd()}>
                    <Text>Add</Text>
                </TouchableOpacity>
            </View>
        </Modal>
    );
};
const styles = StyleSheet.create({
    styleModal: {
        flex: 0.5,
        justifyContent: 'center',
        backgroundColor: Themes.COLORS.backgroundImage,
        marginBottom: 200,
        marginTop: 150,
        margin: 40,
        borderRadius: 50,
    },
    inputStyle: {
        height: 50,
        backgroundColor: Themes.COLORS.white,
        marginBottom: 10,
        borderRadius: 20,
        paddingLeft: 10,
        margin: 10,
    },
    styleButtonModal: {
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default ModalAdd;
