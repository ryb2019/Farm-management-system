import request from '@/utils/request'
export const getDetails = (params) => 
    request({
        url: '/Crops/getDetails',
        method: 'post',
        data:params,
    });