<template>
  <el-row v-loading="loading">
    <div class="container">
      <el-row>
        <el-tabs type="border-card">
          <el-tab-pane label="种子申请历史">
            <el-row style="margin-bottom:20px">
              <el-form :model="seedsForm" label-width="100px" ref="seedsForm">
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="种子名称" prop="seedName" class="col-1">
                      <el-input
                        v-model="seedsForm.seedName"
                        placeholder="请输入种子名称"
                        style="width: 100%"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="申请状态" prop="state" class="col-2">
                      <el-select
                        v-model="seedsForm.state"
                        placeholder="请选择支付方式"
                        style="width:100%;"
                      >
                        <el-option label="审核中" value="1"></el-option>
                        <el-option label="审核通过" value="2"></el-option>
                        <el-option label="审核不通过" value="3"></el-option>

                        <el-option label="退回" value="4"></el-option>
                      </el-select>

                      <!-- <el-input v-model="seedsForm.state" placeholder="请输入申请状态"></el-input> -->
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="申请数量" prop="applyNum" class="col-3">
                      <el-input v-model="seedsForm.applyNum" placeholder="请输入申请数量"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row>
                  <el-col :span="4" :offset="20">
                    <el-button type="primary" @click="reset('seedsForm')" size="mini">重置</el-button>
                    <el-button type="primary" @click="onSubmitseedsForm()" size="mini">查询</el-button>
                  </el-col>
                </el-row>
              </el-form>
            </el-row>

            <template>
              <el-row>
                <el-table :data="tableDataseed_warehouse_" style="width:100%">
                  <el-table-column prop="seedName" label="种子名称" width="200"></el-table-column>
                  <el-table-column prop="applyNum" label="申请数量" width="250"></el-table-column>
                  <el-table-column prop="state" label="申请状态" width="250">
                    <template slot-scope="{row}">
                      <span v-if="row.state=== 1">审批中</span>
                      <span v-else-if="row.state=== 2">审批通过</span>
                      <span v-else-if="row.state===3">审批不通过</span>
                      <span v-else>退回</span>
                    </template>
                  </el-table-column>
                  <el-table-column prop="userName" label="申请人" width="250"></el-table-column>
                  <el-table-column prop="applyNote" label="备注" width="350" :show-overflow-tooltip="true"></el-table-column>
                  <el-table-column fixed="right" label="操作" width="200">
                    <template slot-scope="scope">
                      <el-row v-if="showLoading">
                        <el-col :span="12">
                          <el-button
                            size="mini"
                            type="primary"
                            v-if="scope.row.state===1"
                            @click="okApply(scope.$index, scope.row,1)"
                          >审批通过</el-button>
                        </el-col>
                        <el-col :span="12">
                          <el-button
                            size="mini"
                            type="primary"
                            v-if="scope.row.state===1"
                            @click="nonoApply(scope.$index, scope.row,1)"
                          >审批不通过</el-button>
                        </el-col>
                      </el-row>
                      <el-row v-if="!showLoading">
                        <el-button
                          size="mini"
                          type="primary"
                          v-if="scope.row.state===1"
                          @click="noApply(scope.$index, scope.row,1)"
                        >取消申请</el-button>
                      </el-row>
                    </template>
                  </el-table-column>
                </el-table>
              </el-row>
              <el-row>
                <el-col :span="10" :offset="14">
                  <el-pagination
                    background
                    @current-change="handleCurrentChangeSeeds"
                    :current-page="1"
                    :page-size="10"
                    :pager-count="5"
                    layout="prev, pager, next"
                    :total="SeedRoleTotal"
                  ></el-pagination>
                </el-col>
              </el-row>
            </template>
          </el-tab-pane>

          <el-tab-pane label="农具申请历史">
            <el-row style="margin-bottom:20px">
              <el-form :model="toolsForm" label-width="100px" ref="toolsForm">
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="农具名称" prop="toolsName" class="col-1">
                      <el-input
                        v-model="toolsForm.toolsName"
                        placeholder="请输入农具名称"
                        style="width: 100%"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="申请状态" prop="state" class="col-2">
                      <el-select
                        v-model="toolsForm.state"
                        placeholder="请选择支付方式"
                        style="width:100%;"
                      >
                        <el-option label="审核中" value="1"></el-option>
                        <el-option label="审核通过" value="2"></el-option>
                        <el-option label="审核不通过" value="3"></el-option>
                        <el-option label="退回" value="4"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="申请数量" prop="applyNum" class="col-3">
                      <el-input v-model="toolsForm.applyNum" placeholder="请输入申请数量"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="4" :offset="20">
                    <el-button type="primary" @click="reset('toolsForm')" size="mini">重置</el-button>
                    <el-button type="primary" @click="onSubmittoolsForm()" size="mini">查询</el-button>
                  </el-col>
                </el-row>
              </el-form>
            </el-row>
            <el-row>
              <template>
                <el-row>
                  <el-table :data="tableDatatools_warehouse_" style="width:100%" border>
                    <el-table-column prop="toolsName" label="农具名称" width="200"></el-table-column>
                    <el-table-column prop="applyNum" label="申请数量" width="250"></el-table-column>
                    <el-table-column prop="userName" label="申请人" width="250"></el-table-column>
                    <el-table-column prop="state" label="申请状态" width="250">
                      <template slot-scope="{row}">
                        <span v-if="row.state=== 1">审批中</span>
                        <span v-else-if="row.state=== 2">审批通过</span>
                        <span v-else-if="row.state===3">审批不通过</span>
                        <span v-else>退回</span>
                      </template>
                    </el-table-column>
                    <el-table-column prop="applyNote" label="备注" width="250" :show-overflow-tooltip="true"></el-table-column>

                    <el-table-column fixed="right" label="操作" width="200">
                           <template slot-scope="scope">
                      <el-row v-if="showLoading">
                        <el-col :span="12">
                          <el-button
                            size="mini"
                            type="primary"
                            v-if="scope.row.state===1"
                            @click="okApply(scope.$index, scope.row,2)"
                          >审批通过</el-button>
                        </el-col>
                        <el-col :span="12">
                          <el-button
                            size="mini"
                            type="primary"
                            v-if="scope.row.state===1"
                            @click="nonoApply(scope.$index, scope.row,2)"
                          >审批不通过</el-button>
                        </el-col>
                      </el-row>
                      <el-row v-if="!showLoading">
                        <el-button
                          size="mini"
                          type="primary"
                          v-if="scope.row.state===1"
                          @click="noApply(scope.$index, scope.row,2)"
                        >取消申请</el-button>
                      </el-row>
                    </template>
                    </el-table-column>
                  </el-table>
                </el-row>
                <el-row>
                  <el-col :span="10" :offset="14">
                    <el-pagination
                      background
                      @current-change="handleCurrentChangeTools"
                      :current-page="1"
                      :page-size="10"
                      :pager-count="5"
                      layout="prev, pager, next"
                      :total="ToolsRoleTotal"
                    ></el-pagination>
                  </el-col>
                </el-row>
              </template>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="肥料申请历史">
            <el-row style="margin-bottom:20px">
              <el-form :model="fertilizerForm" label-width="100px" ref="fertilizerForm">
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="肥料名称" prop="fertilizerName" class="col-1">
                      <el-input
                        v-model="fertilizerForm.fertilizerName"
                        placeholder="请输入肥料名称"
                        style="width: 100%"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="申请状态" prop="state" class="col-2">
                      <el-select
                        v-model="fertilizerForm.state"
                        placeholder="请选择支付方式"
                        style="width:100%;"
                      >
                        <el-option label="审核中" value="1"></el-option>
                        <el-option label="审核通过" value="2"></el-option>
                        <el-option label="审核不通过" value="3"></el-option>
                        <el-option label="退回" value="4"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="申请数量" prop="applyNum" class="col-3">
                      <el-input v-model="fertilizerForm.applyNum" placeholder="请输入申请数量"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row>
                  <el-col :span="4" :offset="20">
                    <el-button type="primary" @click="reset('fertilizerForm')" size="mini">重置</el-button>
                    <el-button type="primary" @click="onSubmitseedsForm()" size="mini">查询</el-button>
                  </el-col>
                </el-row>
              </el-form>
            </el-row>
            <el-row>
              <template>
                <el-row>
                  <el-table
                    :data="tableDatafertilizer_warehouse_"
                    style="width:100%"
                    border
                    max-height="600"
                  >
                    <el-table-column prop="fertilizerName" label="肥料名称" width="200"></el-table-column>
                    <el-table-column prop="applyNum" label="申请数量" width="250"></el-table-column>
                    <el-table-column prop="userName" label="申请人" width="250"></el-table-column>
                    <el-table-column prop="state" label="申请状态" width="250">
                      <template slot-scope="{row}">
                        <span v-if="row.state=== 1">审批中</span>
                        <span v-else-if="row.state=== 2">审批通过</span>
                        <span v-else-if="row.state===3">审批不通过</span>
                        <span v-else>退回</span>
                      </template>
                    </el-table-column>
                    <el-table-column prop="applyNote" label="备注" width="250" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column fixed="right" label="操作" width="200">
                          <template slot-scope="scope">
                      <el-row v-if="showLoading">
                        <el-col :span="12">
                          <el-button
                            size="mini"
                            type="primary"
                            v-if="scope.row.state===1"
                            @click="okApply(scope.$index, scope.row,3)"
                          >审批通过</el-button>
                        </el-col>
                        <el-col :span="12">
                          <el-button
                            size="mini"
                            type="primary"
                            v-if="scope.row.state===1"
                            @click="nonoApply(scope.$index, scope.row,3)"
                          >审批不通过</el-button>
                        </el-col>
                      </el-row>
                      <el-row v-if="!showLoading">
                        <el-button
                          size="mini"
                          type="primary"
                          v-if="scope.row.state===1"
                          @click="noApply(scope.$index, scope.row,3)"
                        >取消申请</el-button>
                      </el-row>
                    </template>
                    </el-table-column>
                  </el-table>
                </el-row>
                <el-row>
                  <el-col :span="10" :offset="14">
                    <el-pagination
                      background
                      @current-change="handleCurrentChangeFertilizer"
                      :current-page="1"
                      :page-size="10"
                      :pager-count="5"
                      layout="prev, pager, next"
                      :total="FerRoleTotal"
                    ></el-pagination>
                  </el-col>
                </el-row>
              </template>
            </el-row>
          </el-tab-pane>
          <el-tab-pane label="农药申请历史">
            <el-row style="margin-bottom:20px">
              <el-form :model="pesticideForm" label-width="100px" ref="pesticideForm">
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="农药名称" prop="pesticideName" class="col-1">
                      <el-input
                        v-model="pesticideForm.pesticideName"
                        placeholder="请输入农药名称"
                        style="width: 100%"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="申请状态" prop="state" class="col-2">
                      <el-select
                        v-model="pesticideForm.state"
                        placeholder="请选择支付方式"
                        style="width:100%;"
                      >
                        <el-option label="审核中" value="1"></el-option>
                        <el-option label="审核通过" value="2"></el-option>
                        <el-option label="审核不通过" value="3"></el-option>
                        <el-option label="退回" value="4"></el-option>
                      </el-select>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="申请数量" prop="applyNum" class="col-3">
                      <el-input v-model="pesticideForm.applyNum" placeholder="请输入申请数量"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>

                <el-row>
                  <el-col :span="4" :offset="20">
                    <el-button type="primary" @click="reset('pesticideForm')" size="mini">重置</el-button>
                    <el-button type="primary" @click="onSubmitpesticideForm()" size="mini">查询</el-button>
                  </el-col>
                </el-row>
              </el-form>
            </el-row>
            <el-row>
              <template>
                <el-row>
                  <el-table
                    :data="tableDatapesticide_warehouse_"
                    style="width:100%"
                    border
                    max-height="600"
                  >
                    <el-table-column prop="pesticideName" label="肥料名称" width="200"></el-table-column>
                    <el-table-column prop="applyNum" label="申请数量" width="250"></el-table-column>
                    <el-table-column prop="userName" label="申请人" width="250"></el-table-column>
                    <el-table-column prop="state" label="申请状态" width="250">
                      <template slot-scope="{row}">
                        <span v-if="row.state=== 1">审批中</span>
                        <span v-else-if="row.state=== 2">审批通过</span>
                        <span v-else-if="row.state===3">审批不通过</span>
                        <span v-else>退回</span>
                      </template>
                    </el-table-column>
                    <el-table-column prop="applyNote" label="备注" width="300" :show-overflow-tooltip="true"></el-table-column>
                    <el-table-column fixed="right" label="操作" width="200">
                         <template slot-scope="scope">
                      <el-row v-if="showLoading">
                        <el-col :span="12">
                          <el-button
                            size="mini"
                            type="primary"
                            v-if="scope.row.state===1"
                            @click="okApply(scope.$index, scope.row,4)"
                          >审批通过</el-button>
                        </el-col>
                        <el-col :span="12">
                          <el-button
                            size="mini"
                            type="primary"
                            v-if="scope.row.state===1"
                            @click="nonoApply(scope.$index, scope.row,4)"
                          >审批不通过</el-button>
                        </el-col>
                      </el-row>
                      <el-row v-if="!showLoading">
                        <el-button
                          size="mini"
                          type="primary"
                          v-if="scope.row.state===1"
                          @click="noApply(scope.$index, scope.row,4)"
                        >取消申请</el-button>
                      </el-row>
                    </template>
                    </el-table-column>
                  </el-table>
                </el-row>
                <el-row>
                  <el-col :span="10" :offset="14">
                    <el-pagination
                      background
                      @current-change="handleCurrentChangePesticide"
                      :current-page="1"
                      :page-size="10"
                      :pager-count="5"
                      layout="prev, pager, next"
                      :total="PesticideRoleTotal"
                    ></el-pagination>
                  </el-col>
                </el-row>
              </template>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-row>
    </div>
  </el-row>
</template>

<script>
import { getApplyDate, changeApplyState } from "@/api/warehouseApply";
import { mapGetters } from "vuex";
export default {
  name: "warehouse-apply",
  data() {
    return {
      loading: false,
      seedsForm: {
        seedName: "",
        state: "",
        applyNum: "",
        type: 1
      },
      fertilizerForm: {
        fertilizerName: "",
        state: "",
        applyNum: "",
        type: 3
      },
      toolsForm: {
        toolsName: "",
        state: "",
        applyNum: "",
        type: 2
      },
      pesticideForm: {
        pesticideName: "",
        state: "",
        applyNum: "",
        type: 4
      },
      fertilizerList: {
        offset: 0,
        limit: 10
      },
      seedList: {
        offset: 0,
        limit: 10
      },
      toolsList: {
        offset: 0,
        limit: 10
      },
      pesticideList: {
        offset: 0,
        limit: 10
      },
      ToolsRoleTotal: 0,
      PesticideRoleTotal: 0,
      SeedRoleTotal: 0,
      FerRoleTotal: 0,
      tableDataseed_warehouse_: [],
      tableDatatools_warehouse_: [],
      tableDatafertilizer_warehouse_: [],
      tableDatapesticide_warehouse_: []
    };
  },
  created: function() {
    this.getDate();
  },
  computed: {
    // 接收传过来的数据
    ...mapGetters(["showLoading"])
  },
  methods: {
    handleCurrentChangeSeeds(val) {
      this.loading = true;
      this.seedList.offset = (val - 1) * this.seedList.limit;
      this.getSeedDate  ();
    },

    handleCurrentChangeTools(val) {
      this.loading = true;
      this.toolsList.offset = (val - 1) * this.toolsList.limit;
      this.getToolsDate();
    },
    handleCurrentChangeFertilizer(val) {
      this.loading = true;
      this.fertilizerList.offset = (val - 1) * this.fertilizerList.limit;
      this.getFertilizerDate(val);
    },
    handleCurrentChangePesticide(val) {
      this.loading = true;
      this.pesticideList.offset = (val - 1) * this.pesticideList.limit;
      this.getPesticideDate();
    },

    reset(formName) {
      this.$refs[formName].resetFields();
      this.getDate();
    },
    getDate() {
      this.getFertilizerDate();
      this.getSeedDate();
      this.getPesticideDate();
      this.getToolsDate();
    },

    getFertilizerDate() {
      const params = {
        fertilizerName: this.fertilizerForm.fertilizerName,
        state: this.fertilizerForm.state,
        applyNum: this.fertilizerForm.applyNum,
        type: 3,
        pageList: []
      };
      const pageList = [];
      const a = {
        offset: this.fertilizerList.offset,
        limit: this.fertilizerList.limit,
        account: sessionStorage.getItem("account")
      };
      params.pageList.push(a);
      getApplyDate(params)
        .then(response => {
          console.log(response.data);
          this.tableDatafertilizer_warehouse_ = response.data.list;
          this.FerRoleTotal = response.data.total;
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
    getSeedDate() {
      const params = {
        seedName: this.seedsForm.seedName,
        state: this.seedsForm.state,
        applyNum: this.seedsForm.applyNum,
        type: 1,
        pageList: []
      };
      const pageList = [];
      const a = {
        offset: this.seedList.offset,
        limit: this.seedList.limit,
        account: sessionStorage.getItem("account")
      };
      params.pageList.push(a);
      getApplyDate(params)
        .then(response => {
          console.log(response.data);

          this.tableDataseed_warehouse_ = response.data.list;
          this.SeedRoleTotal = response.data.total;
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
    getPesticideDate() {
      const params = {
        pesticideName: this.pesticideForm.pesticideName,
        state: this.pesticideForm.state,
        applyNum: this.pesticideForm.applyNum,
        type: 4,
        pageList: []
      };
      const pageList = [];
      const a = {
        offset: this.pesticideList.offset,
        limit: this.pesticideList.limit,
        account: sessionStorage.getItem("account")
      };
      params.pageList.push(a);
      getApplyDate(params)
        .then(response => {
          console.log(response.data);
          this.tableDatapesticide_warehouse_ = response.data.list;
          this.PesticideRoleTotal = response.data.total;
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
    getToolsDate() {
      const params = {
        type: 2,
        toolsName: this.toolsForm.toolsName,
        state: this.toolsForm.state,
        applyNum: this.toolsForm.applyNum,
        pageList: []
      };
      const pageList = [];
      const a = {
        offset: this.toolsList.offset,
        limit: this.toolsList.limit,
        account: sessionStorage.getItem("account")
      };
      params.pageList.push(a);
      getApplyDate(params)
        .then(response => {
          console.log(response.data);
          this.tableDatatools_warehouse_ = response.data.list;
          this.ToolsRoleTotal = response.data.total;
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
    onSubmitseedsForm() {
      this.loading = true;
      this.getSeedDate();
    },
    onSubmittoolsForm() {
      this.loading = true;
      this.getToolsDate();
    },
    onSubmitfertilizerForm() {
      this.loading = true;
      this.getFertilizerDate();
    },
    onSubmitpesticideForm() {
      this.loading = true;
      this.getPesticideDate();
    },
    noApply(index, row,type) {
      row.state = 4;
      row.pageList=[];
      row.pageList.push({account: sessionStorage.getItem("account")});
      console.log(row);
      changeApplyState(row)
        .then(response => {
          console.log(response.data);
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
      this.getDate();
    },
    okApply(index,row,type) {
      row.state = 2;
      row.pageList=[];
      row.pageList.push({account: sessionStorage.getItem("account")});
      console.log(row);
      changeApplyState(row)
        .then(response => {
          console.log(response.data);
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
      this.getDate();
    },
    nonoApply(index,row,type) {
      row.state = 3;
            row.pageList=[];
      row.pageList.push({account: sessionStorage.getItem("account")});
      changeApplyState(row)
        .then(response => {
          console.log(response.data);
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
      this.getDate();
    }
  }
};
</script>
