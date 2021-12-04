import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { TabProps } from 'react-native-scrollable-tab-view';
import { getData, editData } from 'feature/appApi/appApi';
import { status } from 'utilities/staticData';
import ItemHome from './ItemHome';
import ModalEdit from './ModalEdit';

interface IItemData {
    title: string;
    content: string;
    id: number;
}

const ShowAll = (props: TabProps) => {
    console.log('props: ', props);
    const [data, setData] = useState([]);
    const [pageIndex, setPageIndex] = useState<number>(1);
    const [refreshing, setRefreshing] = useState(false);
    const [callOnScrollEnd, setCallOnScrollEnd] = useState<boolean>(false);

    const [isModalVisible, setModalVisible] = useState(false);

    const [currentItem, setCurrentItem] = useState({
        id: 0,
        title: '',
        content: '',
    });

    const getListData = () => {
        getData(pageIndex, status.ShowAll, data, setData, setRefreshing);
    };

    useEffect(() => {
        getListData();
    }, [pageIndex]);

    const onLoadMoreData = () => {
        setPageIndex(pageIndex + 1);
    };

    const onRefreshData = async () => {
        setRefreshing(true);
        if (pageIndex === 1) return getListData();
        return setPageIndex(1);
    };

    const onDeleteItem = (id: number) => {
        const result = data.filter((e) => e.id !== id);
        setData(result);
    };

    const onEditItem = (item: any) => {
        setCurrentItem(item);
        setModalVisible(true);
    };

    const onPressSave = () => {
        const newData: any = data.map((item: IItemData) => {
            if (item.id === currentItem.id) {
                item.title = currentItem.title;
                item.content = currentItem.content;
                return item;
            }
            return item;
        });
        setData(newData);
        setModalVisible(false);
        editData(currentItem.title, currentItem.content, status.ShowAll, currentItem.id);
    };

    return (
        <>
            <FlatList
                data={data}
                renderItem={({ item }: any) => (
                    <ItemHome item={item} onDeleteItem={onDeleteItem} onEditItem={onEditItem} />
                )}
                refreshing={refreshing}
                onRefresh={onRefreshData}
                initialNumToRender={10}
                keyExtractor={({ index }: { index: number }) => index?.toString()}
                onEndReached={() => setCallOnScrollEnd(true)}
                onMomentumScrollEnd={() => {
                    if (callOnScrollEnd) {
                        onLoadMoreData();
                    }
                    setCallOnScrollEnd(false);
                }}
            />
            <ModalEdit
                isModalVisible={isModalVisible}
                currentItem={currentItem}
                setCurrentItem={setCurrentItem}
                onPressSave={onPressSave}
            />
        </>
    );
};
export default ShowAll;
