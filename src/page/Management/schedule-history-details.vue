  <template>
  <el-row v-loading="loading">
    <div class="form-container">
      <el-card shadow="never" class="mgb20" :body-style="{ padding: '0px' }">
        <div slot="header" class="clearfix">
          <h3>园区信息</h3>
        </div>
        <el-row class="cardtop10">
          <el-col :span="6">
            <img
              style="height:150px;width:150px"
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
          </el-col>
          <el-col :span="18">
            <el-row class="elrow">
              <el-col :span="6">
                园区编号：
                <span>{{scheduleHistoryList.parkNO}}</span>
              </el-col>
              <el-col :span="6">
                园区名称：
                <span>{{scheduleHistoryList.parkName}}</span>
              </el-col>
                <el-col :span="6">
                园区地址：
                <span>{{scheduleHistoryList.parkAddress}}</span>
              </el-col>
              <el-col :span="6">
                园区负责人：
                <span>{{scheduleHistoryList.userName}}</span>
              </el-col>
            </el-row>

            <el-row class="elrow">
              <el-col :span="6">
                叶子色泽：
                <span>{{scheduleHistoryList.leafColor}}</span>
              </el-col>
              <el-col :span="6">
                叶面虫痕：
                <span>{{scheduleHistoryList.leafTrace}}</span>
              </el-col>
                <el-col :span="6">
                植株高度：
                <span>{{scheduleHistoryList.leafHeight}}</span>
              </el-col>
              <el-col :span="6">
                叶面面积：
                <span>{{scheduleHistoryList.leafArea}}</span>
              </el-col>
            </el-row>
            
            <el-row class="elrow">
              <el-col :span="6">
                萎焉情况：
                <span>{{scheduleHistoryList.witheringSituation}}</span>
              </el-col>
              <el-col :span="6">
                叶片浓度：
                <span>{{scheduleHistoryList.leafCon}}</span>
              </el-col>
                <el-col :span="6">
                氮含量：
                <span>{{scheduleHistoryList.oContent}}</span>
              </el-col>
              <el-col :span="6">
                磷含量：
                <span>{{scheduleHistoryList.pContent}}</span>
              </el-col>
            </el-row>

            <el-row class="elrow">
              <el-col :span="6">
                钾含量：
                <span>{{scheduleHistoryList.kContent}}</span>
              </el-col>
              <el-col :span="6">
                酸碱度：
                <span>{{scheduleHistoryList.ph}}</span>
              </el-col>
                <el-col :span="6">
                土壤湿度：
                <span>{{scheduleHistoryList.soilMoisture}}</span>
              </el-col>
              <el-col :span="6">
                温度：
                <span>{{scheduleHistoryList.temperature}}</span>
              </el-col>
            </el-row>

            <el-row class="elrow">
              <el-col :span="6">
                湿度：
                <span>{{scheduleHistoryList.humidity}}</span>
              </el-col>
              <el-col :span="6">
                录入时间：
                <span>{{scheduleHistoryList.stateTime}}</span>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-card>

      <!-- <el-card shadow="never" class="mgb20" :body-style="{ padding: '0px' }">
        <div slot="header" class="clearfix">
          <h3>病症信息</h3>
        </div>
        <el-row class="cardtop10">
          <el-col :span="6">
            <img
              style="height:150px;width:150px"
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
          </el-col>
          <el-col :span="18">
            <el-row class="elrow">
              <el-col :span="6">
                病症名称：
                <span>{{Diseaseid.diseasesName}}</span>
              </el-col>
              <el-col :span="6">
                叶片情况：
                <span>{{Diseaseid.leafCondition}}</span>
              </el-col>
              <el-col :span="6">
                萎焉情况：
                <span>{{Diseaseid.wiltingCondition}}</span>
              </el-col>
              <el-col :span="6">
                叶面边缘情况：
                <span>{{Diseaseid.leafEdgeCondition}}</span>
              </el-col>
            </el-row>
            <el-row class="elrow">
              <el-col :span="6">
                基部情况：
                <span>{{Diseaseid.basisCondition}}</span>
              </el-col>
              <el-col :span="6">
                植株颜色：
                <span>{{Diseaseid.plantColor}}</span>
              </el-col>
              <el-col :span="6">
                病症类型：
                <span>{{Diseaseid.diseaseTypes}}</span>
              </el-col>
            </el-row>
            <el-row class="elrow">
              <el-col :span="6">
                传染性：
                <span>{{Diseaseid.diseaseInf}}</span>
              </el-col>
              <el-col :span="6">
                植株形状：
                <span>{{Diseaseid.plantShape}}</span>
              </el-col>
              <el-col :span="6">
                治疗方法：
                <span>{{Diseaseid.treatmentId}}</span>
              </el-col>
            </el-row>
          </el-col>
        </el-row>
      </el-card> -->

      <el-card shadow="never" class="mgb20" :body-style="{ padding: '0px' }" v-if="scheduleHistoryList.healerRecordList.length>0">
        <div slot="header" class="clearfix">
          <h3>使用的治疗物</h3>
        </div>
        <el-row class="cardtop10">
          <!-- <el-col :span="6">
            <img
              style="height:250px;width:200px"
              src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
              class="image"
            />
          </el-col> -->
          <el-col :span="12">
            <el-table :data="pesticide" height="250">
               <el-table-column prop="healerName" label="肥料名称" width="150"></el-table-column>
              <el-table-column prop="healerNum" label="使用数量"></el-table-column>
         <!-- <el-table-column prop="instructions" label="使用说明"></el-table-column> -->
            </el-table>
          </el-col>

          <el-col :span="12">
            <el-table :data="fertilizer" height="250">
              <el-table-column prop="healerName" label="肥料名称" width="150"></el-table-column>
              <el-table-column prop="healerNum" label="使用数量"></el-table-column>
              <!-- <el-table-column prop="instructions" label="使用说明"></el-table-column> -->
            </el-table>
          </el-col>
        </el-row>
      </el-card>
    </div>
  </el-row>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  name: "schedule-history-details",
  data() {
    return {
      loading: false,
      Diseaseids: ""
    };
  },
  computed: {
    // 接收传过来的数据
    ...mapGetters(["scheduleHistoryList"]),
    headerClass() {
      return "background:#fff;color: #909399;font-weight: 600;border-right: 1px solid #ebeef5";
    },
    pesticide() {
      let arr = [];
      for (let i = 0, len = this.scheduleHistoryList.healerRecordList.length; i < len; i++) {
        if (this.scheduleHistoryList.healerRecordList[i].type === "1") {
          arr.push(this.scheduleHistoryList.healerRecordList[i]);
        }
      }
      return arr;
    },
    fertilizer() {
      let arr = [];
      for (let i = 0, len = this.scheduleHistoryList.healerRecordList.length; i < len; i++) {
        if (this.scheduleHistoryList.healerRecordList[i].type === "2") {
          arr.push(this.scheduleHistoryList.healerRecordList[i]);
        }
      }
      return arr;
    }
  },
  watch: {
  },
  created: function() {
    console.log(this.scheduleHistoryList);
  },
  methods: {}
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
.mgb20 {
  margin-bottom: 20px;
}
span {
  font-size: 14px;
}
.elrow {
  margin-bottom: 10px;
}
.cardtop10 {
  padding: 10px;
  font-size: 18px;
}
</style>
