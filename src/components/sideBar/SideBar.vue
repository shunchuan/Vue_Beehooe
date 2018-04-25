<template>
<!-- 左侧 -->
    <div class="side-wrapper" :theme="theme" >
       <!-- hover:!state.sidebar.minOpened, -->
      <!-- logo -->
      <div style="height:64px;" class="logo-box">
        <img :src="require('../../assets/img/logo.png')" alt="" height="50" v-show="true">
        <img src="https://file.iviewui.com/dist/76ecb6e76d2c438065f90cd7f8fa7371.png" alt="" height="40" width="40"
             style="position: absolute;top: 5px;left: 0" v-show="false">
      </div>
      <!-- logo /-->
      <!-- 左侧导航 -->
      <nav-bar style="padding-bottom: 80px">
        <Menu width="220" :theme="theme" :accordion="true" @on-select="selectFn" :active-name="$route.path">
          <div v-for="(item,index) in sidebarmenu " :key="index">
            <Submenu :name="index" v-if="item.children && item.children.length>0 && !item.hidden">
              <template slot="title">
                <i class="icon iconfont " :class="item.icon ? item.icon :'icon-collection'"></i>
                {{$t(item.name)}}
              </template>
              <Menu-item :name="sub.path" v-for="(sub,i) in item.children" :key="i" v-if="!sub.hidden">
                <i class="icon iconfont " :class="sub.icon ? sub.icon : 'icon-collection'"></i>
                {{$t(sub.name)}}
              </Menu-item>
            </Submenu>
            <div>
              <Menu-item :name="item.path" :key="index"
                         v-if="item.children.length==0 && !item.hidden && item.level!=0 ">
                <i class="icon iconfont " :class="item.icon ? item.icon :'icon-collection'"></i>
                 {{$t(item.name)}}
              </Menu-item>
            </div>
          </div>
        </Menu>
      </nav-bar>
      <div class="theme-switch" >
        Switch Theme
        <i-switch size="large" @on-change="themeChange" v-model="themeBool">
          <span slot="open">Dark</span>
          <span slot="close">Light</span>
        </i-switch>
      </div>
      <!-- 左侧导航 /-->
    </div>    
</template>
<script scoped>
// import sidebarmenu from "../../config/sidebarmenu.js";
import NavBar from "../navbar/NavBar.vue";
export default {
  name: "full",
  components: {
    NavBar
  },
  data() {
    return {
      theme: "dark", // 主题
      themeBool: true,
      modal_loading: false,
      sidebarmenu: this.$store.state.config.sidebarmenu // 导航菜单
    };
  },
  computed: {
    state() {
      return this.$store;
    }
  },
  methods: {
    /**
     * 选择菜单
     */
    selectFn(a) {
      console.log(a, this.$route.path);
      this.$router.push({
        path: a
      });
    },
    themeChange(state) {
      if (state) {
        this.theme = "dark";
      } else {
        this.theme = "light";
      }
    }
  }
};
</script>

<style scoped>
.navbar {
  overflow-x: hidden;
  overflow-y: scroll;
  top: 64px;
  bottom: 40px;
  right: -17px;
  transition: all 0.28s ease-out;
  position: absolute;
  left: 0;
  z-index: 99;
}

.theme-switch {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 40px;
  background: #010101;
  line-height: 40px;
  text-align: center;
  z-index: 901;
}
</style>
