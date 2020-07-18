<template>
  <div>
    <el-row>
      <el-menu
        :default-active="activeIndex"
        class="el-menu-demo"
        mode="horizontal"
        @select="handleSelect"
        background-color="#798692"
        text-color="#fff"
        active-text-color="#ffd04b"
      >
        <el-col :span="6">
          <div class="grid-content bg-purple">
            <el-menu-item index="1" @click="taiozhuang()">首页</el-menu-item>
          </div>
        </el-col>
        <el-col :span="3" :offset="6">
          <div class="grid-content bg-purple">
            <el-menu-item index="2">计划</el-menu-item>
          </div>
        </el-col>
        <el-col :span="3" :offset="0">
          <div class="grid-content bg-purple">
            <el-menu-item index="3">个人信息</el-menu-item>
          </div>
        </el-col>
        <el-col :span="3" :offset="0">
          <div class="grid-content bg-purple">
            <el-menu-item index="4">铃铛</el-menu-item>
          </div>
        </el-col>
        <el-col :span="3" :offset="0">
          <div class="grid-content bg-purple">
            <el-menu-item index="5" @click="tuichu()">退出登录</el-menu-item>
          </div>
        </el-col>
      </el-menu>
    </el-row>
    <el-row>
      <el-col :span="4" style="background:＃303133">
        <el-menu
          default-active="2"
          class="el-menu-vertical-demo"
          @open="handleOpen"
          @close="handleClose"
          :default-openeds="openeds"
          background-color="#798692"
          text-color="#fff"
          active-text-color="#ffd04b"
          style="height:900px"
        >
          <el-submenu index="1">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>园区管理</span>
            </template>

            <el-menu-item index="1-1" @click="ceshi()">园区历史</el-menu-item>

            <el-menu-item index="1-2"  @click="domanagement()">日常管理</el-menu-item>

            <el-menu-item index="1-3" @click="goSheBei()">设备管理</el-menu-item>
          </el-submenu>

          <el-submenu index="2">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>病情管理</span>
            </template>

            <el-menu-item index="2-1">病症诊断</el-menu-item>
            <el-menu-item index="2-2">诊断历史</el-menu-item>
          </el-submenu>
          <el-submenu index="3">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>园区仓库</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="3-1" @click="goNongJu()">仓库信息</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
          <el-submenu index="4">
            <template slot="title">
              <i class="el-icon-location"></i>
              <span>作物收成</span>
            </template>
            <el-menu-item-group>
              <el-menu-item index="4-1" @click="goCrops()">仓内作物</el-menu-item>
            </el-menu-item-group>
            <el-menu-item-group>
              <el-menu-item index="4-3">出库作物</el-menu-item>
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-col>

      <el-col
        :span="14"
        style="box-shadow:rgba(0, 0, 0, 0.12) 0px 2px 4px, rgba(0, 0, 0, 0.04) 0px 0px 6px;padding:20px;height:900px"
      >
        <el-row>
          <keep-alive>
            <component v-bind:is="currentTabComponent"></component>
          </keep-alive>
          <!-- <disease-diagnosis></disease-diagnosis> -->
          <!-- <diagnosis-disease></diagnosis-disease> -->
          <!-- <equipment-management></equipment-management> -->
          <!-- <temperature-adjustment></temperature-adjustment> -->
        </el-row>
      </el-col>

      <el-col :span="6" style="margin-top:20px;height:900px">
        <el-row>
          <el-col :span="12" :offset="4">
                <keep-alive>
            <div id="he-plugin-standard"></div>
                </keep-alive>
          </el-col>
        </el-row>
        <el-row style="margin-top:50px;">
          <el-col :span="1">
            <div>
              <el-divider direction="vertical">
                <i class="el-icon-mobile-phone"></i>
              </el-divider>
            </div>
          </el-col>
          <el-col :span="23" style="font-size:50px">
            <el-row>
              <el-col :span="16" :offset="4" align="left" style="margin-bottom:10px">
                <el-link :underline="false">震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊</el-link>
              </el-col>
              <el-col :span="16" :offset="4" align="left" style="margin-bottom:10px">
                <el-link :underline="false">震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊</el-link>
              </el-col>
              <el-col :span="16" :offset="4" align="left" style="margin-bottom:10px">
                <el-link :underline="false">震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊</el-link>
              </el-col>
              <el-col :span="16" :offset="4" align="left" style="margin-bottom:10px">
                <el-link :underline="false">震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊</el-link>
              </el-col>
              <el-col :span="16" :offset="4" align="left" style="margin-bottom:10px">
                <el-link :underline="false">震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊</el-link>
              </el-col>
              <el-col :span="16" :offset="4" align="left" style="margin-bottom:10px">
                <el-link :underline="false">震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊震惊</el-link>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-col>
    </el-row>
  </div>
</template>



<script>
// import EquipmentApplication from "../components/Equipment-application";
// import EquipmentManagement from "../components/equipment-management";
// import UserCarousel from "../components/user-carousel";
// import WarehouseManagement from "../components/warehouse-management";
// import WarehouseCrops from "../components/warehouse-crops";
// import TemperatureAdjustment from "../components/temperature-adjustment";
// import dongtai from "../components/dongtai";
// import DiseaseDiagnosis from "../components/disease-diagnosis";
// import DiagnosisDisease from "../components/diagnosis-disease";

export default {
  name: "staffInterface",
  components: {
    // EquipmentManagement,
    // UserCarousel,
    // WarehouseManagement,
    // WarehouseCrops,


    // EquipmentApplication,
    // DiagnosisDisease,
    // DiseaseDiagnosis,
    // TemperatureAdjustment,
    // dongtai
  },

  data() {
    return {
      // currentTabComponent: "DiseaseDiagnosis",
      zhongzi1: "",
      zhongzi2: "",
      zhongzi3: "",
      zhongzi4: "",
      zhongzi5: "",
      zhongzi6: "",
      activeIndex: "1",
      activeIndex2: "1",
      openeds: ["1", "2", "3", "4"]
    };
  },

  created: function() {},
  methods: {
    ceshi() {
      const params = {};
      this.$axios
        .post("/validation/ceshi", params)
        .then(successResponse => {
          this.responseResult = JSON.stringify(successResponse.data);
        })
        .catch(failResponse => {});
    },
    domanagement(){
        this.currentTabComponent = "TemperatureAdjustment";
    },
    taiozhuang() {
      console.log("???????");
      this.currentTabComponent = "UserCarousel";
      console.log(this.currentTabComponent);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },


    zhangyizhang() {
      // 存数据
      const params = {
        zhongzi1: this.zhongzi1,
        zhongzi2: this.zhongzi2,
        zhongzi3: this.zhongzi3,
        zhongzi4: this.zhongzi4,
        zhongzi5: this.zhongzi5,
        zhongzi6: this.zhongzi6
      };
      console.log(params);
      // 发起请求
      this.$axios
        .post("/check", params)
        .then(successResponse => {
          this.responseResult = JSON.stringify(successResponse.data);
        })
        .catch(failResponse => {});
    },
    taiozhuang() {
      console.log("???????");
      this.currentTabComponent = "UserCarousel";
      console.log(this.currentTabComponent);
    },
    goSheBei() {
      this.currentTabComponent = "EquipmentManagement";
    },
    goNongJu() {

    },
    tuichu() {
      this.$router.push("/login");
    },
goCrops(){
     this.currentTabComponent = "WarehouseCrops";
},
  }
};
</script>
<style scoped>
.el-col {
  border-radius: 4px;
}
.bg-purple-dark {
  background: #d4d6db;
}
.bg-purple {
  background: #d3dce6;
}
.bg-purple-light {
  background: #e5e9f2;
}
.grid-content {
  border-radius: 4px;
  min-height: 36px;
}
.row-bg {
  padding: 10px 0;
  background-color: #f9fafc;
}
.el-aside {
  display: block;
  position: relative;
  overflow-y: scroll;
  background-color: #324157 !important;
}
</style>
