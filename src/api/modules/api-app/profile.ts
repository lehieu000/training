import request from 'api/request';

const getListData = (params: any) =>
    request.get(
        `v1/app/task/list?pageIndex=${params.pageIndex}&pageSize=${params.pageSize}&title=&status=${params.status}`,
    );

const editListData = (param: any, id: number) => request.put(`v1/app/task/update/${id}`, param);

const addListData = (params: any) => request.post(`v1/app/task/add`, params);

export { editListData, getListData, addListData };
