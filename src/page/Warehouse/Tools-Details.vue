<template>
  <el-row v-loading="loading">
    <div class="form-container">
      <el-card shadow="never" class="mgb20" :body-style="{ padding: '0px' }">
        <div slot="header" class="clearfix">
          <h3>农具信息</h3>
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
                农具名称：
                <span>{{ToolsLists.toolsName}}</span>
              </el-col>
              <el-col :span="8">
                农具的数量：
                <span>{{ToolsLists.toolsNum}}</span>
              </el-col>
           
            </el-row>
            <el-row class="elrow">
              <el-col :span="8">
                农具品牌：
                <span>{{ToolsLists.toolsBrand}}</span>
              </el-col>
              <el-col :span="8">
                生产商电话：
                <span>{{ToolsLists.toolsProducersPhone}}</span>
              </el-col>
            </el-row>
                  <el-row class="elrow">
                       <el-col :span="8">
                农具价格：
                <span>{{ToolsLists.toolsPrice}}</span>
              </el-col>
              <el-col :span="12">
                农具生产商：
                <span>{{ToolsLists.toolsProducers}}</span>
              </el-col>
                  </el-row>
            <el-row class="elrow">
              <el-col :span="23">
                农具使用方式：
                <span>{{ToolsLists.toolsUse}}</span>
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
  name: "Tools-Details",
  data() {
    return {
      loading: false
    };
  },
  methods: {},

  computed: {
    // 接收传过来的数据
    ...mapGetters(["ToolsLists"])
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