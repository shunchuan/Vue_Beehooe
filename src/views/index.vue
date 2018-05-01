
<template>
    <Layout style="height:100%">
        <Header theme="light">
             <t-header>
             </t-header>
        </Header>
        <Layout>
             <Sider ref="side1"  width="270">
                <nav-bar>
                    <Menu active-name="1-2" theme="dark" width="auto"  :open-names="['1']">
                    <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                            <span>  Item 1</span>
                            </template>
                            <MenuItem name="1-1">Option 1</MenuItem>
                            <MenuItem name="1-2">Option 2</MenuItem>
                            <MenuItem name="1-3">Option 3</MenuItem>
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                Item 2
                            </template>
                            <MenuItem name="2-1">Option 1</MenuItem>
                            <MenuItem name="2-2">Option 2</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                Item 3
                            </template>
                            <MenuItem name="3-1">Option 1</MenuItem>
                            <MenuItem name="3-2">Option 2</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                Item 3
                            </template>
                            <MenuItem name="3-1">Option 1</MenuItem>
                            <MenuItem name="3-2">Option 2</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                Item 3
                            </template>
                            <MenuItem name="3-1">Option 1</MenuItem>
                            <MenuItem name="3-2">Option 2</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                Item 3
                            </template>
                            <MenuItem name="3-1">Option 1</MenuItem>
                            <MenuItem name="3-2">Option 2</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                Item 3
                            </template>
                            <MenuItem name="3-1">Option 1</MenuItem>
                            <MenuItem name="3-2">Option 2</MenuItem>
                        </Submenu>
                        <Submenu name="3">
                            <template slot="title">
                                <Icon type="ios-analytics"></Icon>
                                Item 3
                            </template>
                            <MenuItem name="3-1">Option 1</MenuItem>
                            <MenuItem name="3-2">Option 2</MenuItem>
                        </Submenu>
                    </Menu>
                </nav-bar>
            </Sider>
            <Layout>             
                    <Breadcrumb >
                        <BreadcrumbItem>Home</BreadcrumbItem>
                        <BreadcrumbItem>Components</BreadcrumbItem>
                        <BreadcrumbItem>Layout</BreadcrumbItem>
                    </Breadcrumb>
                
                <Content :style="{padding: '24px', minHeight: '280px', background: '#fff'}">
                    Content
                </Content>
            </Layout>
        </Layout>
    </Layout>
</template>
<script>
import THeader from "../components/header/THeader";
import NavBar from "../components/navbar/NavBar";
export default {
  name: "index",
  data() {
    return {
      isCollapsed: false
    };
  },
  components: {
    THeader,
    NavBar
  },
  computed: {},
  methods: {}
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
</style>