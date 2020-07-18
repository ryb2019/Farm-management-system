import request from '@/utils/request'
export const getUserDate = (params) => 
request({
    url: '/user/getUserList',
    method: 'post',
    data:params,
});
export const getParkByUser = (params) => 
    request({
        url: '/user/getParkByUser',
        method: 'post',
        data: params
    });
export const setParkToUser = (params,ParkStateId) => 
    request({
        url: '/user/setParkToUser?ParkStateId='+ParkStateId,
        method: 'post',
        data: params
    });
export const insertUserDate = (params) => 
    request({
        url: '/user/insertUserDate',
        method: 'post',
        data: params
    });
    