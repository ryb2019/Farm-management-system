import request from '@/utils/request'

export const getPark = (account) => 
    request({
        url: '/user/getPark?account='+account,
        method: 'get',
    });
    
export const getyDiseasesHistoryDate = (params) => 
request({
    url: '/diseases/findTreatmentByDiseasesHistory',
    method: 'post',
    data:params,
});
export const insertDateByPark = (params) => 
    request({
        url: '/Crops/insertDateByPark',
        method: 'post',
        data:params,
    });
    export const insertCropsIntoWarehouse = (params) => 
    request({
        url: '/Crops/insertCropsIntoWarehouse',
        method: 'post',
        data:params,
    });
    
    export const getSeedsss = (params) => 
    request({
        url: '/user/getSeedsss',
        method: 'post',
        data:params,
    });
    export const setParkPlant = (params) => 
    request({
        url: '/user/setParkPlant',
        method: 'post',
        data:params,
    });