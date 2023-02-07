<template>
  <n-layout-footer>
    <footer class="footer">
      <n-grid x-gap="12" :cols="4">
        <n-gi>
          <div class="word-center">
          <p>© 2023 No rights reserved.</p>
          </div>
        </n-gi>
        <n-gi>
          <div class="word-center">
          <RouterLink to="/">
              <n-button quaternary type="primary"> 购买 </n-button></RouterLink
            >
            <RouterLink to="/">
              <n-button quaternary type="primary"> 出售 </n-button></RouterLink
            >
          </div>
        </n-gi>
        <n-gi>
          <div class="word-center">
          <RouterLink to="/about">
              <n-button quaternary type="primary"> 交易规则 </n-button></RouterLink
            >
            <RouterLink to="/about">
              <n-button quaternary type="primary"> 投诉&咨询 </n-button></RouterLink
            >
          </div>
        </n-gi>
        <n-gi>
          <div class="word-center">
          <RouterLink to="/about">
              <n-button quaternary type="primary"> 关于我们 </n-button></RouterLink
            >
            </div>
        </n-gi>
      </n-grid>
    </footer>
  </n-layout-footer>
</template>

<script setup>
</script>>

<style>
.footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  /* height: 2.5rem; /* Footer height */
  height: 108px;
  background-color: rgba(160, 160, 160, 0.12);
}
.word-center {
  display: flex;
  justify-content: center;
  padding-top: 25px;
}
.link_h {

  justify-content: center;
  columns: 10px 1;
}
</style>>