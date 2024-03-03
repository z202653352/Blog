<!--创意空间卡片组件-->
<script setup>

</script>

<template>
  <div class="creativity-card">
    <img src="https://www.logosc.cn/uploads/resources/2024/01/09/1704783215_thumb.png" alt="">
    <div class="title">Swagger</div>
    <div class="text">可视化 RESTful 风格的Web文档服务</div>
    <el-button class="btn" type="primary">立即使用</el-button>
  </div>
</template>

<style scoped lang="scss">
.creativity-card {
  display: inline-block;

  background: #FFFFFF;
  border-radius: 14px 14px 14px 14px;
  border: 1px solid #E3E2E2;
  padding: 16px;

  img {
    width: 325px;
    height: 200px;
    background: #D9D9D9;
    border-radius: 14px 14px 0px 0px;
  }

  .title {
    font-family: Microsoft YaHei, Microsoft YaHei;
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    text-align: left;
    font-style: normal;
    text-transform: none;
    margin-top: 24px;
  }

  .text {
    font-family: Microsoft YaHei, Microsoft YaHei;
    font-weight: 400;
    font-size: 16px;
    color: #999999;
    text-align: left;
    font-style: normal;
    text-transform: none;
    margin-top: 12px;
  }
  .btn{
    margin-top: 59px;
  }
}

</style>