<template>
  <el-row v-loading="loading">
    <div class="form-container">
      <el-form :model="bycropslist" label-width="100px">
        <el-row>
          <el-col :span="3">
            <h3>作物信息</h3>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8" >
            <el-form-item label="作物名称:" prop="plantName">
              <el-input v-model="bycropslist.plantName" placeholder="请输入作物名称" :readonly="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" >
            <el-form-item label="仓库数量:" prop="leviteNum2">
              <el-input v-model="bycropslist.leviteNum2" placeholder="请输入仓库数量" :readonly="true"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="入库时间:" prop="leviteTime">
              <el-input v-model="bycropslist.leviteTime" placeholder="请输入入库时间" :readonly="true"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">
            <h3>园区信息</h3>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="园区编号:"  prop="parkNo">
              <el-input v-model="bycropslist.parkNo" placeholder="请输入园区编号" :readonly="true"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="出产园区:" prop="parkName">
              <el-input v-model="bycropslist.parkName" placeholder="请输入出产园区" :readonly="true"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="园区地址:" prop="parkAddress">
              <el-input v-model="bycropslist.parkAddress" placeholder="请输入园区地址" :readonly="true"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="3">
            <h3>负责人信息</h3>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="负责人:" prop="userName">
              <el-input v-model="bycropslist.userName" placeholder="请输入负责人" :readonly="true"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="联系电话:"  prop="phone">
              <el-input v-model="bycropslist.phone" placeholder="请输入联系电话" :readonly="true"></el-input>
            </el-form-item>
          </el-col>

          <el-col :span="8">
            <el-form-item label="联系邮箱:" prop="email">
              <el-input v-model="bycropslist.email" placeholder="请输入联系邮箱" :readonly="true"></el-input>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>


      <el-form :model="params" label-width="100px" ref="params" :rules="rules">
        <el-row>
          <el-col :span="3">
            <h3>交易信息</h3>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="8">
            <el-form-item label="买家名称:"  prop="buyersName">
              <el-input v-model="params.buyersName" placeholder="请输入买家名称"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" >
            <el-form-item label="买家电话:" prop="buyPhone">
              <el-input v-model="params.buyPhone" placeholder="请输入买家电话"></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="收货地址:"  prop="buyersAddress">
              <el-input v-model="params.buyersAddress" placeholder="请输入收货地址"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="8" >
            <el-form-item label="交易数量:" prop="tradingNum">
              <el-input v-model="params.tradingNum" placeholder="请输入交易数量" @blur='inputblur'></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8" >
            <el-form-item label="支付方式:" prop="tradingWay">
                   <el-select v-model="params.tradingWay" placeholder="请选择支付方式" style="width:100%;">
                  <el-option label="微信" value="1"></el-option>
                  <el-option label="支付宝" value="2"></el-option>
                         <el-option label="现金" value="3"></el-option>
                  <el-option label="银行卡" value="4"></el-option>
                          <el-option label="其他渠道" value="5"></el-option>
                </el-select>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="交易金额:"  prop="tradingPrice">
              <el-input v-model="params.tradingPrice" placeholder="请输入交易金额"></el-input>
            </el-form-item>
          </el-col>
        </el-row>

        <el-row>
          <el-col :span="16">
            <el-form-item label="备注:"  prop="note">
              <el-input
                type="textarea"
                :autosize="{ minRows: 3, maxRows: 6}"
                placeholder="请输入内容"
                v-model="params.note"
                maxlength="100"
                show-word-limit
              ></el-input>
            </el-form-item>
          </el-col>
          <el-col :span="8">
            <el-form-item label="交易时间:"  prop="tradingTime">
              <el-date-picker
                v-model="params.tradingTime"
                type="date"
                value-format="yyyy-MM-dd"
                placeholder="选择日期"
                style="width:100%"
              ></el-date-picker>
            </el-form-item>
          </el-col>
        </el-row>
        <el-row>
          <el-col :span="5" :offset="19">
            <el-form-item>
              <el-button type="primary" @click="onSubmit" size="mini" style="width:100%">提交交易信息</el-button>
            </el-form-item>
          </el-col>
        </el-row>
      </el-form>
    </div>
  </el-row>
</template>

<script>
import Qs from "qs";
import { insertDate } from "@/api/Crops/CropsSell";
import { mapGetters } from "vuex";
export default {
  name: "Crops-Sell",
  data() {
    return {
      loading: false,
      params: {
        id: "",
        plantId: "",
        parkId: "",
        buyersName: "",
        tradingPrice:"",
        tradingTime: null,
        tradingWay: "",
        tradingNum: "",
        userId: "",
        warehouseCropsId: "",
        buyPhone: "",
        buyersAddress: "",
        note: ""
      },
      rules: {
          buyersName: [
            { required: true,message:" ",trigger: 'blur' }
          ],
          tradingPrice: [
                  { required: true,message:" ",trigger: 'blur' }
          ],
          tradingTime: [
             { required: true,message:" ",trigger: 'blur' }
          ],
          tradingWay: [
            { required: true,message:" ",trigger: 'blur' }
          ],
          tradingNum: [
            { required: true,message:" ",trigger: 'blur' }
          ],
          buyPhone: [
            { required: true,message:" ",trigger: 'blur' }
          ],
          buyersAddress: [
                { required: true,message:" ",trigger: 'blur' }
          ]
        }
    };
  },
  methods: {
inputblur(){
  console.log(this.bycropslist);
  console.log(this.params.tradingNum);
  if(this.params.tradingNum>this.bycropslist.leviteNum2){
    this.$message({
      showClose:true,
      message:'仓内现有'+this.bycropslist.plantName+'的数量为： '+this.bycropslist.leviteNum2+'， 您输入的交易数量超过了仓内现有数量， 请您核对好在输入。',
      type:"warning"
    })
  }
},

    onSubmit() {
console.log(this.cropslist);
  this.$refs.params.validate((valid) => {
  if (valid) {
  this.loading = true;
  if(this.params.tradingNum<=this.bycropslist.leviteNum2){
      this.params.userId = this.bycropslist.userId;
      this.params.plantId = this.bycropslist.plantId;
      this.params.parkId = this.bycropslist.parkId;
      this.params.warehouseCropsId = this.bycropslist.id;
      console.log(this.params);
      insertDate(this.params)
        .then(response => {
          this.$notify({
            title: "成功",
            message: "已提交！",
            type: "success"
          });
          this.$router.push("/warehouseCrops");
          this.loading = false;
        })
        .catch(error => {
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
        });
      }else{
      this.$message({
      showClose:true,
      message:'仓内现有'+this.bycropslist.plantName+'的数量为： '+this.bycropslist.leviteNum2+'， 您输入的交易数量超过了仓内现有数量， 请您核对好在输入。',
      type:"warning"
    })
      }

       }else{
         this.$message({
         showClose: true,
          message: '您信息未填写完整',
          type: 'warning'
          });
       }
  });
    this.loading = false;
  }
  },



  computed: {
    // 接收传过来的数据
    ...mapGetters(["bycropslist"])
  },

  
  //  数据初始化
  created: function() {
  }
}
</script>
<style scoped>

</style>