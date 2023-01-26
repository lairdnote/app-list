<template>
  <div class="about">
    <h1>发布挂单</h1>

    <n-form
      ref="formRef"
      :label-width="80"
      :model="model"
      :rules="rules"
      :size="size"
    >
      <n-form-item label="币种">
        <n-select
          v-model:value="model.tradePair"
          placeholder="请选择"
          path="data.coin"
          :options="tradePairOptions"
          @update:value="handleSelect"
        />
      </n-form-item>
      <n-form-item label="支付币种">
        <n-tag :bordered="false" type="success"> {{ paycoin }}</n-tag>
      </n-form-item>
      <n-form-item label="出售总量">
        <n-input
          v-model:value="model.total"
          placeholder="出售总量"
          path="data.total"
        />
      </n-form-item>
      <n-form-item label="单价">
        <n-input
          v-model:value="model.price"
          placeholder="单价"
          path="data.price"
        />
      </n-form-item>
      <n-form-item label="限额">
        <n-input
          v-model:value="model.limit"
          placeholder="限额"
          path="data.limit"
        />
      </n-form-item>
      <n-form-item label="支付方式">
        <n-select
          v-model:value="model.paymethod"
          placeholder="支付方式"
          path="data.paymethod"
          :options="paymethodOptions"
        />
      </n-form-item>
      <n-form-item label="备注">
        <n-input
          v-model:value="model.commit"
          type="textarea"
          path="data.commit"
          placeholder="请留言给对方"
        />
      </n-form-item>
      <n-form-item>
        <n-button attr-type="button" @click="handleValidateClick">
          提交
        </n-button>
      </n-form-item>
    </n-form>
  </div>
</template>
  
<script setup>
import { ref, toRaw } from "vue";
import { constStore } from "../stores/const";
import { useMessage } from "naive-ui";
import { storeToRefs } from "pinia";

const refStore = storeToRefs(constStore());
const message = useMessage();
const formRef = ref(null);
console.log(refStore.fee.value);
const tradePairtoRaw = toRaw(refStore.tradePair.value);
const paycoin = ref("");

const tradePairOptions = [];
Object.keys(tradePairtoRaw).forEach((key) => {
  console.log(key, tradePairtoRaw[key]);
  tradePairOptions.push({
    label: tradePairtoRaw[key],
    value: key,
  });
});
const paymentstoRaw = toRaw(refStore.payments.value);
const paymethodOptions = [];
Object.keys(paymentstoRaw).forEach((key) => {
  console.log(key, paymentstoRaw[key]);
  paymethodOptions.push({
    label: paymentstoRaw[key],
    value: key,
  });
});
const size = ref("medium");
const model = ref({
  tradePair: "",
  amount: "",
  price: "",
  payment: "",
  contry: "",
  remark: "",
});
const rules = {};

const handleValidateClick = (e) => {
  e.preventDefault();
  formRef.value?.validate((errors) => {
    if (!errors) {
      message.success("Valid");
    } else {
      console.log(errors);
      message.error("Invalid");
    }
  });
};

const handleSelect = (e) => {
  console.log(e);
  const action = tradePairtoRaw[e].split("/");
  paycoin.value = action[0];
};
</script>


<style>
</style>
  