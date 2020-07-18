import request from '@/utils/request'
export const getParkStateHistory = (params) => 
    request({
        url: '/user/getParkStateHistory',
        method: 'post',
        data:params,
    });