
<template>
  <n-card size="huge">
    财报页面

    <h3>USD 总收入：</h3>
    <n-data-table :columns="columns" :data="dollardata" :bordered="false" />

    <h3>HDO 总收入：</h3>
    <n-data-table :columns="columns" :data="hdodata" :bordered="false" />
  </n-card>
</template>
<script setup>
import { ref } from "vue";
import { useMessage } from "naive-ui";


const columns = ref([
  {
    title: "年度",
    key: "year"
  },
  {
    title: "收入",
    key: "length"
  }])

const dollardata = ref([
  {
    year: 2021,
    length: "$3000"
  }, {
    year: 2022,
    length: "$1000"
  }
])

const hdodata = ref([
  {
    year: 2021,
    length: "$300"
  }, {
    year: 2022,
    length: "$1100"
  }
])


const message = useMessage();


</script>>

<style>

</style>