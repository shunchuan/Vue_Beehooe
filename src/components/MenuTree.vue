<template>
  <div>
    <template v-for="(node,index) in nodes" >
      <submenu :index="index+''">
        <template slot="title">
          <i :class="node.iconCls"></i>{{node.name}}
        </template>
        <menu-tree :nodes="node.children"></menu-tree>
      </submenu>
      <!-- 这里是用:route="{name:node.name}，如果不使用name跳转的话，可以在数据源那里把path写成全路径即可 -->
      <Menu-item :index="node.path" :route="{name:node.name}">
        <i :class="node.iconCls"></i>{{node.name}}</Menu-item>
    </template>
  </div>
</template>

<script type="text/ecmascript-6">
export default {
  name: "MenuTree",
  data() {
    return {};
  },
  props: {
    nodes: {
      required: true
    }
  }
};
</script>

<style lang="scss" scoped>

</style>