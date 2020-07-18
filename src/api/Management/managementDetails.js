import request from '@/utils/request'

export const getParkOne = (params) => 
request({
    url: '/user/getParkOne',
    method: 'post',
    data:params,
});