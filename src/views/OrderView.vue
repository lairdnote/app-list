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
      
      <n-form-item lable="交易方向" >
        <h3>交易方向</h3>
        <n-radio-group
          v-model:value="model.action"
          style="padding-left: 20px;"
          path="data.action"
          name="action"
          label="交易方向"
        >
          <n-space>
            <n-radio value="buy"> 买 </n-radio>
            <n-radio value="sell"> 卖 </n-radio>
          </n-space>
        </n-radio-group>
      </n-form-item>
      <n-form-item label="币种" >
        <n-select
          v-model:value="model.coin"
          placeholder="请选择"
          path="data.coin"
          :options="CoinOptions"
        />
      </n-form-item>
      <n-form-item label="支付币种" >
        <n-select
          v-model:value="model.paymethodCoin"
          placeholder="请选择"
          path="data.paymethodCoin"
          :options="CoinOptions"
        />
      </n-form-item>
      <n-form-item label="出售总量" >
        <n-input v-model:value="model.total" placeholder="出售总量" path="data.total"/>
      </n-form-item>
      <n-form-item label="单价" >
        <n-input v-model:value="model.price" placeholder="单价" path="data.price"/>
      </n-form-item>
      <n-form-item label="限额" >
        <n-input v-model:value="model.limit" placeholder="限额" path="data.limit"/>
      </n-form-item>
      <n-form-item label="支付方式" >
        <n-select
          v-model:value="model.paymethod"
          placeholder="支付方式"
          path="data.paymethod"
          :options="PaymethodOptions"
        />
      </n-form-item>
      <n-form-item label="备注" >
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
import { defineComponent, toRaw, ref } from "vue";
import { Target } from "vueuc";
import { useMessage } from "naive-ui";
const message = useMessage();
const formRef = ref(null);
const CoinOptions = ["HDO", "USD"].map((v) => ({
  label: v,
  value: v,
}));

const PaymethodOptions = ["支付宝", "PayPal"].map((v) => ({
  label: v,
  value: v,
}));
const size = ref("medium");
const model = ref({
  action: null,
  coin: "",
  paymethodCoin: "",
  total: "",
  price: "",
  limit: "",
  paymethod: "",
  commit: "",
});
const rules = {
  data: {
    action: {
      required: true,
      trigger: "blur",
      message: "交易方向",
    },

    coin: {
      required: true,
      trigger: "blur",
      message: "币种",
    },
    paymethodCoin: {
      required: true,
      trigger: "blur",
      message: "支付币种",
    },
    total: {
      required: true,
      trigger: "blur",
      message: "总量",
    },
    price: {
      required: true,
      trigger: "blur",
      message: "单价",
    },
    limit: {
      required: true,
      trigger: "blur",
      message: "限量",
    },
    paymethod: {
      required: true,
      trigger: "blur",
      message: "支付方式",
    },
    commit: {
      required: true,
      trigger: "blur",
      message: "备注",
    },
  },
};

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
</script>


  <style>
</style>
  