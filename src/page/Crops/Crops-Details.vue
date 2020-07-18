<template>
  <el-row v-loading="loading">
    <div class="form-container">
      <el-card shadow="never" class="mgb20" :body-style="{ padding: '0px' }">
        <div slot="header" class="clearfix">
          <h3>植物属性</h3>
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
                <span>{{cardList.plantNo}}</span>
              </el-col>
              <el-col :span="6">
                植物名称：
                <span>{{cardList.plantName}}</span>
              </el-col>
              <el-col :span="12">
                别名：
                <span>{{cardList.alias}}</span>
              </el-col>
            </el-row>
            <el-row class="elrow">
              <el-col :span="6">
                推荐价格：
                <span>{{cardList.plantPrice}}</span>
              </el-col>
            </el-row>
            <el-row class="elrow">
              <el-col :span="23">
                形态特征：
                <span>{{cardList.shape}}</span>
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
                <span>{{cropslist.plantNo}}</span>
              </el-col>
              <el-col :span="6">
                园区名称：
                <span>{{cropslist.parkName}}</span>
              </el-col>
              <el-col :span="6">
                园区地址：
                <span>{{cropslist.parkAddress}}</span>
              </el-col>
              <el-col :span="6">
                园区负责人：
                <span>{{cardList.userName}}</span>
              </el-col>
            </el-row>
            <el-row class="elrow"></el-row>
            <el-row class="elrow">
              <el-col :span="6">
                负责人电话：
                <span>{{cardList.phone}}</span>
              </el-col>
              <el-col :span="6">
                负责邮箱：
                <span>{{cardList.email}}</span>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-card>
      <el-row>
        <el-col :span="3" :offset="21">
          <el-button type="primary" @click="getDetailss" size="mini" style="width:100%">出售商品</el-button>
        </el-col>
      </el-row>
    </div>
  </el-row>
</template>

<script>
import Qs from "qs";
import { getDetails } from "@/api/Crops/CropsDetails";
import { mapGetters } from "vuex";
export default {
  name: "Crops-Details",
  data() {
    return {
      loading: false,
      cardList: []
    };
  },
  methods: {
    getDetailss() {
      this.loading = true;
      console.log(this.cardList);
      this.$store.dispatch("setByCropslist", this.cardList);
      this.$router.push("/CropsSell");
      this.loading = false;
    }
  },

  computed: {
    // 接收传过来的数据
    ...mapGetters(["cropslist"])
  },
  watch: {
    cropslist: function(old, newd) {
      getDetails(old)
        .then(response => {
          console.log(response.data);
          this.cardList = response.data.CropsList[0];
          this.roleTotal = response.data.CropsList.total;
          this.loading = false;
        })
        .catch(error => {
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
          this.loading = false;
        });
    }
  },

  //  数据初始化
  created: function() {
    getDetails(this.cropslist)
      .then(response => {
        console.log(response.data);
        this.cardList = response.data.CropsList[0];
        this.roleTotal = response.data.CropsList.total;
        this.loading = false;
      })
      .catch(error => {
        this.$message({
          showClose: true,
          message: error,
          type: "error"
        });
        this.loading = false;
      });
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