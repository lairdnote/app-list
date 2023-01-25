

<template>
  <n-config-provider :theme="darkTheme">
    <n-global-style />
    <n-message-provider>
      <router-view></router-view>
  </n-message-provider>
  </n-config-provider>
</template>

<script setup>
import { RouterLink, RouterView } from "vue-router";
import { NConfigProvider, darkTheme } from 'naive-ui'



</script>


<style>
</style>
