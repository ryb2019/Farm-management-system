import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

export default new Router({
  routes: [{
      path: '/',
      redirect: '/userCarousel'
    },
    {
      path: '/',
      component: () => import( /* webpackChunkName: "home" */ '../components/common/Home.vue'),
      meta: {
        title: '自述文件'
      },
      children: [{
          path: '/userCarousel',
          component: () => import('../page/user-carousel.vue'),
          meta: {
            title: '系统首页'
          }
        },
        {
          path: '/temperatureAdjustment',
          component: () => import('../page/Management/temperature-adjustment.vue'),
          meta: {
            title: '园区管理'
          }
        },
        {
          path: '/parkDistribution',
          component: () => import('../page/Management/park-distribution.vue'),
          meta: {
            title: '园区分配'
          }
        },
        {
          path: '/scheduleHistory',
          component: () => import('../page/Management/schedule-history.vue'),
          meta: {
            title: '园区历史'
          }
        },
        {
          path: '/scheduleHistoryDetails',
          component: () => import('../page/Management/schedule-history-details.vue'),
          meta: {
            title: '园区历史详情'
          }
        },
        {
          path: '/schedule',
          component: () => import('../page/Management/schedule.vue'),
          meta: {
            title: '日程管理'
          }
        },
        {
          path: '/managementDetails',
          component: () => import('../page/Management/management-details.vue'),
          meta: {
            title: '园区详情'
          }
        },
        {
          path: '/equipmentManagement',
          component: () => import('../page/Equipment/equipment-management.vue'),
          meta: {
            title: '设备管理'
          }
        },
        {
          path: '/equipmentDetails',
          component: () => import('../page/Equipment/Equipment-Details.vue'),
          meta: {
            title: '设备管理'
          }
        },
        {
          path: '/equipmentInterface',
          component: () => import('../page/Equipment/Equipment-Interface.vue'),
          meta: {
            title: '报修管理'
          }
        },
        
        {
          path: '/equipmentApplication',
          component: () => import('../page/Equipment/equipment-Application.vue'),
          meta: {
            title: '设备申请'
          }
        },
        {
          path: '/warehouseManagement',
          component: () => import('../page/Warehouse/warehouse-management.vue'),
          meta: {
            title: '仓库信息'
          }
        },
        {
          path: '/SeedDetails',
          component: () => import('../page/Warehouse/Seed-Details.vue'),
          meta: {
            title: '种子详情'
          }
        },
        {
          path: '/FertilizerDetails',
          component: () => import('../page/Warehouse/Fertilizer-Details.vue'),
          meta: {
            title: '肥料详情'
          }
        },
        {
          path: '/PesticideDetails',
          component: () => import('../page/Warehouse/Pesticide-Details.vue'),
          meta: {
            title: '农药详情'
          }
        },
        {
          path: '/ToolsDetails',
          component: () => import('../page/Warehouse/Tools-Details.vue'),
          meta: {
            title: '农具详情'
          }
        },
        {
          path: '/warehouseApply',
          component: () => import('../page/Warehouse/warehouse-apply.vue'),
          meta: {
            title: '仓库申请'
          }
        },
        {
          path: '/warehouseCrops',
          component: () => import('../page/Crops/warehouse-crops.vue'),
          meta: {
            title: '仓内作物'
          }
        },
        {
          path: '/CropsDetails',
          component: () => import('../page/Crops/Crops-Details.vue'),
          meta: {
            title: '作物详情'
          }
        },
        {
          path: '/CropsSell',
          component: () => import('../page/Crops/Crops-Sell.vue'),
          meta: {
            title: '作物出售',
          }
        },
        {
          path: '/WarehouseOutgoingRecord',
          component: () => import('../page/Crops/Warehouse-Outgoing-Record.vue'),
          meta: {
            title: '出库历史'
          }
        },
        {
          path: '/userManagement',
          component: () => import('../page/User/User-Management.vue'),
          meta: {
            title: '人员管理'
          }
        },
        {
          path: '/userPlants',
          component: () => import('../page/User/user-plans.vue'),
          meta: {
            title: '个人计划'
          }
        },
        {
          path: '/diseaseDiagnosis',
          component: () => import('../page/Disease/disease-diagnosis.vue'),
          meta: {
            title: '病症诊断'
          }
        }, 
        {
          path: '/diagnosisDisease',
          component: () => import('../page/Disease/diagnosis-disease.vue'),
          meta: {
            title: '病症详情'
          }
        }, 
        {
          path: '/diseaseRecord',
          component: () => import('../page/Disease/disease-record.vue'),
          meta: {
            title: '病症历史'
          }
        }, 
        {
          path: '/wikipediaManagement',
          component: () => import('../page/wikipedia/wikipedia-management.vue'),
          meta: {
            title: '信息管理'
          }
        }, {
          path: '/userCarousel',
          component: () => import('../page/user-carousel.vue'),
          meta: {
            title: '系统首页'
          }
        }, {
          path: '/ceshi',
          component: () => import('../page/ceshi.vue'),
          meta: {
            title: '测试'
          }
        },
      ]
    },
    {
      path: '/login',
      component: () => import('../page/login.vue'),
      meta: {
        title: '登录'
      },
    },
    // {
    //     path: '*',
    //     redirect: '/404'
    // }
  ]
});
