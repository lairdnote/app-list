<template>
  <n-data-table
    :columns="buycreateColumns()"
    :data="data"
    :remote=true 
    :pagination="paginationReactive"
  />
</template>>
<script setup>
import { reactive, h , ref, inject, toRaw} from "vue";
import { NButton, treeDark } from "naive-ui";
import { useRouter } from "vue-router";
const emitter = inject('emitter');   // Inject `emitter`
const data = ref([])
const TempData = []
emitter.on('searchdata', (value) => { 
  data.value = []  // *Listen* for event
  toRaw(value).forEach(item => {
    var limitC = item.limit
    var temp = item 
    temp.limit = limitC.down + "-" + limitC.up 
    data.value.push(toRaw(temp))
    
  }) 
  
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