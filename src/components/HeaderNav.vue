<template>
  <header>
    <n-space vertical size="large">
      <n-layout has-sider content-style="padding: 24px;">
        <n-layout-header class="box">
          <n-space class="left">
            <RouterLink to="/">
              <n-avatar
                size="medium"
                src="/src/assets/big_hdo_logo.png"
                class="logo"
              ></n-avatar>
            </RouterLink>

            <RouterLink to="/">
              <n-button quaternary type="primary">首页</n-button></RouterLink
            >

            <RouterLink to="/order">
              <n-button quaternary type="primary"> 挂单 </n-button></RouterLink
            >
            <RouterLink to="/about">
              <n-button quaternary type="primary">
                帮助中心
              </n-button></RouterLink
            >
          </n-space>

          <n-space class="right">
            <RouterLink to="/about">
              <n-button quaternary type="primary" size="large"
                >通知</n-button
              ></RouterLink
            >

            <RouterLink to="/login">
              <n-dropdown :options="options" trigger="click" @select="handleSelect">
                <n-button>用户资料</n-button>
              </n-dropdown>
              <!-- 
              <n-button quaternary type="primary" size="large"
                >登录</n-button
              >
              -->
            </RouterLink>
          </n-space>
        </n-layout-header>
      </n-layout>
    </n-space>
  </header>
</template>
<script setup>
</script>
<style>
.box {
  display: flex;
  justify-items: center;
  margin: 10 auto;
}
.left {
  float: left;
  justify-items: center;
  width: 30%;
  height: 40%;
}
.right {
  float: right;
  margin-left: 55%;
}
</style>
<script setup>
import { h, defineComponent } from "vue";
import { NIcon , useMessage} from "naive-ui";
import {
  PersonCircleOutline as UserIcon,
  Pencil as EditIcon,
  LogOutOutline as LogoutIcon
} from "@vicons/ionicons5";

const message = useMessage()
const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon)
    });
  };
};
const  options = [
        {
          label: "用户资料",
          key: "profile",
          icon: renderIcon(UserIcon)
        },
        {
          label: "编辑用户资料",
          key: "editProfile",
          icon: renderIcon(EditIcon)
        },
        {
          label: "退出登录",
          key: "logout",
          icon: renderIcon(LogoutIcon)
        }
      ]
const handleSelect = (key) => {
  message.info(String(key));
}
</script>
