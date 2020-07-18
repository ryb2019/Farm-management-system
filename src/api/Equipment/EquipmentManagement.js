import request from '@/utils/request'
export const getEquipmentDate = (params) => 
    request({
        url: '/equipment/getEquipmentListByAccount',
        method: 'post',
        data:params,
    });

    export const updateRowState = (params) => 
    request({
        url: '/equipment/updateRowState',
        method: 'post',
        data:params,
    });
    
    export const insertEquipmentApply = (params) => 
    request({
        url: '/equipment/insertEquipmentApply',
        method: 'post',
        data:params,
    });

    export const deleteEquipment = (params) => 
    request({
        url: '/equipment/deleteEquipment',
        method: 'post',
        data:params,
    });
    