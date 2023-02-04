<template>
  <div>
    <h1>交易详细流程</h1>

    <n-space vertical>
    <n-steps :current="current" :status="currentStatus">
      <n-step title="等待商家转账给平台">
        <div class="n-step-description">
          <p>1</p>
          <n-button
            v-if="current === 1"
            :type="buttonType"
            size="small"
            @click="handleButtonClick"
          >
            Next
          </n-button>
        </div>
      </n-step>
      <n-step title="询问商家收款帐号">
        <div class="n-step-description">
          <p>2</p>
          <n-button
            v-if="current === 2"
            :type="buttonType"
            size="small"
            @click="handleButtonClick"
          >
            Next
          </n-button>
        </div>
      </n-step>
      <n-step title="给商家付款">
        <div class="n-step-description">
          <p>3</p>
          <n-button
            v-if="current === 3"
            :type="buttonType"
            size="small"
            @click="handleButtonClick"
          >
            Next
          </n-button>
        </div>
      </n-step>
      <n-step title="商家确认收款">
        <div class="n-step-description">
          <p>4</p>
          <n-button
            v-if="current === 4"
            :type="buttonType"
            size="small"
            @click="handleButtonClick"
          >
            Next
          </n-button>
        </div>
      </n-step>
    </n-steps>
  </n-space>
  </div>
</template>

<script setup>
import { ref ,computed} from "vue";
import { useRoute } from 'vue-router';
const route = useRoute();
const provider = route.params;
console.log(provider)



const currentRef = ref(1);
    const currentStatusRef = ref("process");
    


const current = currentRef
const currentStatus = currentStatusRef
const handleButtonClick = () => {
  currentRef.value = currentRef.value % 4 + 1;
}

</script>


<style>
</style>

