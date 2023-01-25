<template>
  <n-space vertical size="large">
    <n-layout has-sider>
      <n-layout-sider content-style="padding: 24px;">
        <div style="height: 800px">
          <n-menu
            :options="menuOptions"
            :default-expanded-keys="defaultExpandedKeys"
          />
        </div>
      </n-layout-sider>

      <!-- <ContentSide />
        -->
    </n-layout>
  </n-space>
</template>

<script setup>
// import { ContentSide } from '../components/ContentSide.vue'
import { defineComponent, h, ref } from "vue";
import { RouterLink, RouterView } from "vue-router";
import { NIcon } from "naive-ui";
import {
  Accessibility,
  LogoYen,
  MailOpenOutline,
  ArrowUndo,
  ArrowRedo,
  ReorderFour,
} from "@vicons/ionicons5";

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
            name: 'profile',
            params: {
              lang: 'en-US'
            }
          }
        },
        { default: () => '用户信息' }
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
            name: 'business',
            params: {
              lang: 'en-US'
            }
          }
        },
        { default: () => '财报' }
      ),
    key: "business",
    icon: renderIcon(LogoYen),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: '',
            params: {
              lang: 'en-US'
            }
          }
        },
        { default: () => '挂单' }
      ),
    key: "order",
    icon: renderIcon(MailOpenOutline),
    children: [
      {
        label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'pbuy',
            params: {
              lang: 'en-US'
            }
          }
        },
        { default: () => '买单' }
      ),
        key: "buy",
        icon: renderIcon(ArrowUndo),
      },
      {
        label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'psell',
            params: {
              lang: 'en-US'
            }
          }
        },
        { default: () => '卖单' }
      ),
        key: "sell",
        icon: renderIcon(ArrowRedo),
      },
    ],
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'porderlist',
            params: {
              lang: 'en-US'
            }
          }
        },
        { default: () => '订单' }
      ),
    key: "orderlist",
    icon: renderIcon(ReorderFour),
  },
];
const defaultExpandedKeys = ["userinfo"];

</script>