<template>
    <Dropdown-menu slot="list">
        <Dropdown-item v-for="item in list" :key=item.text @click.native="item.native">{{item.text}}</Dropdown-item>
        </Dropdown-menu>
</template>
<style>

</style>
<script>
export default {
  data() {
    return {
      list: [
        {
          native: "modalUser=true",
          text: "个人信息"
        },
        {
          native: "logout",
          text: "退出登录"
        },
        {
          native: "lock",
          text: "锁定屏幕"
        }
      ]
    };
  }
};
</script>

