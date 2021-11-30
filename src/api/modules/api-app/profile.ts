import request from 'api/request';

const getListData = (params: any) =>
    request.get(
        `v1/app/task/list?pageIndex=${params.pageIndex}&pageSize=${params.pageSize}&title=&status=${params.status}`,
    );

export { getListData };
