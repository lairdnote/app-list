<template>
  <n-data-table
    :columns="buycreateColumns()"
    :data="data"
    :pagination="paginationReactive"
  />
</template>>
<script setup>
import { reactive, h, ref, inject, onMounted, getCurrentInstance } from "vue";
import { NButton, treeDark } from "naive-ui";
import { useRouter } from "vue-router";
import _service from "../api";
const emitter = inject("emitter"); // Inject `emitter`
const data = ref([]);
var cleandata = [];

emitter.on("searchdata", (querydata) => {
  data.value = null;
  cleandata = [];
  ContactLimit(querydata.data.list);
  emitter.off("searchdata");
});
// 这里有一个issue 数据的处理偶尔要出现问题。特别是limit 这里
const ContactLimit = (resData) => {
  resData.forEach((item) => {
    var itemdata = JSON.stringify(item);
    const op = JSON.parse(itemdata);
    const { limit } = op;
    var limitC = op.limit;
    var temp = item;
    if (typeof limitC === String){
      temp.limit = limitC
    }else{
      temp.limit = limitC.up + " - " + limitC.down;
    }
    cleandata.push(temp);
  });
 
  data.value = cleandata;
  const instance = getCurrentInstance();
  instance?.proxy?.$forceUpdate();
};

onMounted(() => {
  _service
    .getSearchList({
      country: "CN",
      amount: "",
      price: "",
      payments: "",
    })
    .then((res) => {
      ContactLimit(res.data.list);
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