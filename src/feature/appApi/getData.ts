import { getListData } from 'api/modules/api-app/profile';

const getData = async (
    pageIndex: number,
    status: number,
    data: any[],
    setData: (arg0: any) => any,
    setRefreshing: (arg0: boolean) => void,
) => {
    try {
        const params = {
            pageIndex,
            pageSize: 10,
            status,
        };
        const res: any = await getListData(params);
        if (pageIndex !== 1) return setData(data.concat(res.data));
        return setData(res.data);
    } catch (err) {
        return console.log('err call api get list: ', err);
    } finally {
        setRefreshing(false);
    }
};
export { getData };
