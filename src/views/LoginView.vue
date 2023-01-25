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
            <n-tab-pane name="signin" tab="登录/注册">
              <n-form>
                <n-form-item-row label="邮件地址">
                  <n-input />
                </n-form-item-row>
                <n-form-item-row label="验证码">
                  <n-input />
                </n-form-item-row>
              </n-form>
              <n-button type="primary" block secondary strong> 登录 </n-button>
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
</script>
