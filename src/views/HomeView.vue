<template>

  <n-card title="交易区" style="margin-bottom: 16px">
    <n-tabs type="line" animated>
      <!-- 搜索区 -->
     
      <n-tab-pane name="buy" tab="购买">
        <n-card title="搜索" style="margin-bottom: 16px">
<SearchTableVue :action="buyaction"/>
</n-card>
        <BuyTableVue />
      </n-tab-pane>
      <n-tab-pane name="sell" tab="出售">   
        <n-card title="搜索" style="margin-bottom: 16px">
<SearchTableVue :action="sellaction"/>
</n-card>   
        <SellTableVue />
      </n-tab-pane>

    </n-tabs>
  </n-card>
 
</template>

<script setup>

import BuyTableVue from '../components/BuyTable.vue';
import SellTableVue from '../components/SellTable.vue';
import SearchTableVue from '../components/SearchTable.vue';

import {ref } from 'vue'
const buyaction = ref("buy")
const sellaction = ref("sell")
</script>