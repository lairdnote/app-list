<template>
  <n-config-provider :theme="darkTheme">
    <HeaderNav />
    <n-message-provider>
<SideProfile />
      <Footer />
    </n-message-provider>
  </n-config-provider>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
import { NConfigProvider, darkTheme } from "naive-ui";
import HeaderNav from "../../components/HeaderNav.vue";
import Footer from "../../components/Footer.vue";
import SideProfile from "../SideProfile.vue";

</script>
  
  
  <style>
</style>

<style scoped>
.light-green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  height: 108px;
  background-color: rgba(0, 128, 0, 0.24);
}
</style>