<template>
  <div>
    <van-tabs>
      <van-tab title="登录">
        <van-cell-group>
          <van-field label="用户名" required clearable placeholder="请输入用户名" v-model="loginname"></van-field>
          <van-field
            label="密码"
            type="password"
            required
            clearable
            placeholder="请输入密码"
            v-model="loginpassword"
          ></van-field>
        </van-cell-group>
        <div>
          <van-button @click="login" type="primary" size="large">登录</van-button>
        </div>
      </van-tab>
      <van-tab title="注册">
        <van-cell-group>
          <van-field label="用户名" required clearable placeholder="请输入用户名" v-model="registername"></van-field>
          <van-field
            label="密码"
            type="password"
            required
            clearable
            placeholder="请输入密码"
            v-model="registerpassword"
          ></van-field>
        </van-cell-group>
        <div>
          <van-button @click="register" type="primary" size="large">注册</van-button>
        </div>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import axios from "axios";
import url from "../service.config";
import {mapActions} from 'vuex';
export default {
  data() {
    return {
      loginname: "",
      loginpassword: "",
      registername: "",
      registerpassword: ""
    };
  },
  methods: {
    ...mapActions(['loginAction']),     
    login() {
      axios({
        url: url.loginUser,
        method: "post",
        data: {
          userName: this.loginname,
          password: this.loginpassword
        }
      })
        .then(res => {
          // console.log(res);
          if (res.data.code == 200) {
            this.$toast.success("登录成功");
            this.loginAction(res.data.userInfo);
            this.$router.go(-1);
          } else if(res.data.code == 202){
            this.$toast.fail("密码错误");
          }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
          this.$toast.fail("登录失败");
        });
    },
    register() {
      axios({
        url: url.registerUser,
        method: "post",
        data: {
          userName: this.registername,
          password: this.registerpassword
        }
      })
        .then(res => {
          // console.log(res);
          if (res.data.code == 200) {
            this.$toast.success("注册成功");
            this.registername = "";
            this.registerpassword = "";
          } else {
            this.$toast.fail("注册失败");
          }
          console.log(res);
        })
        .catch(err => {
          console.log(err);
          this.$toast.fail("注册失败");
        });
    }
  }
};
</script>

<style lang="scss" scoped>
</style>