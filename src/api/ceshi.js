import request from '@/utils/request'
export const getParkByUser = (params) => 
    request({
        url: '/user/getParkByUser',
        method: 'post',
        data: params
    })