<template>
  <el-row v-loading="loading">
    <div class="form-container">
      <el-card shadow="never" class="mgb20" :body-style="{ padding: '0px' }">
        <div slot="header" class="clearfix">
          <h3>植物信息</h3>
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
                植物编号：
                <span>{{SeedLists.plantNo}}</span>
              </el-col>
              <el-col :span="6">
                植物名称：
                <span>{{SeedLists.plantName}}</span>
              </el-col>
              <el-col :span="12">
                别名：
                <span>{{SeedLists.alias}}</span>
              </el-col>
            </el-row>
            <el-row class="elrow">
              <el-col :span="6">
                植物生长推荐月份：
                <span>{{SeedLists.plantMonth}}</span>
              </el-col>
              <el-col :span="6">
                适合的酸碱度：
                <span>{{SeedLists.ph}}</span>
              </el-col>
              <el-col :span="6">
                适合的光线强度：
                <span>{{SeedLists.light}}</span>
              </el-col>
              <el-col :span="6">
                适宜的气候：
                <span>{{SeedLists.suitableWeather}}</span>
              </el-col>
            </el-row>
        

            <el-row class="elrow">
              <el-col :span="23">
                形态特征：
                <span>{{SeedLists.shape}}</span>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-card>

      <el-card shadow="never" class="mgb20" :body-style="{ padding: '0px' }">
        <div slot="header" class="clearfix">
          <h3>种子信息</h3>
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
                种子名称：
                <span>{{SeedLists.seedName}}</span>
              </el-col>
              <el-col :span="6">
                种子数量：
                <span>{{SeedLists.seedNum}}</span>
              </el-col>
              <el-col :span="6">
                种子生产商：
                <span>{{SeedLists.seedProducers}}</span>
              </el-col>
              <el-col :span="6">
                生产商电话：
                <span>{{SeedLists.seedProducersPhone}}</span>
              </el-col>
            </el-row>
            <el-row class="elrow"></el-row>
            <el-row class="elrow">
              <el-col :span="23">
                播种方式：
                <span>{{SeedLists.qermination}}</span>
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
  name: "Seed-Details",
  data() {
    return {
      loading: false,
    };
  },
  methods: {
  },

  computed: {
    // 接收传过来的数据
    ...mapGetters(["SeedLists"])
  },
  // watch: {
  //   cropslist: function(old, newd) {
  //     getDetails(old)
  //       .then(response => {
  //         console.log(response.data);
  //         this.cardList = response.data.CropsList[0];
  //         this.roleTotal = response.data.CropsList.total;
  //         this.loading = false;
  //       })
  //       .catch(error => {
  //         this.$message({
  //           showClose: true,
  //           message: error,
  //           type: "error"
  //         });
  //         this.loading = false;
  //       });
  //   }
  // },

  //  数据初始化
  created: function() {
    // getDetails(this.cropslist)
    //   .then(response => {
    //     console.log(response.data);
    //     this.cardList = response.data.CropsList[0];
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