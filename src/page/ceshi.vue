<template>
<el-row>
         <el-form-item prop="code">

                                 <img src="checkCode" alt="" width="100" height="32" class="passcode" style="height:43px;cursor:pointer; float:left;" onclick="this.src=this.src+'?'">>

                              <el-input v-model="login.code" placeholder="请输入验证码" style="width: 100px; float:center" auto-complete="off"></el-input>

</el-form-item>
  </el-row>
</template>

<style>
  .transfer-footer {
    margin-left: 20px;
    padding: 6px 5px;
  }
</style>

<script>
import {getParkByUser} from "@/api/ceshi"
  export default {
    data() {
      return {
        data: [],
        value: [],
        renderFunc(h, option) {
          return <span>{ option.label }</span>;
        }
      };
    },
    created: function() {
    },
    methods: {

    },
      mounted() {
    // 获取天气信息
    (function(d) {
      var c = d.createElement("link");
      c.rel = "stylesheet";
      c.href ="https://widget.heweather.net/standard/static/css/he-standard.css?v=1.3";
      var s = d.createElement("script");
      // s.type = 'text/javascript';
      // c.innerHTML = 'WIDGET = {CONFIG: {layout: 1,width: 10,height: 10,background: 1,dataColor: "FFFFFF",aqiColor: "FFFFFF",borderRadius: 5,key: "e196c2c652fb4cebb28b958e18bed866"}}';
      s.src =
        "https://widget.heweather.net/standard/static/js/he-standard.js?v=1.3";
        console.log(s);
      var sn = d.getElementsByTagName('script')[0];
      sn.parentNode.insertBefore(c, sn);
      sn.parentNode.insertBefore(s, sn);
    })(document);
  }
  };
</script>
<style>

</style>