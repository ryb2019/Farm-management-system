import request from '@/utils/request'
export const getUserPlan = (params) => 
request({
    url: '/user/getUserPlan',
    method: 'post',
    data:params,
});
export const getUserAllPlan = (params) => 
request({
    url: '/user/getUserAllPlan',
    method: 'post',
    data:params,
});
export const insertUserPlan = (params) => 
request({
    url: '/user/insertUserPlan',
    method: 'post',
    data:params,
});
export const getPark = (params) => 
request({
    url: '/user/getPark?account='+params,
    method: 'post',
});
export const getPlant = (params) => 
request({
    url: '/park/getPlant',
    method: 'post',
    data:params,
});
export const deleteUserPlan = (params) => 
request({
    url: '/user/deleteUserPlan',
    method: 'post',
    data:params,
});



