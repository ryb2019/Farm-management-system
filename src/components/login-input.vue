<template>
  <div class="login-input">
    <div class="content-right">
      <div class="input-head">Blog登录</div>
      <el-input type="text" placeholder="输入账号" v-model="params.account" maxlength="30"></el-input>
      <el-input
        type="password"
        placeholder="输入密码"
        v-model="params.password"
        style="margin-top: 10px;"
      ></el-input>
      <el-switch
        v-model="isRemember"
        active-text="记住账号"
        active-color="#13ce66"
        inactive-color="#ff4949"
        style="margin-top: 10px;width: 100%;"
      ></el-switch>
      <el-button type="primary" class="login-submit" @click="doLogin()">登录</el-button>
    </div>
  </div>
</template>


<script>
import Qs from "qs";
import { getToken } from "@/api/auth";
import { mapGetters } from "vuex";
export default {
  name: "login-input",

  data() {
    return {
      params: {
        account: "root",
        password: "root"
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
    // 测试跨域json数据传输
    // loging() {
    //   //  将对应表单的数据存储到params里面
    //      const params = {
    //     account: this.account,
    //     password: this.password
    //   };
    //   this.$axios
    //     .post("/validation/login", params)
    //     .then(successResponse => {
    //       this.responseResult = JSON.stringify(successResponse.data.data);
    //       console.log(this.responseResult);
    //       if (successResponse.status == 200) {
    //         this.$router.push("/staffInterface");
    //       } else {
    //         this.$notify({
    //           title: "错误",
    //           message: "账号密码错误",
    //           type: "error"
    //         });
    //       }
    //     })
    //     .catch(failResponse => {});
    // },

    doLogin() {
      getToken(this.params)
        .then(response => {
          console.log(response);
          sessionStorage.setItem(
            "currentUser",
            JSON.stringify({
              id: response.data.userId,
              name: response.data.username
            })
          );
          sessionStorage.setItem("token", response.data.token);
                    sessionStorage.setItem("account", response.data.account);
                              sessionStorage.setItem("username", response.data.username);
          if (response.status == 200) {
            console.log(sessionStorage.getItem('token'));
            this.$router.push("/staffInterface");
          }
        })
        .catch(error => {
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

<style scoped>
.login-input {
  width: 100%;
  height: 100%;
}
.login-input .content-right {
  width: 320px;
  height: 100%;
}
.login-input .content-right .input-head {
  font-size: 18px;
  height: 60px;
  line-height: 60px;
  text-align: center;
}
.login-input .content-right .login-submit {
  width: 100%;
  margin-top: 10px;
}
</style>
