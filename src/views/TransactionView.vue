<template>
  <div>
    <h1>交易流程</h1>

    <n-space vertical>
      <n-steps :current="current" :status="currentStatus">
        <n-step title="等待商家转账给平台">
          <div class="n-step-description">
            <p>1</p>
            <n-button
              v-if="current === 1"
           
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
     
              size="small"
              @click="handleButtonClick"
            >
              Next
            </n-button>
          </div>
        </n-step>
      </n-steps>
    </n-space>
    <div class="box">
      <n-grid x-gap="24" :cols="2" >
        <n-gi>
          <div>
            <h5>聊天信息：</h5>
            <n-input type="textarea" placeholder="" />
            <p></p>
            <n-grid x-gap="12" :cols="2">
              <n-gi class="left">
                <n-input type="text" placeholder="输入内容"    />
              </n-gi>
              <n-gi class="right" >
                <n-button type="info" > 提交 </n-button>
              </n-gi>
            </n-grid>
          </div>
        </n-gi>
        <n-gi>
          <div class="green">卖家信息展示</div>
        </n-gi>
      </n-grid>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from "vue";
import { useRoute } from "vue-router";
const route = useRoute();
const provider = route.params;
console.log(provider);

const currentRef = ref(1);
const currentStatusRef = ref("process");

const current = currentRef;
const currentStatus = currentStatusRef;
const handleButtonClick = () => {
  currentRef.value = (currentRef.value % 4) + 1;
};
</script>


<style scoped>
.light-green {
  height: 200px;
  background-color: rgba(0, 128, 0, 0.12);
}
.green {
  padding-top: 25px;
  margin-top: 25px;
  height: 150px;
  background-color: rgba(0, 128, 0, 0.24);
}

.box {
  display: flex;
  justify-items: center;
  margin: 10 auto;
}
.left {
  float: left;
  justify-items: center;
  width: 150%;
  height: 40%;
}
.right {
  float: right;
  margin-left: 55%;
}
</style>