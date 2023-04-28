<template>
  <n-config-provider :theme="darkTheme">

    <HeaderNav />
    <n-message-provider>
      <n-layout-content content-style="padding: 24px;">
        <RouterView />
      </n-layout-content>

      <Footer />
    </n-message-provider>
  </n-config-provider>
</template>
  
<script setup>
import { RouterLink, RouterView } from "vue-router";
import { NConfigProvider, darkTheme } from 'naive-ui'
import HeaderNav from "../../components/HeaderNav.vue";

import Footer from "../../components/Footer.vue";


</script>
  
  
<style></style>
  