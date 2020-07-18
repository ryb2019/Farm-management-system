  <template>
  <el-row v-loading="loading">
    <div class="container">
      <el-row style="position: relative;height:30px;">
        <div style="position: absolute;left: 50%;top:-15px;transform: translateX(-50%);">
          <el-switch
            v-model="RecordId"
            active-text="全部计划"
            inactive-text="近期计划"
            active-color="#13ce66"
            inactive-color="#ff4949"
            active-value="1"
            inactive-value="2"
            @change="sliderDate"
          ></el-switch>
        </div>
      </el-row>
      <el-row>
        <el-form :model="formDate" label-width="120px" ref="formDate">
          <el-row>
            <el-col :span="8">
              <el-form-item label="用户名称：" prop="userName" class="col-1">
                <el-input v-model="formDate.userName" placeholder="请输入用户名称" style="width: 100%"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="园区名称：" prop="parkName" class="col-2">
                <el-input v-model="formDate.parkName" placeholder="请输入园区名称"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="植物名称：" prop="plantName" class="col-3">
                <el-input v-model="formDate.plantName" placeholder="请输入植物名称"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="备注信息:" prop="note" class="col-1">
                <el-input v-model="formDate.note" placeholder="请输入备注信息"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="种植时间：" prop="planTime" class="col-2">
                <el-date-picker
                  v-model="formDate.planTime"
                  type="date"
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期"
                  style="width:100%;"
                ></el-date-picker>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="计划录入时间：" prop="insertTime" class="col-3">
                <el-date-picker
                  v-model="formDate.insertTime"
                  type="date"
                  value-format="yyyy-MM-dd"
                  placeholder="选择日期"
                  style="width:100%;"
                ></el-date-picker>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="2" :offset="17" style="padding-right:10px">
              <el-button type="info" @click="reset" size="mini" style="width:100%;">重置搜索框</el-button>
            </el-col>
            <el-col :span="2" style="padding-right:10px">
              <el-button type="primary" @click="onSubmit" size="mini" style="width:100%">查询</el-button>
            </el-col>
            <el-col :span="2">
              <el-button type="success" @click="doPlan" size="mini" style="width:100%">创建新计划</el-button>
            </el-col>
          </el-row>
        </el-form>
        <el-col :span="24">
          <el-table :data="tableData" border style="width:100%;margin-top:20px">
            <el-table-column fixed prop="userName" label="用户名称" width="100"></el-table-column>
            <el-table-column fixed prop="parkName" label="园区名称" width="100"></el-table-column>
            <el-table-column
              prop="plantName"
              label="植物名称"
              width="150"
              :show-overflow-tooltip="true"
            ></el-table-column>
            <el-table-column prop="planTime" label="种植时间" width="100"></el-table-column>
            <el-table-column prop="insertTime" label="计划录入时间" width="150"></el-table-column>
            <el-table-column prop="note" label="备注信息" :show-overflow-tooltip="true"></el-table-column>
  <div v-if="RecordId==='2'">
                <el-table-column prop="temperature" label="温度情况" width="100">
                         <template slot-scope="{row}">
                  <span v-if="row.temperature=== 1" class="spanBanger">较热</span>
                  <span v-else-if="row.temperature===2" class="spanWarnig">高温</span>
                  <span v-else-if="row.temperature===-1"  class="spanPrimary">太冷了</span>
                  <span v-else-if="row.temperature===0"  class="spanSucces">适宜</span>
                  <span v-else>未知情况</span>
              </template>
                </el-table-column>
            <el-table-column prop="condCode" label="天气" width="150">
               <template slot-scope="{row}">
                  <span v-if="row.condCode=== 3"  class="spanPrimary">有大降雨</span>
                  <span v-else-if="row.condCode===2" class="spanWarnig">有强阵雨</span>
                  <span v-else-if="row.condCode===1"  class="spanBanger">有极端天气</span>
                  <span v-else-if="row.condCode===0" class="spanSucces">适宜</span>
                  <span v-else>未知情况</span>
              </template>
            </el-table-column>
            <el-table-column prop="pcpn" label="降水量" :show-overflow-tooltip="true">
                  <template slot-scope="{row}">
                  <span v-if="row.pcpn===1" class="spanBanger">降水量过大</span>
                  <span v-else-if="row.pcpn===0" class="spanInfo">无降水</span>
                  <span v-else>未知情况</span>
              </template>
            </el-table-column>
                        <el-table-column prop="windSc" label="风速" :show-overflow-tooltip="true">
                          <template slot-scope="{row}">
                  <span v-if="row.windSc===1"  class="spanBanger">风速过大</span>
                  <span v-else-if="row.windSc===0"  class="spanSucces ">风速适宜</span>
                  <span v-else>未知情况</span>
              </template>
                        </el-table-column>
  </div>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button size="mini" type="danger" @click="deletePlanById(scope.row)">删除</el-button>
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
    <!--=======================================创建新计划==========================================-->
    <el-dialog title="新建计划" :visible.sync="dialogUserPlan" width="80%">
      <el-form :model="UserForm" :rules="UserFormRules" ref="UserForm">
        <el-row>
          <el-col :span="20" :offset="2">
            <el-form-item label="园区名称:" prop="parkId" label-width="100px">
              <el-select v-model="UserForm.parkId" filterable placeholder="请选择" style="width:100%">
                <el-option
                  v-for="item in parkList"
                  :key="item.id"
                  :label="item.parkName"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="20" :offset="2">
            <el-form-item label="植物名称:" prop="plantId" label-width="100px">
              <el-select v-model="UserForm.plantId" filterable placeholder="请选择" style="width:100%">
                <el-option
                  v-for="item in plantList"
                  :key="item.id"
                  :label="item.plantName"
                  :value="item.id"
                ></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="20" :offset="2">
            <el-form-item label="种植时间:" prop="planTime" label-width="100px">
              <el-date-picker
                v-model="UserForm.planTime"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择日期"
                style="width:100%"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="20" :offset="2">
            <el-form-item label="备注信息:" prop="note" label-width="100px" autocomplete="off">
              <el-input
                type="textarea"
                :autosize="{ minRows: 3, maxRows: 6}"
                placeholder="请输入内容"
                v-model="UserForm.note"
                maxlength="100"
                show-word-limit
              ></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogUserPlan = false">取 消</el-button>
        <el-button type="primary" @click="doUserPlanForm">确 定</el-button>
      </div>
    </el-dialog>
  </el-row>
</template>
<script>
import {
  getUserPlan,
  getUserAllPlan,
  insertUserPlan,
  getPlant,
  getPark,
  deleteUserPlan
} from "@/api/User/userPlan";
export default {
  name: "user-plants",
  data() {
    return {
      RecordId: 2,
      dialogUserPlan: false,
      loading: false,
      tableData: [],
      roleTotal: 0,
      parkList: [],
      plantList: [],
      search: {
        offset: 1,
        limit: 10
      },
      UserForm: {
        parkId: "",
        plantId: "",
        planTime: "",
        note: ""
      },
      UserFormRules: {
        parkId: { required: true, message: "请输入园区名称", trigger: "blur" },
        plantId: {
          required: true,
          message: "请输入种植的植物名称",
          trigger: "blur"
        },
        planTime: { required: true, message: "请输入种植日期", trigger: "blur" }
      },
      formDate: {
        userName: "",
        planTime: "",
        plantName: "",
        parkName: "",
        note: "",
        insertTime: ""
      }
    };
  },

  created: function() {
    this.getDates();
    this.getPlantList();
    this.getParkList();
  },
  // 自定义方法

  methods: {
    getPlantList() {
      getPlant()
        .then(response => {
          console.log(response.data);
          this.plantList = response.data;
        })
        .catch(error => {
          this.loading = false;
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
        });
      this.loading = false;
    },

    getParkList() {
      getPark(sessionStorage.getItem("account"))
        .then(response => {
          console.log(response.data);
          this.parkList = response.data;
        })
        .catch(error => {
          this.loading = false;
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
        });
      this.loading = false;
    },
    sliderDate() {
      this.getDates();
    }, // 获取数据
    getDates() {
      const params = this.formDate;
      params.pageList = [];
      const a = {
        offset: this.search.offset,
        limit: this.search.limit,
        account: sessionStorage.getItem("account")
      };
      params.pageList.push(a);
      // const params ={};
      if (this.RecordId == "2") {
        this.futurePlan(params);
      } else {
        this.allPlan(params);
      }
    },
    allPlan(val) {
      getUserAllPlan(val)
        .then(response => {
          console.log(response.data);
          this.tableData = response.data;
          this.loading = false;
        })
        .catch(error => {
          this.loading = false;
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
        });
    },
    futurePlan(val) {
      getUserPlan(val)
        .then(response => {
          console.log(response.data);
          this.tableData = response.data;
          this.loading = false;
        })
        .catch(error => {
          this.loading = false;
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
        });
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
doPlan(){
this.dialogUserPlan=true;
},
    doUserPlanForm() {
      this.$refs.UserForm.validate(valid => {
        if (valid) {
          this.loading = true;
          console.log(this.UserForm);
          const params = this.UserForm;
          params.pageList = [{ account: sessionStorage.getItem("account") }];
          insertUserPlan(this.UserForm)
            .then(response => {
              console.log(response.data);
              // this.tableData=response.data;
              this.getDates();
            })
            .catch(error => {
              this.getDates();

              this.$message({
                showClose: true,
                message: error,
                type: "error"
              });
            });
          this.loading = false;
        } else {
          this.$message({
            showClose: true,
            message: "您填写的信息不完整或者填写格式不正确",
            type: "warning"
          });
        }
      });
      this.loading = false;
      this.dialogUserPlan = false;
    },
    deletePlanById(row) {
      console.log(row);
      this.$confirm("此操作将永久删除该计划, 是否继续?", "提示", {
        confirmButtonText: "确定",
        cancelButtonText: "取消",
        type: "warning"
      })
        .then(() => {
          deleteUserPlan(row)
            .then(response => {
              console.log(response.data);
              if (response.data > 0) {
                this.$message({
                  type: "success",
                  message: "删除成功!"
                });
              } else {
                this.$message({
                  type: "error",
                  message: "删除失败，请联系管理员!"
                });
              }

              this.getDates();
            })
            .catch(error => {
              this.getDates();
              this.$message({
                showClose: true,
                message: "删除失败，请联系管理员!",
                type: "error"
              });
            });
        })
        .catch(() => {
          this.$message({
            type: "info",
            message: "已取消删除"
          });
        });
      this.loading = false;
    },
  
  }
};
</script>
<style>
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
.spanDanger{
  color:#F56C6C;
}
.spanSucces{
  color:#67C23A;
}
.spanWarnig{
  color:#E6A23C;
}
.spanInfo{
  color:#909399;
}
.spanPrimary{
  color: #409EFF;
}
</style>
