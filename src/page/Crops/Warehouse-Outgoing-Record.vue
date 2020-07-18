<template>
  <el-row v-loading="loading">
    <div class="container">
      <el-row>
        <el-form :model="formDate" label-width="100px" ref="formDate">
          <el-row  style="position: relative;height:30px;">
            <div style="position: absolute;left: 50%;top:-15px;transform: translateX(-50%);">
                  <el-switch
              v-model="RecordId"
              active-text="审批通过"
              inactive-text="审批未通过"
              active-color="#13ce66"
              inactive-color="#ff4949"
              active-value="1"
              inactive-value="2"
              @change="sliderDate"
            ></el-switch>
            </div>
          </el-row>
          <el-row>
            <el-col :span="8" class="col-1">
              <el-form-item label="作物名称" prop="plantName" style="width:100%">
                <el-input v-model="formDate.plantName" placeholder="请输入作物名称"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="出产园区" prop="parkName" class="col-2">
                <el-input v-model="formDate.parkName" placeholder="请输入出产园区"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" class="col-3">
              <el-form-item label="负责人" prop="userName">
                <el-input v-model="formDate.userName" placeholder="请输入负责人"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" class="col-1">
              <el-form-item label="园区编号" prop="parkNo">
                <el-input v-model="formDate.parkNo" placeholder="请输入园区编号"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" class="col-2">
              <el-form-item label="园区地址" prop="parkAddress">
                <el-input v-model="formDate.parkAddress" placeholder="请输入园区地址"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" class="col-3">
              <el-form-item label="买家收货地址" prop="buyersAddress">
                <el-input v-model="formDate.buyersAddress" placeholder="请输入买家收货地址"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" class="col-1">
              <el-form-item label="买家姓名" prop="buyersName">
                <el-input v-model="formDate.buyersName" placeholder="请输入买家姓名"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" class="col-2">
              <el-form-item label="交易时间" prop="tradingTime">
                <el-date-picker
                  v-model="formDate.tradingTime"
                  type="date"
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期"
                  style="width:100%;"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8" class="col-3">
              <el-form-item label="支付方式" prop="tradingWay">
                <el-select v-model="formDate.tradingWay" placeholder="请选择活动区域" style="width:100%;">
                  <el-option label="微信" value="1"></el-option>
                  <el-option label="支付宝" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="8">
              <el-form-item label="审批状态" prop="state" class="col-1">
                <el-select
                  v-model="formDate.state"
                  placeholder="请选择活动区域"
                  style="width:100%;"
                  v-if="RecordId ==='2'"
                >
                  <el-option label="在审批" value="1"></el-option>
                  <el-option label="不通过" value="3"></el-option>
                  <el-option label="退回" value="4"></el-option>
                </el-select>
                <el-select
                  v-model="formDate.state"
                  placeholder="请选择活动区域"
                  style="width:100%;"
                  v-else
                >
                  <el-option label="通过" value="2"></el-option>
                </el-select>
                <!-- <el-input v-model="formDate.parkNo" placeholder="请输入审批状态"></el-input> -->
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="2" :offset="18" style="padding-right:10px">
              <el-button type="primary" @click="reset" size="mini" style="width:100%;">重置搜索框</el-button>
            </el-col>
            <el-col :span="2">
              <el-button type="primary" @click="onSubmit" size="mini" style="width:100%">查询</el-button>
            </el-col>
          </el-row>
        </el-form>
        <el-col :span="24">
          <el-table :data="tableData" border style="width:100%;margin-top:20px">
            <el-table-column fixed prop="parkName" label="出产园区" width="90"></el-table-column>
            <el-table-column prop="parkAddress" label="园区地址" width="100"></el-table-column>
            <el-table-column prop="parkNo" label="园区编号" width="100"></el-table-column>

            <el-table-column prop="alias" label="植物别名" width="250" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column fixed prop="plantName" label="作物名称" width="90"></el-table-column>

            <el-table-column prop="userName" label="负责人" width="90"></el-table-column>
            <el-table-column prop="phone" label="联系电话" width="120"></el-table-column>
            <el-table-column prop="email" label="联系邮箱" width="160"></el-table-column>

            <el-table-column prop="buyersName" label="买家姓名" width="90"></el-table-column>
            <el-table-column prop="tradingPrice" label="交易金额" width="120"></el-table-column>
            <el-table-column prop="tradingTime" label="交易时间" width="160"></el-table-column>
            <el-table-column prop="tradingWay" label="支付方式" width="100">
              <template slot-scope="scope">
                <span v-if="scope.row.tradingWay=== '1'">微信</span>
                <span v-else-if="scope.row.tradingWay=== '2'">支付宝</span>
                <span v-else-if="scope.row.tradingWay==='3'">现金</span>
                <span v-else-if="scope.row.tradingWay==='4'">银行卡</span>
                <span v-else>其他渠道</span>
              </template>
            </el-table-column>
            <el-table-column prop="tradingNum" label="交易数量" width="100"></el-table-column>
            <el-table-column prop="state" label="审批状态" width="100">
              <template slot-scope="scope">
                <span v-if="scope.row.state=== 1">在审批</span>
                <span v-else-if="scope.row.state=== 2">通过</span>
                <span v-else-if="scope.row.state=== 3">不通过</span>
                <span v-else-if="scope.row.state=== 4">退回</span>
                <span v-else>异常</span>
              </template>
            </el-table-column>
            <el-table-column prop="buyersAddress" label="买家地址" width="100"></el-table-column>
            <el-table-column prop="buyPhone" label="买家电话" width="120"></el-table-column>
            <el-table-column prop="note" label="备注" width="400" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column fixed="right" label="操作" width="200"  v-if="RecordId ==='2'">
              <template slot-scope="scope">
                <div v-if="scope.row.state===1">
                <el-button
                  size="mini"
                  type="primary"
                  @click="changeOk(scope.$index, scope.row)"
                >审批通过</el-button>

                <el-button size="mini" type="success" @click="changeNo(scope.$index, scope.row)">不通过</el-button>
                </div>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>

      <el-row>
        <el-col :span="10" :offset="14">
          <el-pagination
            background
            @current-change="handleCurrentChange"
            :current-page="1"
            :page-size="10"
            :pager-count="5"
            layout="prev, pager, next"
            :total="roleTotal"
          ></el-pagination>
        </el-col>
      </el-row>
    </div>
  </el-row>
</template>

<script>
import Qs from "qs";
import {
  getRecordDate,
  queryRecordDate,
  changeTradingApplyStateNo,
  changeTradingApplyStateOk
} from "@/api/Crops/WarehouseOutgoingRecord";
export default {
  name: "Warehouse-Outgoing-Record",
  data() {
    return {
      loading: false,
      RecordId: 2,
      formDate: {
        plantName: "",
        parkName: "",
        userName: "",
        parkNo: "",
        parkAddress: "",

        buyersAddress: "",
        buyersName: "",
        tradingTime: "",
        tradingWay: "",
        state: ""
      },
      search: {
        offset: 1,
        limit: 10
      },
      roleTotal: 0,
      tableData: []
    };
  },
  methods: {
    // 这是获取数据的方法
    getDates() {
      const params = {
        plantName: this.formDate.plantName,
        parkName: this.formDate.parkName,
        userName: this.formDate.userName,
        parkNo: this.formDate.parkNo,
        parkAddress: this.formDate.parkAddress,
        buyersAddress: this.formDate.buyersAddress,
        buyersName: this.formDate.buyersName,
        tradingTime: this.formDate.tradingTime,
        tradingWay: this.formDate.tradingWay,
        state: this.formDate.state,
        pageList: []
      };
      const pageList = [];
      const a = {
        offset: this.search.offset,
        limit: this.search.limit,
        account: sessionStorage.getItem("account")
      };
      params.pageList.push(a);

      getRecordDate(params, this.RecordId)
        .then(response => {
          console.log(response.data);
          this.tableData = response.data.RecordList.list;
          this.roleTotal = response.data.RecordList.total;
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
    },
    // // 售出方法
    // doSell(index, row) {
    //   this.loading = true;
    //   this.$store.dispatch("setCropslist", row);
    //   this.$router.push("/CropsSell");
    //   this.loading = false;
    // },
    // // 查看详情
    // getDetails(index, row) {
    //   this.loading = true;
    //   console.log(row);
    //   this.$store.dispatch("setCropslist", row);
    //   this.$router.push("/CropsDetails");
    //   this.loading = false;
    // },
    // 分页方法
    handleCurrentChange(val) {
      this.loading = true;
      this.search.offset = (val - 1) * this.search.limit;
      this.getDates();
    },
    // 清空表单的方法
    reset() {
      this.loading = true;
      console.log("1111111111111111111111");
      console.log(this.formDate);
      this.$refs.formDate.resetFields();
      this.getDates();
    },
 changeOk(index,row){
          const params={};
          params.id=row.id;
          params.state=2;
          params.warehouseCropsId=row.warehouseCropsId;
          params.tradingNum=row.tradingNum;
          params.pageList=[];
          params.pageList.push({account:sessionStorage.getItem("account")});
          console.log(params);
        changeTradingApplyStateOk(params)
        .then(response => {
                    this.getDates();
         if(response.data>0){
         this.$message({
            showClose: true,
            message:"审核成功！！",
            type: "success"
          });
   }else if(response.data==-3){
            this.$message({
            showClose: true,
            message: "交易数量和仓内数量不符合！！",
            type: "error"
          });
          }else if(response.data==0){
            this.$message({
            showClose: true,
            message: "有异常，请联系管理员！！",
            type: "error"
          });
          }
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
    },
    changeNo(index,row){
          const params={};
          params.id=row.id;
          params.state=3;
          params.warehouseCropsId=row.warehouseCropsId;
          params.tradingNum=row.tradingNum;
          params.pageList=[];
          params.pageList.push({account:sessionStorage.getItem("account")});
          console.log(params);
        changeTradingApplyStateNo(params)
        .then(response => {
                    this.getDates();
         if(response.data>0){
         this.$message({
            showClose: true,
            message:"审核成功！！",
            type: "success"
          });
      }else{
            this.$message({
            showClose: true,
            message: "出现异常，请联系管理员！！",
            type: "error"
          });
          }

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
    },
    // 提交表单的方法
    onSubmit() {
      this.loading = true;
      this.getDates();
    },
    sliderDate() {
      console.log(this.RecordId);
      this.getDates();
    }
  },
  //  数据初始化
  created: function() {
    this.loading = true;
    this.getDates();
  }
};
</script>
<style scoped>
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

