  <template>
  <el-row v-loading="loading">
    <div class="container">
      <el-row>
        <el-form :model="formDate" label-width="100px" ref="formDate">
          <el-row>
            <el-col :span="8">
              <el-form-item label="园区名称：" prop="parkName" class="col-1">
                <el-input v-model="formDate.parkName" placeholder="请输入园区名称" style="width: 100%"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="园区地址：" prop="parkAddress" class="col-2">
                <el-input v-model="formDate.parkAddress" placeholder="请输入园区地址"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="园区编号：" prop="parkNo" class="col-3">
                <el-input v-model="formDate.parkNo" placeholder="请输入园区编号"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="病症名称：" prop="diseasesName" class="col-1">
                <el-input v-model="formDate.diseasesName" placeholder="请输入病症名称"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="确诊时间：" prop="verifyTime" class="col-2">
                  <el-date-picker
                v-model="formDate.verifyTime"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择日期"
                style="width:100%;"
              ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="治疗时间：" prop="time" class="col-3">
      <el-date-picker
                v-model="formDate.time"
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
            <el-table-column fixed prop="parkNo" label="园区编号" width="100"></el-table-column>
            <el-table-column fixed prop="parkName" label="园区名称" width="100"></el-table-column>
            <el-table-column prop="diseasesName" label="病症名称" width="100"></el-table-column>
            <el-table-column prop="parkAddress" label="园区地址" width="100"></el-table-column>
            <el-table-column prop="verifyTime" label="确诊时间" width="100"></el-table-column>
            <el-table-column prop="cureTime" label="治疗开始时间" width="100"></el-table-column>
            <el-table-column prop="endTime" label="治疗结束时间" width="100" ></el-table-column>

            <el-table-column prop="wiltingCondition" label="萎蔫情况" width="150" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="leafCondition" label="叶面情况" width="150" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="leafEdgeCondition" label="叶边情况" width="150" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="basisCondition" label="基部情况" width="150" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="plantColor" label="植株颜色" width="100" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="diseaseInf" label="是否传染" width="50" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="note" label="备注信息" width="150" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="treatmentId" label="治疗方法" width="200" :show-overflow-tooltip="true"></el-table-column>

            <!-- <el-table-column fixed="right" label="操作" width="200">
            <template slot-scope="scope">
              <el-button size="mini" type="primary" @click="doDiagnosis(scope.$index, scope.row)">病症详情</el-button>
              <el-button size="mini" type="success" @click="doDiagnossis(scope.$index, scope.row)">确诊</el-button>
            </template>
            </el-table-column>-->
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
    <el-dialog title="园区确诊" :visible.sync="dialogFormVisible">
      <el-form :model="form">
        <el-row>
          <el-col :span="22">
            <el-form-item label="选择园区" label-width="100px" prop="parkName">
              <el-select v-model="form.parkId" filterable placeholder="请选择" style="width:100%">
                <el-option
                  v-for="item in items"
                  :key="item.id"
                  :label="item.parkName"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="22">
            <el-form-item label="治疗开始时间" label-width="100px" prop="cureTime">
              <el-date-picker
                v-model="form.cureTime"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择日期"
                style="width:100%"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="22">
            <el-form-item label="治疗结束时间" label-width="100px" prop="endTime">
              <el-date-picker
                v-model="form.endTime"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择日期"
                style="width:100%;"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="22">
            <el-form-item label="备注信息" label-width="100px" prop="note">
              <el-input
                type="textarea"
                :autosize="{ minRows: 4, maxRows: 6}"
                placeholder="请输入内容"
                v-model="form.note"
                style="100%"
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="doForm">确 定</el-button>
      </div>
    </el-dialog>
  </el-row>
</template>
<script>
import { getyDiseasesHistoryDate } from "@/api/Disease/DiseaseRecord";
export default {
  name: "Equipment-application",
  data() {
    return {
      items: [],
      dialogFormVisible: false,
      loading: false,
      tableData: [],
      roleTotal: 0,
      form: {
        note: "",
        parkId: "",
        cureTime: "",
        endTime: ""
      },
      rowDate: {},
      search: {
        offset: 1,
        limit: 10
      },
      formDate: {
        parkName:'',
        parkAddress:'',
        diseasesName: "",
        parkNo: "",
        verifyTime: "",
        time: "",
      }
    };
  },

  created: function() {
   this.getDates();
  },
  // 自定义方法
  methods: {
    doForm() {
      const params = this.form;
      params.diseasesId = this.rowDate.id;
      params.pageList = [];
      params.pageList.push({ account: sessionStorage.getItem("account") });
      console.log(params);
      insertDiseasesHistory(params)
        .then(response => {})
        .catch(error => {
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
        });
    },

    getParkDate() {
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
    doDiagnossis(index, row) {
      this.dialogFormVisible = true;
      this.rowDate = row;
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
    },
    getDetails(index, row) {
      console.log(row);
    },
    doDiagnosis(index, row) {
      this.loading = true;
      getDiseasesDateById(row)
        .then(response => {
          console.log(response.data.DiseasesList);
          this.$store.dispatch("setDiseaseid", response.data.DiseasesList);
          this.$router.push("/diagnosisDisease");
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

    // 获取数据
    getDates() {
      const params = this.formDate;
      params.pageList = [];
      const a = {
        offset: this.search.offset,
        limit: this.search.limit,
        account: sessionStorage.getItem("account")
      };
      params.pageList.push(a);
      // console.log(params+"?????????????????????");
     getyDiseasesHistoryDate(params)
      .then(response => {
        this.tableData = response.data.DiseasesHistoryList.list;
        this.roleTotal = response.data.DiseasesHistoryList.total;
        console.log(this.tableData);
        this.loading=false;
      })
      .catch(error => {
                this.loading=false;
        this.$message({
          showClose: true,
          message: error,
          type: "error"
        });
      });
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
