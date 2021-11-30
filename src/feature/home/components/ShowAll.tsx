import React, { useEffect, useState } from 'react';
import { FlatList } from 'react-native';
import { TabProps } from 'react-native-scrollable-tab-view';
import { getData } from 'feature/appApi/getData';
import { status } from 'utilities/staticData';
import ItemHome from './ItemHome';

const ShowAll = (props: TabProps) => {
    console.log('props: ', props);
    const [data, setData] = useState([]);
    const [pageIndex, setPageIndex] = useState<number>(1);
    const [refreshing, setRefreshing] = useState(false);
    const [callOnScrollEnd, setCallOnScrollEnd] = useState<boolean>(false);

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

    return (
        <FlatList
            data={data}
            renderItem={(item: any) => ItemHome(item)}
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
    );
};
export default ShowAll;
