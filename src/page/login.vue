<template>
    <div class="login-wrap">
        <div class="ms-login">
            <div class="ms-title">智慧农场管理系统</div>
            <el-form :model="params" :rules="rules" ref="login" label-width="0px" class="ms-content">
                <el-form-item prop="account">
                    <el-input v-model="params.account" placeholder="请输入账号">
                        <el-button slot="prepend" icon="el-icon-s-custom"></el-button>
                    </el-input>
                </el-form-item>
                <el-form-item prop="password">
                    <el-input
                        type="password"
                        placeholder="请输入密码"
                        v-model="params.password"
                        @keyup.enter.native="submitForm()"
                    >
                        <el-button slot="prepend" icon="el-icon-s-grid"></el-button>
                    </el-input>
                </el-form-item>
                <div class="login-btn">
                    <el-button type="primary" @click="submitForm()">登录</el-button>
                </div>

            </el-form>
        </div>
    </div>
</template>

<script>
import Qs from "qs";
import { getToken } from "@/api/auth";
import { mapGetters } from "vuex";
export default {
  name: 'login',
  components: {},
  data() {
    return {
      params: {
        account: "root",
        password: "root"
      },
           rules: {
                username: [{ required: true, message: '请输入用户名', trigger: 'blur' }],
                password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
            },
      isRemember: false
    };
  },
  created: function() {
    var data = Qs.stringify({});
    const params = {};
    this.$axios
      .post("/ceshi/check", params)
      .then(successResponse => {
        this.responseResult = JSON.stringify(successResponse.data);
        console.log(this.responseResult);
        if (successResponse.data.code === 200) {
          this.$notify({
            title: "成功",
            message: successResponse.data.message,
            type: "success"
          });
        } else {
          this.$notify({
            title: "失败",
            message: successResponse.data.message,
            type: "error"
          });
        }
      })
      .catch(failResponse => {});
  },

  methods: {
    submitForm() {
      getToken(this.params)
        .then(response => {
          console.log(response);
          sessionStorage.setItem("token", response.data.token);
          sessionStorage.setItem("account", response.data.account);
          sessionStorage.setItem("username", response.data.username);
          if(response.data.account==='root'){
         this.$store.dispatch('setLoading',"root");
          }else{
            console.log("???????");
             this.$store.dispatch('setLoading',"user");
          }
          if (response.status == 200) {
            console.log(sessionStorage.getItem('token'));
            this.$router.push("/");
          }
        })
        .catch(error => {
          this.$router.push("/login");
          this.$message({
            showClose: true,
            message: error,
            type: "error"
          });
        });
    }
  }
}

</script>

<style scoped>
.login-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    background-image: url(../assets/img/login-bg.jpg);
    background-size: 100%;
}
.ms-title {
    width: 100%;
    line-height: 50px;
    text-align: center;
    font-size: 20px;
    color: #fff;
    border-bottom: 1px solid #ddd;
}
.ms-login {
    position: absolute;
    left: 50%;
    top: 50%;
    width: 350px;
    margin: -190px 0 0 -175px;
    border-radius: 5px;
    background: rgba(255, 255, 255, 0.3);
    overflow: hidden;
}
.ms-content {
    padding: 30px 30px;
}
.login-btn {
    text-align: center;
}
.login-btn button {
    width: 100%;
    height: 36px;
    margin-bottom: 10px;
}
.login-tips {
    font-size: 12px;
    line-height: 30px;
    color: #fff;
}
</style>
