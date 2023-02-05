<template>
  <n-layout-footer>
    <div id="page-container">
      <div id="content-wrap">
        <!-- all other page content -->
        底部
      </div>
      <footer id="footer"></footer>
    </div>
  </n-layout-footer>
</template>

<script setup>
</script>>

<style>
#page-container {
  position: relative;
  min-height: 100%;
}

#content-wrap {
  padding-bottom: 2.5rem; /* Footer height */
}

#footer {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 2.5rem; /* Footer height */
}
</style>>