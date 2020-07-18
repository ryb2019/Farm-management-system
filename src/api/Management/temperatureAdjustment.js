import request from '@/utils/request'

export const insertParkDailyInfo = (params) => 
request({
    url: '/user/insertParkDailyInfo',
    method: 'post',
    data:params,
});
export const getyDiseasesHistoryDate = (params) => 
request({
    url: '/diseases/findTreatmentByDiseasesHistory',
    method: 'post',
    data:params,
});
export const getFertilizerDate = (params) => 
request({
    url: '/user/getFertilizers',
    method: 'post',
    data:params,
});
export const getPesticideDate = (params) => 
request({
    url: '/user/getPesticides',
    method: 'post',
    data:params,
});