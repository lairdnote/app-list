<template>
  <n-space vertical size="large">
    <n-layout has-sider>
      <n-layout-sider content-style="padding: 24px;"> 
        
        <n-data-table :columns="columns" :data="data" :pagination="pagination" />
      </n-layout-sider>
      
      <ContentSide />
    </n-layout>
  </n-space>
</template>

<script setup>
import  ContentSide  from "./ContentSide.vue";

const columns = [

  {
    title: '交易对',
    key: 'name'
  }

]


const data = [
  {
    key: 0,
    name: "USD/HDO"

  }, 
  /* {
    key: 1,
    name: "USD/HCN"

  } 
  */
]
</script>