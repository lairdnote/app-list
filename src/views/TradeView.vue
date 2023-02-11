<template>
  <div class="trade">
    <n-space vertical>
      <h2>{{ provider.action }}</h2>

      <n-card title="数量" style="margin-bottom: 16px">
        <h5>所有交易都是以美元计算</h5>

        <n-input type="text" size="large" v-model:value="model.amount" @change="handleInputChange" />
        <h5>购买限额是 {{ provider.limit }} 请输入这个区间</h5>
        <h4>单价</h4>
        <n-input type="text" size="large" :value="provider.price" :disabled="true" v-model:value="model.price" />
        <h4>商户所在地</h4>
        <n-input type="text" size="large" :value="countries[provider.country]" :disabled="true" />
        <h4>手续费</h4>
        <n-input type="text" size="large" default-value="$10" :disabled="true" />
        <h4>交易总额</h4>
        <n-input type="text" size="large" placeholder="等待计算" v-model:value="model.total" :disabled="true" />
        <h5>计算方式: {{ model.amount }} * {{ model.price }} + {{ model.fee }} </h5>
        <h4>支付方式</h4>

        <p>{{ Paymentsoptions[pay] }}</p>
      </n-card>
      <n-button strong secondary type="success" @click="sendTransactionView">提交</n-button>
    </n-space>
  </div>
</template>
  
<script setup>
import { useRoute, useRouter } from "vue-router";
import { ref, toRaw } from "vue";
import { storeToRefs } from "pinia";
import { useCountryStore } from "../stores/country";
import { useMessage } from "naive-ui";
const message = useMessage();
const router = useRouter();
const route = useRoute();
const provider = route.params;

const useCountry = useCountryStore();
const country = storeToRefs(useCountry);

const countries = toRaw(country.country.value);

const Paymentsoptions = { 1: "支付宝", 2: "paypal", 3: "weChat" };
const pay = provider.payments[0];



const model = ref({
  amount: null,
  price: null,
  country: null,
  limit: null,
  fee: null,
  total: null,
  payment: null
})

model.value.price = provider.price
model.value.country = provider.country
model.value.fee = 10


const handleInputChange = () => {

  const floatTotal = parseInt(model.value.amount) * parseFloat(model.value.price) + parseInt(model.value.fee)
  model.value.total = String(floatTotal.toFixed(2))
}



const sendTransactionView = () => {
  console.log(model.value);
  router.push({
    path: "/transaction",
    name: "transaction",
    params: {
      amount: model.value.amount,
      price: model.value.price,
      country: model.value.country,
      fee: model.value.fee,
      total: model.value.total,
      payment: provider.payments[0]

    },
  });
};

</script>