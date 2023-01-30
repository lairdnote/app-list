<template>

  <n-card title="交易区" style="margin-bottom: 16px">
    <n-tabs type="line" animated>
      <!-- 搜索区 -->
     
      <n-tab-pane name="buy" tab="购买">
        <n-card title="搜索" style="margin-bottom: 16px">
<SearchTableVue :action="buyaction"/>
</n-card>
        <DataTable />
      </n-tab-pane>
      <n-tab-pane name="sell" tab="出售">   
        <n-card title="搜索" style="margin-bottom: 16px">
<SearchTableVue :action="sellaction"/>
</n-card>   
<DataTable :searchData="data" :v-model="data" :renderComponent=true />
</n-tab-pane>
   
    </n-tabs>
  </n-card>
 
</template>

<script setup>

import DataTable from '../components/DataTable.vue';
import SearchTableVue from '../components/SearchTable.vue';

import {ref, inject, toRaw } from 'vue'
const buyaction = ref("buy")
const sellaction = ref("sell")
const data = ref([])


</script>