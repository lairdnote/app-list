
<template>
  <n-card title="用户基本信息" size="huge">
    <n-space vertical>
      <n-card title="" style="margin-bottom: 16px">
        <h4>昵称:</h4>
        <n-input type="text" size="large"  default-value="xxx"/>
        <h4>头像:  <n-avatar
      :size="48"
      round
      src="https://07akioni.oss-cn-beijing.aliyuncs.com/07akioni.jpeg"
    /></h4>
        <n-input type="text" size="large" default-value="http://xxxx.jpg" />
        <n-upload
    action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
    @before-upload="beforeUpload"
  >    
    <n-button>上传 PNG 文件</n-button>
  </n-upload>
        <h4>邮件地址:</h4>
        <n-input type="text" size="large" default-value="xxx@gmail.com" />
      </n-card>
      <n-button strong secondary type="success">提交</n-button>
    </n-space>
  </n-card>
</template>
<script setup>
import { ref } from "vue";
import { useMessage } from "naive-ui";


const message = useMessage();

const beforeUpload = (data) => {
  console.log(data.file.file)
        if (data.file.file?.type !== "image/png") {
          message.error("只能上传png格式的图片文件，请重新上传");
       
          return false;
        }
        return true;
      }

</script>>



<style scoped>
</style>