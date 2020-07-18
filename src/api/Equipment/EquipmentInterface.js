import request from '@/utils/request'
export const getEquipmentState = (params)=>
    request({
        url:'/equipment/getEquipmentState',
        method:'post',
        data:params,
    });
    export const setEquipmentState = (params)=>
    request({
        url:'/equipment/setEquipmentState',
        method:'post',
        data:params,
    });