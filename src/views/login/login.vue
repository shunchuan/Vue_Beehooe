<style lang="less">
@import "./login.less";
</style>

<template>
    <div class="login" @keydown.enter="handleSubmit">
        <div class="login-con">
            <Card :bordered="false">
                <p slot="title">
                    <Icon type="log-in"></Icon>
                    欢迎登录
                </p>
                <div class="form-con">
                    <Form ref="loginForm" :model="form" :rules="rules">
                        <FormItem prop="userName">
                            <Input v-model="form.userName" placeholder="请输入用户名">
                                <span slot="prepend">
                                    <Icon :size="16" type="person"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem prop="password">
                            <Input type="password" v-model="form.password" placeholder="请输入密码">
                                <span slot="prepend">
                                    <Icon :size="14" type="locked"></Icon>
                                </span>
                            </Input>
                        </FormItem>
                        <FormItem>
                            <Button @click="handleSubmit" type="primary" long>登录</Button>
                        </FormItem>
                    </Form>
                    <p class="login-tip">输入任意用户名和密码即可</p>
                </div>
            </Card>
        </div>
    </div>
</template>

<script>
import Cookies from "js-cookie";
import common from "../../libs/common";
import util from "../../libs/util";
import Api from "../../libs/axios/api";
import config from "../../libs/config";
import localStorageHelper from "../../libs/localStorageHelper";
export default {
  data() {
    return {
      form: {
        userName: "admin",
        password: ""
      },
      rules: {
        userName: [
          { required: true, message: "账号不能为空", trigger: "blur" }
        ],
        password: [{ required: true, message: "密码不能为空", trigger: "blur" }]
      }
    };
  },
  methods: {
    handleSubmit() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          Cookies.set("user", this.form.userName);
          Cookies.set("password", this.form.password);
          this.getRouter();
          this.$router.push({
            name: "home"
          });
        }
      });
    },
    getRouter() {
      let routerUrl = "../src/assets/json/router.json";
      Api.getJsonApi(routerUrl).then(result => {
        let rout = result.data;
        // let routers = common.routerFormat(rout);
        let routers = [];
        common.newRouterFormat(routers, rout);
        this.$router.addRoutes(routers);
        localStorageHelper.set("setLoadRouters", JSON.stringify(rout));
      });
    }
  }
};
</script>

<style>

</style>
