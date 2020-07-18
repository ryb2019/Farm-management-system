

<template>
  <el-row v-loading="loading">
    <div class="container">
      <el-row>
        <el-tabs type="border-card">
          <el-tab-pane label="种子仓库">
            <el-row style="margin-bottom:20px">
              <el-form :model="seedsForm" label-width="100px" ref="seedsForm">
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="植物名称" prop="plantName" class="col-1">
                      <el-input
                        v-model="seedsForm.plantName"
                        placeholder="请输入植物名称"
                        style="width: 100%"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="植物编号" prop="plantNo" class="col-2">
                      <el-input v-model="seedsForm.plantNo" placeholder="请输入植物编号"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="种子名称" prop="seedName" class="col-3">
                      <el-input v-model="seedsForm.seedName" placeholder="请输入种子名称"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="种子价格" prop="seedPrice" class="col-1">
                      <el-input v-model="seedsForm.seedPrice" placeholder="请输入种子价格"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="种植月份" prop="plantMonth" class="col-1">
                      <el-input v-model="seedsForm.plantMonth" placeholder="请输入种植月份"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="种子生产商" prop="seedProducers" class="col-2">
                      <el-input v-model="seedsForm.seedProducers" placeholder="请输入种子生产商"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="6" :offset="18">
                    <el-button
                      type="success"
                      v-if="showLoading==='root'"
                      @click="doAddSeed()"
                      size="mini"
                    >添加</el-button>
                    <el-button
                      type="success"
                      v-if="showLoading!='root'"
                      @click="doApplySeed()"
                      size="mini"
                    >申请</el-button>
                    <el-button type="primary" @click="reset('seedsForm')" size="mini">重置</el-button>
                    <el-button type="primary" @click="onSubmitseedsForm()" size="mini">查询</el-button>
                  </el-col>
                </el-row>
              </el-form>
            </el-row>

            <template>
              <el-row>
                <el-table :data="tableDataseed_warehouse_" style="width:100%">
                  <el-table-column fixed prop="seedName" label="种子名称" width="200"></el-table-column>
                  <el-table-column
                    prop="qermination"
                    label="发芽方式"
                    width="250"
                    :show-overflow-tooltip="true"
                  ></el-table-column>
                  <el-table-column prop="seedPrice" label="种子价格" width="250"></el-table-column>
                  <el-table-column prop="seedNum" label="种子数量" width="250"></el-table-column>
                  <el-table-column prop="seedProducers" label="种子生产商" width="250"></el-table-column>
                  <el-table-column prop="seedProducersPhone" label="生产商电话" width="250"></el-table-column>

                  <el-table-column fixed="right" label="操作" width="200">
                    <template slot-scope="scope">
                      <el-button
                        size="mini"
                        type="primary"
                        @click="SeeSeed(scope.$index, scope.row)"
                      >详情</el-button>
                      <el-button
                        size="mini"
                        type="success"
                        v-if="showLoading==='root'"
                        @click="doAddSeed(scope.$index, scope.row)"
                      >修改</el-button>
                      <el-button
                        size="mini"
                        type="success"
                        v-if="showLoading!='root'"
                        @click="doApplySeed(scope.$index, scope.row)"
                      >申请</el-button>
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

          <el-tab-pane label="农具仓库">
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
                    <el-form-item label="农具数量" prop="toolsNum" class="col-2">
                      <el-input v-model="toolsForm.toolsNum" placeholder="请输入农具数量"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="使用方式" prop="toolsUse" class="col-3">
                      <el-input v-model="toolsForm.toolsUse" placeholder="请输入使用方式"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="农具品牌" prop="toolsBrand" class="col-1">
                      <el-input v-model="toolsForm.toolsBrand" placeholder="请输入农具品牌"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="农具价格" prop="toolsPrice" class="col-1">
                      <el-input v-model="toolsForm.toolsPrice" placeholder="请输入农具价格"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="农具生产商" prop="toolsProducers" class="col-3">
                      <el-input v-model="toolsForm.toolsProducers" placeholder="请输入农具生产商"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="6" :offset="18">
                    <el-button
                      type="success"
                      v-if="showLoading==='root'"
                      @click="doAddTools()"
                      size="mini"
                    >添加</el-button>
                    <el-button
                      type="success"
                      v-if="showLoading!='root'"
                      @click="doApplyTools()"
                      size="mini"
                    >申请</el-button>
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
                    <el-table-column fixed prop="toolsName" label="农具名称" width="100"></el-table-column>
                    <el-table-column
                      prop="toolsUse"
                      label="使用方式"
                      width="250"
                      :show-overflow-tooltip="true"
                    ></el-table-column>
                    <el-table-column prop="toolsPrice" label="农具价格" width="250"></el-table-column>
                    <el-table-column prop="toolsNum" label="农具数量" width="250"></el-table-column>
                    <el-table-column prop="toolsBrand" label="农具品牌" width="250"></el-table-column>
                    <el-table-column prop="toolsProducers" label="农具生产商" width="250"></el-table-column>

                    <el-table-column fixed="right" label="操作" width="200">
                      <template slot-scope="scope">
                        <el-button
                          size="mini"
                          type="primary"
                          @click="SeeTools(scope.$index, scope.row)"
                        >详情</el-button>

                        <el-button
                          size="mini"
                          type="success"
                          v-if="showLoading==='root'"
                          @click="doAddTools(scope.$index, scope.row)"
                        >修改</el-button>
                        <el-button
                          size="mini"
                          type="success"
                          v-if="showLoading!='root'"
                          @click="doApplyTools(scope.$index, scope.row)"
                        >申请</el-button>
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
          <el-tab-pane label="肥料仓库">
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
                    <el-form-item label="肥料成分" prop="composition" class="col-2">
                      <el-input v-model="fertilizerForm.composition" placeholder="请输入肥料成分"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="氮含量" prop="nitrogen" class="col-3">
                      <el-input v-model="fertilizerForm.nitrogen" placeholder="请输入种子名称"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="磷含量" prop="phosphorus" class="col-1">
                      <el-input v-model="fertilizerForm.phosphorus" placeholder="请输入种子价格"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="钾含量" prop="potassium" class="col-1">
                      <el-input v-model="fertilizerForm.potassium" placeholder="请输入钾含量"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="肥料生产商" prop="fertilizerProducers" class="col-2">
                      <el-input v-model="fertilizerForm.fertilizerProducers" placeholder="请输入肥料生产商"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="6" :offset="18">
                    <el-button
                      type="success"
                      v-if="showLoading==='root'"
                      @click="doAddFertilizer()"
                      size="mini"
                    >添加</el-button>
                    <el-button
                      type="success"
                      v-if="showLoading!='root'"
                      @click="doApplyFertilizer()"
                      size="mini"
                    >申请</el-button>
                    <el-button type="primary" @click="reset('fertilizerForm')" size="mini">重置</el-button>
                    <el-button type="primary" @click="onSubmitfertilizerForm()" size="mini">查询</el-button>
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
                    <el-table-column fixed prop="fertilizerName" label="肥料名称" width="200"></el-table-column>

                    <el-table-column prop="fertilizerPrice" label="肥料价格" width="250"></el-table-column>
                    <el-table-column prop="fertilizerNum" label="肥料数量" width="250"></el-table-column>
                    <el-table-column
                      prop="composition"
                      label="主要成分"
                      width="250"
                      :show-overflow-tooltip="true"
                    ></el-table-column>
                    <el-table-column prop="nitrogen" label="氮含量" width="250"></el-table-column>
                    <el-table-column prop="phosphorus" label="磷含量" width="250"></el-table-column>
                    <el-table-column prop="potassium" label="钾含量" width="250"></el-table-column>
                    <el-table-column prop="fertilizerProducers" label="生产商名称" width="250"></el-table-column>
                    <el-table-column prop="fertilizerProducersPhone" label="生产商电话" width="250"></el-table-column>

                    <el-table-column fixed="right" label="操作" width="230">
                      <template slot-scope="scope">
                        <el-button
                          size="mini"
                          type="primary"
                          @click="SeeFertilizer(scope.$index, scope.row)"
                        >详情</el-button>
                        <el-button
                          size="mini"
                          type="success"
                          v-if="showLoading==='root'"
                          @click="doAddFertilizer(scope.$index, scope.row)"
                        >修改</el-button>
                        <el-button
                          size="mini"
                          type="success"
                          v-if="showLoading!='root'"
                          @click="doApplyFertilizer(scope.$index, scope.row)"
                        >申请</el-button>
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
          <el-tab-pane label="农药仓库">
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
                    <el-form-item label="主要成分" prop="composition" class="col-2">
                      <el-input v-model="pesticideForm.composition" placeholder="请输入主要成分"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="农药数量" prop="pesticideNum" class="col-3">
                      <el-input v-model="pesticideForm.pesticideNum" placeholder="请输入农药数量"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="农药价格" prop="pesticidePrice" class="col-1">
                      <el-input v-model="pesticideForm.pesticidePrice" placeholder="请输入农药价格"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="农药生产商" prop="pesticideProducers" class="col-1">
                      <el-input v-model="pesticideForm.pesticideProducers" placeholder="请输入农药生产商"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="农药功效" prop="efficacy" class="col-2">
                      <el-input v-model="pesticideForm.efficacy" placeholder="请输入农药功效"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="6" :offset="18">
                    <el-button
                      type="success"
                      v-if="showLoading==='root'"
                      @click="doAddPesticide()"
                      size="mini"
                    >添加</el-button>
                    <el-button
                      type="success"
                      v-if="showLoading!='root'"
                      @click="doApplyPesticide()"
                      size="mini"
                    >申请</el-button>
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
                    <el-table-column fixed prop="pesticideName" label="农药名称" width="200"></el-table-column>

                    <el-table-column prop="pesticidePrice" label="农药价格" width="250"></el-table-column>
                    <el-table-column prop="pesticideNum" label="农药数量" width="250"></el-table-column>
                    <el-table-column
                      prop="composition"
                      label="主要成分"
                      width="250"
                      :show-overflow-tooltip="true"
                    ></el-table-column>
                    <el-table-column
                      prop="efficacy"
                      label="主要作用"
                      width="250"
                      :show-overflow-tooltip="true"
                    ></el-table-column>
                    <el-table-column prop="proportion" label="用药比例" width="250"></el-table-column>
                    <el-table-column prop="pesticideProducers" label="生产商名称" width="250"></el-table-column>
                    <el-table-column prop="pesticideProducersPhone" label="生产商电话" width="250"></el-table-column>

                    <el-table-column fixed="right" label="操作" width="230">
                      <template slot-scope="scope">
                        <el-button
                          size="mini"
                          type="primary"
                          @click="SeePesticide(scope.$index, scope.row)"
                        >详情</el-button>
                        <el-button
                          size="mini"
                          type="success"
                          v-if="showLoading==='root'"
                          @click="doAddPesticide(scope.$index, scope.row)"
                        >修改</el-button>
                        <el-button
                          size="mini"
                          type="success"
                          v-if="showLoading!='root'"
                          @click="doApplyPesticide(scope.$index, scope.row)"
                        >申请</el-button>
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

      <el-dialog
        :title="titleName"
        :visible.sync="seedDialogFormVisible"
        :before-close="ApplySeedNo"
      >
        <el-form :model="ApplySeed">
          <el-form-item :label="titleLabel" label-width="100px" v-if="ApplySeed.type===1">
            <el-select
              v-model="ApplySeed.seedName"
              v-if="!readonlySeed"
              filterable
              placeholder="请选择"
              style="width:100%"
            >
              <el-option
                v-for="item in seedd"
                :key="item.id"
                :label="item.seedName"
                :value="item.id"
              ></el-option>
            </el-select>
            <el-input v-model="ApplySeed.seedName" v-if="readonlySeed"></el-input>
          </el-form-item>
          <el-form-item :label="titleLabel" label-width="100px" v-if="ApplySeed.type===2">
            <el-select
              v-model="ApplySeed.seedName"
              v-if="!readonlySeed"
              filterable
              placeholder="请选择"
              style="width:100%"
            >
              <el-option
                v-for="item in Toolss"
                :key="item.id"
                :label="item.toolsName"
                :value="item.id"
              ></el-option>
            </el-select>
            <el-input v-model="ApplySeed.seedName" v-if="readonlySeed"></el-input>
          </el-form-item>

          <el-form-item :label="titleLabel" label-width="100px" v-if="ApplySeed.type===3">
            <el-select
              v-model="ApplySeed.seedName"
              v-if="!readonlySeed"
              filterable
              placeholder="请选择"
              style="width:100%"
            >
              <el-option
                v-for="item in Fertilizerr"
                :key="item.id"
                :label="item.fertilizerName"
                :value="item.id"
              ></el-option>
            </el-select>
            <el-input v-model="ApplySeed.seedName" v-if="readonlySeed"></el-input>
          </el-form-item>
          <el-form-item :label="titleLabel" label-width="100px" v-if="ApplySeed.type===4">
            <el-select
              v-model="ApplySeed.seedName"
              v-if="!readonlySeed"
              filterable
              placeholder="请选择"
              style="width:100%"
            >
              <el-option
                v-for="item in Pesticidee"
                :key="item.id"
                :label="item.pesticideName"
                :value="item.id"
              ></el-option>
            </el-select>
            <el-input v-model="ApplySeed.seedName" v-if="readonlySeed"></el-input>
          </el-form-item>
          <el-form-item label="申请数量" label-width="100px">
            <el-input v-model="ApplySeed.applyNum"></el-input>
          </el-form-item>
          <el-form-item label="备注信息" label-width="100px">
            <el-input v-model="ApplySeed.applyNote"></el-input>
          </el-form-item>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="ApplySeedNo">取 消</el-button>
          <el-button type="primary" @click="ApplySeedOk">确 定</el-button>
        </div>
      </el-dialog>

      <!-- ================================添加种子================================== -->
      <el-dialog title="添加种子" :visible.sync="dialogSeed" width="80%">
        <el-form :model="seedDialogForm" :rules="seedDialogFormRules" ref="seedDialogForm">
          <el-row>
            <el-col :span="10" :offset="1">
              <el-form-item label="植物名称:" prop="plantId" label-width="100px">
                <el-select
                  v-model="seedDialogForm.plantId"
                  filterable
                  placeholder="请输入植物名称"
                  style="width:100%"
                >
                  <el-option
                    v-for="item in plantListZong"
                    :key="item.id"
                    :label="item.plantName"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="10" :offset="2">
              <el-form-item label="种子名称:" prop="seedName" label-width="100px">
                <el-input v-model="seedDialogForm.seedName" placeholder="请输入种子名称"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="10" :offset="1">
              <el-form-item label="种子数量:" prop="seedNum" label-width="100px">
                <el-input v-model="seedDialogForm.seedNum" placeholder="请输入种子数量"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10" :offset="2">
              <el-form-item label="种子发芽方式:" prop="qermination" label-width="100px">
                <el-input v-model="seedDialogForm.qermination" placeholder="请输入种子发芽方式"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="10" :offset="1">
              <el-form-item label="种子价格:" prop="seedPrice" label-width="100px">
                <el-input v-model="seedDialogForm.seedPrice" placeholder="请输入种子价格"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10" :offset="2">
              <el-form-item label="种子生产商:" prop="seedProducers" label-width="100px">
                <el-input v-model="seedDialogForm.seedProducers" placeholder="请输入种子生产商"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10" :offset="1">
              <el-form-item label="生产商电话:" prop="seedProducersPhone" label-width="100px">
                <el-input v-model="seedDialogForm.seedProducersPhone" placeholder="请输入生产商电话"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogSeed = false">取 消</el-button>
          <el-button type="primary" @click="doSeedForm">确 定</el-button>
        </div>
      </el-dialog>
      <!-- ================================添加肥料================================== -->
      <el-dialog title="添加肥料" :visible.sync="dialogFertilizer" width="80%">
        <el-form
          :model="fertilizerDialogForm"
          :rules="fertilizerDialogFormRules"
          ref="fertilizerDialogForm"
        >
          <el-row>
            <el-col :span="10" :offset="1">
              <el-form-item label="肥料名称:" prop="fertilizerId" label-width="100px">
                <el-select
                  v-model="fertilizerDialogForm.fertilizerId"
                  filterable
                  placeholder="请输入肥料名称"
                  style="width:100%"
                >
                  <el-option
                    v-for="item in fertilizerListZong"
                    :key="item.id"
                    :label="item.fertilizerName"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="10" :offset="2">
              <el-form-item label="肥料数量:" prop="fertilizerNum" label-width="100px">
                <el-input v-model="fertilizerDialogForm.fertilizerNum" placeholder="请输入肥料数量"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="10" :offset="1">
              <el-form-item label="厂家名称:" prop="fertilizerProducers" label-width="100px">
                <el-input v-model="fertilizerDialogForm.fertilizerProducers" placeholder="请输入厂家名称"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10" :offset="2">
              <el-form-item label="厂家电话:" prop="fertilizerProducersPhone" label-width="100px">
                <el-input
                  v-model="fertilizerDialogForm.fertilizerProducersPhone"
                  placeholder="请输入厂家电话"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="10" :offset="1">
              <el-form-item label="肥料价格:" prop="fertilizerPrice" label-width="100px">
                <el-input v-model="fertilizerDialogForm.fertilizerPrice" placeholder="请输入肥料价格"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFertilizer = false">取 消</el-button>
          <el-button type="primary" @click="doFertilizerForm">确 定</el-button>
        </div>
      </el-dialog>
      <!-- ================================添加农药================================== -->
      <el-dialog title="添加农药" :visible.sync="dialogPesticide" width="80%">
        <el-form
          :model="pesticideDialogForm"
          :rules="pesticideDialogFormRules"
          ref="pesticideDialogForm"
        >
          <el-row>
            <el-col :span="10" :offset="1">
              <el-form-item label="农药名称:" prop="pesticideId" label-width="100px">
                <el-select
                  v-model="pesticideDialogForm.pesticideId"
                  filterable
                  placeholder="请输入农药名称"
                  style="width:100%"
                >
                  <el-option
                    v-for="item in pesticideListZong"
                    :key="item.id"
                    :label="item.pesticideName"
                    :value="item.id"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="10" :offset="2">
              <el-form-item label="农药数量:" prop="pesticideNum" label-width="100px">
                <el-input v-model="pesticideDialogForm.pesticideNum" placeholder="请输入肥料数量"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="10" :offset="1">
              <el-form-item label="厂家名称:" prop="pesticideProducers" label-width="100px">
                <el-input v-model="pesticideDialogForm.pesticideProducers" placeholder="请输入厂家名称"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10" :offset="2">
              <el-form-item label="厂家电话:" prop="pesticideProducersPhone" label-width="100px">
                <el-input
                  v-model="pesticideDialogForm.pesticideProducersPhone"
                  placeholder="请输入厂家电话"
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="10" :offset="1">
              <el-form-item label="农药价格:" prop="pesticidePrice" label-width="100px">
                <el-input v-model="pesticideDialogForm.pesticidePrice" placeholder="请输入肥料价格"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogPesticide = false">取 消</el-button>
          <el-button type="primary" @click="doPesticideForm">确 定</el-button>
        </div>
      </el-dialog>
      <!-- =========================================添加农具======================================================= -->
      <el-dialog title="添加农具信息" :visible.sync="dialogTools" width="80%">
        <el-form :model="toolsDialogForm" :rules="toolsDialogFormRules" ref="toolsDialogForm">
          <el-row>
            <el-col :span="10" :offset="1">
              <el-form-item label="农具名称:" prop="toolsName" label-width="100px">
                <el-input v-model="toolsDialogForm.toolsName" placeholder="请输入农具名称"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10" :offset="2">
              <el-form-item label="使用方式:" prop="toolsUse" label-width="100px">
                <el-input v-model="toolsDialogForm.toolsUse" placeholder="请输入使用方式"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="10" :offset="1" label="农具品牌:" prop="toolsBrand" label-width="100px">
              <el-form-item label="农具品牌:" prop="toolsBrand" label-width="100px">
                <el-input v-model="toolsDialogForm.toolsBrand" placeholder="请输入农具品牌"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10" :offset="2">
              <el-form-item label="农具生产商:" prop="toolsProducers" label-width="100px">
                <el-input v-model="toolsDialogForm.toolsProducers" placeholder="请输入农具生产商"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col
              :span="10"
              :offset="1"
            >
              <el-form-item label="生产商电话:" prop="toolsProducersPhone" label-width="100px">
                <el-input v-model="toolsDialogForm.toolsProducersPhone" placeholder="请输入生产商电话"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10" :offset="2">
              <el-form-item label="农具价格:" prop="toolsPrice" label-width="100px">
                <el-input v-model="toolsDialogForm.toolsPrice" placeholder="请输入农具价格"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
                  <el-row>
            <el-col
              :span="10"
              :offset="1"
            >
              <el-form-item label="农具数量:" prop="toolsNum" label-width="100px">
                <el-input v-model="toolsDialogForm.toolsNum" placeholder="请输入农具数量"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogTools = false">取 消</el-button>
          <el-button type="primary" @click="doToolsForm">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </el-row>
</template>

<script>
import { mapGetters } from "vuex";
import {
  getFertilizerWarehouse,
  getSeedWarehouse,
  getPesticideWarehouse,
  getToolsWarehouse,
  setApplyDate,
  getSeed,
  getFertilizer,
  getPesticide,
  getTools,
  getPlantDates,
  getPesticideDates,
  getFertilizerDates,
  insertToolsWarehouseData,
  insertSeedWarehouseData,
  insertPesticideWarehouseData,
  insertFertilizerWarehouseData,
  updateToolsWarehouseData,
  updateSeedWarehouseData,
  updatePesticideWarehouseData,
  updateFertilizerWarehouseData
} from "@/api/warehouseManagement";
import Qs from "qs";
export default {
  name: "warehouse-management",

  data() {
    return {
      titleName: "",
      titleLabel: "",
      // 用来获取主仓库信息
      Toolss: [],
      Pesticidee: [],
      seedd: [],
      Fertilizerr: [],
      // options: [],
      // list: [],
      ApplySeed: {
        seedName: "",
        applyNum: "",
        applyNote: "",
        warehouseId: "",
        rootId: "",
        type: "",
        pageList: [
          {
            account: sessionStorage.getItem("account")
          }
        ]
      },
      readonlySeed: false,
      readonlyFertilizer: false,
      readonlyTools: false,
      readonlyPesticide: false,
      seedDialogFormVisible: false,
      fertilizerDialogFormVisible: false,
      toolsDialogFormVisible: false,
      pesticideDialogFormVisible: false,
      loading: false,
      seedsForm: {
        plantName: "",
        plantNo: "",
        seedName: "",
        seedPrice: "",
        plantMonth: "",
        seedProducers: ""
      },
      fertilizerForm: {
        fertilizerName: "",
        composition: "",
        nitrogen: "",
        phosphorus: "",
        potassium: "",
        fertilizerProducers: ""
      },
      toolsForm: {
        toolsName: "",
        toolsNum: "",
        toolsUse: "",
        toolsBrand: "",
        toolsPrice: "",
        toolsProducers: ""
      },
      pesticideForm: {
        pesticideName: "",
        composition: "",
        pesticideNum: "",
        pesticidePrice: "",
        pesticideProducers: "",
        efficacy: ""
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
      tableDatapesticide_warehouse_: [],
      fertilizerListZong: [],
      plantListZong: [],
      pesticideListZong: [],
      // 表单状态
      dialogSeed: false,
      dialogFertilizer: false,
      dialogPesticide: false,
      dialogTools: false,
      dialogSeedRow: false,
      dialogFertilizerRow: false,
      dialogPesticideRow: false,
      dialogToolsRow: false,
      // 植物表单添加
      seedDialogForm: {
        id: "",
        seedName: "",
        seedNum: "",
        plantId: "",
        qermination: "",
        seedProducers: "",
        seedProducersPhone: "",
        seedPrice: ""
      },
      toolsDialogForm: {
        id: "",
        toolsName: "",
        toolsUse: "",
        toolsBrand: "",
        toolsProducers: "",
        toolsProducersPhone: "",
        toolsPrice: "",
        toolsNum:"",
      },
      fertilizerDialogForm: {
        id: "",
        fertilizerId: "",
        fertilizerNum: "",
        fertilizerProducers: "",
        fertilizerProducersPhonee: "",
        fertilizerPrice: ""
      },
      pesticideDialogForm: {
        id: "",
        pesticideId: "",
        pesticideNum: "",
        pesticideProducers: "",
        pesticideProducersPhonee: "",
        pesticidePrice: ""
      },
      seedDialogFormRules: {},
      toolsDialogFormRules: {},
      fertilizerDialogFormRules: {},
      pesticideDialogFormRules: {}
    };
  },
  computed: {
    ...mapGetters(["showLoading"])
  },
  created: function() {
    this.getDate();
  },

  methods: {
    // 申请表方法
    doApplySeed(intdex, row) {
      this.titleName = "种子申请单";
      this.titleLabel = "种子名称";
      this.ApplySeed.type = 1;
      if (row != null) {
        this.ApplySeed.seedName = row.seedName;
        this.ApplySeed.warehouseId = row.id;
        this.ApplySeed.rootId = row.rootId;
        this.readonlySeed = true;
      }
      this.seedDialogFormVisible = true;
    },

    doApplyTools(intdex, row) {
      this.titleName = "农具申请单";
      this.titleLabel = "农具名称";
      this.ApplySeed.type = 2;
      if (row != null) {
        this.ApplySeed.seedName = row.toolsName;
        this.ApplySeed.warehouseId = row.id;
        this.ApplySeed.rootId = row.rootId;
        this.readonlySeed = true;
      }
      this.seedDialogFormVisible = true;
    },

    doApplyFertilizer(intdex, row) {
      this.titleName = "肥料申请单";
      this.titleLabel = "肥料名称";
      this.ApplySeed.type = 3;
      if (row != null) {
        this.ApplySeed.seedName = row.fertilizerName;
        this.ApplySeed.warehouseId = row.id;
        this.ApplySeed.rootId = row.rootId;
        this.readonlySeed = true;
      }
      this.seedDialogFormVisible = true;
    },

    doApplyPesticide(intdex, row) {
      console.log("农药");
      this.titleName = "农药申请单";
      this.titleLabel = "农药名称";
      this.ApplySeed.type = 4;
      if (row != null) {
        this.ApplySeed.seedName = row.pesticideName;
        this.ApplySeed.warehouseId = row.id;
        this.ApplySeed.rootId = row.rootId;
        this.readonlySeed = true;
      }
      this.seedDialogFormVisible = true;
    },
    diyReset() {
      (this.ApplySeed.seedName = ""),
        (this.ApplySeed.applyNum = ""),
        (this.ApplySeed.applyNote = ""),
        (this.ApplySeed.warehouseId = ""),
        (this.ApplySeed.rootId = "");
      this.ApplySeed.type = "";
    },
    ApplySeedNo() {
      this.diyReset();
      this.seedDialogFormVisible = false;
      this.readonlySeed = false;
    },
    ApplySeedOk() {
      if (!this.readonlySeed) {
        this.ApplySeed.rootId = this.ApplySeed.seedName;
      }
      console.log(this.ApplySeed);
      setApplyDate(this.ApplySeed)
        .then(response => {
          this.diyReset();
          this.loading = false;
          this.readonlySeed = false;
        })
        .catch(error => {
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
          this.loading = false;
        });

      this.seedDialogFormVisible = false;
    },

    getDate() {
      this.getFertilizerDatess();
      this.getPlantDatess();
      this.getPesticideDatess();
      // this.getToolsDate();
      // this.getDiseaseDate();
      this.getFertilizerDate();
      this.getSeedDate();
      this.getPesticideDate();
      this.getToolsDate();
      this.getseedd();
      this.getFertilizerr();
      this.getPesticidee();
      this.getToolss();
    },
    getseedd() {
      getSeed()
        .then(response => {
          this.seedd = response.data;
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
    getFertilizerr() {
      getFertilizer()
        .then(response => {
          this.Fertilizerr = response.data;
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
    getPesticidee() {
      getPesticide()
        .then(response => {
          this.Pesticidee = response.data;
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

    getToolss() {
      getTools()
        .then(response => {
          this.Toolss = response.data;
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
    getFertilizerDate() {
      const params = {
        fertilizerName: this.fertilizerForm.fertilizerName,
        composition: this.fertilizerForm.composition,
        nitrogen: this.fertilizerForm.nitrogen,
        phosphorus: this.fertilizerForm.phosphorus,
        potassium: this.fertilizerForm.potassium,
        fertilizerProducers: this.fertilizerForm.fertilizerProducers,
        pageList: []
      };
      const pageList = [];
      const a = {
        offset: this.fertilizerList.offset,
        limit: this.fertilizerList.limit,
        account: sessionStorage.getItem("account")
      };
      params.pageList.push(a);
      getFertilizerWarehouse(params)
        .then(response => {
          console.log(response.data);
          this.tableDatafertilizer_warehouse_ =
            response.data.FertilizerList.list;
          this.FerRoleTotal = response.data.FertilizerList.total;
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
        plantName: this.seedsForm.plantName,
        plantNo: this.seedsForm.plantNo,
        seedName: this.seedsForm.seedName,
        seedPrice: this.seedsForm.seedPrice,
        plantMonth: this.seedsForm.plantMonth,
        seedProducers: this.seedsForm.seedProducers,
        pageList: []
      };
      const pageList = [];
      const a = {
        offset: this.seedList.offset,
        limit: this.seedList.limit,
        account: sessionStorage.getItem("account")
      };
      params.pageList.push(a);
      getSeedWarehouse(params)
        .then(response => {
          console.log(response.data);

          this.tableDataseed_warehouse_ = response.data.SeedList.list;
          this.SeedRoleTotal = response.data.SeedList.total;
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
        composition: this.pesticideForm.composition,
        pesticideNum: this.pesticideForm.pesticideNum,
        pesticidePrice: this.pesticideForm.pesticidePrice,
        pesticideProducers: this.pesticideForm.pesticideProducers,
        efficacy: this.pesticideForm.efficacy,
        pageList: []
      };
      const pageList = [];
      const a = {
        offset: this.pesticideList.offset,
        limit: this.pesticideList.limit,
        account: sessionStorage.getItem("account")
      };
      params.pageList.push(a);
      getPesticideWarehouse(params)
        .then(response => {
          console.log(response.data);
          this.tableDatapesticide_warehouse_ = response.data.PesticideList.list;
          this.PesticideRoleTotal = response.data.PesticideList.total;
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
        toolsName: this.toolsForm.toolsName,
        toolsNum: this.toolsForm.toolsNum,
        toolsUse: this.toolsForm.toolsUse,
        toolsBrand: this.toolsForm.toolsBrand,
        toolsPrice: this.toolsForm.toolsPrice,
        toolsProducers: this.toolsForm.toolsProducers,
        pageList: []
      };
      const pageList = [];
      const a = {
        offset: this.toolsList.offset,
        limit: this.toolsList.limit,
        account: sessionStorage.getItem("account")
      };
      params.pageList.push(a);
      getToolsWarehouse(params)
        .then(response => {
          console.log(response.data);
          this.tableDatatools_warehouse_ = response.data.ToolsList.list;
          this.ToolsRoleTotal = response.data.ToolsList.total;
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

    reset(formName) {
      this.$refs[formName].resetFields();
      this.getDate();
    },

    handleCurrentChangeSeeds(val) {
      this.loading = true;
      this.seedList.offset = (val - 1) * this.seedList.limit;
      this.getToolsDate();
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
    SeeSeed(index, row) {
      this.$store.dispatch("setSeedLists", row);
      this.$router.push("/SeedDetails");
    },
    SeeTools(index, row) {
      this.$store.dispatch("setToolsLists", row);
      this.$router.push("/ToolsDetails");
    },
    SeePesticide(index, row) {
      this.$store.dispatch("setPesticideLists", row);
      this.$router.push("/PesticideDetails");
    },
    SeeFertilizer(index, row) {
      this.$store.dispatch("setFertilizerLisets", row);
      this.$router.push("/FertilizerDetails");
    },
    // 添加按钮方法
    doAddSeed(index, row) {
      console.log(row);
      this.dialogSeed = true;
      if (row != null) {
        this.dialogSeedRow = true;
        this.seedDialogForm = row;
      } else {
        this.dialogSeedRow = false;
        this.seedDialogForm = {
           id: "",
        seedName: "",
        seedNum: "",
        plantId: "",
        qermination: "",
        seedProducers: "",
        seedProducersPhone: "",
        seedPrice: ""
        };
      }
    },
    doAddFertilizer(index, row) {
      console.log(row);
      this.dialogFertilizer = true;
      if (row != null) {
        console.log("?>");
        this.dialogFertilizerRow = true;
        this.fertilizerDialogForm = row;
      } else {
        console.log("?<");
        this.dialogFertilizerRow = false;
        this.fertilizerDialogForm = {
          id: "",
          fertilizerId: "",
          fertilizerNum: "",
          fertilizerProducers: "",
          fertilizerProducersPhonee: "",
          fertilizerPrice: ""
        };
      }
    },
    doAddPesticide(index, row) {
      console.log(row);
      this.dialogPesticide = true;
      if (row != null) {
        this.dialogPesticideRow = true;
        this.pesticideDialogForm = row;
      } else {
        this.dialogPesticideRow = false;
        this.pesticideDialogForm = {
          id: "",
          pesticideId: "",
          pesticideNum: "",
          pesticideProducers: "",
          pesticideProducersPhonee: "",
          pesticidePrice: ""
        };
      }
    },

    doAddTools(index, row) {
      console.log(row);
      this.dialogTools = true;
      if (row != null) {
        this.dialogToolsRow = true;
        this.toolsDialogForm = row;
      } else {
        this.dialogToolsRow = false;
        this.toolsDialogForm = {
          id: "",
          toolsName: "",
          toolsUse: "",
          toolsBrand: "",
          toolsProducers: "",
          toolsProducersPhone: "",
          toolsPrice: "",
          toolsNum:"",
        };
      }
    },
    // 提交表单的方法
    doSeedForm() {
      this.loading = false;
      this.dialogSeed = false;
         if (this.dialogSeedRow) {
           console.log(this.seedDialogForm);
          updateSeedWarehouseData(this.seedDialogForm)
        .then(response => {
          console.log(response.data);
          if(response.data>0){
          this.$message({
            showClose: true,
            message: "修改成功了！",
            type: "success"
          });
          }else{
            this.$message({
            showClose: true,
            message: "失败了，请联系管理员",
            type: "error"
          });
          }
                this.getSeedDate();
this.$refs.seedDialogForm.resetFields(); 
        })
        .catch(error => {
      this.getSeedDate();
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
        });
      } else {
          insertSeedWarehouseData(this.seedDialogForm)
        .then(response => {
          console.log(response.data);
          if(response.data>0){
          this.$message({
            showClose: true,
            message: "提交成功了！",
            type: "success"
          });
          }else{
            this.$message({
            showClose: true,
            message: "失败了，请联系管理员",
            type: "error"
          });
          }
                          this.getSeedDate();
this.$refs.seedDialogForm.resetFields(); 
        })
        .catch(error => {
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
                this.getSeedDate();
        });
      }
    },
    doFertilizerForm() {
      this.loading = false;
      this.dialogFertilizer = false;
      if (this.dialogFertilizerRow) {
    updateFertilizerWarehouseData(this.fertilizerDialogForm)
        .then(response => {
          console.log(response.data);
          if(response.data>0){
          this.$message({
            showClose: true,
            message: "修改成功了！",
            type: "success"
          });
          }else{
            this.$message({
            showClose: true,
            message: "失败了，请联系管理员",
            type: "error"
          });
          }
                this.getFertilizerDate();
this.$refs.fertilizerDialogForm.resetFields(); 
        })
        .catch(error => {
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
                          this.getFertilizerDate();
        });
      } else {
           insertFertilizerWarehouseData(this.fertilizerDialogForm)
        .then(response => {
          console.log(response.data);
          if(response.data>0){
          this.$message({
            showClose: true,
            message: "提交成功了！",
            type: "success"
          });
          }else{
            this.$message({
            showClose: true,
            message: "失败了，请联系管理员",
            type: "error"
          });
          }
                          this.getFertilizerDate();
this.$refs.fertilizerDialogForm.resetFields(); 
        })
        .catch(error => {
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
                          this.getFertilizerDate();
        });
      }
    },
    doPesticideForm() {
      this.loading = false;
      this.dialogPesticide = false;
            if (this.dialogPesticideRow) {
              updatePesticideWarehouseData(this.pesticideDialogForm)
        .then(response => {
          console.log(response.data);
          if(response.data>0){
          this.$message({
            showClose: true,
            message: "修改成功了！",
            type: "success"
          });
          }else{
            this.$message({
            showClose: true,
            message: "失败了，请联系管理员",
            type: "error"
          });
          }
                this.getPesticideDate();
this.$refs.pesticideDialogForm.resetFields(); 
        })
        .catch(error => {
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
                this.getPesticideDate();
        });
      } else {
        insertPesticideWarehouseData(this.pesticideDialogForm)
        .then(response => {
          console.log(response.data);
          if(response.data>0){
          this.$message({
            showClose: true,
            message: "提交成功了！",
            type: "success"
          });
          }else{
            this.$message({
            showClose: true,
            message: "失败了，请联系管理员",
            type: "error"
          });
          }
                this.getPesticideDate();
this.$refs.pesticideDialogForm.resetFields(); 
        })
        .catch(error => {
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
                this.getPesticideDate();
        });
      }
    },
    doToolsForm() {
      this.loading = false;
      this.dialogTools = false;
            if (this.dialogToolsRow) {
      updateToolsWarehouseData(this.toolsDialogForm)
        .then(response => {
          console.log(response.data);
          if(response.data>0){
          this.$message({
            showClose: true,
            message: "修改成功了！",
            type: "success"
          });
          }else{
            this.$message({
            showClose: true,
            message: "失败了，请联系管理员",
            type: "error"
          });
          }
                this.getPesticideDate();
this.$refs.toolsDialogForm.resetFields(); 
        })
        .catch(error => {
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
                this.getPesticideDate();
        });
      } else {
     insertToolsWarehouseData(this.toolsDialogForm)
        .then(response => {
          console.log(response.data);
          if(response.data>0){
          this.$message({
            showClose: true,
            message: "提交成功了！",
            type: "success"
          });
          }else{
            this.$message({
            showClose: true,
            message: "失败了，请联系管理员",
            type: "error"
          });
          }
                this.getPesticideDate();
this.$refs.toolsDialogForm.resetFields(); 
        })
        .catch(error => {
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
                this.getPesticideDate();
        });
                   this.dialogTools = false;
                   this.loading=false;
      }
    },
    getFertilizerDatess() {
      const params = {};
      (params.pageList = [{}]),
        //   获取方法
        getFertilizerDates(params)
          .then(response => {
            console.log(response.data);
            this.fertilizerListZong = response.data.list;
            // this.ferRoleTotal = response.data.total;
          })
          .catch(error => {
            this.$message({
              showClose: true,
              message: error,
              type: "error"
            });
          });
      this.loading = false;
    },

    // 获取植物信息
    getPlantDatess() {
      const params = {};
      (params.pageList = [{}]),
        //   获取方法
        getPlantDates(params)
          .then(response => {
            console.log(response.data);
            console.log("?????????????????");
            this.plantListZong = response.data.PlantList.list;
            // this.plantRoleTotal = response.data.PlantList.total;
          })
          .catch(error => {
            this.$message({
              showClose: true,
              message: error,
              type: "error"
            });
          });
      this.loading = false;
    },
    // 获取农药信息
    getPesticideDatess() {
      const params = {};
      (params.pageList = [{}]),
        //   获取方法
        getPesticideDates(params)
          .then(response => {
            console.log(response.data);
            this.pesticideListZong = response.data.list;
            // this.pesticideRoleTotal = response.data.total;
          })
          .catch(error => {
            this.$message({
              showClose: true,
              message: error,
              type: "error"
            });
          });
      this.loading = false;
    },

    handleEdit(index, row) {
      console.log(row);
    }
  }
};
</script>
