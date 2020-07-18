<template>
  <el-row v-loading="loading">
    <div class="container">
      <el-row>
        <el-form :model="formDate" label-width="100px" ref="formDate">
          <!-- <el-row  style="position: relative;height:30px;">
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
          </el-row>-->
          <el-row>
            <el-col :span="8" class="col-1">
              <el-form-item label="设备名称" prop="equipmentName" style="width:100%">
                <el-input v-model="formDate.equipmentName" placeholder="请输入设备名称"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8">
              <el-form-item label="设备编号" prop="equipmentNum" class="col-2">
                <el-input v-model="formDate.equipmentNum" placeholder="请输入设备编号"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" class="col-3">
              <el-form-item label="园区编号" prop="parkNo">
                <el-input v-model="formDate.parkNo" placeholder="请输入园区编号"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="8" class="col-1">
              <el-form-item label="园区名称" prop="parkName">
                <el-input v-model="formDate.parkName" placeholder="请输入园区名称"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" class="col-2">
              <el-form-item label="设备价格" prop="equipmentPrice">
                <el-input v-model="formDate.equipmentPrice" placeholder="请输入设备价格"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="8" class="col-3">
              <el-form-item label="设备状态" prop="equipmentStatus">
                <el-select
                  v-model="formDate.equipmentStatus"
                  placeholder="请输入设备状态"
                  style="width:100%;"
                >
                  <el-option label="使用中" value="1"></el-option>
                  <el-option label="未使用" value="2"></el-option>
                  <el-option label="故障" value="3"></el-option>
                  <el-option label="报修中" value="4"></el-option>
                </el-select>
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
            <el-table-column fixed prop="parkNo" label="园区编号" width="120"></el-table-column>
            <el-table-column fixed prop="equipmentName" label="设备名称" width="150"></el-table-column>
            <el-table-column prop="parkName" label="所在园区" width="120"></el-table-column>
            <el-table-column prop="userName" label="园区负责人" width="80"></el-table-column>
            <el-table-column prop="equipmentStatus" label="设备状态" width="150">
              <template slot-scope="{row,$index}">
                <el-select
                  v-model="row.equipmentStatus"
                  placeholder="请输入设备状态"
                  v-if="showEdit[$index]"
                  style="width:100%;"
                >
                  <el-option label="未使用" value="2"></el-option>
                  <el-option label="故障" value="3"></el-option>
                </el-select>
                <div v-if="!showEdit[$index]">
                  <span v-if="row.equipmentStatus=== '1'">使用中</span>
                  <span v-else-if="row.equipmentStatus=== '2'">未使用</span>
                  <span v-else-if="row.equipmentStatus==='3'">故障</span>
                  <span v-else>报修中</span>
                </div>
              </template>
            </el-table-column>
       <el-table-column prop="state" label="审批状态" width="150">
              <template slot-scope="{row,$index}">
                <div v-if="!showEdit[$index]">
                  <span v-if="row.state=== 1">未处理</span>
                  <span v-else-if="row.state=== 2">已处理</span>
                  <span v-else>未知的错误，联系管理员</span>
                </div>
              </template>
            </el-table-column>
            <el-table-column prop="reason" label="申请备注信息" width="150"></el-table-column>
            <el-table-column prop="equipmentProducers" label="设备生产商" width="150"></el-table-column>
            <el-table-column prop="equipmentPrice" label="设备价格" width="100"></el-table-column>

            <el-table-column prop="equipmentProducersPhone" label="设备生产商电话" width="150"></el-table-column>
            <el-table-column fixed="right" label="操作" width="250">
              <template slot-scope="{row,$index}">
                <el-row>
                  <el-col :span="10" :offset="2">
                    <el-button
                      v-if="!showBtn[$index]"
                      size="mini"
                      type="primary"
                      @click="getDetails($index, row)"
                    >设备详情</el-button>
                  </el-col>

                  <el-col :span="10" :offset="1">
                    <el-button
                      type="success"
                      size="mini"
                      @click.native="handleEdit($index, row)"
                      v-if="row.state===1"
                    >报修处理</el-button>
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

    <el-dialog title="设备报修处理" :visible.sync="EquipmentInterfaceState">
      <el-form :model="form">
        <el-row>
             <el-form-item label="设备状态" prop="equipmentStatus" label-width="100px">
                <el-select
                  v-model="form.equipmentStatus"
                  placeholder="请选择设备状态"
                  style="width:100%;"
                >
                  <el-option label="使用中" value="1"></el-option>
                  <el-option label="未使用" value="2"></el-option>
                  <el-option label="故障" value="3"></el-option>
                </el-select>
              </el-form-item>
              </el-row>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="EquipmentInterfaceState = false">取 消</el-button>
        <el-button type="primary" @click="doForm">确 定</el-button>
      </div>
    </el-dialog>
  </el-row>
</template>

<script>
import {
  getEquipmentState,
  setEquipmentState
} from "@/api/Equipment/EquipmentInterface";
export default {
  name: "Equipment-Management",
  data() {
    return {
      EquipmentInterfaceState: false,
      form: {
        id:'',
        equipmentId: "",
        equipmentStatus:'',
        state:1,
      },
      showBtn: [], //显示按钮
      showEdit: [], //显示编辑框
      loading: false,
      formDate: {
        equipmentName: "",
        parkNo: "",
        equipmentProducers: "",
        equipmentStatus: "",
        parkName: "",
        equipmentPrice: ""
      },
      search: {
        offset: 1,
        limit: 10
      },
      roleTotal: 0,
      // 表格数据
      tableData: []
    };
  },
    //  数据初始化
  created: function() {
    this.loading = true;
    this.getDate();
  },
  methods: {

// 新写
getDate(){
  const params=this.formDate;
  params.pageList=[{account:sessionStorage.getItem("account")}];
  getEquipmentState(this.formDate).then(response=>{
    this.tableData=response.data.list;
      console.log(response.data);
      this.loading=false;
  }).catch(error=>{
    this.loading=false;
    this.$message({
        showClose:true,
        message:error,
        type:"error"
    });
  });
},
handleEdit(index, row) {
        this.form.id=row.id;
        this.form.equipmentId=row.equipmentId;
        this.EquipmentInterfaceState = true;
},
doForm(){
  this.form.state=2;
  this.loading=true;
  setEquipmentState(this.form).then(response=>{
    this.EquipmentInterfaceState=false;
        this.getDate();
              this.loading=false;
    console.log(response.data);
    if(response.data>0){
  this.$message({
      showClose:true,
      message:"操作成功",
      type:'success'
    });
    }else{
      this.$message({
      showClose:true,
      message:"操作失败了",
      type:'warning'
    });
    }
   
  }).catch(error=>{
        this.EquipmentInterfaceState=false;
         this.getDate();
     this.loading=false;
    this.$message({
      showClose:true,
      message:error,
      type:'error'
    });
  });
},
    // 分页方法
handleCurrentChange(val) {
      this.loading = true;
      this.search.offset = (val - 1) * this.search.limit;
      this.getDate();
    },
    // 清空表单的方法
reset() {
      this.loading = true;
      console.log(this.formDate);
      this.$refs.formDate.resetFields();
      this.getDate();
    },
    // 提交表单的方法
onSubmit() {
      this.loading = true;
      this.getDate();
    },
    // 查看详情
    getDetails(index, row) {
      this.loading = true;
      console.log(row);
      this.$store.dispatch("setEquipmentList", row);
      this.$router.push("/EquipmentDetails");
      this.loading = false;
    },



















 
  //   //点击删除
  //   handleDelete(index, row) {
  //     this.$confirm("是否删除该设备?", "温馨提示", {
  //       confirmButtonText: "确定",
  //       cancelButtonText: "取消",
  //       type: "warning",
  //       center: true
  //     })
  //       .then(() => {
  //         console.log(row);
  //         this.loading = true;
  //         deleteEquipment(row)
  //           .then(response => {
  //             this.$message({
  //               type: "success",
  //               message: "删除成功！"
  //             });
  //           })
  //           .catch(error => {
  //             this.$message({
  //               message: error,
  //               type: "删除失败！"
  //             });
  //             this.loading = false;
  //           });
  //         this.getDate();
  //         this.loading = false;
  //       })
  //       .catch(() => {
  //         this.loading = false;
  //         this.$message({
  //           type: "info",
  //           message: "已取消删除"
  //         });
  //       });
  //   },
 

  //   sliderDate() {
  //     console.log(this.RecordId);
  //     this.getDate();
  //   }
  },

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

