import request from '@/utils/request'
export const getyDiseasesHistoryDate = (params) => 
    request({
        url: '/diseases/findTreatmentByDiseasesHistory',
        method: 'post',
        data:params,
    });

    