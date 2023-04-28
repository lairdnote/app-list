<template>
  <n-card title="交易区" style="margin-bottom: 16px">
    <n-tabs type="line" animated>
      <!-- 搜索区 -->

      <n-tab-pane name="buy" tab="购买">
        <n-card title="搜索" style="margin-bottom: 16px">

        </n-card>

      </n-tab-pane>
      <n-tab-pane name="sell" tab="出售">
        <n-card title="搜索" style="margin-bottom: 16px">
    
        </n-card>

      </n-tab-pane>
    </n-tabs>
  </n-card>
</template>

<script setup>


import { ref, inject, toRaw } from "vue";
const buyaction = ref("buy");
const sellaction = ref("sell");
const cleandata = ref()

const data = ref([]);
</script>