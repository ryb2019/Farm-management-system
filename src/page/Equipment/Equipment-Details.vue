<template>
  <el-row v-loading="loading">
    <div class="form-container">
      <el-card shadow="never" class="mgb20" :body-style="{ padding: '0px' }">
        <div slot="header" class="clearfix">
          <h3>设备信息</h3>
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
                设备编号：
                <span>{{EquipmentList.equipmentNum}}</span>
              </el-col>
              <el-col :span="6">
                设备名称：
                <span>{{EquipmentList.equipmentName}}</span>
              </el-col>
              <el-col :span="6">
                设备价格：
                <span>{{EquipmentList.equipmentPrice}}</span>
              </el-col>
                 <el-col :span="6">
                设备状态：

                   <span v-if="EquipmentList.equipmentStatus=== '1'">使用中</span>
                  <span v-else-if="EquipmentList.equipmentStatus=== '2'">未使用</span>
                  <span v-else-if="EquipmentList.equipmentStatus==='3'">故障</span>
                  <span v-else>报修中</span>
              </el-col>
            </el-row>
            <el-row class="elrow">
                <el-col :span="6">
                设备生产商
                <span>{{EquipmentList.equipmentProducers}}</span>
              </el-col>
              <el-col :span="6">
                设备生产商电话
                <span>{{EquipmentList.equipmentProducersPhone}}</span>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-card>


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
                园区编号
                <span>{{EquipmentList.parkNo}}</span>
              </el-col>
              <el-col :span="6">
                园区名称：
                <span>{{EquipmentList.parkName}}</span>
              </el-col>
                  <el-col :span="6">
                园区负责人：
                <span>{{EquipmentList.userName}}</span>
              </el-col>
            </el-row>
            <el-row class="elrow">
          
            </el-row>
            <el-row class="elrow">
              <el-col :span="6">
                负责人电话：
                <span>{{EquipmentList.phone}}</span>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </el-row>
</template>

<script>
import Qs from "qs";
import { mapGetters } from "vuex";
export default {
  name: "Equipment-Details",
  data() {
    return {
      loading: false,
      cardList: []
    };
  },
  methods: {
    //       getDetails() {
    //   this.loading = true;
    //   console.log(this.cardList);
    //  this.$store.dispatch("setCropslist",this.cardList);
    //   this.$router.push("/CropsSell");
    //   this.loading = false;
    // },
  },

  computed: {
    // 接收传过来的数据
    ...mapGetters(["EquipmentList"])
  },

  //  数据初始化
  created: function() {
    // getDetails(this.cropslist)
    //   .then(response => {
    //     // console.log(response.data);
    //     this.cardList = response.data.CropsList[0];
    //     console.log(this.cardList);
    //     this.tableData = response.data.CropsList;
    //     this.roleTotal = response.data.CropsList.total;
    //     this.loading = false;
    //   })
    //   .catch(error => {
    //     this.$message({
    //       showClose: true,
    //       message: error,
    //       type: "error"
    //     });
    //     this.loading = false;
    //   });
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