<template>
  <n-space vertical size="large">
    <n-layout has-sider>
      <n-layout-sider content-style="padding: 24px;">
        <div style="height: 800px">
          <n-menu :options="menuOptions" :default-expanded-keys="defaultExpandedKeys" />
        </div>
      </n-layout-sider>

      <ContentUser />
    </n-layout>
  </n-space>
</template>

<script setup>
import ContentUser from "./ContentUser.vue";
import { h, ref } from "vue";
import { RouterLink } from "vue-router";
import { NIcon } from "naive-ui";
import { Accessibility, LogoYen, MailOpenOutline } from "@vicons/ionicons5";

const meunValueRef = ref(false);

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}
const menuOptions = [
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "user",
            params: {
              lang: "en-US",
            },
          },
        },
        { default: () => "用户信息" }
      ),
    key: "userinfo",
    icon: renderIcon(Accessibility),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "finace",
            params: {
              lang: "en-US",
            },
          },
        },
        { default: () => "财报" }
      ),
    key: "finace",
    icon: renderIcon(LogoYen),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: "order",
            params: {
              lang: "en-US",
            },
          },
        },
        { default: () => "挂单" }
      ),
    key: "order",
    icon: renderIcon(MailOpenOutline),
  },
];
const defaultExpandedKeys = ["userinfo"];
</script>