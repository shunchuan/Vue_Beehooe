<template>
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
/*左侧菜单样式*/
/* .menu_list{ overflow-y:auto; overflow-x:hiddel; height:auto}
.menu_list p{ display:block}
.menu_list .menu_head1{width:270px;height:60px; line-height:60px;font-size:16px;color:#b2c0d1;cursor:pointer;position:relative;margin:0px;background: url(../images/sidenav_bg1.png) no-repeat; }
.menu_list .menu_head2{width:270px;height:60px; line-height:60px;font-size:16px;color:#b2c0d1;cursor:pointer;position:relative;margin:0px;background: url(../images/sidenav_bg2.png) no-repeat; }
.menu_list .menu_head3{width:270px;height:60px; line-height:60px;font-size:16px;color:#b2c0d1;cursor:pointer;position:relative;margin:0px;background: url(../images/sidenav_bg3.png) no-repeat; }
.menu_list .menu_head4{width:270px;height:60px; line-height:60px;font-size:16px;color:#b2c0d1;cursor:pointer;position:relative;margin:0px;background: url(../images/sidenav_bg4.png) no-repeat; }
.menu_list .menu_head5{width:270px;height:60px; line-height:60px;font-size:16px;color:#b2c0d1;cursor:pointer;position:relative;margin:0px;background: url(../images/sidenav_bg5.png) no-repeat; }
.menu_list .menu_head6{width:270px;height:60px; line-height:60px;font-size:16px;color:#b2c0d1;cursor:pointer;position:relative;margin:0px;background: url(../images/sidenav_bg6.png) no-repeat; } */



/* .menu_list .menu_head1:hover{ cursor:pointer;background:url(../images/sidenav_bg1_s.png) center right no-repeat;width:270px;color:#fff; height:60px; line-height:60px;font-size:16px;}
.menu_list .menu_head1:hover a{ color:#fff}
.menu_list .menu_head2:hover a{ color:#fff}
.menu_list .menu_head3:hover a{ color:#fff}
.menu_list .menu_head4:hover a{ color:#fff}
.menu_list .menu_head5:hover a{ color:#fff}
.menu_list .menu_head6:hover a{ color:#fff}
.menu_list .menu_head2:hover{cursor:pointer;background:url(../images/sidenav_bg2_s.png) center right no-repeat;width:270px;color:#fff; height:60px; line-height:60px;font-size:16px;}
.menu_list .menu_head3:hover{cursor:pointer;background:url(../images/sidenav_bg3_s.png) center right no-repeat;width:270px;color:#fff; height:60px; line-height:60px;font-size:16px;}
.menu_list .menu_head4:hover{cursor:pointer;background:url(../images/sidenav_bg4_s.png) center right no-repeat;width:270px;color:#fff; height:60px; line-height:60px;font-size:16px;}
.menu_list .menu_head5:hover{cursor:pointer;background:url(../images/sidenav_bg5_s.png) center right no-repeat;width:270px;color:#fff; height:60px; line-height:60px;font-size:16px;}
.menu_list .menu_head6:hover{cursor:pointer;background:url(../images/sidenav_bg6_s.png) center right no-repeat;width:270px;color:#fff; height:60px; line-height:60px;font-size:16px;}



.menu_list .current1{ cursor:pointer;background:url(../images/sidenav_bg1_s.png) center right no-repeat;width:270px;color:#fff; height:60px; line-height:60px;font-size:16px;}
.menu_list .current1 a{ color:#fff}
.menu_list .current2 a{ color:#fff}
.menu_list .current3 a{ color:#fff}
.menu_list .current4 a{ color:#fff}
.menu_list .current5 a{ color:#fff}
.menu_list .current6 a{ color:#fff}
.menu_list .current2{cursor:pointer;background:url(../images/sidenav_bg2_s.png) center right no-repeat;width:270px;color:#fff; height:60px; line-height:60px;font-size:16px;}
.menu_list .current3{cursor:pointer;background:url(../images/sidenav_bg3_s.png) center right no-repeat;width:270px;color:#fff; height:60px; line-height:60px;font-size:16px;}
.menu_list .current4{cursor:pointer;background:url(../images/sidenav_bg4_s.png) center right no-repeat;width:270px;color:#fff; height:60px; line-height:60px;font-size:16px;}
.menu_list .current5{cursor:pointer;background:url(../images/sidenav_bg5_s.png) center right no-repeat;width:270px;color:#fff; height:60px; line-height:60px;font-size:16px;}
.menu_list .current6{cursor:pointer;background:url(../images/sidenav_bg6_s.png) center right no-repeat;width:270px;color:#fff; height:60px; line-height:60px;font-size:16px;} */

</style>
