<template>
      <Col class="head-text"  :span="span">
      <Icon :type="item.icontype"></Icon>
      <router-link :to="item.path">{{$t(item.value)}}</router-link>
      </Col>
</template>
<script>
export default {
  props: ["item", "span"],
  methods: {}
};
</script>
<style scoped>

</style>

<!-- Add "scoped" attribute to limit CSS to this component only -->
