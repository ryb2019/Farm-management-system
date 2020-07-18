import request from '@/utils/request'
import qs from 'qs'

// export const insertPlantInfo = (params) =>
//   request({
//     url: '/admin/insertPlantInfo',
//     method: 'post',
//     data: params
//   });
// export const insertDiseasesInfo = (params) =>
//   request({
//     url: '/admin/insertDiseasesInfo',
//     method: 'post',
//     data: params
//   });

export const getPlantDates = (params) =>
  request({
    url: '/admin/getPlantDate',
    method: 'post',
    data: params
  });
export const getPesticideDates = (params) =>
  request({
    url: '/admin/getPesticideDate',
    method: 'post',
    data: params
  });
export const getFertilizerDates = (params) =>
  request({
    url: '/admin/getFertilizerDate',
    method: 'post',
    data: params
  });
export const getToolsDates = (params) =>
  request({
    url: '/admin/getToolsDate',
    method: 'post',
    data: params
  });
export const getDiseasesDates = (params) =>
  request({
    url: '/diseases/findTreatmentByDiseasesNo',
    method: 'post',
    data: params,
  });


export const insertPlantInfo = (params) =>
  request({
    url: '/admin/insertPlantInfo',
    method: 'post',
    data: params,
  });
export const insertDiseasesInfo = (params) =>
  request({
    url: '/admin/insertDiseasesInfo',
    method: 'post',
    data: params,
  });
export const insertEquipmentWarehouseData = (params) =>
  request({
    url: '/admin/insertEquipmentWarehouseData',
    method: 'post',
    data: params,
  });
export const insertFertilizerWarehouseData = (params) =>
  request({
    url: '/admin/insertFertilizerWarehouseData',
    method: 'post',
    data: params,
  });
export const insertPesticideWarehouseData = (params) =>
  request({
    url: '/admin/insertPesticideWarehouseData',
    method: 'post',
    data: params,
  });
export const insertToolsWarehouseData = (params) =>
  request({
    url: '/admin/insertToolsWarehouseData',
    method: 'post',
    data: params,
  });
export const insertFertilizerData = (params) =>
  request({
    url: '/admin/insertFertilizerData',
    method: 'post',
    data: params,
  });
export const insertPesticideData = (params) =>
  request({
    url: '/admin/insertPesticideData',
    method: 'post',
    data: params,
  });
  