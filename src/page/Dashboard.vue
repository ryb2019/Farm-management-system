<template>
  <div>
    <el-row>

      <el-col
        :span="18"
      >
        <el-row>
          <!-- <keep-alive>
            <component v-bind:is="currentTabComponent"></component>
          </keep-alive>  -->
             </el-row>
      </el-col>

      <el-col :span="6">
        <el-row>
          <el-col :span="12" :offset="4">
                <keep-alive>
            <div id="he-plugin-standard"></div>
                </keep-alive>
          </el-col>
        </el-row>
        <el-row>
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
//   name: "staffInterface",
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
    //   currentTabComponent: "UserCarousel",
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
