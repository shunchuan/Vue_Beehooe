
<template>
    <Layout style="height:100%">
        <Sider>
            <side-bar></side-bar>
        </Sider>
        <Layout>
            <Header class="header">
                <t-header></t-header>
            </Header>
            <Content class="content">4545</Content>
        </Layout>
    </Layout>
</template>
<script>
import SideBar from "../components/sideBar/SideBar";
import THeader from "../components/header/THeader";
export default {
  name: "index",
  components: {
    SideBar,
    THeader
  },
  methods: {
    handleStart() {
      this.$Modal.info({
        title: "Bravo",
        content: "Now, enjoy the convenience of iView."
      });
    }
  }
};
</script>

<style scoped>

.content{
    background-color: #ececec;
    z-index: 100;
}

.header {
    padding: 0;
}
</style>