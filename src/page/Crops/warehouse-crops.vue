<template>
  <el-row v-loading="loading">
    <div class="container">
      <el-row>
        <el-form :model="formDate" label-width="100px" ref="formDate">
          <el-row>
            <el-col :span="8">
              <el-form-item label="作物名称" prop="plantName" class="col-1">
                <el-input v-model="formDate.plantName" placeholder="请输入作物名称" style="width: 100%"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="出产园区" prop="parkName" class="col-2">
                <el-input v-model="formDate.parkName" placeholder="请输入出产园区"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="负责人" prop="userName" class="col-3">
                <el-input v-model="formDate.userName" placeholder="请输入负责人"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="园区编号" prop="parkNo" class="col-1">
                <el-input v-model="formDate.parkNo" placeholder="请输入园区编号"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="园区地址" prop="parkAddress" class="col-2">
                <el-input v-model="formDate.parkAddress" placeholder="请输入园区地址"></el-input>
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
            <el-table-column fixed prop="plantName" label="作物名称" width="90"></el-table-column>
            <el-table-column prop="parkNo" label="园区编号" width="100"></el-table-column>

            <el-table-column prop="alias" label="植物别名" width="250" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column fixed prop="parkName" label="出产园区" width="90"></el-table-column>
            <el-table-column prop="parkAddress" label="园区地址" width="100"></el-table-column>

            <el-table-column fixed prop="userName" label="负责人" width="90"></el-table-column>
            <el-table-column prop="phone" label="联系电话" width="120"></el-table-column>
            <el-table-column prop="email" label="联系邮箱" width="160"></el-table-column>
            <el-table-column prop="leviteTime" label="入库时间" width="100"></el-table-column>
            <el-table-column prop="leviteNum2" label="仓库数量" width="100"></el-table-column>

            <el-table-column fixed="right" label="操作" width="200">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="primary"
                  @click="getDetails(scope.$index, scope.row)"
                >详情</el-button>
                <el-button size="mini" type="success" @click="doSell(scope.$index, scope.row)">出售</el-button>
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
import { getDate, queryDate } from "@/api/Crops/WarehouseCrops";
export default {
  name: "warehouse-crops",
  data() {
    return {
      loading: false,
      formDate: {
        plantName: "",
        parkName: "",
        userName: "",
        parkNo: "",
        parkAddress: ""
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
    getceshi(index, row) {
      console.log();
    },
    // 这是获取数据的方法
    getDates() {
      const params = {
        plantName: this.formDate.plantName,
        parkName: this.formDate.parkName,
        userName: this.formDate.userName,
        parkNo: this.formDate.parkNo,
        parkAddress: this.formDate.parkAddress,
        pageList: []
      };
      const pageList = [];
      const a = {
        offset: this.search.offset,
        limit: this.search.limit,
        account: sessionStorage.getItem("account")
      };
      params.pageList.push(a);
      getDate(params)
        .then(response => {
          console.log(response.data);
          this.tableData = response.data.CropsList.list;
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
    },
    // 售出方法
    doSell(index, row) {
      this.loading = true;
      console.log(row);
      this.$store.dispatch("setByCropslist", row);
      this.$router.push("/CropsSell");
      this.loading = false;
    },
    // 查看详情
    getDetails(index, row) {
      this.loading = true;
      console.log(row);
      this.$store.dispatch("setCropslist", row);
      this.$router.push("/CropsDetails");
      this.loading = false;
    },
    // 分页方法
    handleCurrentChange(val) {
      this.loading = true;
      this.search.offset = (val - 1) * this.search.limit;
      this.getDates();
    },
    // 清空表单的方法
    reset() {
      this.loading = true;
      this.$refs.formDate.resetFields();
      this.getDates();
    },
    // 提交表单的方法
    onSubmit() {
      this.loading = true;
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

