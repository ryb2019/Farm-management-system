  <template>
  <el-row v-loading="loading">
    <div class="container">
      <el-row>
        <el-form :model="formDate" label-width="100px" ref="formDate">
          <el-row>
            <el-col :span="8">
              <el-form-item label="园区名称" prop="parkName" class="col-1">
                <el-input v-model="formDate.parkName" placeholder="请输入园区名称" style="width: 100%"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="园区地址" prop="parkAddress" class="col-2">
                <el-input v-model="formDate.parkAddress" placeholder="请输入园区地址"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="园区编号" prop="parkNO" class="col-3">
                <el-input v-model="formDate.parkNO" placeholder="请输入园区编号"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="园区负责人" prop="userName" class="col-1">
                <el-input v-model="formDate.userName" placeholder="请输入园区负责人"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="作物名称" prop="plantName" class="col-2">
                <el-input v-model="formDate.plantName" placeholder="请输入作物名称"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="日程时间" prop="stateTime" class="col-3">
                   <el-date-picker
                v-model="formDate.stateTime"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择日期"
                style="width:100%;"
              ></el-date-picker>
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
            <el-table-column fixed prop="parkNO" label="园区编号" width="100"></el-table-column>
            <el-table-column prop="parkName" label="园区名称" width="100"></el-table-column>
            <el-table-column prop="userName" label="园区负责人" width="200"></el-table-column>
            <el-table-column prop="parkAddress" label="园区地址" width="100"></el-table-column>
            <el-table-column prop="plantName" label="作物名称" width="150"></el-table-column>
            <el-table-column prop="leafColor" label="叶子色泽" width="150"></el-table-column>
            <el-table-column prop="leafTrace" label="叶面虫痕" width="150"></el-table-column>
            <el-table-column prop="leafHeight" label="植株高度" width="150"></el-table-column>
            <el-table-column prop="leafArea" label="叶面面积" width="100"></el-table-column>
            <el-table-column prop="witheringSituation" label="萎焉情况" width="100"></el-table-column>
            <el-table-column prop="leafCon" label="叶子浓度" width="50"></el-table-column>
            <el-table-column prop="oContent" label="氮含量" width="150"></el-table-column>
            <el-table-column prop="pContent" label="磷含量" width="150"></el-table-column>
            <el-table-column prop="kContent" label="钾含量" width="150"></el-table-column>
            <el-table-column prop="ph" label="PH值" width="200"></el-table-column>
            <el-table-column prop="soilMoisture" label="土壤湿度" width="200"></el-table-column>
            <el-table-column prop="temperature" label="温度" width="200"></el-table-column>
            <el-table-column prop="humidity" label="湿度" width="200"></el-table-column>
            <el-table-column prop="stateTime" label="记录时间" width="200"></el-table-column>

            <el-table-column fixed="right" label="操作" width="200">
              <template slot-scope="scope">
              <el-button size="mini" type="success" @click="doHistoryDiagnosis(scope.$index, scope.row)">日程详情</el-button>
              <el-button size="mini" type="danger" @click="doDiagnossis(scope.$index, scope.row)">删除记录</el-button>
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
import { getParkStateHistory } from "@/api/Management/scheduleHistory";
export default {
  name: "schedule-history",
  data() {
    return {
      loading: false,
      tableData: [],
      roleTotal: 0,
      rowDate: {},
      search: {
        offset: 1,
        limit: 10
      },
      formDate: {
        parkName: "",
        parkAddress: "",
        stateTime: "",
        plantName: "",
        parkNO: "",
        userName: ""
      }
    };
  },

  created: function() {
    this.loading = true;
    this.getData();
  },
  // 自定义方法
  methods: {
    onSubmit() {
      this.loading = true;
      this.getData();
    },
    reset() {
      this.loading = true;
      console.log(this.formDate);
      this.$refs.formDate.resetFields();
      this.getData();
    },
    // 分页方法
    handleCurrentChange(val) {
      this.loading = true;
      this.search.offset = (val - 1) * this.search.limit;
      this.getData();
    },
    getData() {
      const params = this.formDate;
      params.pageList = [
        {
          account: sessionStorage.getItem("account"),
          offset: this.search.offset,
          limit: this.search.limit
        }
      ];
      getParkStateHistory(params)
        .then(response => {
          this.loading = false;
          this.tableData = response.data;
          console.log(response.data);
        })
        .catch(error => {
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
        });
    },
    doHistoryDiagnosis(index,row){
        this.$store.dispatch('setScheduleHistoryList',row);
              this.$router.push("/scheduleHistoryDetails");
        console.log(row);
    }
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
