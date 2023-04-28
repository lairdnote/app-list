<template>
  <header>
    <n-space vertical size="large">
      <n-layout has-sider content-style="padding: 24px;">
        <n-layout-header class="box">
          <n-space class="left">

            <RouterLink to="/">
              <n-button quaternary type="primary">首页</n-button>
            </RouterLink>

            <RouterLink to="/app">
              <n-button quaternary type="primary">App</n-button>
            </RouterLink>
            <RouterLink to="/导航">
              <n-button quaternary type="primary">
                帮助中心
              </n-button>
            </RouterLink>
          </n-space>

          <n-space class="right">
            <RouterLink to="/about">
              <n-button quaternary type="primary" size="large">通知</n-button>
            </RouterLink>

            <div v-if="isLogin === true">
              <n-dropdown :options="options" trigger="click" @select="handleSelect">
                <n-avatar
                size="medium"
                round
                 :src="avatarsrc">
                </n-avatar>
              </n-dropdown>
            </div>
            <div v-else>
              <n-button quaternary type="primary" size="large" @click="loginpage">登录</n-button>
            </div>
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
  margin-left: 60%;
}
</style>
<script setup>
import { h, ref } from "vue";
import { NIcon, useMessage } from "naive-ui";
import { useRouter } from "vue-router";
import { getActivePinia, storeToRefs } from "pinia";

import {
  PersonCircleOutline as UserIcon,
  LogOutOutline as LogoutIcon,
} from "@vicons/ionicons5";

import _service from "../api/index.js";
import { useCountryStore } from "../stores/country";
import { useStore } from "../stores/user";

const country = useCountryStore();
const user = useStore();
const getUser = storeToRefs(user);
const isLogin = ref(false);
const avatarsrc = ref("https://gw.alipayobjects.com/zos/antfincdn/aPkFc8Sj7n/method-draw-image.svg")
if (getUser.token.value !== "") {
  isLogin.value = true;
}

_service.getCountryCode({ language: "CN" }).then((res) => {
  if (res.code == 0) {
    country.country = res.data;
  }
});

const router = useRouter();

const message = useMessage();
const renderIcon = (icon) => {
  return () => {
    return h(NIcon, null, {
      default: () => h(icon),
    });
  };
};
const options = [
  {
    label: "用户资料",
    key: "/profile/user",
    icon: renderIcon(UserIcon),
  },
  {
    label: "退出登录",
    key: "/logout",
    icon: renderIcon(LogoutIcon),
  },
];
const handleSelect = (key) => {
  if (key === "/logout") {
    getActivePinia()._s.forEach((store) => store.$reset());
  } else {
    router.push(key);
  }
};

const loginpage = () => {
  router.push("login");
};
</script>
