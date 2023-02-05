
<template>
  <n-card size="huge">
    


    <n-data-table
    :columns="columns"
    :data="data"
    :bordered="false"
  />
  </n-card>
</template>

<script setup>
import { ref } from "vue";
import { useMessage } from "naive-ui";


const message = useMessage();
const columns = ref([
  {
    title: "订单号",
    key: "orderid",
  },
  {
    title: "交易对",
    key: "tradePair",
  },
  {
    title: "操作",
    key: "action",
  },
  {
    title: "数量",
    key: "amount",
  },
  {
    title: "单价",
    key: "price",
  },
  {
    title: "总额",
    key: "count",
  },
  {
    title: "交易方",
    key: "machant",
  }
  ,
  {
    title: "时间",
    key: "date",
  },
  {
    title: "状态",
    key: "status",
  }
])


const data = ref([
  {
    orderid: "000012",
    tradePair: "1",
    action:"购买",
    amount: "1000HDO",
    price: "1.01$",
    count: "1000",
    machant: "jim@163.com",
    date: "2023.01.04",
    status: "等待购买"

  },
  {
    orderid: "000016",
    tradePair: "1",
    action:"购买",
    amount: "1000HDO",
    price: "1.00$",
    count: "1000",
    machant: "jim@163.com",
    date: "2023.01.04",
    status: "等待付款"

  },
  {
    orderid: "000015",
    tradePair: "1",
    action:"购买",
    amount: "1000HDO",
    price: "1.08$",
    count: "1000",
    machant: "jim@163.com",
    date: "2023.01.04",
    status: "完成交易"

  },
  {
    orderid: "000013",
    tradePair: "2",
    action:"出售",
    amount: "1000HDO",
    price: "1.00$",
    count: "1000",
    machant: "jim@163.com",
    date: "2023.01.04",
    status: "等待购买"

  },
])




</script>>



<style scoped>
</style>