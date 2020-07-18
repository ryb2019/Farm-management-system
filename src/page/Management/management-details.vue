<template>
  <el-row v-loading="loading">
    <div class="form-container">
      <el-card shadow="never" class="mgb20" :body-style="{ padding: '0px' }">
        <div slot="header" class="clearfix">
          <h3>园区信息</h3>
        </div>
        <el-row class="cardtop10">
          <el-col :span="6">
            <img
              style="height:150px;width:150px"
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
          </el-col>
          <el-col :span="18">
            <el-row class="elrow">
              <el-col :span="6">
                园区名称：
                <span>{{items.parkName}}</span>
              </el-col>
              <el-col :span="6">
                园区编号：
                <span>{{items.parkNO}}</span>
              </el-col>
              <el-col :span="6">
                园区地址：
                <span>{{items.parkAddress}}</span>
              </el-col>
                 <el-col :span="6">
                园区状态：
                  <span v-if="items.parkState=== '1'">使用中</span>
                  <span v-else-if="items.parkState=== '2'">未使用</span>
                  <span v-else-if="items.parkState==='3'">故障</span>
                  <span v-else>报修中</span>
              </el-col>
            </el-row>
            <el-row class="elrow">
              <el-col :span="6">
                园区光线：
                <span>{{items.light}}</span>
              </el-col>

               <el-col :span="6">
                园区PH：
                <span>{{items.ph}}</span>
              </el-col>
               <el-col :span="6">
                园区温度：
                <span>{{items.temperature}}</span>
              </el-col>
              <el-col :span="6">
                园区湿度：
                <span>{{items.humidity}}</span>
              </el-col>
            </el-row>
                    <el-row class="elrow">
                                 <el-col :span="6">
                土壤湿度：
                <span>{{items.soilMoisture}}</span>
              </el-col>
                           <el-col :span="6">
                土壤氮含量：
                <span>{{items.oContent}}</span>
              </el-col>
  <el-col :span="6">
                土壤磷含量：
                <span>{{items.pContent}}</span>
              </el-col>
  <el-col :span="6">
                土壤钾含量：
                <span>{{items.kContent}}</span>
              </el-col>
                    </el-row>
          </el-col>
        </el-row>
      </el-card>


            <el-card shadow="never" class="mgb20" :body-style="{ padding: '0px' }">
        <div slot="header" class="clearfix">
          <h3>植物信息：</h3>
        </div>
        <el-row class="cardtop10">
          <el-col :span="6">
            <img
              style="height:150px;width:150px"
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
          </el-col>
          <el-col :span="18">
            <el-row class="elrow">
              <el-col :span="6">
                植物名称：
                <span>{{items.plantName}}</span>
              </el-col>
              <el-col :span="6">
                叶子色泽：
                <span>{{items.leafColor}}</span>
              </el-col>
                  <el-col :span="6">
                叶面虫痕：
                <span>{{items.leafTrace}}</span>
              </el-col>
               <el-col :span="6">
                植株高度：
                <span>{{items.leafHeight}}</span>
              </el-col>
            </el-row>
            <el-row class="elrow">
          
            </el-row>
            <el-row class="elrow">
              <el-col :span="6">
                叶面面积：
                <span>{{items.leafArea}}</span>
              </el-col>
                  <el-col :span="6">
                萎瘪情况：
                <span>{{items.leafArea}}</span>
              </el-col>
               <el-col :span="6">
                叶片浓度：
                <span>{{items.leafCon}}</span>
              </el-col>
             <el-col :span="6">
                收入估计：
                <span>{{items.mm}}</span>
              </el-col>
            </el-row>

            
          </el-col>
        </el-row>
      </el-card>
    </div>
  </el-row>
</template>

<script>
import { mapGetters } from "vuex";
import {
  getParkOne,
} from "@/api/Management/managementDetails";
export default {
  name: "management-Details",
  data() {
    return {
      items:[],
      loading: false,
          formdate: {
        id: "",
        psParkid: "",
        leafColor: "",
        leafTrace: "",
        leafHeight: "",
        leafArea: "",
        witheringSituation: "",
        leafCon: "",
        oContent: "",
        pContent: "",
        kContent: "",
        ph: "",
        soilMoisture: "",
        temperature: null,
        humidity: null,
        stateTime: ""
      }
    };
  },
  methods: {
        getDates(newVal) {
      const params = {};
      params.id=newVal.id;
      params.userId=newVal.userId;
      // params.pageList = [];
      // const a = {
      //   account: sessionStorage.getItem("account")
      // };
      // params.pageList.push(a);
      // console.log(params.parkId+"=============");
      getParkOne(params)
        .then(response => {
          console.log("????????????????????????");
          console.log(response.data);
          this.items=response.data;
          // this.items=response.data.DiseasesHistoryList.list[0];
        //       let a=response.data.DiseasesHistoryList.total;
        // if(a>0){
        //   const tableData =
        //     response.data.DiseasesHistoryList.list[0].treatmentList;
        //   for (let i = 0, len = tableData.length; i < len; i++) {
        //     console.log(tableData[i]);
        //     console.log(tableData[i].tType);
        //     if (tableData[i].tType < 2) {
        //       this.dynamicValidateForm.domain1.push({
        //         type: 1,
        //         healerName: tableData[i].therapeuticDrugs,
        //         healerNum: tableData[i].userLv,
        //         hrId: tableData[i].tid,
        //         typeId:tableData[i].typeId,
        //       });
        //     } else {
        //       this.dynamicValidateForm.domain2.push({
        //         type: 2,
        //         healerName: tableData[i].therapeuticDrugs,
        //         healerNum: tableData[i].userLv,
        //         hrId: tableData[i].tid,
        //         typeId:tableData[i].typeId,
        //       });
        //     }
        //   }
        // }
          this.loading = false;
        })
        .catch(error => {
          this.loading = false;
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
        });
    }
  },

  computed: {
    // 接收传过来的数据
    ...mapGetters(['managementDetails'])
  },
  watch: {
    'managementDetails': {
      immediate: true,
      handler: function(newVal, oldVal) {
        this.getDates(newVal);
      }
    }
  },
  //  数据初始化
  created: function() {

  }
};
</script>
<style scoped>
.mgb20 {
  margin-bottom: 20px;
}
span {
  font-size: 14px;
}
.elrow {
  margin-bottom: 10px;
}
.cardtop10 {
  padding: 10px;
}
</style>