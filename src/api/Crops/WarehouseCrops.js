import request from '@/utils/request'
import qs from 'qs'
export const getDate = (params) => 
    request({
        url: '/Crops/getDate',
        method: 'post',
        data:params,
    });
    // export const getDate2 = (params) => 
    // request({
    //     url: '/Crops/getDate2',
    //     method: 'get',
    //     data:params,
    // });



    // export const getDate = (account,search,formDate) => 
    // request({
    //     url: '/Crops/getDate',
    //     method: 'post',
    //     data: {
    //         offset: search.offset,
    //         limit: search.limit,
    //         account: account,
    //         formDate:formDate,
    //     }
    // });
    export const queryDate = (account,search,formDate) => 
    request({
        url: '/Crops/queryDate',
        method: 'post',
        formDate:formDate,
        
    });