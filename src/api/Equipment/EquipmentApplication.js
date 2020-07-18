import request from '@/utils/request'
export const getEquipmentDate = (params) => 
    request({
        url:'/equipment/getEquipmentListByAccount',
        method: 'post',
        data:params,
    });