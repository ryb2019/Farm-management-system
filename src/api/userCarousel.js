import request from '@/utils/request'
import qs from 'qs'

export const getPark = (account) => 
    request({
        url: '/user/getPark?account='+account,
        method: 'get',
    })