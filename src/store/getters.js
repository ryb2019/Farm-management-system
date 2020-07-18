const getters = {
  showLoading: state => {
    console.log("?"+state.showLoading);
    if (state.showLoading === null) {
      console.log(sessionStorage.getItem('showLoading'));
      return sessionStorage.getItem('showLoading');
    } else {
      return state.showLoading
    }
  },
  breadcrumbItems: state => state.breadcrumbItems,
  collapses: state => state.collapse,
  tags: state => state.tags,
  cropslist: state => {
    if (state.cropslist === null) {
      return JSON.parse(sessionStorage.getItem('cropslist'));
    } else {
      return state.cropslist
    }
  },
  bycropslist: state => {
    if (state.bycropslist === null) {
      return JSON.parse(sessionStorage.getItem('bycropslist'));
    } else {
      return state.bycropslist
    }
  },
  EquipmentList: state => {
    if (state.EquipmentList === null) {
      return JSON.parse(sessionStorage.getItem('EquipmentList'));
    } else {
      return state.EquipmentList
    }
  },
  SeedLists: state => {
    if (state.SeedLists === null) {
      return JSON.parse(sessionStorage.getItem('SeedLists'));
    } else {
      return state.SeedLists
    }
  },
  ToolsLists: state => {
    if (state.ToolsLists === null) {
      return JSON.parse(sessionStorage.getItem('ToolsLists'));
    } else {
      return state.ToolsLists
    }
  },
  PesticideLists: state => {
    if (state.PesticideLists === null) {
      return JSON.parse(sessionStorage.getItem('PesticideLists'));
    } else {
      return state.PesticideLists
    }
  },
  FertilizerLisets: state => {
    if (state.FertilizerLisets === null) {
      return JSON.parse(sessionStorage.getItem('FertilizerLisets'));
    } else {
      return state.FertilizerLisets
    }
  },
  Diseaseid: state => {
    if (state.Diseaseid === null) {
      return JSON.parse(sessionStorage.getItem('Diseaseid'));
    } else {
      return state.Diseaseid
    }
  },
  management: state => {
    if (state.management === null) {
      return JSON.parse(sessionStorage.getItem('management'));
    } else {
      return state.management
    }
  },
  managementDetails: state => {
    if (state.managementDetails === null) {
      return JSON.parse(sessionStorage.getItem('managementDetails'));
    } else {
      return state.managementDetails
    }
  },
  scheduleHistoryList: state => {
    if (state.scheduleHistoryList === null) {
      return JSON.parse(sessionStorage.getItem('scheduleHistoryList'));
    } else {
      return state.scheduleHistoryList
    }
  },

}

export default getters
