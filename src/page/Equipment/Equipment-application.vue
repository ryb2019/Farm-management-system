  <template>
  
  <el-row>
      <el-card class="box-card" style="width:100%">
        <div v-for="o in 1" :key="o" class="text item">
          <el-row>
            <el-col :span="3" style="padding-top:9px">申请员工：</el-col>
            <el-col :span="5">
              <el-input v-model="zhongzi1" placeholder="输入员工工号"></el-input>
            </el-col>
            <el-col :span="3" style="padding-top:9px">设备名称：</el-col>
            <el-col :span="5">
              <el-input v-model="zhongzi2" placeholder="输入设备名称"></el-input>
            </el-col>
            <el-col :span="3" style="padding-top:9px">申请数量：</el-col>
            <el-col :span="5">
              <el-input v-model="zhongzi3" placeholder="输入设备数量"></el-input>
            </el-col>
          </el-row>

          <el-row style="padding-top:9px">
            <el-col :span="3" style="padding-top:9px">使用园区：</el-col>
            <el-col :span="5">
              <el-input v-model="zhongzi4" placeholder="输入使用园区"></el-input>
            </el-col>
            <el-col :span="3" style="padding-top:9px">使用时长：</el-col>
            <el-col :span="5">
              <el-input v-model="zhongzi5" placeholder="输入使用时长"></el-input>
            </el-col>

            <el-col :span="3" style="padding-top:9px">申请日期：</el-col>
            <el-col :span="5">
              <el-input v-model="zhongzi6" placeholder="输入申请日期"></el-input>
            </el-col>
          </el-row>

          <el-row style="padding-top:9px">
            <el-col :span="3" style="padding-top:9px">申请原因：</el-col>
            <el-col :span="5">
              <el-input v-model="zhongzi7" placeholder="输入申请原因"></el-input>
            </el-col>
            <el-col :span="3" style="padding-top:9px">原设备情况：</el-col>
            <el-col :span="5">
              <el-input v-model="zhongzi8" placeholder="输入原设备情况（选填）"></el-input>
            </el-col>

            <el-col :span="3" style="padding-top:9px">归还日期：</el-col>
            <el-col :span="5">
              <el-input v-model="zhongzi9" placeholder="输入申请日期"></el-input>
            </el-col>

          </el-row>
          <el-row style="padding-top:20px">
           




           

            <el-col :span="6" offset="10" style="padding-left:10px;">
              <el-button
                type="primary"
                icon="el-icon-search"
                style="margin-top:0px;width:100%;"
                @click="zhangyizhang()"
              >提交申请</el-button>
            </el-col>
          </el-row>

        </div>
      </el-card>
  </el-row>
</template>
<script>
import { mapGetters } from "vuex";
export default {
      name: "Equipment-application",
  data() {
    return {
      zhongzi1: "",
      zhongzi2: "",
      zhongzi3: "",
      zhongzi4: "",
      zhongzi5: "",
      zhongzi6: "",
      zhongzi7: "",
      zhongzi8: "",
      zhongzi9: "",
    };
  },

  created: function() {},
  methods: {
    zhangyizhang() {
      // 存数据
      const params = {
        zhongzi1: this.zhongzi1,
        zhongzi2: this.zhongzi2,
        zhongzi3: this.zhongzi3,
        zhongzi4: this.zhongzi4,
        zhongzi5: this.zhongzi5,
        zhongzi6: this.zhongzi6,
        zhongzi7: this.zhongzi7,
        zhongzi8: this.zhongzi8,
        zhongzi9: this.zhongzi9
      };
      console.log(params);
      // 发起请求
      this.$axios
        .post("/check", params)
        .then(successResponse => {
          this.responseResult = JSON.stringify(successResponse.data);
        })
        .catch(failResponse => {});
    }
  }
};
</script>
<style scoped>
</style>
<style>
.text {
  font-size: 10px;
}

.item {
  padding: 50px 0;
}

.box-card {
  width: 1050px;
}
</style>