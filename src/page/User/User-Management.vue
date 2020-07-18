  <template>
  <el-row v-loading="loading">
    <div class="container">
      <el-row>
        <el-form :model="formDate" label-width="100px" ref="formDate">
          <el-row>
            <el-col :span="8">
              <el-form-item label="用户名称：" prop="userName" class="col-1">
                <el-input v-model="formDate.userName" placeholder="请输入用户名称" style="width: 100%"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="账号：" prop="account" class="col-2">
                <el-input v-model="formDate.account" placeholder="请输入账号"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="用户身份：" prop="userState" class="col-3">
                <el-select v-model="formDate.userState" placeholder="请选择用户身份" style="width:100%;">
                  <el-option label="用户" value="1"></el-option>
                  <el-option label="管理员" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8">
              <el-form-item label="用户性别：" prop="sex" class="col-1">
                <el-select v-model="formDate.sex" placeholder="请输入用户性别：" style="width:100%;">
                  <el-option label="女" value="1"></el-option>
                  <el-option label="男" value="2"></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="民族：" prop="national" class="col-2">
                <el-input v-model="formDate.national" placeholder="请输入民族"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="入职时间：" prop="inductionTime" class="col-3">
                <el-date-picker
                  v-model="formDate.inductionTime"
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
              <el-button type="success" @click="doUser" size="mini" style="width:100%">创建新账号</el-button>
            </el-col>
          </el-row>
        </el-form>
        <el-col :span="24">
          <el-table :data="tableData" border style="width:100%;margin-top:20px">
            <el-table-column fixed prop="userName" label="用户名称" width="150"></el-table-column>
            <el-table-column fixed prop="account" label="账号" width="150"></el-table-column>
            <!-- <el-table-column prop="password" label="密码" width="150"></el-table-column> -->
            <el-table-column prop="sex" label="性别" width="150" :show-overflow-tooltip="true">
              <template slot-scope="{row}">
                <span v-if="row.sex=== '1'">女</span>
                <span v-else-if="row.sex=== '2'">男</span>
                <span v-else>异常</span>
              </template>
            </el-table-column>
            <el-table-column prop="national" label="民族" width="150" :show-overflow-tooltip="true"></el-table-column>
            <el-table-column prop="userState" label="用户身份" width="100">
              <template slot-scope="{row}">
                <span v-if="row.userState=== 1">用户</span>
                <span v-else-if="row.userState=== 2">管理员</span>
                <span v-else>身份异常</span>
              </template>
            </el-table-column>
            <el-table-column prop="years" label="出生年月" width="200"></el-table-column>
            <el-table-column prop="phone" label="联系电话" width="200"></el-table-column>
            <el-table-column prop="email" label="电子邮箱" width="200"></el-table-column>
            <el-table-column
              prop="inductionTime"
              label="入职时间"
              width="150"
              :show-overflow-tooltip="true"
            ></el-table-column>
            <el-table-column fixed="right" label="操作" width="200">
              <template slot-scope="scope">
                <el-button
                  size="mini"
                  type="primary"
                  @click="doDiagnosis(scope.$index, scope.row)"
                >任命</el-button>
                <el-button
                  size="mini"
                  type="danger"
                  @click="doDiagnossis(scope.$index, scope.row)"
                >删除</el-button>
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
    <!--=======================================任命=======================================-->
    <el-dialog title="授予园区" :visible.sync="dialogFormVisible" width="70%">
      <el-row>
        <p style="text-align: center; margin: 0 0 20px">给用户分配园区</p>
        <el-row style="text-align: center">
          <!-- <el-col :span="20" :offset="2"> -->
          <el-transfer
            style="text-align: left; display:inline;padding:0px;margin:0px"
            v-model="value"
            filterable
            :render-content="renderFunc"
            :titles="['未分配园区', '已分配园区']"
            :button-texts="['回收', '分配']"
            :format="{
        noChecked: '${total}',
        hasChecked: '${checked}/${total}'
      }"
            @change="handleChange"
            :data="data"
          ></el-transfer>
          <!-- </el-col> -->
        </el-row>
      </el-row>
      <!-- <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="doForm">确 定</el-button>
      </div> -->
    </el-dialog>
    <!--=======================================创建新账号==========================================-->
    <el-dialog title="新建账号" :visible.sync="dialogUser" width="80%">
      <el-form :model="UserForm" :rules="UserFormRules" ref="UserForm">
        <el-row>
          <el-col :span="10">
            <el-form-item label="用户名称:" prop="userName" label-width="100px">
              <el-input v-model="UserForm.userName" placeholder="请输入用户名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="2">
            <el-form-item label="账号:" prop="account" label-width="100px">
              <el-input v-model="UserForm.account" placeholder="请输入创建账号"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="密码:" prop="password" label-width="100px"  autocomplete="off">
              <el-input  type="password" v-model="UserForm.password" placeholder="请输入密码"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="2">
            <el-form-item label="确认密码:" prop="password2" label-width="100px"  autocomplete="off">
              <el-input
                v-model="UserForm.password2"
                placeholder="请输入确认密码"
                @blur="password2Blur"
                 type="password"
                  autocomplete="off"
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="出生年月:" prop="years" label-width="100px">
              <el-date-picker
                v-model="UserForm.years"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择日期"
                style="width:100%"
              ></el-date-picker>
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="2">
            <el-form-item label="联系电话:" prop="phone" label-width="100px">
              <el-input v-model="UserForm.phone" placeholder="请输入联系电话"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="电子邮件:" prop="email" label-width="100px">
              <el-input v-model="UserForm.email" placeholder="请输入电子邮件"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="2">
            <el-form-item label="入职时间:" prop="inductionTime" label-width="100px">
              <el-date-picker
                v-model="UserForm.inductionTime"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择日期"
                style="width:100%"
              ></el-date-picker>
              <!-- <el-input v-model="UserForm.inductionTime" placeholder="请输入入职时间"></el-input> -->
            </el-form-item>
          </el-col>
          <el-col :span="10">
            <el-form-item label="性别:" prop="sex" label-width="100px">
              <el-select v-model="UserForm.sex" placeholder="请输入用户性别：" style="width:100%;">
                <el-option label="女" value="1"></el-option>
                <el-option label="男" value="2"></el-option>
              </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="10" :offset="2">
            <el-form-item label="名族:" prop="national" label-width="100px">
              <el-input v-model="UserForm.national" placeholder="请输入名族"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogUser = false">取 消</el-button>
        <el-button type="primary" @click="doUserForm">确 定</el-button>
      </div>
    </el-dialog>
  </el-row>
</template>
<script>
import {
  getUserDate,
  getParkByUser,
  setParkToUser,
  insertUserDate
} from "@/api/User/userManagement";
export default {
  name: "Equipment-application",
  data() {
    var validPhone = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入电话号码"));
      } else if (!this.isvalidPhone(value)) {
        callback(new Error("请输入正确的11位手机号码"));
      } else {
        callback();
      }
    };
    var validPassword = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入密码"));
      } else if (value.length<=16&&value.length>=6) {
        if(!this.isvalidPassword(value)){
                  callback(new Error("请输入由数字或字母的6-16的密码"));
                  }else{
                callback();
        }
      } else {
        callback(new Error("输入的密码长度为6-16"));
      }
    };
    var validEmail = (rule, value, callback) => {
      if (!value) {
        callback(new Error("请输入邮箱"));
      } else if (!this.isvalidEmail(value)) {
        callback(new Error("请输入正确的邮箱"));
      } else {
        callback();
      }
    };
    return {
      data: [],
      value: [],
      userId: "",
      ParkStateId: 0,
      passwordState: false,
      renderFunc(h, option) {
        return <span>{option.label}</span>;
      },
      dialogUser: false,
      dialogFormVisible: false,
      loading: false,
      tableData: [],
      roleTotal: 0,
      search: {
        offset: 1,
        limit: 10
      },
      UserForm: {
        userName: "",
        account: "",
        password: "",
        years: "",
        phone: "",
        email: "",
        inductionTime: "",
        sex: "",
        national: ""
      },
      UserFormRules: {
        userName: [
          { required: true, message: "请输入用户名称", trigger: "blur" },
          { min: 3, max: 10, message: "长度在 3 到 10个字符", trigger: "blur" }
        ],
        account: [
          { required: true, message: "请输入账号", trigger: "blur" },
          { min: 6, max: 16, message: "长度在 6 到 10 个字符", trigger: "blur" }
        ],
        password: [
          { required: true, trigger: "blur", validator: validPassword }
          // { min: 6, max: 16, message: '长度在 6 到 16 个字符', trigger: 'blur' }
        ],
        years: [{ required: true, message: "请输入出生年龄", trigger: "blur" }],
        phone: [{ required: true, trigger: "blur", validator: validPhone }],
        email: [{ required: true, validator: validEmail, trigger: "blur" }],
        inductionTime: [
          { required: true, message: "请输入入职时间", trigger: "blur" }
        ],
        sex: [{ required: true, message: "请输入性别", trigger: "blur" }],
        national: [{ required: true, message: "请输入名族", trigger: "blur" }]
        //   }
        // };
      },
      formDate: {
        userName: "",
        account: "",
        userState: "",
        sex: "",
        national: "",
        inductionTime: ""
      }
    };
  },

  created: function() {
    this.getDates();
  },
  // 自定义方法

  methods: {
    isvalidEmail(str) {
      const reg = /^([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|\_|\.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/;
      return reg.test(str);
    },
    isvalidPassword(str) {
      const reg = /^[a-zA-Z0-9]{6,20}$/;
      return reg.test(str);
    },
    isvalidPhone(str) {
      const reg = /^1\d{10}$/;
      return reg.test(str);
    },
    password2Blur() {
      if (this.UserForm.password === this.UserForm.password2) {
        this.passwordState = true;
      } else {
        this.$message({
          showClose: true,
          message: "您输入的两次密码不一致！",
          type: "warning"
        });
      }
    },
    //  checkMobile() {
    //         if(this.UserForm.phone!=''){
    //           this.phoneLengthCheck();
    //         }else{
    //       this.$message({
    //         showClose:true,
    //         message:'您输入的手机号码未空！',
    //         type:"warning"
    //     })
    // }
    //     },
    //     phoneLengthCheck(){
    //           let re = /^1\d{10}$/;
    //          if (re.test(this.UserForm.phone)) {
    //         this.$message({
    //         showClose:true,
    //         message:'你的手机格式符合',
    //         type:"warning"
    //     })
    //       } else {
    //                this.$message({
    //         showClose:true,
    //         message:'你的手机格式不符合，请输入正确的手机格式。',
    //         type:"warning"
    //     })
    //       }
    //     },

    doDiagnosis(index, row) {
      this.dialogFormVisible = true;
    // this.userId ='',
      this.getParkDatess(row.id);
    },
    doUserForm() {
      this.$refs.UserForm.validate(valid => {
        if (valid) {
          this.loading = true;
          console.log("可以了");
          console.log(this.UserForm);
          insertUserDate(this.UserForm)
            .then(response => {
              if (response.data > 0) {
                this.loading = false;
                this.$message({
                  showClose: true,
                  message: "账号创建成功了！",
                  type: "success"
                });
              }
              this.getDates();
              this.loading = false;
              this.dialogUser = false;
            })
            .catch(error => {
              this.dialogUser = false;
              this.loading = false;
              this.$message({
                showClose: true,
                message: "失败了，请联系管理员",
                type: "error"
              });
            });
        } else {
          this.$message({
            showClose: true,
            message: "您填写的信息不完整或者填写格式不正确",
            type: "warning"
          });
        }
      });
      this.loading = false;
    },
    doForm() {
      // const params = this.form;
      // params.diseasesId = this.rowDate.id;
      // params.pageList = [];
      // params.pageList.push({ account: sessionStorage.getItem("account") });
      // console.log(params);
      // insertDiseasesHistory(params)
      //   .then(response => {})
      //   .catch(error => {
      //     this.$message({
      //       showClose: true,
      //       message: error,
      //       type: "error"
      //     });
      //   });
    },
    doDiagnossis(index, row) {
      this.dialogFormVisible = true;
      this.rowDate = row;
    },
    // luoluo
    handleChange(value, direction, movedKeys) {
      if (direction == "left") {
        let params = [];
        this.ParkStateId = 3;
        if (value.length < 1) {
          this.$message({
            showClose: true,
            message: "该用户已经没有管理的园区了。",
            type: "warning"
          });
        }
        console.log("去左边:" + value);
        for (let i = 0, len = movedKeys.length; i < len; i++) {
          params.push({ id: movedKeys[i] });
        }
        // x执行代码
        setParkToUser(params, this.ParkStateId)
          .then(response => {
            console.log(response.data);
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
      } else {
        this.ParkStateId = 1;
        let params = [];
        if (value.length > 6) {
          this.$message({
            showClose: true,
            message:
              "给员工分配的园区已经超过了6个！过多的工作考量会影响员工的办事效率哦。",
            type: "warning"
          });
        }
        for (let i = 0, len = movedKeys.length; i < len; i++) {
          params.push({
            id: movedKeys[i],
            userId: this.userId
          });
        }

        // 执行代码
        setParkToUser(params, this.ParkStateId)
          .then(response => {
            console.log("执行了");
            console.log(response.data);
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
      }
      console.log(value, direction, movedKeys);
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

    doUser() {
      this.UserForm = {};
      this.dialogUser = true;
    },
    getParkDatess(userId) {
      this.userId = userId;
      this.data = [];
      this.value=[];
      const params = {};
      getParkByUser(params)
        .then(response => {
          console.log(response.data);
          const itms = response.data;
          for (let i = 0, len = itms.length; i < len; i++) {
            if (itms[i].parkState != 3 && itms[i].userId === userId) {
              this.value.push(itms[i].id);
            }
            this.data.push({
              key: itms[i].id,
              label:
                "园区名称：" +
                itms[i].parkName +
                "，园区地址：" +
                itms[i].parkAddress +
                "",
                disabled:(itms[i].parkState===2)?true:false,
            });
          }
          console.log(this.data);
        })
        .catch(error => {
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
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
      getUserDate(params)
        .then(response => {
          this.tableData = response.data.UserList.list;
          this.roleTotal = response.data.UserList.total;
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
    }
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
  width: 200px;
}
</style>
