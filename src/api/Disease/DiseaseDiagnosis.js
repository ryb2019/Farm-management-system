import request from '@/utils/request'
export const getDiseasesDate = (params) => 
    request({
        url: '/diseases/findTreatmentByDiseasesNo',
        method: 'post',
        data:params,
    });
    export const getDiseasesDateById = (params) => 
    request({
        url: '/diseases/findTreatmentByDiseasesById',
        method: 'post',
        data:params,
    });
    export const getPark = (account) => 
    request({
        url: '/user/getPark?account='+account,
        method: 'get',
    });
    export const insertDiseasesHistory = (params) => 
    request({
        url: '/diseases/insertDiseasesHistory',
        method: 'post',
        data:params,
    });
    