<template>
  <HeaderNav />
  <div class="dv1">
    <n-grid :x-gap="12" :y-gap="12" :cols="4" layout-shift-disabled>
      <n-gi>
        <div class="light-green" />
      </n-gi>
      <n-gi :span="2">
        <n-card>
          <n-tabs
            class="card-tabs"
            default-value="signin"
            size="large"
            animated
            style="margin: 0 -4px"
            pane-style="padding-left: 4px; padding-right: 4px; box-sizing: border-box;"
          >
            <n-tab-pane name="signin" tab="获取验证码登录">
              <n-form>
                <n-form-item-row>
                  <n-input
                    v-model:value="inputdata"
                    :placeholder="inputLable"
                  />
                </n-form-item-row>
              </n-form>

              <n-button type="primary" block secondary strong @click="getCode">
                {{ buttonText }}
              </n-button>
            </n-tab-pane>
          </n-tabs>
        </n-card>
      </n-gi>
      <n-gi>
        <div class="light-green" />
      </n-gi>
    </n-grid>
  </div>
  <!--
    n-tabs 默认情况下会从 slot 获取默认展示的 tab 值，
    因此会产生一个 vue slot 的 warning。如果你不想看到这个 warning，
    请设定一个 default-value。
  -->
</template>
<style scoped>
.card-tabs .n-tabs-nav--bar-type {
  padding-left: 4px;
}

.light-green {
  height: 108px;
  background-color: transparent;
}
.green {
  height: 108px;
  background-color: transparent;
}
.dv1 {
  height: 350px;
  width: 800px;
  position: absolute;
  text-align: center;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
<script setup>
import HeaderNav from "../components/HeaderNav.vue";
import _service from "../api/index.js";
import { useStore } from "../stores/user";
import { storeToRefs } from "pinia";
import { ref } from "vue";
import router from "../router";
import { useMessage } from "naive-ui";
const message = useMessage();
const user = useStore();

const { sign, email, token, avatar, nickname, userId } = storeToRefs(user);

const inputLable = ref("邮件地址");
const buttonText = ref("输入邮件地址");
const inputdata = ref();

const getCode = (data) => {
  if (user.email === "") {
    user.email = inputdata.value;
  }
  if (user.sign === "") {
    _service.getMailCode({ email: inputdata.value }).then((res) => {
      inputLable.value = "验证码";
      buttonText.value = "登录";
      inputLable.value = "输入验证码";
      inputdata.value = "";
      user.sign = res.data.sign;
    });
  }
  if (user.email !== "" && user.sign !== "") {
    _service
      .getLoginCode({
        email: user.email,
        sign: user.sign,
        code: inputdata.value,
      })
      .then((res) => {
        console.log(res.data);
        user.avatar = res.data.avatar;
        user.nickname = res.data.nickname
        user.userId = res.data.userId
        user.token = res.data.token;
        router.push("/");
      });
  } else {
    message.error("验证码不正确");
  }
};
</script>
