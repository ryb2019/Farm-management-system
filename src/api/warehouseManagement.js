import request from "@/utils/request";
import qs from "qs";

export const getDate = (params) => 
  request({
    url: "/user/getDate",
    method: "get"
  });
export const getFertilizerWarehouse =(params) => 
  request({
    url: "/user/getfertilizerWarehouse",
    method: "post",
    data:params,
  });
export const getSeedWarehouse =(params) => 
  request({
    url: "/user/getSeedWarehouse",
    method: "post",
    data:params,
  });
export const getPesticideWarehouse =(params) => 
  request({
    url: "/user/getpesticidelistWarehouse",
    method: "post",
    data:params,
  });
export const getToolsWarehouse = (params) => 
  request({
    url: "/user/getToolsWarehouse",
    method: "post",
    data:params,
  });

  export const setApplyDate = (params) => 
  request({
    url: "/apply/setApplyDate",
    method: "post",
    data:params,
  });
  
  export const getSeed = (params) => 
  request({
    url: "/user/getSeed",
    method: "post",
    data:params,
  });
  export const getFertilizer = (params) => 
  request({
    url: "/user/getFertilizer",
    method: "post",
    data:params,
  });
  export const getPesticide = (params) => 
  request({
    url: "/user/getPesticide",
    method: "post",
    data:params,
  });
  export const getTools = (params) => 
  request({
    url: "/user/getTools",
    method: "post",
    data:params,
  });


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

export const insertToolsWarehouseData = (params) =>
  request({
    url: '/admin/insertToolsWarehouseData',
    method: 'post',
    data: params,
  });
export const insertSeedWarehouseData = (params) =>
  request({
    url: '/admin/insertSeedWarehouseData',
    method: 'post',
    data: params,
  });
export const insertPesticideWarehouseData = (params) =>
  request({
    url: '/admin/insertPesticideWarehouseData',
    method: 'post',
    data: params,
  });
export const insertFertilizerWarehouseData = (params) =>
  request({
    url: '/admin/insertFertilizerWarehouseData',
    method: 'post',
    data: params,
  });


  export const updateToolsWarehouseData = (params) =>
  request({
    url: '/admin/updateToolsWarehouseData',
    method: 'post',
    data: params,
  });
export const updateSeedWarehouseData = (params) =>
  request({
    url: '/admin/updateSeedWarehouseData',
    method: 'post',
    data: params,
  });
export const updatePesticideWarehouseData = (params) =>
  request({
    url: '/admin/updatePesticideWarehouseData',
    method: 'post',
    data: params,
  });
export const updateFertilizerWarehouseData = (params) =>
  request({
    url: '/admin/updateFertilizerWarehouseData',
    method: 'post',
    data: params,
  });

