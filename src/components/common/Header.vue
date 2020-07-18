<template>
  <div class="header">
    <!-- 折叠按钮 -->
    <div class="collapse-btn" @click="collapseChage">
      <i v-if="!collapses" class="el-icon-s-fold"></i>
      <i v-else class="el-icon-s-unfold"></i>
    </div>
    <div class="logo"><span v-if="this.showLoading==='root'">后台管理系统</span>
    <span v-if="this.showLoading==='user'">智慧农场</span></div>
    <div class="header-right">
      <div class="header-user-con">
        <!-- 全屏显示 -->
        <div class="btn-fullscreen" @click="handleFullScreen">
          <el-tooltip effect="dark" :content="fullscreen?`取消全屏`:`全屏`" placement="bottom">
            <i class="el-icon-rank"></i>
          </el-tooltip>
        </div>
        <!-- 消息中心 -->
        <div class="btn-bell">
          <el-tooltip effect="dark" :content="message?`有${message}条未读消息`:`消息中心`" placement="bottom">
            <router-link to="/tabs">
              <i class="el-icon-bell"></i>
            </router-link>
          </el-tooltip>
          <span class="btn-bell-badge" v-if="message"></span>
        </div>
        <!--  -->
                 <div class="userPlant" v-if="this.showLoading==='user'">
                   <el-tooltip effect="dark" content="个人计划" placement="bottom">
                  <router-link to="/userPlants" style="color:#fff">
             <i class="el-icon-notebook-2"></i>
            </router-link>
          </el-tooltip>

        </div>
        <!-- 用户头像 -->
        <div class="user-avator">
          <img src="@/assets/img/img.jpg" />
        </div>
        <!-- 用户名下拉菜单 -->
        <el-dropdown class="user-name" trigger="click" @command="handleCommand">
          <span class="el-dropdown-link">
            {{username}}
            <i class="el-icon-caret-bottom"></i>
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item divided command="loginout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </div>
    </div>
  </div>
</template>
<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      fullscreen: false,
      message: 2
    };
  },
  computed: {
    ...mapGetters(['collapses','showLoading']),
    username() {
      return sessionStorage.getItem("username");
    }
  },
  methods: {
    // 用户名下拉菜单选择事件
    handleCommand(command) {
      if (command == "loginout") {
        localStorage.removeItem("username");
        this.$router.push("/login");
      }
    },
    // 侧边栏折叠
    collapseChage() {
      this.collapse = !this.collapse;
      this.$store.dispatch("setCollapse", this.collapse);
    },
    // 全屏事件
    handleFullScreen() {
      let element = document.documentElement;
      if (this.fullscreen) {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        }
      } else {
        if (element.requestFullscreen) {
          element.requestFullscreen();
        } else if (element.webkitRequestFullScreen) {
          element.webkitRequestFullScreen();
        } else if (element.mozRequestFullScreen) {
          element.mozRequestFullScreen();
        } else if (element.msRequestFullscreen) {
          // IE11
          element.msRequestFullscreen();
        }
      }
      this.fullscreen = !this.fullscreen;
    }
  },
  mounted() {
    if (document.body.clientWidth < 1500) {
      this.collapseChage();
    }
    // 获取天气信息
//     (function(d) {
//             var WIDGET = {
//       CONFIG: {
//         layout: 1,
//         width: 50,
//         height: 10,
//         background: 1,
//         dataColor: "FFFFFF",
//         aqiColor: "FFFFFF",
//         borderRadius: 5,
//         key: "e196c2c652fb4cebb28b958e18bed866"
//       }
//     };
//       var c = d.createElement("link");
//       c.rel = "stylesheet";
//       c.href =
//         "https://widget.heweather.net/standard/static/css/he-standard.css?v=1.3";
//       var s = d.createElement("script");
//        c.type = 'text/javascript';
//   c.style = 'WIDGET = {CONFIG: {layout: 1,width: 10,height: 10,background: 1,dataColor: "FFFFFF",aqiColor: "FFFFFF",borderRadius: 5,key: "e196c2c652fb4cebb28b958e18bed866"}';
//       s.src =
//         "https://widget.heweather.net/standard/static/js/he-standard.js?v=1.3";
//       var sn = d.getElementsByTagName('script')[0];
//       sn.parentNode.insertBefore(c, sn);
//       sn.parentNode.insertBefore(s, sn);
//     })(document);
  }
};
</script>
<style>
/* .view-vertical{
        width: 40px;
    height: 60px;
    font-size: 15.5556px;
    background-image: url(https://cdn.heweather.com/img/plugin/190516/bg/view/399d.png);
    background-repeat: no-repeat;
    background-position: left top;
    background-size: auto 100%;
    border-radius: 5px;
} */
.header {
  position: relative;
  box-sizing: border-box;
  width: 100%;
  height: 70px;
  font-size: 22px;
  color: #fff;
  background: rgb(50, 65, 87);
}
.collapse-btn {
  float: left;
  padding: 0 21px;
  cursor: pointer;
  line-height: 70px;
}
.userPlant{
  margin-left: 15px;
  margin-bottom: 5px;
}
.header .logo {
  float: left;
  width: 250px;
  line-height: 70px;
}
.header-right {
  float: right;
  padding-right: 50px;
}
.header-user-con {
  display: flex;
  height: 70px;
  align-items: center;
}
.btn-fullscreen {
  transform: rotate(45deg);
  margin-right: 5px;
  font-size: 24px;
}
.btn-bell,
.btn-fullscreen {
  position: relative;
  width: 30px;
  height: 30px;
  text-align: center;
  border-radius: 15px;
  cursor: pointer;
}
.btn-bell-badge {
  position: absolute;
  right: 0;
  top: -2px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background: #f56c6c;
  color: #fff;
}
.btn-bell .el-icon-bell {
  color: #fff;
}
.user-name {
  margin-left: 10px;
}
.user-avator {
  margin-left: 20px;
}
.user-avator img {
  display: block;
  width: 40px;
  height: 40px;
  border-radius: 50%;
}
.el-dropdown-link {
  color: #fff;
  cursor: pointer;
}
.el-dropdown-menu__item {
  text-align: center;
}
</style>
