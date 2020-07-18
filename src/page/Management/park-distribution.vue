  <template>
  <el-row v-loading="loading">
    <div class="container">
      <el-row>
        <el-form :model="formDate" label-width="100px" ref="formDate">
          <el-row>
            <el-col :span="8">
              <el-form-item label="园区负责人：" prop="userName" class="col-1">
                <el-input v-model="formDate.userName" placeholder="请输入用户名称" style="width: 100%"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="种植作物：" prop="plantName" class="col-2">
                <el-input v-model="formDate.plantName" placeholder="请输入种植作物"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="园区状态：" prop="parkState" class="col-3">
                <el-select v-model="formDate.parkState" placeholder="请选择园区状态" style="width:100%;">
                  <el-option label="空闲" value="1"></el-option>
                  <el-option label="已种植" value="2"></el-option>
                  <el-option label="未分配" value="3"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="园区名称：" prop="parkName" class="col-1">
                <el-input v-model="formDate.parkName" placeholder="请输入园区名称"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="园区地址：" prop="parkAddress" class="col-2">
                <el-input v-model="formDate.parkAddress" placeholder="请输入园区地址"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="园区编号：" prop="parkNO" class="col-3">
                <el-input v-model="formDate.parkNO" placeholder="请输入园区编号"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="2" :offset="17" style="padding-right:10px">
              <el-button type="info" @click="reset" size="mini" style="width:100%;">重置搜索框</el-button>
            </el-col>
            <el-col :span="2" style="padding-right:10px">
              <el-button
                type="primary"
                icon="el-icon-search"
                @click="onSubmit"
                size="mini"
                style="width:100%"
              >查询</el-button>
            </el-col>
            <el-col :span="3" style="padding-right:10px">
              <el-button
                type="success"
                icon="el-icon-ice-cream-round"
                @click="doPark"
                size="mini"
                style="width:100%"
              >创建新园区</el-button>
            </el-col>
          </el-row>
        </el-form>
        <el-col :span="24">
          <el-table :data="tableData" border style="width:100%;margin-top:20px">
            <el-table-column fixed prop="parkName" label="园区名称" width="150"></el-table-column>
            <el-table-column fixed prop="parkNO" label="园区编号" width="100"></el-table-column>
            <el-table-column
              prop="parkState"
              label="园区状态"
              width="150"
              :show-overflow-tooltip="true"
            >
              <template slot-scope="{row}">
                <span v-if="row.parkState=== '1'">空闲</span>
                <span v-else-if="row.parkState=== '2'">已种植</span>
                <span v-else-if="row.parkState=== '3'">未分配</span>
                <span v-else>状态异常，请联系管理员！</span>
              </template>
            </el-table-column>
            <el-table-column
              prop="parkAddress"
              label="园区地址"
              width="150"
              :show-overflow-tooltip="true"
            ></el-table-column>
            <el-table-column prop="ph" label="酸碱度" width="200"></el-table-column>
            <el-table-column prop="soil" label="土壤性质" width="200"></el-table-column>
            <el-table-column prop="light" label="光线强度" width="200"></el-table-column>
            <el-table-column prop="plantName" label="种植植物" width="200">
              <template slot-scope="{row}">
                <span v-if="row.plantName=== null">无种植</span>
                <span v-else>{{row.plantName}}</span>
              </template>
            </el-table-column>
            <el-table-column prop="userName" label="园区负责人" width="200"></el-table-column>
            <el-table-column prop="phone" label="联系电话" width="200"></el-table-column>
            <el-table-column prop="email" label="电子邮箱" width="200"></el-table-column>
            <el-table-column prop="mu" label="园区占地" width="200"></el-table-column>
            <el-table-column fixed="right" label="操作" width="250">
              <template slot-scope="scope">
                <el-row>
                  <el-col :span="6" :offset="2"> <el-button
                  size="mini"
                  type="danger"
                  @click="doDiagnossis(scope.$index, scope.row)"
                  style="width:100%"
                >删除</el-button></el-col>
                      <el-col :span="6" :offset="1">
                   <el-button
                  size="mini"
                  type="warning"
                  @click="doBack(scope.$index, scope.row)"
                   v-if="scope.row.parkState==='1'"
                   style="width:100%"
                >收回</el-button>
                      </el-col>
                <!-- </el-row>
                <el-row> -->
                  <el-col :span="6" :offset="1">
                  <el-button
                  size="mini"
                  type="primary"
                  @click="doDistribution(scope.$index, scope.row)"
                  v-if="scope.row.parkState!=2"
                  style="width:100%"
                >任命</el-button>
                  </el-col>
                   
                   
               
                </el-row>
              
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

    <!-- --------------------------------------------------------园区界面----------------------------------------------------------- -->
    <el-dialog title="新建园区" :visible.sync="doParkState" width="80%">
      <!-- :rules="UserFormRules"  -->
      <el-form :model="ParkForm" ref="ParkForm" :rules="ParkFormRules">
        <el-row>
          <el-col :span="10">
            <el-form-item label="园区名称:" prop="parkName" label-width="100px">
              <el-input v-model="ParkForm.parkName" placeholder="请输入园区名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="2">
            <el-form-item label="土壤性质:" prop="soil" label-width="100px">
              <el-input v-model="ParkForm.soil" placeholder="请输入土壤性质"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="光线强度:" prop="light" label-width="100px" autocomplete="off">
              <el-input v-model="ParkForm.light" placeholder="请输入光线强度"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="2">
            <el-form-item label="酸碱度:" prop="ph" label-width="100px" autocomplete="off">
              <el-input v-model="ParkForm.ph" placeholder="请输入酸碱度" oninput ="value=value.replace(/[^\d.]/g,'')"  autocomplete="off"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="园区地址:" prop="parkAddress" label-width="100px">
              <el-input v-model="ParkForm.parkAddress" placeholder="请输入园区地址"></el-input>
            </el-form-item>
          </el-col>
           <el-col :span="10" :offset="2">
            <el-form-item label="园区占地:" prop="mu" label-width="100px">
              <el-input v-model="ParkForm.mu"  oninput ="value=value.replace(/[^\d.]/g,'')" placeholder="请输入园区占地"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="doParkState = false">取 消</el-button>
        <el-button type="primary" @click="doParkForm">确 定</el-button>
      </div>
    </el-dialog>

        <!-- --------------------------------------------------------给园区分配----------------------------------------------------------- -->
     <el-dialog title="新建账号" :visible.sync="userState" width="50%">
      <el-form :model="UserForm" ref="UserForm">
        <el-row>
          <el-col :span="20" :offset="2">
            <el-form-item label="用户名称:" prop="userName" label-width="100px">
               <el-select
              v-model="UserForm.userId"
              filterable
              placeholder="请选择"
              style="width:100%"
            >
              <el-option
                v-for="item in userList"
                :key="item.id"
                :label="item.userName"
                :value="item.id"
              ></el-option>
            </el-select>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="userState = false">取 消</el-button>
        <el-button type="primary" @click="doUserForm">确 定</el-button>
      </div>
    </el-dialog>
  </el-row>
</template>
<script>
import { getParkData, setNewParkData,getUserListByUser,updatePark } from "@/api/Management/parkDistribution";
export default {
  name: "park-distribution",
  data() {
        var float = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入密码"));
      } else if (!value.test(/[^\d.]/g)){
                  callback(new Error("请输入由数字或字母的6-16的密码"));
                  }else{
                       callback(new Error("输入的密码长度为6-16"));
      }
    };
    return {
      loading: false,
      tableData: [],
      doParkState: false,
      userState:false,
      roleTotal: 0,
      parkId:'',
      userList:[],
      search: {
        offset: 1,
        limit: 10
      },
      UserForm:{
        userId:'',
      },
      ParkForm: {
        parkName: "",
        soil: "",
        light: "",
        ph: "",
        parkAddress: "",
        userId: "",
        plantId: "",
        mu:''
      },
      formDate: {
        userName: "",
        plantName: "",
        parkNO: "",
        parkName: "",
        parkAddress: "",
        parkState: ""
      },
      ParkFormRules: {
        parkName: [
          { required: true, message: "请输入园区名称", trigger: "blur" },
          { min: 3, max: 10, message: "长度在3到10个字符", trigger: "blur" }
        ],
        soil: [
          { required: true, message: "请输入土壤性质", trigger: "blur" },
        ],
        light: [
          { required: true, message: "请输入光强", trigger: "blur" }
          // { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ],
        ph: [
          // {required: true, trigger: "blur", validator: float}
         { required: true, message: "请输入ph值", trigger: "blur" }
        ],
        parkAddress: [{ required: true, message: "请输入地址", trigger: "blur" },
        { max: 100, message: "长度小于100", trigger: "blur" }],
        // userId: [{required: true, message: "请输入", trigger: "blur" }],
        plantId: [
          { required: true, message: "请输入入职时间", trigger: "blur" },
        ],
         mu: [{ required: true, message: "请输入占地值", trigger: "blur" }],
      },
    };
  },

  created: function() {
    this.getDates();
    this.getUserData();
  },
  // 自定义方法

  methods: {
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
    doDistribution($index,row){
        this.userState=true;
        this.parkId=row.id;
    },
    doUserForm(){
      const params={};
      params.id=this.parkId;
      params.userId=this.UserForm.userId;
      params.parkState='1';
            console.log(params);
      updatePark(params).then(response=>{
        if(response.data>0){
          this.$message({
            showClose:true,
            message:'任命成功了',
            type:'success'
          });
        }else{
         this.$message({
            showClose:true,
            message:'失败了，请联系管理员！！',
            type:'error'
          });
        }
        this.getDates();
      }).catch(error=>{
            this.$message({
            showClose:true,
            message:'失败了，请联系管理员！！',
            type:'error'
          });
        this.getDates();
      }
      );
      this.loading=false;
      this.userState=false;
    },
    doBack(index,row){
      const params={};
      params.id=row.id;
      params.userId="kxzt";
      params.parkState='3';
      console.log(params);
       updatePark(params).then(response=>{
        if(response.data>0){
          this.$message({
            showClose:true,
            message:'园区回收成功',
            type:'success'
          });
        }else{
         this.$message({
            showClose:true,
            message:'失败了，请联系管理员！！',
            type:'error'
          });
        }
        this.getDates();
      }).catch(error=>{
            this.$message({
            showClose:true,
            message:'失败了，请联系管理员！！',
            type:'error'
          });
        this.getDates();
      }
      );
      this.loading=false;
      this.userState=false;
    },
    doPark() {
      this.doParkState = true;
    },
    doParkForm() {
      const params = this.ParkForm;
      console.log(params);
            this.$refs.ParkForm.validate(valid => {
        if (valid) {
      setNewParkData(params)
        .then(response => {
                      this.getDates();
this.$refs.ParkForm.resetFields();
        })
        .catch(error => {
              this.getDates();
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });  
          this.$refs.ParkForm.resetFields();
        });
        }})
      this.doParkState = false;
      this.loading = false;
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
      getParkData(params)
        .then(response => {
          this.tableData = response.data.list;
          console.log(this.tableData);
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
    getUserData(){
      const params={};
      getUserListByUser(params).then(response => {
        this.userList=response.data;
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
  }
};
</script>
<style>
.transfer-footer {
  margin-left: 20px;
  padding: 6px 5px;
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
.el-transfer-panel {
  width: 300px;
}
.el-transfer__buttons {
  width: 100px;
}
</style>
