<template>
  <div class="trade">
    <n-space vertical>
      <h2>{{ provider.action }}</h2>

      <n-card title="数量" style="margin-bottom: 16px">
        <h5>所有交易都是以美元计算</h5>

        <n-input type="text" size="large" default-value="0" />
        <h5>购买限额是 {{ provider.limit }} 请输入这个区间</h5>
        <h4>单价</h4>
        <n-input
          type="text"
          size="large"
          :value="provider.price"
          :disabled="true"
        />
        <h4>商户所在地</h4>
        <n-input
          type="text"
          size="large"
          default-value="香港"
          :disabled="true"
        />
        <h4>手续费</h4>
        <n-input
          type="text"
          size="large"
          default-value="$10"
          :disabled="true"
        />
        <h4>交易总额</h4>
        <n-input
          type="text"
          size="large"
          default-value="$100"
          :disabled="true"
        />
        <h4>支付方式</h4>
        <n-dropdown
          trigger="hover"
          :options="options"
          @select="handleSelect"
          default-vaule="paypal"
        >
          <n-button>请选择</n-button>
        </n-dropdown>
        <p>支付方式是： {{ paymethods }}</p>
      </n-card>
      <n-button strong secondary type="success">提交</n-button>
    </n-space>
  </div>
</template>
  
<script setup>
import { useRoute } from "vue-router";
import { ref } from "vue";
import { useMessage } from "naive-ui";
const message = useMessage();

const route = useRoute();
const provider = route.params;
console.log(route.params);
// 接口获取支付方式
const options = [
  {
    label: "支付宝",
    key: "alipay",
  },
  {
    label: "paypal",
    key: "paypal",
  },
];

const paymethods = ref("空");
const handleSelect = (key) => {
  paymethods.value = String(key);
  message.info(String(key));
};
</script>