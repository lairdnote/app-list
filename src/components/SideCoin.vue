<template>
  <n-space vertical size="large">
    <n-layout has-sider>
      <n-layout-sider content-style="padding: 24px;">

        <n-data-table :columns="columns" :data="data" />
      </n-layout-sider>

      <ContentSide />
    </n-layout>
  </n-space>
</template>

<script setup>
import ContentSide from "./ContentSide.vue";
import { NButton } from "naive-ui";
import _service from "../api/index.js"
import { onMounted, ref , h} from "vue";

const data = ref([])
const columns = [

  {
    title: '交易对',
    key: 'name',
    render(row) {
      return h(
        NButton,
        {
          ghost: true,
          type: "quaternary",
          size: "small",
          onClick: () => Onclick(row),
        },
        { default: () => row.name}
      );
    },
  },

]

onMounted(() => {
  _service.getTradePairList().then((res) => {
    if (res.code === 0 ){
        res.data.forEach(pair => {
          var trade = {}
          trade.key = pair.id 
          trade.name = pair.name
          data.value.push(trade)
        });
    }
  })
})

const Onclick = (row) => {
    console.log(row)
} 

</script>