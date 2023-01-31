<template>
  <n-data-table
    :columns="buycreateColumns()"
    :data="data"
    :pagination="paginationReactive"
  />
</template>>
<script setup>
import {
  reactive,
  h,
  ref,
  toRef,
  inject,
  toRaw,
  onMounted,
  onUnmounted,
} from "vue";
import { NButton, treeDark } from "naive-ui";
import { useRouter } from "vue-router";
import _service from "../api";
const emitter = inject("emitter"); // Inject `emitter`
const data = ref([]);
var dataLenght = 0;
emitter.on("searchdata", (res) => {
  const datalist =  res.data.list
  datalist.forEach((item) => {
    const limitC = item.limit.up + " - " + item.limit.down;
    let temp = item;
    temp.limit = limitC;
    cleandata.value.push(toRaw(temp));
  });

  data.value = cleandata.value;
  dataLenght = data.value.length;
});

onMounted(() => {
  _service
    .getSearchList({
      country: "CN",
      amount: "",
      price: "",
      payments: "",
    })
    .then((res) => {
      res.data.list.forEach((item) => {
        const limitC = item.limit.up + " - " + item.limit.down;
        let temp = item;
        temp.limit = limitC;
        data.value.push(toRaw(temp));
      });
    });
});

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
</script>