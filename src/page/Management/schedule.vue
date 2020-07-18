<template>
  <el-row v-loading="loading">
    <div class="container">
      <el-row>
        <el-col :span="24" style="margin-top:20px">
          <el-col
            :span="9"
            v-for="item in items"
            :key="item.id"
            :offset="2"
            :style="{'color':item.color}"
            style="margin-top:20px;"
          >
            <!-- border-radius: 10px; -->
            <el-card
              shadow="hover"
              :body-style="{ padding: '0px',height:'300px',border:'1px'}"
              :header="{padding:'10x'}"
            >
              <div slot="header" class="clearfix">
                <div style="margin:-18px -20px;">
                  <el-row style="margin-top:5px;margin-bottom:5px">
                    <el-col
                      :span="16"
                      :offset="4"
                      style="font-size:25px;text-align:center;"
                    >{{item.parkName}}</el-col>
                    <el-col
                      :span="4"
                      style="color:red;
                    font-size:30px;
                    padding-right:5px;
                    text-align:right;"
                    >
                      <i class="el-icon-warning"></i>
                    </el-col>
                  </el-row>
                </div>
              </div>
              <!-- style="background-color:rgba(204, 232,124, 0.5);border-radius: 10px;" -->
              <el-row style="margin-top:30px">
                <el-col :span="5" :offset="2" class="colName">园区编号：</el-col>
                <el-col :span="5" class="colText">{{item.parkNo}}</el-col>
                <el-col :span="5" class="colName">园区光线：</el-col>
                <el-col :span="5" class="colText">{{item.light}}</el-col>
                <el-col :span="22" :offset="1" class="colDivider">
                  <el-divider></el-divider>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="5" :offset="2" class="colName">园区主人：</el-col>
                <el-col :span="5" class="colText">{{item.userName}}</el-col>
                <el-col :span="5" class="colName">园区土壤：</el-col>
                <el-col :span="5" class="colText">{{item.soil}}</el-col>
                <el-col :span="22" :offset="1" class="colDivider">
                  <el-divider></el-divider>
                </el-col>
              </el-row>
              <el-row>
                <el-col :span="5" :offset="2" class="colName">联系电话：</el-col>
                <el-col :span="5" class="colText">{{item.phone}}</el-col>
                <el-col :span="5" class="colName">园区状态：</el-col>
                <el-col :span="5" class="colText">
                  <span v-if="item.parkState===1">空闲</span>
                  <span v-if="item.parkState===2">已种植</span>
                  <span v-if="item.parkState===3">未分配</span>
                </el-col>
                <el-col :span="22" :offset="1" class="colDivider">
                  <el-divider></el-divider>
                </el-col>
              </el-row>
              <el-row style="margin-bottom:30px">
                <el-col :span="5" :offset="2" class="colName">提示：</el-col>
                <el-col :span="15" class="colText">提示信息!</el-col>
              </el-row>
              <el-row style="padding-bottom:20px">

                <el-col :span="4" :offset="4" v-if="item.parkState===2">
                  <el-button
                    type="primary"
                    icon="el-icon-shopping-cart-2"
                    size="small"
                    @click="doSold(item)"
                  >售出</el-button>
                </el-col>
                <el-col :span="4" v-if="item.parkState===2">
                  <el-button
                    type="primary"
                    icon="el-icon-s-shop"
                    size="small"
                    @click="doLevite(item)"
                  >入仓</el-button>
                </el-col>
                <el-col :span="4" v-if="item.parkState===2">
                  <el-button
                    type="primary"
                    icon="el-icon-view"
                    size="small"
                    @click="doDetails(item)"
                  >详情</el-button>
                </el-col>
                <el-col :span="4" v-if="item.parkState===2">
                  <el-button
                    type="primary"
                    icon="el-icon-edit"
                    size="small"
                    @click="doTemperature(item)"
                  >操作</el-button>
                </el-col>


                 <el-col :span="16" :offset="4" v-if="item.parkState===1">
                  <el-button
                    type="success"
                    icon="el-icon-ice-cream-round"
                    size="small"
                    @click="doZHONGZHI(item)"
                    style="width:100%"
                  >种植</el-button>
                </el-col>
              </el-row>
            </el-card>
          </el-col>
        </el-col>
      </el-row>
    </div>
<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
    <!-- 动态弹窗 -->
    <el-dialog :title="titleName" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-row v-if="shouchu">
          <el-col :span="10" :offset="1">
            <el-form-item label="买家名称:" prop="buyersName" label-width="100px">
              <el-input v-model="form.buyersName" placeholder="请输入买家名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="买家电话:" prop="buyPhone" label-width="100px">
              <el-input v-model="form.buyPhone" placeholder="请输入买家电话"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="10" :offset="1">
            <el-form-item label="收货地址:" prop="buyersAddress" label-width="100px" v-if="shouchu">
              <el-input v-model="form.buyersAddress" placeholder="请输入收货地址"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="col" :offset="ofs">
            <el-form-item :label="labelName" prop="tradingNum" label-width="100px">
              <el-input v-model="form.tradingNum" placeholder="请输入交易数量"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row v-if="shouchu">
          <el-col :span="10" :offset="1">
            <el-form-item label="支付方式:" prop="tradingWay" label-width="100px">
              <el-select v-model="form.tradingWay" placeholder="请选择支付方式" style="width:100%;">
                <el-option label="微信" value="1"></el-option>
                <el-option label="支付宝" value="2"></el-option>
                <el-option label="现金" value="3"></el-option>
                <el-option label="银行卡" value="4"></el-option>
                <el-option label="其他渠道" value="5"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="交易金额:" prop="tradingPrice" label-width="100px">
              <el-input v-model="form.tradingPrice" placeholder="请输入交易金额"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row v-if="shouchu">
          <el-col :span="10" :offset="1">
            <el-form-item label="交易时间" prop="tradingTime" label-width="100px">
              <el-date-picker
                v-model="form.tradingTime"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择日期"
                style="width:100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row v-if="shouchu">
          <el-col :span="16" :offset="1">
            <el-form-item label="备注:" prop="note" label-width="100px">
              <el-input
                type="textarea"
                :autosize="{ minRows: 3, maxRows: 6}"
                placeholder="请输入内容"
                v-model="form.note"
                style="width:100%;"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button v-if="shouchu" type="primary" @click="doFormSell">确 定</el-button>
        <el-button v-if="!shouchu" type="primary" @click="doForm">确 定</el-button>
      </div>
    </el-dialog>

<!-- !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!种植!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!! -->
        <el-dialog title="种植" :visible.sync="planting">
      <el-form :model="formPlant">
        <el-row>
          <el-col :span="10" :offset="1">
            <el-form-item label="选择植物:" prop="plantId" label-width="100px">
                   <el-select
              v-model="formPlant.plantId"
              filterable
              placeholder="请选择"
              style="width:100%"
            >
              <el-option
                v-for="item in PlantName"
                :key="item.plantId"
                :label="item.seedName"
                :value="item.plantId"
              ></el-option>
            </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="种子数量:" prop="leviteNum2" label-width="100px">
              <el-input v-model="formPlant.leviteNum2" placeholder="请输入种植的种子数量"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="planting = false">取 消</el-button>
        <el-button type="primary" @click="doPlant">确 定</el-button>
      </div>
    </el-dialog>
  </el-row>
</template>

<script>
import Qs from "qs";
import {
  getPark,
  getyDiseasesHistoryDate,
  insertDateByPark,
  insertCropsIntoWarehouse,
  getSeedsss,
  setParkPlant
} from "@/api/Management/schedule";
export default {
  name: "schedule",

  data() {
    return {
      PlantName:[],
      formPlant:{},
      planting:false,
      col: 0,
      ofs: 0,
      labelName: "",
      dialogFormVisible: false,
      shouchu: true,
      titleName: "",
      form: {},
      loading: false,
      items: []
    };
  },
  created: function() {
    this.getParkDate();
      const params={};
      params.pageList = [];
      params.pageList.push({account:sessionStorage.getItem("account")});
      getSeedsss(params)
      .then(response => {
        this.PlantName = response.data.seedList;
        console.log(this.items);
      })
      .catch(error => {
        this.$message({
          showClose: true,
          message: error,
          type: "error"
        });
      });
  },

  methods: {
    getParkDate(){
      getPark(sessionStorage.getItem("account"))
      .then(response => {
        this.items = response.data;
        console.log(this.items);
      })
      .catch(error => {
        this.$message({
          showClose: true,
          message: error,
          type: "error"
        });
      });
      },
    doPlant(){
      console.log(this.formPlant);
setParkPlant(this.formPlant).then(response => {
        if(response.data>0){
              this.getParkDate();
              this.$message({
            showClose: true,
            message: "操作成功",
            type: "success"
          });
        }
        })
        .catch(error => {
              this.getParkDate();
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
        });

            this.planting=false;
    },
    doZHONGZHI(row){
      this.formPlant.parkId = row.id;
      this.formPlant.userId = row.userId;
      this.planting=true;
    },
    doSold(row) {
      (this.col = 10),
        (this.ofs = 0),
        (this.labelName = "交易数量:"),
        (this.shouchu = true);
      this.form.parkId = row.id;
      this.form.plantId = row.plantId;
      this.form.userId = row.userId;
      this.dialogFormVisible = true;
      this.titleName = "售出";
      console.log(this.form);
    },
    doLevite(row) {
      (this.col = 20),
        (this.ofs = 2),
        (this.labelName = "入仓数目:"),
        (this.shouchu = false);
      this.form.parkId = row.id;
      this.form.plantId = row.plantId;
      this.form.userId = row.userId;
      this.dialogFormVisible = true;
      this.titleName = "入仓";
      console.log(this.form);
    },
    doFormSell() {
      insertDateByPark(this.form)
        .then(response => {
                 this.getParkDate();
        if(response.data>0){
              this.$message({
            showClose: true,
            message: "操作成功",
            type: "success"
          });
        }
        })
        .catch(error => {
                 this.getParkDate();
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
        });
        this.dialogFormVisible = false;

    },

    doForm() {
      const params = {};
      params.userId = this.form.userId;
      params.plantId = this.form.plantId;
      params.parkId = this.form.parkId;
      params.leviteNum2 = this.form.tradingNum;
insertCropsIntoWarehouse(params)
      .then(response => {
               this.getParkDate();
               if(response.data>0){
              this.$message({
            showClose: true,
            message: "操作成功",
            type: "success"
          });
        }
      })
      .catch(error => {
               this.getParkDate();
        this.$message({
          showClose: true,
          message: error,
          type: "error"
        });
      });
      this.dialogFormVisible = false;
      this.getParkDate();
    },
    doDetails(row) {
      console.log("row:");
      console.log(row);
      this.$store.dispatch("setManagementDetails", row);
      this.$router.push("/managementDetails");
    },
    doTemperature(row) {
      console.log("row:");
      console.log(row);
      this.$store.dispatch("setManagement", row);
      this.$router.push("/temperatureAdjustment");
    },
    handleEdit() {}
  }
};
</script>
<style scoped>
.colName {
  text-align: right;
  font-size: 18px;
}
.colText {
  text-align: left;
  font-size: 14px;
  padding-top: 4px;
}
.colDivider {
  margin-top: -22px;
}
.col-1 {
  padding-left: 30px;
  padding-right: 15px;
}
.col-2 {
  padding-left: 15px;
  padding-right: 15px;
}
.col-3 {
  padding-left: 15px;
  padding-right: 30px;
}
</style>

