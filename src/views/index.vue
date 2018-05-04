
<template>
    <Layout style="height:100%">
        <Header theme="light">
             <t-header>
             </t-header>
        </Header>
        <Layout>
             <Sider ref="side1"  width="270">
                <nav-bar>
                    <Menu 
                        active-name="1-2" 
                        theme="dark" 
                        width="auto"  
                        :open-names="['1']"
                        @on-select="handleChange"
                    >
                        <Submenu v-for="(item, index) in menu " :key="index">
                            <template slot="title">
                                <Icon :type="item.icon"></Icon>
                                <span>{{item.title}}</span>
                            </template>
                            <MenuItem 
                                v-for="(childrenItem,oindex) in item.children " 
                                :key="oindex"
                                :name="childrenItem.name"
                                >{{childrenItem.title}}
                             </MenuItem>
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
import Api from "../libs/axios/api";
import api from "../libs/axios/api";
export default {
  name: "index",
  data() {
    return {
      isCollapsed: false,
      menu: []
    };
  },
  components: {
    THeader,
    NavBar
  },
  beforeMount() {
    this.getMenu();
  },

  computed: {},
  methods: {
    async getMenu() {
      let url = "../src/assets/json/menulist.json";
      let result = await Api().getJsonApi(url);
      this.menu = result.data;
    },
    handleChange(name) {
        this.$router.push({
          name: name
        });
    }
  }
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