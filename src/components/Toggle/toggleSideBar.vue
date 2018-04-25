<template>
    <div class="nav-icon" @click="toggleSideBar">
        <Icon type="navicon-round"></Icon>
    </div>
</template>
<style>
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
<script>
export default {
  methods: {
    toggleSideBar() {
      this.$store.dispatch("ToggleSideBar");
    }
  }
};
</script>


