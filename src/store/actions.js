import * as types from './mutation-types'
import store from '.'

export default {
    setLoading({commit}, data) {
        sessionStorage.setItem('showLoading',data);
        commit(types.SET_LOADING, data)
    },
    setBreadcurmbItems({commit}, data) {
        commit(types.SET_BREADCRUMB_ITEMS, data)
    },
    setCollapse({commit}, data) {
        commit(types.SET_COLLAPSE, data)
    },
    setTags({commit}, data) {
        commit(types.SET_TAGS, data)
    },

    setCropslist({commit}, data) {
        sessionStorage.setItem('cropslist',JSON.stringify(data));
        commit(types.SET_CROPSLIST, data)
    },
    setByCropslist({commit}, data) {
        sessionStorage.setItem('bycropslist',JSON.stringify(data));
        commit(types.SET_BYCROPSLIST, data)
    },
    setEquipmentList({commit}, data) {
        sessionStorage.setItem('EquipmentList',JSON.stringify(data));
        commit(types.SET_EQUIPMENTLIST, data)
    },
    setSeedLists({commit}, data) {
        sessionStorage.setItem('SeedLists',JSON.stringify(data));
        commit(types.SET_SEEDLISTS, data)
    },
    setToolsLists({commit}, data) {
        sessionStorage.setItem('ToolsLists',JSON.stringify(data));
        commit(types.SET_TOOLSLISTS, data)
    },
    setPesticideLists({commit}, data) {
        sessionStorage.setItem('PesticideLists',JSON.stringify(data));
        commit(types.SET_PESTICIDELISTS, data)
    },
    setFertilizerLisets({commit}, data) {
        sessionStorage.setItem('FertilizerLisets',JSON.stringify(data));
        commit(types.SET_FERTILIZERLISETS, data)
    },
    setDiseaseid({commit}, data) {
        sessionStorage.setItem('Diseaseid',JSON.stringify(data));
        commit(types.SET_DISEASEID, data)
    },
    setManagement({commit}, data) {
        sessionStorage.setItem('management',JSON.stringify(data));
        commit(types.SET_MANAGEMENT, data)
    },
    setManagementDetails({commit}, data) {
        sessionStorage.setItem('managementDetails',JSON.stringify(data));
        commit(types.SET_MANAGEMENTDETAILS, data)
    },
    setScheduleHistoryList({commit}, data) {
        sessionStorage.setItem('scheduleHistoryList',JSON.stringify(data));
        commit(types.SET_SCHEDULEHISTORYLIST, data)
    },
}

// vuex 内存 刷新=》 数据丢失
