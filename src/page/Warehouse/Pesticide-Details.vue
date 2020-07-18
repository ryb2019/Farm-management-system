<template>
  <el-row v-loading="loading">
    <div class="form-container">
      <el-card shadow="never" class="mgb20" :body-style="{ padding: '0px' }">
        <div slot="header" class="clearfix">
          <h3>农药信息</h3>
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
                农药名称：
                <span>{{PesticideLists.pesticideName}}</span>
              </el-col>
              <el-col :span="8">
                农药数量：
                <span>{{PesticideLists.pesticideNum}}</span>
              </el-col>
              <el-col :span="8">
                农药价格：
                <span>{{PesticideLists.pesticidePrice}}</span>
              </el-col>
            </el-row>
            <el-row class="elrow">
              <el-col :span="8">
                农药生产商：
                <span>{{PesticideLists.pesticideProducers}}</span>
              </el-col>
              <el-col :span="8">
                生产商电话：
                <span>{{PesticideLists.pesticideProducersPhone}}</span>
              </el-col>
              <el-col :span="8">
                主要成分：
                <span>{{PesticideLists.composition}}</span>
              </el-col>
            </el-row>
            <el-row class="elrow">
              <el-col :span="8">
                主要功效：
                <span>{{PesticideLists.efficacy}}</span>
              </el-col>
              <el-col :span="8">
                推荐使用比例：
                <span>{{PesticideLists.proportion}}</span>
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
  name: "Pesticide-Details",
  data() {
    return {
      loading: false
    };
  },
  methods: {},

  computed: {
    // 接收传过来的数据
    ...mapGetters(["PesticideLists"])
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