<template>
  <n-data-table
    :columns="buycreateColumns()"
    :data="buydata"
    :pagination="paginationReactive"
  />
</template>>

<script setup>
import { reactive, h } from "vue";
import { NButton } from "naive-ui";
import { useRouter } from "vue-router";

const router = useRouter();

const paginationReactive = reactive({
  page: 1,
  pageSize: 15,
  showSizePicker: true,
  pageSizes: [15, 20, 30],
  onChange: (page) => {
    paginationReactive.page = page;
  },
  onUpdatePageSize: (pageSize) => {
    paginationReactive.pageSize = pageSize;
    paginationReactive.page = 1;
  },
});

const buycreateColumns = () => [
  {
    title: "商家",
    key: "orderName",
  },
  {
    title: "币种",
    key: "buyCoin",
  },
  {
    title: "单价",
    key: "price",
  },
  {
    title: "所在地",
    key: "localtion",
  },
  {
    title: "限额",
    key: "limitNum",
  },

  {
    title: "支付方式",
    key: "payMethod",
  },
  {
    title: "购买",
    key: "action",
    render(row) {
      return h(
        NButton,
        {
          type: "success",
          size: "small",
          onClick: () => sendMail({ row }),
        },
        { default: () => "购买" }
      );
    },
  },
];

const sendMail = (args) => {
  console.log("-----", args);
  router.push({
    path: "/trade",
    name: "trade",
    params: {
      action: args.row.action,
      buyCoin: args.row.buyCoin,
      limitNum: args.row.limitNum,
      localtion: args.row.localtion,
      orderName: args.row.orderName,
      payMethod: args.row.payMethod,
      price: args.row.price,
    },
  });
};

const buydata = [
  {
    orderName: "abcd1",
    buyCoin: "HDO",
    price: "1.05",
    localtion: "香港",
    limitNum: "20-500USD",
    payMethod: "paypal",
    action: "购买",
  },
  {
    orderName: "abcd2",
    buyCoin: "HDO",
    price: "1.05",
    localtion: "香港",
    limitNum: "20-500USD",
    payMethod: "paypal",
    action: "购买",
  },
  {
    orderName: "abcd3",
    buyCoin: "HDO",
    price: "1.05",
    localtion: "香港",
    limitNum: "20-500USD",
    payMethod: "paypal",
    action: "购买",
  },
  {
    orderName: "abcd4",
    buyCoin: "HDO",
    price: "1.05",
    localtion: "香港",
    limitNum: "20-500USD",
    payMethod: "paypal",
    action: "购买",
  },
  {
    orderName: "abcd5",
    buyCoin: "HDO",
    price: "1.05",
    localtion: "香港",
    limitNum: "20-500USD",
    payMethod: "paypal",
    action: "购买",
  },
  {
    orderName: "abcd6",
    buyCoin: "HDO",
    price: "1.05",
    localtion: "香港",
    limitNum: "20-500USD",
    payMethod: "paypal",
    action: "购买",
  },
  {
    orderName: "abcd7",
    buyCoin: "HDO",
    price: "1.05",
    localtion: "香港",
    limitNum: "20-500USD",
    payMethod: "paypal",
    action: "购买",
  },
  {
    orderName: "abcd8",
    buyCoin: "HDO",
    price: "1.05",
    localtion: "香港",
    limitNum: "20-500USD",
    payMethod: "paypal",
    action: "购买",
  },
  {
    orderName: "abcd9",
    buyCoin: "HDO",
    price: "1.05",
    localtion: "香港",
    limitNum: "20-500USD",
    payMethod: "paypal",
    action: "购买",
  },
  {
    orderName: "abcd10",
    buyCoin: "HDO",
    price: "1.05",
    localtion: "香港",
    limitNum: "20-500USD",
    payMethod: "paypal",
    action: "购买",
  },
  {
    orderName: "abcd",
    buyCoin: "HDO",
    price: "1.05",
    localtion: "香港",
    limitNum: "20-500USD",
    payMethod: "paypal",
    action: "购买",
  },
  {
    orderName: "abcd",
    buyCoin: "HDO",
    price: "1.05",
    localtion: "香港",
    limitNum: "20-500USD",
    payMethod: "paypal",
    action: "购买",
  },
  {
    orderName: "abcd",
    buyCoin: "HDO",
    price: "1.05",
    localtion: "香港",
    limitNum: "20-500USD",
    payMethod: "paypal",
    action: "购买",
  },
  {
    orderName: "abcd",
    buyCoin: "HDO",
    price: "1.05",
    localtion: "香港",
    limitNum: "20-500USD",
    payMethod: "paypal",
    action: "购买",
  },
  {
    orderName: "abcd",
    buyCoin: "HDO",
    price: "1.05",
    localtion: "香港",
    limitNum: "20-500USD",
    payMethod: "paypal",
    action: "购买",
  },
  {
    orderName: "abcd",
    buyCoin: "HDO",
    price: "1.05",
    localtion: "香港",
    limitNum: "20-500USD",
    payMethod: "paypal",
    action: "购买",
  },
  {
    orderName: "abcd",
    buyCoin: "HDO",
    price: "1.05",
    localtion: "香港",
    limitNum: "20-500USD",
    payMethod: "paypal",
    action: "购买",
  },
];
console.log(buydata.length)
</script>>