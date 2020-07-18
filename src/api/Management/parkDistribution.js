import request from '@/utils/request'

export const getParkData = (params) => 
    request({
        url: '/park/getParkData',
        method: 'post',
        data:params,
    });
export const setNewParkData = (params) => 
    request({
        url: '/park/setNewParkData',
        method: 'post',
        data:params,
    });
    
export const getUserListByUser = (params) => 
    request({
        url: '/user/getUserListByUser',
        method: 'post',
        data:params,
    });
export const updatePark = (params) => 
    request({
        url: '/user/updatePark',
        method: 'post',
        data:params,
    });