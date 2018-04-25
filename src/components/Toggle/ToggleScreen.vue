<template>
    <!--是否全屏  -->
    <div class="expand-screen" @click="toggleScreen">
        <Tooltip placement="bottom" content="全屏">
            <Icon type="android-expand" v-if="!screen"></Icon>
            <Icon type="android-contract" v-if="screen"></Icon>
        </Tooltip>
    </div>     
    <!--是否全屏  /--> 
</template>
<script>
export default {
  name: "header",
  data() {
    return { screen: false };
  },
  methods: {
    toggleScreen() {
      if (!this.screen) {
        var docElm = document.documentElement;
        if (docElm.requestFullscreen) {
          docElm.requestFullscreen();
        } else if (docElm.mozRequestFullScreen) {
          docElm.mozRequestFullScreen();
        } else if (docElm.webkitRequestFullScreen) {
          docElm.webkitRequestFullScreen();
        } else if (docElm.msRequestFullscreen) {
          docElm.msRequestFullscreen();
        } else {
          this.$Message.error({
            content: "除了让你升级浏览器对方没什么好说的！",
            duration: 3
          });
        }
        this.screen = true;
      } else {
        if (document.exitFullscreen) {
          document.exitFullscreen();
        } else if (document.mozCancelFullScreen) {
          document.mozCancelFullScreen();
        } else if (document.webkitCancelFullScreen) {
          document.webkitCancelFullScreen();
        } else if (document.msExitFullscreen) {
          document.msExitFullscreen();
        } else {
          this.$Message.error({
            content: "请升级浏览器，不然我是不会理你的！",
            duration: 3
          });
        }
        this.screen = false;
      }
    }
  }
};
</script>
<style>
.expand-screen {
  display: inline-block;
  float: right;
  height: 50px;
  width: 50px;
  text-align: center;
  line-height: 50px;
  font-size: 24px;
  color: #999;
  cursor: pointer;
}
.ivu-icon {
  display: inline-block;
  font-family: "Ionicons";
  speak: none;
  font-style: normal;
  font-weight: normal;
  font-variant: normal;
  text-transform: none;
  text-rendering: auto;
  line-height: 1;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>

    