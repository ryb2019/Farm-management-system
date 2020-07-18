

<template>
  <el-row v-loading="loading">
    <div class="container">
      <el-row>
        <el-tabs type="border-card">
          <el-tab-pane label="植物信息">
            <el-row style="margin-bottom:20px">
              <el-form :model="plantForm" label-width="100px" ref="plantForm">
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="植物名称：" prop="plantName" class="col-1">
                      <el-input
                        v-model="plantForm.plantName"
                        placeholder="请输入植物名称"
                        style="width: 100%"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="植物编号：" prop="plantNo" class="col-2">
                      <el-input v-model="plantForm.plantNo" placeholder="请输入植物编号"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="土壤喜性：" prop="soil" class="col-3">
                      <el-input v-model="plantForm.soil" placeholder="请输土壤喜性"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="光强喜性：" prop="light" class="col-1">
                      <el-input v-model="plantForm.light" placeholder="请输入光强喜性："></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="别名：" prop="alias" class="col-2">
                      <el-input v-model="plantForm.alias" placeholder="请输入别名"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="形态特征：" prop="shape" class="col-3">
                      <el-input v-model="plantForm.shape" placeholder="请输入形态特征："></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="6" :offset="18">
                    <el-button type="success" @click="doAddPlant()" size="mini">添加</el-button>
                    <el-button type="primary" @click="reset('plantForm')" size="mini">重置</el-button>
                    <el-button type="primary" @click="onSubmitPlantForm()" size="mini">查询</el-button>
                  </el-col>
                </el-row>
              </el-form>
            </el-row>

            <template>
              <el-row>
                <el-table :data="plantList" style="width:100%">
                  <el-table-column
                    fixed
                    prop="plantNo"
                    label="植物编号"
                    width="100"
                    :show-overflow-tooltip="true"
                  ></el-table-column>
                  <el-table-column
                    fixed
                    prop="plantName"
                    label="植物名称"
                    width="100"
                    :show-overflow-tooltip="true"
                  ></el-table-column>
                  <el-table-column
                    prop="plantNo"
                    label="发芽方式"
                    width="250"
                    :show-overflow-tooltip="true"
                  ></el-table-column>
                  <el-table-column
                    prop="plantMonth"
                    label="适宜种植月份"
                    width="150"
                    :show-overflow-tooltip="true"
                  ></el-table-column>
                  <el-table-column
                    prop="plantPrice"
                    label="植物价格"
                    width="100"
                    :show-overflow-tooltip="true"
                  ></el-table-column>
                  <!-- <el-table-column prop="reqion" label="种子生产商" width="250" :show-overflow-tooltip="true"></el-table-column> -->
                  <el-table-column
                    prop="soil"
                    label="土壤喜性"
                    width="100"
                    :show-overflow-tooltip="true"
                  ></el-table-column>
 <el-table-column
                    prop="yield"
                    label="亩产量"
                    width="100"
                    :show-overflow-tooltip="true"
                  ></el-table-column>
                  <el-table-column prop="light" label="光强喜性" width="100"></el-table-column>
                  <el-table-column prop="ph" label="酸碱度" width="100"></el-table-column>
                  <el-table-column
                    prop="shape"
                    label="形态特征"
                    width="400"
                    :show-overflow-tooltip="true"
                  ></el-table-column>
                  <el-table-column
                    prop="cycle"
                    label="生长周期"
                    width="250"
                    :show-overflow-tooltip="true"
                  ></el-table-column>
                  <el-table-column
                    prop="alias"
                    label="别名"
                    width="150"
                    :show-overflow-tooltip="true"
                  ></el-table-column>
                  <el-table-column fixed="right" label="操作" width="200">
                    <template slot-scope="scope">
                      <el-button
                        size="mini"
                        type="danger"
                        @click="SeeSeed(scope.$index, scope.row)"
                      >删除</el-button>

                      <el-button
                        size="mini"
                        type="primary"
                        @click="doApplySeed(scope.$index, scope.row)"
                      >修改</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-row>
              <el-row>
                <el-col :span="10" :offset="14">
                  <el-pagination
                    background
                    @current-change="handleCurrentChangePlant"
                    :current-page="1"
                    :page-size="10"
                    :pager-count="5"
                    layout="prev, pager, next"
                    :total="plantRoleTotal"
                  ></el-pagination>
                </el-col>
              </el-row>
            </template>
          </el-tab-pane>

          <el-tab-pane label="农具信息">
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
                    <el-button type="success" @click="doAddTools()" size="mini">添加</el-button>
                    <el-button type="primary" @click="reset('toolsForm')" size="mini">重置</el-button>
                    <el-button type="primary" @click="onSubmittoolsForm()" size="mini">查询</el-button>
                  </el-col>
                </el-row>
              </el-form>
            </el-row>
            <el-row>
              <template>
                <el-row>
                  <el-table :data="toolsList" style="width:100%" border>
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
                      :total="toolsRoleTotal"
                    ></el-pagination>
                  </el-col>
                </el-row>
              </template>
            </el-row>
          </el-tab-pane>

          <el-tab-pane label="肥料信息">
            <el-row style="margin-bottom:20px">
              <el-form :model="fertilizerForm" label-width="100px" ref="fertilizerForm">
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="肥料名称:" prop="fertilizerName" class="col-1">
                      <el-input
                        v-model="fertilizerForm.fertilizerName"
                        placeholder="请输入肥料名称"
                        style="width: 100%"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="肥料成分:" prop="composition" class="col-2">
                      <el-input v-model="fertilizerForm.composition" placeholder="请输入肥料成分"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="氮含量:" prop="nitrogen" class="col-3">
                      <el-input v-model="fertilizerForm.nitrogen" placeholder="请输入氮含量"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="磷含量:" prop="phosphorus" class="col-1">
                      <el-input v-model="fertilizerForm.phosphorus" placeholder="请输入磷含量"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="钾含量:" prop="potassium" class="col-1">
                      <el-input v-model="fertilizerForm.potassium" placeholder="请输入钾含量"></el-input>
                    </el-form-item>
                  </el-col>
                  <!-- <el-col :span="8">
                    <el-form-item label="肥料生产商" prop="fertilizerProducers" class="col-2">
                      <el-input v-model="fertilizerForm.fertilizerProducers" placeholder="请输入肥料生产商"></el-input>
                    </el-form-item>
                  </el-col>-->
                </el-row>
                <el-row>
                  <el-col :span="6" :offset="18">
                    <el-button type="success" @click="doAddFertilizer()" size="mini">添加</el-button>
                    <el-button type="primary" @click="reset('fertilizerForm')" size="mini">重置</el-button>
                    <el-button type="primary" @click="onSubmitfertilizerForm()" size="mini">查询</el-button>
                  </el-col>
                </el-row>
              </el-form>
            </el-row>
            <el-row>
              <template>
                <el-row>
                  <el-table :data="fertilizerList" style="width:100%" border max-height="600">
                    <el-table-column fixed prop="fertilizerName" label="肥料名称" width="200"></el-table-column>

                    <!-- <el-table-column prop="fertilizerPrice" label="肥料价格" width="250"></el-table-column> -->
                    <!-- <el-table-column prop="fertilizerNum" label="肥料数量" width="250"></el-table-column> -->
                    <el-table-column
                      prop="composition"
                      label="主要成分"
                      width="250"
                      :show-overflow-tooltip="true"
                    ></el-table-column>
                    <el-table-column prop="nitrogen" label="氮含量" width="250"></el-table-column>
                    <el-table-column prop="phosphorus" label="磷含量" width="250"></el-table-column>
                    <el-table-column prop="potassium" label="钾含量" width="250"></el-table-column>
                    <!-- <el-table-column prop="fertilizerProducers" label="生产商名称" width="250"></el-table-column>
                    <el-table-column prop="fertilizerProducersPhone" label="生产商电话" width="250"></el-table-column>-->

                    <el-table-column fixed="right" label="操作" width="230">
                      <template slot-scope="scope">
                        <el-button
                          size="mini"
                          type="danger"
                          @click="SeeFertilizer(scope.$index, scope.row)"
                        >删除</el-button>

                        <el-button
                          size="mini"
                          type="primary"
                          @click="doApplyFertilizer(scope.$index, scope.row)"
                        >修改</el-button>
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
                      :total="ferRoleTotal"
                    ></el-pagination>
                  </el-col>
                </el-row>
              </template>
            </el-row>
          </el-tab-pane>
          <!-- 农药信息 -->
          <el-tab-pane label="农药信息">
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
                    <el-form-item label="农药功效" prop="efficacy" class="col-3">
                      <el-input v-model="pesticideForm.efficacy" placeholder="请输入农药功效"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="6" :offset="18">
                    <el-button type="success" @click="doAddPesticide()" size="mini">添加</el-button>
                    <el-button type="primary" @click="reset('pesticideForm')" size="mini">重置</el-button>
                    <el-button type="primary" @click="onSubmitpesticideForm()" size="mini">查询</el-button>
                  </el-col>
                </el-row>
              </el-form>
            </el-row>
            <el-row>
              <template>
                <el-row>
                  <el-table :data="pesticideList" style="width:100%" border max-height="600">
                    <el-table-column fixed prop="pesticideName" label="农药名称" width="200"></el-table-column>

                    <!-- <el-table-column prop="pesticidePrice" label="农药价格" width="250"></el-table-column> -->
                    <!-- <el-table-column prop="pesticideNum" label="农药数量" width="250"></el-table-column> -->
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
                    <!-- <el-table-column prop="pesticideProducers" label="生产商名称" width="250"></el-table-column>
                    <el-table-column prop="pesticideProducersPhone" label="生产商电话" width="250"></el-table-column>-->

                    <el-table-column fixed="right" label="操作" width="230">
                      <template slot-scope="scope">
                        <el-button
                          size="mini"
                          type="danger"
                          @click="SeePesticide(scope.$index, scope.row)"
                        >删除</el-button>

                        <el-button
                          size="mini"
                          type="primary"
                          @click="doApplyPesticide(scope.$index, scope.row)"
                        >修改</el-button>
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
                      :total="pesticideRoleTotal"
                    ></el-pagination>
                  </el-col>
                </el-row>
              </template>
            </el-row>
          </el-tab-pane>

          <!-- =============================================================================================================== -->
          <!-- 病症信息 -->
          <el-tab-pane label="病症信息">
            <el-row style="margin-bottom:20px">
              <el-form :model="diseaseForm" label-width="100px" ref="diseaseForm">
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="病症名称" prop="diseasesName" class="col-1">
                      <el-input
                        v-model="diseaseForm.diseasesName"
                        placeholder="请输入病症名称"
                        style="width: 100%"
                      ></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="发病季节" prop="diseasesSea" class="col-2">
                      <el-input v-model="diseaseForm.diseasesSea" placeholder="请输入发病季节"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="叶面情况" prop="leafCondition" class="col-3">
                      <el-input v-model="diseaseForm.leafCondition" placeholder="请输入叶面情况"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="8">
                    <el-form-item label="枯焉情况" prop="wiltingCondition" class="col-1">
                      <el-input v-model="diseaseForm.wiltingCondition" placeholder="请输入枯焉情况"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="植物颜色" prop="plantColor" class="col-2">
                      <el-input v-model="diseaseForm.plantColor" placeholder="请输入植物颜色"></el-input>
                    </el-form-item>
                  </el-col>
                  <el-col :span="8">
                    <el-form-item label="基部颜色" prop="basisCondition" class="col-3">
                      <el-input v-model="diseaseForm.basisCondition" placeholder="请输入基部颜色"></el-input>
                    </el-form-item>
                  </el-col>
                </el-row>
                <el-row>
                  <el-col :span="6" :offset="18">
                    <el-button type="success" @click="doAddDisease()" size="mini">添加</el-button>
                    <el-button type="primary" @click="reset('diseaseForm')" size="mini">重置</el-button>
                    <el-button type="primary" @click="onSubmitDiseaseForm()" size="mini">查询</el-button>
                  </el-col>
                </el-row>
              </el-form>
            </el-row>
            <el-row>
              <template>
                <el-row>
                  <el-table :data="diseaseList" style="width:100%" border max-height="600">
                    <el-table-column
                      fixed
                      prop="diseasesName"
                      label="病症名称"
                      width="150"
                      :show-overflow-tooltip="true"
                    ></el-table-column>
                    <el-table-column
                      prop="diseasesSea"
                      label="患病季节"
                      width="100"
                      :show-overflow-tooltip="true"
                    ></el-table-column>
                    <el-table-column
                      prop="diseasePlantName"
                      label="常患植物"
                      width="100"
                      :show-overflow-tooltip="true"
                    ></el-table-column>
                    <el-table-column
                      prop="wiltingCondition"
                      label="萎蔫情况"
                      width="150"
                      :show-overflow-tooltip="true"
                    ></el-table-column>
                    <el-table-column
                      prop="leafCondition"
                      label="叶面情况"
                      width="150"
                      :show-overflow-tooltip="true"
                    ></el-table-column>
                    <el-table-column
                      prop="LeafEdgeCondition"
                      label="叶边情况"
                      width="150"
                      :show-overflow-tooltip="true"
                    ></el-table-column>
                    <el-table-column
                      prop="basisCondition"
                      label="基部情况"
                      width="150"
                      :show-overflow-tooltip="true"
                    ></el-table-column>
                    <el-table-column
                      prop="plantColor"
                      label="植株颜色"
                      width="100"
                      :show-overflow-tooltip="true"
                    ></el-table-column>
                    <el-table-column
                      prop="diseaseTypes"
                      label="病源种类"
                      width="100"
                      :show-overflow-tooltip="true"
                    ></el-table-column>
                    <el-table-column
                      prop="diseaseInf"
                      label="是否传染"
                      width="100"
                      :show-overflow-tooltip="true"
                    ></el-table-column>
                    <el-table-column
                      prop="plantShape"
                      label="植株形状"
                      width="150"
                      :show-overflow-tooltip="true"
                    ></el-table-column>
                    <el-table-column
                      prop="treatmentId"
                      label="治疗方法"
                      width="400"
                      :show-overflow-tooltip="true"
                    ></el-table-column>

                    <el-table-column fixed="right" label="操作" width="200">
                      <template slot-scope="scope">
                        <el-button
                          size="mini"
                          type="danger"
                          @click="SeePesticide(scope.$index, scope.row)"
                        >删除</el-button>

                        <el-button
                          size="mini"
                          type="primary"
                          @click="doApplyPesticide(scope.$index, scope.row)"
                        >修改</el-button>
                      </template>
                    </el-table-column>
                  </el-table>
                </el-row>
                <el-row>
                  <el-col :span="10" :offset="14">
                    <el-pagination
                      background
                      @current-change="handleCurrentChangeDisease"
                      :current-page="1"
                      :page-size="10"
                      :pager-count="5"
                      layout="prev, pager, next"
                      :total="diseaseRoleTotal"
                    ></el-pagination>
                  </el-col>
                </el-row>
              </template>
            </el-row>
          </el-tab-pane>
        </el-tabs>
      </el-row>

      <!--            ---------------------------------------------------------------------植物添加页面---------------------------------------------------------------------     -->
      <el-dialog title="添加植物信息" :visible.sync="dialogPlant" width="80%">
        <el-form :model="plantDialogForm" :rules="plantDialogFormRules" ref="plantDialogForm">
          <el-row>
            <el-col :span="10" :offset="1">
              <el-form-item label="植物名称:" prop="plantName" label-width="100px">
                <el-input v-model="plantDialogForm.plantName" placeholder="请输入植物名称"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10" :offset="2">
              <el-form-item label="植物编号:" prop="plantNo" label-width="100px">
                <el-input v-model="plantDialogForm.plantNo" placeholder="请输入植物编号"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="10" :offset="1">
              <el-form-item label="适宜种植月份:" prop="plantMonth" label-width="100px">
                <el-input v-model="plantDialogForm.plantMonth" placeholder="请输入适宜种植月份"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10" :offset="2">
              <el-form-item label="市场预计价格:" prop="plantPrice" label-width="100px">
                <el-input v-model="plantDialogForm.plantPrice" placeholder="请输入市场预计价格"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="10" :offset="1">
              <el-form-item label="土壤喜性:" prop="soil" label-width="100px">
                <el-input v-model="plantDialogForm.soil" placeholder="请输入土壤喜性"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10" :offset="2">
              <el-form-item label="光强喜性:" prop="light" label-width="100px">
                <el-input v-model="plantDialogForm.light" placeholder="请输入光强喜性"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="10" :offset="1">
              <el-form-item label="生长周期:" prop="cycle" label-width="100px">
                <el-input v-model="plantDialogForm.cycle" placeholder="请输入生长周期"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10" :offset="2">
              <el-form-item label="别名:" prop="alias" label-width="100px">
                <el-input v-model="plantDialogForm.alias" placeholder="请输入别名"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="10" :offset="1">
              <el-form-item label="适宜酸碱度:" prop="ph" label-width="100px">
                <el-input v-model="plantDialogForm.ph" placeholder="请输入适宜酸碱度"></el-input>
              </el-form-item>
            </el-col>
             <el-col :span="10" :offset="2">
              <el-form-item label="亩产量:" prop="yield" label-width="100px">
                <el-input v-model="plantDialogForm.yield" placeholder="请输入适宜酸碱度"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
          <el-row>
            <el-col :span="16" :offset="1">
              <el-form-item label="形态特征:" prop="shape" label-width="100px">
                <!-- <el-input v-model="plantDialogForm.shape" placeholder="请输入形态特征"></el-input> -->
                <el-input
                  type="textarea"
                  :autosize="{ minRows: 3, maxRows: 6}"
                  placeholder="请输入形态特征"
                  v-model="plantDialogForm.shape"
                  maxlength="255"
                  show-word-limit
                ></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogPlant = false">取 消</el-button>
          <el-button type="primary" @click="doPlantForm">确 定</el-button>
        </div>
      </el-dialog>
      <!--            ---------------------------------------------------------------------农具添加页面---------------------------------------------------------------------     -->
      <el-dialog title="添加农具信息" :visible.sync="dialogTools" width="80%">
        <el-form :model="toolsDialogForm" :rules="toolsDialogFormRules" ref="toolsDialogForm">
          <el-row>
            <el-col :span="10" :offset="1">
              <el-form-item label="农具名称:" prop="pesticideName" label-width="100px">
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
              label="生产商电话:"
              prop="toolsProducersPhone"
              label-width="100px"
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
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogTools = false">取 消</el-button>
          <el-button type="primary" @click="doToolsForm">确 定</el-button>
        </div>
      </el-dialog>
      <!--            ---------------------------------------------------------------------肥料添加页面---------------------------------------------------------------------     -->
      <el-dialog title="添加农具信息" :visible.sync="dialogFertilizer" width="80%">
        <el-form
          :model="fertilizerDialogForm"
          :rules="fertilizerDialogFormRules"
          ref="fertilizerDialogForm"
        >
          <el-row>
            <el-col :span="10" :offset="1" label="肥料名称:" prop="fertilizerName" label-width="100px">
              <el-form-item label="肥料名称:" prop="fertilizerName" label-width="100px">
                <el-input v-model="fertilizerDialogForm.fertilizerName" placeholder="请输入肥料名称"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10" :offset="2">
              <el-form-item label="主要成分:" prop="composition" label-width="100px">
                <el-input v-model="fertilizerDialogForm.composition" placeholder="请输入主要成分"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="10" :offset="1" label="氮含量:" prop="nitrogen" label-width="100px">
              <el-form-item label="氮含量:" prop="nitrogen" label-width="100px">
                <el-input v-model="fertilizerDialogForm.nitrogen" placeholder="请输入氮含量"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10" :offset="2">
              <el-form-item label="磷含量:" prop="phosphorus" label-width="100px">
                <el-input v-model="fertilizerDialogForm.phosphorus" placeholder="请输入磷含量"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="10" :offset="1">
              <el-form-item label="钾含量:" prop="potassium" label-width="100px">
                <el-input v-model="fertilizerDialogForm.potassium" placeholder="请输入钾含量"></el-input>
              </el-form-item>
            </el-col>
            <!-- <el-col :span="10" :offset="2">
            <el-form-item label="农具价格:" prop="toolsPrice" label-width="100px">
                <el-input v-model="toolsDialogForm.toolsPrice" placeholder="请输入农具价格"></el-input>
            </el-form-item>
            </el-col>-->
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogFertilizer = false">取 消</el-button>
          <el-button type="primary" @click="doFertilizerForm">确 定</el-button>
        </div>
      </el-dialog>
      <!--            ---------------------------------------------------------------------农药添加页面---------------------------------------------------------------------     -->
      <el-dialog title="添加农药信息" :visible.sync="dialogPesticide" width="80%">
        <el-form
          :model="pesticideDialogForm"
          :rules="pesticideDialogFormRules"
          ref="pesticideDialogForm"
        >
          <el-row>
            <el-col :span="10" :offset="1">
              <el-form-item label="农药名称:" prop="pesticideName" label-width="100px">
                <el-input v-model="pesticideDialogForm.pesticideName" placeholder="请输入农药名称"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10" :offset="2">
              <el-form-item label="主要成分:" prop="efficacy" label-width="100px">
                <el-input v-model="pesticideDialogForm.efficacy" placeholder="请输入主要成分"></el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-row>
            <el-col :span="10" :offset="1">
              <el-form-item label="主要功效:" prop="plantMonth" label-width="100px">
                <el-input v-model="pesticideDialogForm.plantMonth" placeholder="请输入适宜种植月份"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="10" :offset="2">
              <el-form-item label="推荐使用比例:" prop="proportion" label-width="100px">
                <el-input v-model="pesticideDialogForm.proportion" placeholder="请输入推荐使用比例"></el-input>
              </el-form-item>
            </el-col>
          </el-row>
        </el-form>
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogPesticide = false">取 消</el-button>
          <el-button type="primary" @click="doPesticideForm">确 定</el-button>
        </div>
      </el-dialog>

      <!--            ---------------------------------------------------------------------病症添加页面---------------------------------------------------------------------     -->
      <el-dialog title="添加农药信息" :visible.sync="dialogDisease" width="80%">
        <el-row>
          <el-form
            :model="diseaseDialogForm"
            :rules="diseaseDialogFormRules"
            ref="diseaseDialogForm"
          >
            <el-row>
              <el-col :span="10" :offset="1">
                <el-form-item label="病症名称:" prop="diseasesName" label-width="100px">
                  <el-input v-model="diseaseDialogForm.diseasesName" placeholder="请输入病症名称"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10" :offset="2">
                <el-form-item label="发布季节:" prop="diseasesSea" label-width="100px">
                  <el-input v-model="diseaseDialogForm.diseasesSea" placeholder="请输入发布季节"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10" :offset="1">
                <el-form-item label="植物名称:" prop="plantId" label-width="100px">
                       <el-select
                      v-model="diseaseDialogForm.plantId"
                      filterable
                      placeholder="请选择"
                      style="width:100%"
                    >
                      <el-option
                        v-for="item in plantList"
                        :key="item.id"
                        :label="item.plantName"
                        :value="item.id"
                      ></el-option>
                    </el-select>                </el-form-item>
              </el-col>
              <el-col :span="10" :offset="2">
                <el-form-item label="叶片情况:" prop="leafCondition" label-width="100px">
                  <el-input v-model="diseaseDialogForm.leafCondition" placeholder="请输入叶片情况"></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="10" :offset="1">
                <el-form-item label="萎焉情况:" prop="wiltingCondition" label-width="100px">
                  <el-input v-model="diseaseDialogForm.wiltingCondition" placeholder="请输入萎焉情况"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10" :offset="2">
                <el-form-item label="叶面边缘情况:" prop="leafEdgeCondition" label-width="100px">
                  <el-input v-model="diseaseDialogForm.leafEdgeCondition" placeholder="请输入叶面边缘情况"></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="10" :offset="1">
                <el-form-item label="基部情况:" prop="basisCondition" label-width="100px">
                  <el-input v-model="diseaseDialogForm.basisCondition" placeholder="请输入基部情况"></el-input>
                </el-form-item>
              </el-col>
              <el-col :span="10" :offset="2">
                <el-form-item label="植物颜色:" prop="plantColor" label-width="100px">
                  <el-input v-model="diseaseDialogForm.plantColor" placeholder="请输入植物颜色"></el-input>
                </el-form-item>
              </el-col>
            </el-row>

            <el-row>
              <el-col :span="10" :offset="1">
                <el-form-item label="病症类型:" prop="diseaseTypes" label-width="100px">
                  <el-input v-model="diseaseDialogForm.diseaseTypes" placeholder="请输入病症类型"></el-input>
                </el-form-item>
              </el-col>

              <el-col :span="10" :offset="2">
                <el-form-item label="植株形状:" prop="plantShape" label-width="100px">
                  <el-input v-model="diseaseDialogForm.plantShape" placeholder="请输入植株形状"></el-input>
                </el-form-item>
              </el-col>
            </el-row>
            <el-row>
              <el-col :span="10" :offset="1">
                <el-form-item label="是否会传染:" prop="diseaseInf" label-width="100px">
                  <el-select
                    v-model="diseaseDialogForm.diseaseInf"
                    placeholder="请选择活动区域"
                    style="width:100%"
                  >
                    <el-option label="否" value="0"></el-option>
                    <el-option label="是" value="1"></el-option>
                  </el-select>
                </el-form-item>
              </el-col>
              <el-col :span="10" :offset="2">
                <el-form-item label="治疗方法:" prop="treatmentId" label-width="100px">
                  <el-input
                    type="textarea"
                    :autosize="{ minRows: 3, maxRows: 6}"
                    placeholder="请输入治疗方法"
                    v-model="diseaseDialogForm.treatmentId"
                    maxlength="255"
                    show-word-limit
                  ></el-input>
                </el-form-item>
              </el-col>
            </el-row>
          </el-form>
        </el-row>
        <!-- ！！！！！！！！！！！！！ -->

        <el-row>
          <el-form :model="dynamicValidateForm" label-width="50px">
            <el-col :span="10" :offset="1">
              <el-row style="margin-bottom:16px;">
                  <h4>需要的肥料</h4>
              </el-row>
              <el-row v-for="(domain2, index) in dynamicValidateForm.domain2" :key="domain2.hrId">
               <el-col :span="11" :offset="1">
                  <el-form-item :label="'肥料' + (index+1)">
                    <el-select
                      v-model="domain2.typeId"
                      filterable
                      placeholder="请选择"
                      style="width:100%"
                    >
                      <el-option
                        v-for="item in fertilizerList"
                        :key="item.id"
                        :label="item.fertilizerName"
                        :value="item.id"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>

                <el-col :span="11">
                  <el-form-item :label="'数量'+ (index+1)">
                    <el-input v-model="domain2.userLv"></el-input>
                  </el-form-item>
                </el-col>
                 <el-col :span="18" :offset="1">  
                  <el-form-item :label="'说明'+ (index+1)">
                    <el-input v-model="domain2.instructions"></el-input>
                  </el-form-item>
                </el-col>
                <el-col :span="4" :offset="1">
                  <el-button @click.prevent="removeDomain2(domain2)" style="width:100%">删除</el-button>
                </el-col>
              </el-row>
              <el-row>
                <el-form-item>
                  <el-button @click="addDomain2" icon="el-icon-plus" circle style="font-size:15px"></el-button>
                </el-form-item>
              </el-row>
            </el-col>
            <el-col :span="10" :offset="2">
            <el-row style="margin-bottom:16px;">
                  <h4>需要的农药</h4>
              </el-row>

              <el-row v-for="(domain1, index) in dynamicValidateForm.domain1" :key="domain1.hrId">
                <el-col :span="11" :offset="1">
                  <el-form-item :label="'农药' + (index+1)">
                    <el-select
                      v-model="domain1.typeId"
                      filterable
                      placeholder="请选择"
                      style="width:100%"
                    >
                      <el-option
                        v-for="item in pesticideList"
                        :key="item.id"
                        :label="item.pesticideName"
                        :value="item.id"
                      ></el-option>
                    </el-select>
                  </el-form-item>
                </el-col>
               <el-col :span="11">
                  <el-form-item :label="'数量'+ (index+1)">
                    <el-input v-model="domain1.userLv"></el-input>
                  </el-form-item>
                </el-col>
                   <el-col :span="18" :offset="1">
                  <el-form-item :label="'说明'+ (index+1)">
                    <el-input v-model="domain1.instructions"></el-input>
                  </el-form-item>
                </el-col>
                  <el-col :span="4" :offset="1">
                  <el-button @click.prevent="removeDomain1(domain1)" style="width:100%">删除</el-button>
                </el-col>
              </el-row>
              <el-row>
                <el-form-item>
                  <el-button @click="addDomain1" icon="el-icon-plus" circle style="font-size:15px"></el-button>
                </el-form-item>
              </el-row>
            </el-col>
          </el-form>
        </el-row>
        <!-- ？？？？？？？？？？？？？ -->
        <div slot="footer" class="dialog-footer">
          <el-button @click="dialogDisease = false">取 消</el-button>
          <el-button type="primary" @click="doDiseaseForm">确 定</el-button>
        </div>
      </el-dialog>
    </div>
  </el-row>
</template>

<script>
import {
  getPlantDates,
  getPesticideDates,
  getFertilizerDates,
  getToolsDates,
  getDiseasesDates,
  insertPlantInfo,
  insertDiseasesInfo,
  insertEquipmentWarehouseData,
  insertFertilizerWarehouseData,
  insertPesticideWarehouseData,
  insertToolsWarehouseData,
  insertPesticideData,
  insertFertilizerData
} from "@/api/Wikipedia/wikipediaManagement";
import Qs from "qs";
export default {
  name: "wikipedia-management",

  data() {
    return {
      loading: false,
      // 动态表单
      dynamicValidateForm: {
        domain2: [],
        domain1: []
      },
      Pesticide: [],
      Fertilizer: [],
      // 分頁
      fertilizerFy: {
        offset: 0,
        limit: 10
      },
      plantFy: {
        offset: 0,
        limit: 10
      },
      toolsFy: {
        offset: 0,
        limit: 10
      },
      pesticideFy: {
        offset: 0,
        limit: 10
      },
      diseaseFy: {
        offset: 0,
        limit: 10
      },
      //   分页参数
      toolsRoleTotal: 0,
      pesticideRoleTotal: 0,
      plantRoleTotal: 0,
      ferRoleTotal: 0,
      diseaseRoleTotal: 0,
      // 用来获取信息
      toolsList: [],
      pesticideList: [],
      plantList: [],
      fertilizerList: [],
      diseaseList: [],
      //   搜索框
      plantForm: {
        plantName: "",
        plantNo: "",
        soil: "",
        light: "",
        alias: "",
        shape: ""
      },
      fertilizerForm: {
        fertilizerName: "",
        composition: "",
        nitrogen: "",
        phosphorus: "",
        potassium: ""
      },
      toolsForm: {
        toolsName: "",
        // toolsNum: "",
        toolsUse: "",
        toolsBrand: "",
        toolsPrice: "",
        toolsProducers: ""
      },
      pesticideForm: {
        pesticideName: "",
        composition: "",
        pesticideProducers: "",
        efficacy: ""
      },
      diseaseForm: {
        diseasesName: "",
        diseasesSea: "",
        leafCondition: "",
        wiltingCondition: "",
        plantColor: "",
        basisCondition: ""
      },
      // 动态表单
      dialogPlant: false,
      dialogTools: false,
      dialogPesticide: false,
      dialogFertilizer: false,
      dialogDisease: false,
      // 动态表单填写的内容
      plantDialogForm: {
        plantName: "",
        plantNo: "",
        plantMonth: "",
        plantPrice: "",
        soil: "",
        light: "",
        ph: "",
        shape: "",
        cycle: "",
        alias: "",
        yield:"",
      },
      toolsDialogForm: {
        toolsName: "",
        toolsUse: "",
        toolsBrand: "",
        toolsProducers: "",
        toolsProducersPhone: "",
        toolsPrice: ""
      },
      pesticideDialogForm: {
        pesticideName: "",
        composition: "",
        efficacy: "",
        proportion: ""
      },
      fertilizerDialogForm: {
        fertilizerName: "",
        composition: "",
        nitrogen: "",
        phosphorus: "",
        potassium: ""
      },
      diseaseDialogForm: {
        diseasesName: "",
        diseasesSea: "",
        plantId: "",
        leafCondition: "",
        wiltingCondition: "",
        leafEdgeCondition: "",
        basisCondition: "",
        plantColor: "",
        diseaseTypes: "",
        diseaseInf: "",
        plantShape: "",
        treatmentId: "",
        treatmentList: []
      },
    plantDialogFormRules: {
      },
      toolsDialogFormRules: {
      },
      pesticideDialogFormRules: {
      },
      fertilizerDialogFormRules: {
      },
      diseaseDialogFormRules: {
      },
    };
  },

  created: function() {
    this.getDate();
  },

  methods: {
    // 动态
    removeDomain2(item) {
      var index = this.dynamicValidateForm.domain2.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domain2.splice(index, 1);
      }
    },
    removeDomain1(item) {
      var index = this.dynamicValidateForm.domain1.indexOf(item);
      if (index !== -1) {
        this.dynamicValidateForm.domain1.splice(index, 1);
      }
    },
    addDomain1() {
      this.dynamicValidateForm.domain1.push({
        tType: 1,
        therapeuticDrugs: "",
        userLv: "",
        typeId: "2" + Date.now(),
        instructions:'',
      });
    },
    addDomain2() {
      this.dynamicValidateForm.domain2.push({
        tType: 2,
        therapeuticDrugs: "",
        userLv: "",
        typeId: "2" + Date.now(),
        instructions:'',
      });
    },
    //   打开动态表单的方法
    doAddPlant() {
      this.dialogPlant = true;
    },
    doAddTools() {
      this.dialogTools = true;
    },
    doAddPesticide() {
      this.dialogPesticide = true;
    },
    doAddFertilizer() {
      this.dialogFertilizer = true;
    },
    doAddDisease() {
      this.dialogDisease = true;
    },
    doPlantForm() {
      console.log(this.plantDialogForm);
        insertPlantInfo(this.plantDialogForm)
        .then(response => {
          console.log(response.data);
          if(response.data>0){
          this.$message({
            showClose: true,
            message: "植物添加成功了！",
            type: "success"
          });
          }else{
            this.$message({
            showClose: true,
            message: "失败了，请联系管理员",
            type: "error"
          });
          }
this.$refs.plantDialogForm.resetFields(); 
        })
        .catch(error => {
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
        });
    this.dialogPlant = false;
    this.loading=false;
    },
    doPesticideForm() {
      console.log(this.pesticideDialogForm);
         insertPesticideData(this.pesticideDialogForm)
        .then(response => {
          console.log(response.data);
          if(response.data>0){
          this.$message({
            showClose: true,
            message: "肥料  添加成功了！",
            type: "success"
          });
          }else{
            this.$message({
            showClose: true,
            message: "失败了，请联系管理员",
            type: "error"
          });
          }
this.$refs.pesticideDialogForm.resetFields(); 
        })
        .catch(error => {
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
        });
                   this.loading=false;
           this.dialogPesticide = false;
    // this.$refs.plantDialogForm.resetFields();
    },
    doFertilizerForm() {
      console.log(this.fertilizerDialogForm);
   insertFertilizerData(this.fertilizerDialogForm)
        .then(response => {
          console.log(response.data);
          if(response.data>0){
          this.$message({
            showClose: true,
            message: "肥料  添加成功了！",
            type: "success"
          });
          }else{
            this.$message({
            showClose: true,
            message: "失败了，请联系管理员",
            type: "error"
          });
          }
this.$refs.fertilizerDialogForm.resetFields(); 
        })
        .catch(error => {
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
        });
           this.dialogFertilizer = false;
                   this.loading=false;
    },
    doToolsForm() {
      console.log(this.toolsDialogForm);
        insertToolsWarehouseData(this.toolsDialogForm)
        .then(response => {
          console.log(response.data);
          if(response.data>0){
          this.$message({
            showClose: true,
            message: "农具添加成功了！",
            type: "success"
          });
          }else{
            this.$message({
            showClose: true,
            message: "失败了，请联系管理员",
            type: "error"
          });
          }
this.$refs.toolsDialogForm.resetFields(); 
        })
        .catch(error => {
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
        });
                   this.dialogTools = false;
                   this.loading=false;
    },
    doDiseaseForm(){
       const params = this.diseaseDialogForm;
      params.treatmentList = [];
      for (
        let i = 0, len = this.dynamicValidateForm.domain1.length;
        i < len;
        i++
      ) {
        params.treatmentList.push(this.dynamicValidateForm.domain1[i]);
      }
      for (
        let i = 0, len = this.dynamicValidateForm.domain2.length;
        i < len;
        i++
      ) {
        params.treatmentList.push(this.dynamicValidateForm.domain2[i]);
      }
      console.log(params);

      insertDiseasesInfo(params)
        .then(response => {
          console.log(response.data);
          if(response.data>0){
          this.$message({
            showClose: true,
            message: "农具添加成功了！",
            type: "success"
          });
                this.$refs.diseaseDialogForm.resetFields(); 
      this.dynamicValidateForm.domain1=[];
      this.dynamicValidateForm.domain2=[];
          }else{
            this.$message({
            showClose: true,
            message: "失败了，请联系管理员",
            type: "error"
          });
          }

        })
        .catch(error => {
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
        });
      this.dialogDisease=false;
      this.loading=false;
    },
    getDate() {
      this.getFertilizerDate();
      this.getPlantDate();
      this.getPesticideDate();
      this.getToolsDate();
      this.getDiseaseDate();
    },
    // 获取肥料信息
    getFertilizerDate() {
      const params = this.fertilizerForm;
      params.pageList = [
        {
          offset: this.fertilizerFy.offset,
          limit: this.fertilizerFy.limit,
          account: sessionStorage.getItem("account")
        }
      ];
      //   获取方法
      getFertilizerDates(params)
        .then(response => {
          console.log(response.data);
          this.fertilizerList = response.data.list;
          this.ferRoleTotal = response.data.total;
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
    getPlantDate() {
      const params = this.plantForm;
      params.pageList = [
        {
          offset: this.plantFy.offset,
          limit: this.plantFy.limit,
          account: sessionStorage.getItem("account")
        }
      ];
      console.log(params);
      //   获取方法
      getPlantDates(params)
        .then(response => {
          console.log(response.data);
          console.log('?????????????????');
          this.plantList = response.data.PlantList.list;
          this.plantRoleTotal = response.data.PlantList.total;
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

    // 获取农具信息
    getToolsDate() {
      const params = this.toolsForm;
      params.pageList = [
        {
          offset: this.toolsFy.offset,
          limit: this.toolsFy.limit,
          account: sessionStorage.getItem("account")
        }
      ];
      //   获取方法
      getToolsDates(params)
        .then(response => {
          console.log(response.data);
          this.toolsList = response.data.list;
          this.toolsRoleTotal = response.data.total;
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
    getPesticideDate() {
      const params = this.pesticideForm;
      params.pageList = [
        {
          offset: this.pesticideFy.offset,
          limit: this.pesticideFy.limit,
          account: sessionStorage.getItem("account")
        }
      ];
      //   获取方法
      getPesticideDates(params)
        .then(response => {
          console.log(response.data);
          this.pesticideList = response.data.list;
          this.pesticideRoleTotal = response.data.total;
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
    // 获取所有病症信息
    getDiseaseDate() {
      const params = this.diseaseForm;
      params.pageList = [
        {
          offset: this.diseaseFy.offset,
          limit: this.diseaseFy.limit,
          account: sessionStorage.getItem("account")
        }
      ];
      getDiseasesDates(params)
        .then(response => {
          console.log(response.data);
          this.diseaseList = response.data.DiseasesList.list;
          this.diseaseRoleTotal = response.data.DiseasesList.total;
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
    // 搜索框 提交
    onSubmitPlantForm() {
      this.loading = true;
      this.getPlantDate();
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
    onSubmitDiseaseForm() {
      this.loading = true;
      this.getDiseaseDate();
    },
    // 清空搜索框内容
    reset(formName) {
      this.$refs[formName].resetFields();
      this.getDate();
    },
    //  分页功能
    handleCurrentChangePlant(val) {
      this.loading = true;
      this.plantFy.offset = (val - 1) * this.plantFy.limit;
      console.log(this.plantFy);
      this.getPlantDate();
    },

    handleCurrentChangeTools(val) {
      this.loading = true;
      this.toolsFy.offset = (val - 1) * this.toolsFy.limit;
      this.getToolsDate();
    },
    handleCurrentChangeFertilizer(val) {
      this.loading = true;
      this.fertilizerFy.offset = (val - 1) * this.fertilizerFy.limit;
      this.getFertilizerDate(val);
    },
    handleCurrentChangePesticide(val) {
      this.loading = true;
      this.pesticideFy.offset = (val - 1) * this.pesticideFy.limit;
      this.getPesticideDate();
    },
    handleCurrentChangeDisease(val) {
      this.loading = true;
      this.diseaseFy.offset = (val - 1) * this.diseaseFy.limit;
      this.getDiseaseDate();
    }
  }
};
</script>
