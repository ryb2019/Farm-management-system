import request from '@/utils/request'
import qs from 'qs'
export const getRecordDate = (params,RecordId) => 
    request({
        url: '/Crops/getRecordDate?RecordId='+RecordId,
        method: 'post',
        data:params,
    });
    export const queryRecordDate = (account,search,formDate) => 
    request({
        url: '/Crops/queryDate',
        method: 'post',
        formDate:formDate,
        
    });
    export const changeTradingApplyStateOk = (params) => 
    request({
        url: '/Crops/changeTradingApplyStateOk',
        method: 'post',
        data:params,
        
    });
    export const changeTradingApplyStateNo = (params) => 
    request({
        url: '/Crops/changeTradingApplyStateNo',
        method: 'post',
        data:params,
        
    });