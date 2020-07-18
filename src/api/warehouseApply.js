import request from "@/utils/request";
  export const getApplyDate = (params) => 
  request({
    url: "/apply/getApplyDate",
    method: "post",
    data:params,
  });
  
  export const changeApplyState = (params) => 
  request({
    url: "/apply/changeApplyState",
    method: "post",
    data:params,
  });