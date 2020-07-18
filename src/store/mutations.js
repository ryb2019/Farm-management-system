import * as types from './mutation-types'

const mutations = {
    [types.SET_LOADING]: (state, data) => {
        state.showLoading = data
    },
    [types.SET_BREADCRUMB_ITEMS]: (state, data) => {
        state.breadcrumbItems = data
    },
    [types.SET_COLLAPSE]: (state, data) => {
        state.collapse = data
    },
    [types.SET_TAGS]: (state, data) => {
        state.tags = data
    },
    [types.SET_CROPSLIST]: (state, data) => {
        state.cropslist = data
    },
    [types.SET_BYCROPSLIST]: (state, data) => {
        state.bycropslist = data
    },
    [types.SET_EQUIPMENTLIST]: (state, data) => {
        state.EquipmentList = data
    },
    [types.SET_SEEDLISTS]: (state, data) => {
        state.SeedLists = data
    },
    [types.SET_TOOLSLISTS]: (state, data) => {
        state.ToolsLists = data
    },
    [types.SET_PESTICIDELISTS]: (state, data) => {
        state.PesticideLists = data
    },
    [types.SET_FERTILIZERLISETS]: (state, data) => {
        state.FertilizerLisets = data
    },
    [types.SET_DISEASEID]: (state, data) => {
        state.Diseaseid = data
    },
    [types.SET_MANAGEMENT]: (state, data) => {
        state.management = data
    },
    [types.SET_MANAGEMENTDETAILS]: (state, data) => {
        state.managementDetails = data
    },
    [types.SET_SCHEDULEHISTORYLIST]: (state, data) => {
        state.scheduleHistoryList = data
    },
}
export default mutations