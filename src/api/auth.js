import request from '@/utils/request'
import qs from 'qs'

export const getToken = (params) => 
    request({
        url: '/validation/login',
        method: 'post',
        data: params
    })