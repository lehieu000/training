import { editListData, getListData, addListData } from 'api/modules/api-app/profile';

const editData = async (title: string, content: string, status: number, id: number) => {
    try {
        const params = {
            title,
            content,
            status,
        };
        const res: any = await editListData(params, id);
        return res;
    } catch (err) {
        return console.log('err call api get list: ', err);
    }
};

const addData = async (title: string, content: string) => {
    try {
        const params = {
            title,
            content,
        };
        const res: any = await addListData(params);
        return res;
    } catch (err) {
        return console.log('err call api get list: ', err);
    }
};

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

export { getData, editData, addData };
