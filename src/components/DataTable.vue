<template>
  <n-data-table
    :columns="buycreateColumns()"
    :data="data"
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
  pageSize: 50,
  showSizePicker: true,
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
    key: "machant",
  },
  {
    title: "币种",
    key: "tradePair",
  },
  {
    title: "单价",
    key: "price",
  },
  {
    title: "所在地",
    key: "country",
  },
  {
    title: "限额",
    key: "limit",
  },

  {
    title: "支付方式",
    key: "payments",
  },
  {
    title: "购买",
    key: "operationType",
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
      operationType: args.row.operationType,
      tradePair: args.row.tradePair,
      limit: args.row.limit,
      country: args.row.country,
      machant: args.row.machant,
      payments: args.row.payments,
      price: args.row.price,
    },
  });
};

const data = [
  {
    adsId: 1000000000023,
    tradePair: 1,
    machant: "abc@163.com",
    country: 1,
    price: 1.08,
    limit: {
      up: 200,
      down: 100,
    },
    payments: [1, 2, 3],
    operationType: 1,
    datetime: "2022-01-16 18:09:35",
  },
];

data.forEach(item => {
  const l = item.limit
  item.limit = l.up + " - "  + l.down
});
console.log(data.length);
</script>>