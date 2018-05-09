<template>
  <div class='head'>   
    <Logo>
    </Logo>  
    <div class="right">               
      <div class="menu">
        <ul>
            <li class="ic1"><a  target="MainFrame" class="current">
                首页</a></li>
            <li class="ic2"><a  target="MainFrame">报警</a></li>
            <li class="ic3" style="display: none"><a href="#">用户中心</a></li>
            <li class="ic4" style="display: none"><a href="#">帮助中心</a></li>
            <li class="ic5" style="display: none"><a href="SystemManage/AlertDataManage.aspx"
                target="MainFrame">超限处理</a></li>
            <li class="ic7"><a  target="_blank">投影广播</a></li>
            <li class="ic6"><a href="#" @click="btn_close">退出系统</a></li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Logo from "../logo/Logo";
import Cookies from "js-cookie";
import toggleScreen from "../Toggle/ToggleScreen";
import User from "../user/User";
import LangList from "../language/LangList";
import localStorageHelper from "../../libs/localStorageHelper";
export default {
  name: "theader",
  components: {
    Logo
  },
  data() {
    return {
      screen: false,
      headList: [
        {
          icontype: "heart",
          value: "guide",
          path: "/index2"
        },
        {
          icontype: "heart",
          value: "overview",
          path: "/list"
        },
        {
          icontype: "heart",
          value: "overview",
          path: "/list"
        }
      ]
    };
  },
  methods: {
    toggleSideBar() {
      this.$store.dispatch("ToggleSideBar");
    },
    btn_close() {
      this.$store.commit("logout", this);
      this.$router.push({
        name: "login"
      });
      localStorageHelper.remove("LoadRouters");
    }
  }
};
</script>
<style scoped>
.ivu-layout-header {
  background: #1e334c;
  height: 80px;
  clear: both;
  line-height: 80px;
  display: block;
  color: #b7cae2;
  position: relative;
}

.ivu-menu-horizontal {
  height: auto;
  line-height: 76px;
}

.head {
  background: #1e334c;
  height: 80px;
  clear: both;
  line-height: 80px;
  display: block;
  color: #b7cae2;
  position: relative;
}

.head .right {
  margin-left: 270px;
  background: #919191;
}
.head .right .menu {
  width: 60%;
  float: left;
  height: 80px;
  line-height: 65px;
}
.head .right .menu ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.head .right .menu ul li {
  line-height: 110px;
  float: left;
}
.head .right .menu ul li.ic1 a {
  width: 100px;
  margin: auto;
  background: url(../../assets/img/ic1_menu.png) no-repeat center;
  background-position: center 15px;
  border-top: #1e334c 2px solid;
  float: left;
  text-align: center;
  color: #829bb9;
  display: block;
  height: 78px;
}
.head .right .menu ul li.ic1 a:hover {
  color: #fff;
  background: url(../../assets/img/ic1_menu_b.png) no-repeat center #15273c;
  border-top: 2px solid #36aeea;
  background-position: center 15px;
}
.head .right .menu ul li.ic1 a.current {
  color: #fff;
  background: url(../../assets/img/ic1_menu_b.png) no-repeat center #15273c;
  border-top: 2px solid #36aeea;
  background-position: center 15px;
}
.head .right .menu ul li.ic2 a {
  width: 100px;
  margin: auto;
  background: url(../../assets/img/ic2_menu.png) no-repeat center;
  background-position: center 15px;
  border-top: #1e334c 2px solid;
  float: left;
  text-align: center;
  color: #829bb9;
  display: block;
  height: 78px;
}
.head .right .menu ul li.ic2 a:hover {
  color: #fff;
  background: url(../../assets/img/ic2_menu_b.png) no-repeat center #15273c;
  border-top: 2px solid #36aeea;
  background-position: center 15px;
}
.head .right .menu ul li.ic2 a.current {
  color: #fff;
  background: url(../../assets/img/ic2_menu_b.png) no-repeat center #15273c;
  border-top: 2px solid #36aeea;
  background-position: center 15px;
}
.head .right .menu ul li.ic3 a {
  width: 100px;
  margin: auto;
  background: url(../../assets/img/ic3_menu.png) no-repeat center;
  background-position: center 15px;
  border-top: #1e334c 2px solid;
  float: left;
  text-align: center;
  color: #829bb9;
  display: block;
  height: 78px;
}
.head .right .menu ul li.ic3 a:hover {
  color: #fff;
  background: url(../../assets/img/ic3_menu_b.png) no-repeat center #15273c;
  border-top: 2px solid #36aeea;
  background-position: center 15px;
}
.head .right .menu ul li.ic3 a.current {
  color: #fff;
  background: url(../../assets/img/ic3_menu_b.png) no-repeat center #15273c;
  border-top: 2px solid #36aeea;
  background-position: center 15px;
}
.head .right .menu ul li.ic4 a {
  width: 100px;
  margin: auto;
  background: url(../../assets/img/ic4_menu.png) no-repeat center;
  background-position: center 15px;
  border-top: #1e334c 2px solid;
  float: left;
  text-align: center;
  color: #829bb9;
  display: block;
  height: 78px;
}
.head .right .menu ul li.ic4 a:hover {
  color: #fff;
  background: url(../../assets/img/ic4_menu_b.png) no-repeat center #15273c;
  border-top: 2px solid #36aeea;
  background-position: center 15px;
}
.head .right .menu ul li.ic4 a.current {
  color: #fff;
  background: url(../../assets/img/ic4_menu_b.png) no-repeat center #15273c;
  border-top: 2px solid #36aeea;
  background-position: center 15px;
}
.head .right .menu ul li.ic5 a {
  width: 100px;
  margin: auto;
  background: url(../../assets/img/ic5_menu.png) no-repeat center;
  background-position: center 15px;
  border-top: #1e334c 2px solid;
  float: left;
  text-align: center;
  color: #829bb9;
  display: block;
  height: 78px;
}
.head .right .menu ul li.ic5 a:hover {
  color: #fff;
  background: url(../../assets/img/ic5_menu_b.png) no-repeat center #15273c;
  border-top: 2px solid #36aeea;
  background-position: center 15px;
}
.head .right .menu ul li.ic5 a.current {
  color: #fff;
  background: url(../../assets/img/ic5_menu_b.png) no-repeat center #15273c;
  border-top: 2px solid #36aeea;
  background-position: center 15px;
}

.head .right .menu ul li.ic6 a {
  width: 100px;
  margin: auto;
  background: url(../../assets/img/ic6_menu.png) no-repeat center;
  background-position: center 15px;
  border-top: #1e334c 2px solid;
  float: left;
  text-align: center;
  color: #829bb9;
  display: block;
  height: 78px;
}
.head .right .menu ul li.ic6 a:hover {
  color: #fff;
  background: url(../../assets/img/ic6_menu_b.png) no-repeat center #15273c;
  border-top: 2px solid #36aeea;
  background-position: center 15px;
}
.head .right .menu ul li.ic6 a.current {
  color: #fff;
  background: url(../../assets/img/ic6_menu_b.png) no-repeat center #15273c;
  border-top: 2px solid #36aeea;
  background-position: center 15px;
}

.head .right .menu ul li.ic7 a {
  width: 100px;
  margin: auto;
  background: url(../../assets/img/ic3_menu.png) no-repeat center;
  background-position: center 15px;
  border-top: #1e334c 2px solid;
  float: left;
  text-align: center;
  color: #829bb9;
  display: block;
  height: 78px;
}
.head .right .menu ul li.ic7 a:hover {
  color: #fff;
  background: url(../../assets/img/ic3_menu_b.png) no-repeat center #15273c;
  border-top: 2px solid #36aeea;
  background-position: center 15px;
}
.head .right .menu ul li.ic7 a.current {
  color: #fff;
  background: url(../../assets/img/ic3_menu_b.png) no-repeat center #15273c;
  border-top: 2px solid #36aeea;
  background-position: center 15px;
}
</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
