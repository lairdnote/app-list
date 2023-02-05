<template>
  <div>
    <h1>交易规则</h1>

    <div>
      <h1>咨询&投诉</h1>
      <n-space>
      <n-dropdown :options="options" @select="handleSelect">
        <n-button>{{ type }}</n-button>
      </n-dropdown>
      </n-space>
      <h3>内容：</h3>
      <n-input
     
      type="textarea"
      placeholder="基本的 Textarea"
    />
    <n-button type="success" style="padding: 15px 32px;margin-top:20px">
      提交
    </n-button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
const type=ref("问题类型")

const options = [
  {
    label: "交易",
    key: "transaction",
  },
  {
    label: "规则",
    key: "rule",
  },
];

const handleSelect = (key) => {
  options.forEach((item) => {
    if(item.key === key){
      type.value = item.label
    }
  })

}

</script>


<style>
</style>
