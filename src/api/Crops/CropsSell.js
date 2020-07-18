import request from '@/utils/request'
export const insertDate = (params) => 
    request({
        url: '/Crops/insertDate',
        method: 'post',
        data:params,
    });