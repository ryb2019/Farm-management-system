  <template>
  <el-card class="box-card" style="width:100%; font-size: 14px;" shadow="never">
    <el-form :model="formdate" label-width="100px">
      <el-row>
        <el-col :span="3">
          <h3>植物状态</h3>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10" :offset="1">
          <el-form-item label="叶子色泽:" prop="name1">
            <el-input v-model="formdate.leafColor" placeholder="请输入叶子色泽"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10" :offset="2" prop="name2">
          <el-form-item label="叶面虫痕:">
            <el-input v-model="formdate.leafTrace" placeholder="请输入叶面虫痕"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10" :offset="1" prop="name3">
          <el-form-item label="植株高度:">
            <el-input v-model="formdate.leafHeight" placeholder="请输入植株高度"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10" :offset="2">
          <el-form-item label="叶片面积:" prop="name4">
            <el-input v-model="formdate.leafArea" placeholder="请输入叶片面积"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10" :offset="1">
          <el-form-item label="萎蔫情况:" prop="name5">
            <el-input v-model="formdate.witheringSituation" placeholder="请输入萎蔫情况"></el-input>
          </el-form-item>
        </el-col>

        <el-col :span="10" :offset="2">
          <el-form-item label="叶片浓度:" prop="name6">
            <el-input v-model="formdate.leafCon" placeholder="请输入叶片浓度"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row style="margin-top:16px">
        <el-col :span="3">
          <h3>土壤情況</h3>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="10" :offset="1">
          <el-form-item label="土壤氮含量:" prop="name7">
            <el-input v-model="formdate.oContent" placeholder="请输入土壤氮含量"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10" :offset="2">
          <el-form-item label="土壤磷含量:" prop="name8">
            <el-input v-model="formdate.pContent" placeholder="请输入土壤磷含量"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10" :offset="1" prop="name9">
          <el-form-item label="土壤钾含量:">
            <el-input v-model="formdate.kContent" placeholder="请输入土壤钾含量"></el-input>
          </el-form-item>
        </el-col>
        <el-col :span="10" :offset="2">
          <el-form-item label="土壤ph值:" prop="name110">
            <el-input v-model="formdate.ph" placeholder="请输入土壤PH值"></el-input>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row>
        <el-col :span="10" :offset="1">
          <el-form-item label="土壤湿度:" prop="name11">
            <el-input v-model="formdate.soilMoisture" placeholder="请输入土壤湿度"></el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row style="margin-top:16px">
        <el-col :span="3">
          <h3>温度湿度调节</h3>
        </el-col>
      </el-row>

      <el-row style="padding-top:30px">
        <el-col :span="3" :offset="2" style="padding-top:10px">
          <span>湿度调节：</span>
        </el-col>
        <el-col :span="17">
          <el-slider v-model="formdate.temperature" show-input></el-slider>
        </el-col>

        <el-col :span="3" :offset="2" style="padding-top:10px">
          <span>温度调节：</span>
        </el-col>
        <el-col :span="17">
          <el-slider v-model="formdate.humidity" show-input></el-slider>
        </el-col>
      </el-row>
    </el-form>

    <el-row style="margin-top:16px">
      <el-col :span="3">
        <h3>肥料使用情况</h3>
      </el-col>
    </el-row>

    <el-row>
      <el-form :model="dynamicValidateForm" label-width="100px">
        <el-row v-for="(domain2, index) in dynamicValidateForm.domain2" :key="domain2.hrId">
          <el-col :span="12" :offset="1">
            <el-form-item :label="'肥料' + (index+1)">
                 <el-select
              v-model="domain2.typeId"
              filterable
              placeholder="请选择"
              style="width:100%"
            >
              <el-option
                v-for="item in Fertilizer"
                :key="item.id"
                :label="item.fertilizerName"
                :value="item.id"
              ></el-option>
            </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item :label="'数量'">
              <el-input v-model="domain2.healerNum"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="2" :offset="1">
            <el-button @click.prevent="removeDomain2(domain2)" style="width:100%">删除</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-form-item>
            <el-button @click="addDomain2">添加肥料</el-button>
          </el-form-item>
        </el-row>

        <el-row style="margin-top:16px">
          <el-col :span="3">
            <h3>农药使用情况</h3>
          </el-col>
        </el-row>

        <el-row v-for="(domain1, index) in dynamicValidateForm.domain1" :key="domain1.hrId">
          <el-col :span="12" :offset="1">
            <el-form-item :label="'农药' + (index+1)">
                 <el-select
              v-model="domain1.typeId"
              filterable
              placeholder="请选择"
              style="width:100%"
            >
              <el-option
                v-for="item in Pesticide"
                :key="item.id"
                :label="item.pesticideName"
                :value="item.id"
              ></el-option>
            </el-select>
            </el-form-item>
          </el-col>

          <el-col :span="6">
            <el-form-item :label="'数量'">
              <el-input v-model="domain1.healerNum"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="2" :offset="1">
            <el-button @click.prevent="removeDomain1(domain1)" style="width:100%">删除</el-button>
          </el-col>
        </el-row>
        <el-row>
          <el-form-item>
            <el-button @click="addDomain1">添加农药</el-button>
          </el-form-item>
        </el-row>
        <el-row style="padding-top:30px">
          <el-form-item>
            <el-col :span="4" :offset="18">
                           
              <!-- <el-button type="primary" @click="go()" style="width:100%">提交</el-button> -->
              <el-button type="primary" @click="zhangyizhang()" style="width:100%">提交</el-button>
            </el-col>
          </el-form-item>
        </el-row>
      </el-form>
    </el-row>
  </el-card>
</template>
<script>
import {
  insertParkDailyInfo,
  getyDiseasesHistoryDate,
  getFertilizerDate,
  getPesticideDate,
} from "@/api/Management/temperatureAdjustment";
import { mapGetters } from "vuex";
export default {
  name: "temperature-adjustment",
  data() {
    return {
      dynamicValidateForm: {
        domain2: [],
        domain1: []
      },
      Pesticide:[],
      Fertilizer:[],
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
  computed: {
    // 接收传过来的数据
    ...mapGetters(['management','tags','showLoading'])
  },
  watch: {
    management: {
      immediate: true,
      handler: function(newVal, oldVal) {
        this.dynamicValidateForm.domain2 = [];
        this.dynamicValidateForm.domain1 = [];
        this.formdate.parkId = newVal.id;
        this.getDates();
      }
    }
  },
  created: function() {
        this.getFertilizer();
        this.getPesticide();
  },
  methods: {
    go(){ 
      //  v-if="showLoading"
            // let zj=[];
            //   for(let i=0;i<this.tags.length;i++){
            //  zj.push(this.tags[i]);
            //  };
            // let index=0;
            //     for(let i=0;i<this.tags.length;i++){
            //   if( this.tags[i].path===this.$route.fullPath){
            //     index=i;
            //     };
            //  };
            //   const delItem = zj.splice(index, 1)[0];
            //     console.log(zj);
            //     const item = zj[index] ? zj[index] : zj[index - 1];
            //     if (item) {
            //                   this.$store.dispatch('setTags',zj);
            //         delItem.path === this.$route.fullPath && this.$router.push(item.path);
            //     }else{
            //         this.$router.push('/');
            //     }

    },
    getFertilizer(){
      getFertilizerDate()
        .then(response => {
          this.Fertilizer = response.data.Fertilizer;
        })
        .catch(error => {
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
        });
    },
    getPesticide(){
      getPesticideDate()
        .then(response => {
          this.Pesticide = response.data.Pesticide;
        })
        .catch(error => {
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
        });
    },
    zhangyizhang() {
      const params = this.formdate;
      params.healerRecordList = [];
      params.psParkid = this.management.id;
      params.plantId=this.management.plantId;
      for (
        let i = 0, len = this.dynamicValidateForm.domain1.length;
        i < len;
        i++
      ) {
        params.healerRecordList.push(this.dynamicValidateForm.domain1[i]);
      }
      for (
        let i = 0, len = this.dynamicValidateForm.domain2.length;
        i < len;
        i++
      ) {
        params.healerRecordList.push(this.dynamicValidateForm.domain2[i]);
      }
      //
      console.log("????????????????");
      console.log(params);
      insertParkDailyInfo(params)
        .then(response => {
//      
if(response.data>0){
         this.$message({
            showClose: true,
            message:"您的园区信息录入成功！！！",
            type: "success"
          });
    this.$router.push("/schedule");
   }else if(response.data==-200){
            this.$message({
            showClose: true,
            message: "您等农药仓库的库存不足！！！",
            type: "error"
          });
          }else if(response.data==-300){
            this.$message({
            showClose: true,
            message: "您等肥料仓库的库存不足！！！",
            type: "error"
          });
          }
        })
        .catch(error => {
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
        });
    },
    removeDomain2(item) {
      var index = this.dynamicValidateForm.domain2.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domain2.splice(index, 1);
      }
    },
    removeDomain1(item) {
      var index = this.dynamicValidateForm.domain1.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domain1.splice(index, 1);
      }
    },
    addDomain1() {
      this.dynamicValidateForm.domain1.push({
        type: 1,
        healerName: "",
        healerNum: "",
        hrId: "2" + Date.now(),
        typeId:"",
      });
    },
    addDomain2() {
      this.dynamicValidateForm.domain2.push({
        type: 2,
        healerName: "",
        healerNum: "",
        hrId: "2" + Date.now(),
        typeId:"",
      });
    },
    // 获取历史记录
    getDates() {
      const params = this.formdate;
      params.pageList = [];
      const a = {
        account: sessionStorage.getItem("account")
      };
      params.pageList.push(a);
      // console.log(params.parkId+"=============");
      getyDiseasesHistoryDate(params)
        .then(response => {
          console.log(response.data);
              let a=response.data.DiseasesHistoryList.total;
        if(a>0){
          const tableData =
            response.data.DiseasesHistoryList.list[0].treatmentList;
          for (let i = 0, len = tableData.length; i < len; i++) {
            console.log(tableData[i]);
            console.log(tableData[i].tType);
            if (tableData[i].tType < 2) {
              this.dynamicValidateForm.domain1.push({
                type: 1,
                healerName: tableData[i].therapeuticDrugs,
                healerNum: tableData[i].userLv,
                hrId: tableData[i].tid,
                typeId:tableData[i].typeId,
              });
            } else {
              this.dynamicValidateForm.domain2.push({
                type: 2,
                healerName: tableData[i].therapeuticDrugs,
                healerNum: tableData[i].userLv,
                hrId: tableData[i].tid,
                typeId:tableData[i].typeId,
              });
            }
          }
        }
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
  }
};
</script>
<style scoped>
</style>
