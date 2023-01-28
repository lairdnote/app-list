<template>
  <div>
    <n-grid x-gap="12" :cols="5">
      <n-gi>
        <n-select
          placeholder="所在地"
          v-model:value="localtionValue"
          :options="localtionOptions"
          size="medium"
        />
      </n-gi>
      <n-gi>
        <n-input v-model:value="value" type="text" placeholder="输入数量" />
      </n-gi>
      <n-gi>
        <n-select
          
          placeholder="单价"
          v-model:value="priceValue"
          :options="priceOptions"
          size="medium"
        />
      </n-gi>
      <n-gi>
        <n-select
        
          placeholder="支付方式"
          v-model:value="paymethodVaule"
          :options="paymethodOptions"
          size="medium"
        />
      </n-gi>
      <n-gi>
        <n-button strong secondary type="success">
                提交
    </n-button>
      </n-gi>
    </n-grid>

    
  </div>
</template>

<script setup>
import { ref, toRaw } from "vue";

import { useCountryStore } from "../stores/country";
import { storeToRefs } from "pinia";

const useCountry = useCountryStore()
const country = storeToRefs(useCountry)


const countries = toRaw(country.country.value)

const localtionValue = ref(null);
const numberValue = ref(null)
const priceValue = ref(null)
const paymethodVaule = ref(null)

const localtionOptions = [];

Object.keys(countries).forEach((key) => {
  
  localtionOptions.push({
    label: countries[key],
    value: key,
  });
});


const priceOptions = [
    {label: "1.05",
    value: "1.05"}
]

const paymethodOptions = [
{
    label: "支付宝",
    value: "alipay",
  },
  {
    label: "PayPal",
    value: "paypal",
  },
]

</script>>

<style>
</style>
  