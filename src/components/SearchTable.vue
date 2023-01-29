<template>
  <div>
    <n-grid x-gap="12" :cols="5">
      <n-gi>
        <n-select
          placeholder="所在地"
          v-model:value="data.country"
          :options="localtionOptions"
          size="medium"
        />
      </n-gi>
      <n-gi>
        <n-input
          v-model:value="data.amount"
          type="text"
          placeholder="输入数量"
        />
      </n-gi>
      <n-gi>
        <n-input
          v-model:value="data.price"
          type="text"
          placeholder="输入单价"
        />
      </n-gi>
      <n-gi>
        <n-select
          placeholder="支付方式"
          v-model:value="data.payment"
          :options="paymethodOptions"
          size="medium"
        />
      </n-gi>
      <n-gi>
        <n-button strong secondary type="success" @click="submitSearch"> 提交 </n-button>
      </n-gi>
    </n-grid>
  </div>

</template>

<script setup>
import { ref, toRaw } from "vue";

import { useCountryStore } from "../stores/country";
import { constStore } from "../stores/const";
import { storeToRefs } from "pinia";
import _service from "../api";
const consts = constStore();
const { payments } = storeToRefs(consts);
const useCountry = useCountryStore();
const country = storeToRefs(useCountry);
const props = defineProps(["action"]);
//console.log("-------", props.action);
const countries = toRaw(country.country.value);

const localtionOptions = [];

Object.keys(countries).forEach((key) => {
  localtionOptions.push({
    label: countries[key],
    value: key,
  });
});

const data = ref({
  country: "",
  amount: "",
  price: null,
  payment: "",
});

const paymethodOptions = [];

Object.keys(payments.value).forEach((key) => {
  paymethodOptions.push({
    label: payments.value[key],
    value: key,
  });
})

const submitSearch = () => {

  const datas = toRaw(data.value)
  console.log(datas)
  _service.getSearchList({"country": datas.country, "amount": datas.amount, "price": datas.price, "payments": datas.payment}).then((res) => {
    
    emit('data', res.data)
    console.log(res.data)
  })

};
</script>>

<style>
</style>
  