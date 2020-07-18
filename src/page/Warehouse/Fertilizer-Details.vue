<template>
  <el-row v-loading="loading">
    <div class="form-container">
      <el-card shadow="never" class="mgb20" :body-style="{ padding: '0px' }">
        <div slot="header" class="clearfix">
          <h3>肥料信息</h3>
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
              <el-col :span="8">
                肥料名称：
                <span>{{FertilizerLisets.fertilizerName}}</span>
              </el-col>
              <el-col :span="8">
                肥料的数量：
                <span>{{FertilizerLisets.fertilizerNum}}</span>
              </el-col>
           
            </el-row>
            <el-row class="elrow">
              <el-col :span="8">
                肥料生产商：
                <span>{{FertilizerLisets.fertilizerProducers}}</span>
              </el-col>
              <el-col :span="8">
                生产商电话：
                <span>{{FertilizerLisets.fertilizerProducersPhone}}</span>
              </el-col>
            </el-row>
                  <el-row class="elrow">
                       <el-col :span="8">
                肥料价格：
                <span>{{FertilizerLisets.fertilizerPrice}}</span>
              </el-col>
              <el-col :span="12">
                主要成分：
                <span>{{FertilizerLisets.composition}}</span>
              </el-col>
                  </el-row>
            <el-row class="elrow">
              <el-col :span="8">
                钾含量：
                <span>{{FertilizerLisets.potassium}}</span>
              </el-col>
               <el-col :span="8">
                磷含量：
                <span>{{FertilizerLisets.phosphorus}}</span>
              </el-col>
               <el-col :span="8">
                氮含量：
                <span>{{FertilizerLisets.nitrogen}}</span>
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
// import { getDetails } from "@/api/Crops/CropsDetails";
import { mapGetters } from "vuex";
export default {
  name: "Fertilizer-Details",
  data() {
    return {
      loading: false
    };
  },
  methods: {},

  computed: {
    // 接收传过来的数据
    ...mapGetters(["FertilizerLisets"])
  },
  //  数据初始化
  created: function() {}
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