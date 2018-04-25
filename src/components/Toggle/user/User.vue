
<template>
    <Dropdown class="userBox" slot='right'>
        <a href="javascript:void(0)">
            Artiely
            <Icon type="arrow-down-b"></Icon>
        </a>
        <!-- <DropdownItems></DropdownItems> -->
        <Dropdown-menu slot="list">
            <Dropdown-item v-for="item in list" :key=item.text @click.native="item.native">{{item.text}}</Dropdown-item>
        <!-- <Dropdown-item @click.native="modalUser=true">个人信息</Dropdown-item>
        <Dropdown-item @click.native="logout">退出登录</Dropdown-item> -->
        </Dropdown-menu>
    </Dropdown>
</template>
<script>
import DropdownItems from "../Dropdown";
export default {
  components: {
    // DropdownItems
  },
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
<style>

</style>

        