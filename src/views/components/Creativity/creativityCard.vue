<!--创意空间卡片组件-->
<script setup>
import { defineProps, onMounted } from 'vue';
const { data } = defineProps({
  data: Object,
  btnName: String
})

const handleOpen = () => {
  console.log('handleOpen', data);
  if (data.webAdd) {
    window.open(data.webAdd)
  } else {
    console.error('链接为空')
  }
}
</script>

<template>
  <div class="creativity-card" @click="handleOpen">
    <img :src="data?.webLogo" alt="">
    <div class="title">{{ data?.webName }}</div>
    <div class="text">{{ data?.webDescribe }}</div>
  </div>
</template>

<style scoped lang="scss">
.creativity-card {
  display: inline-block;

  background: #FFFFFF;
  border-radius: 14px 14px 14px 14px;
  border: 1px solid #E3E2E2;
  cursor: pointer;
  transition: .3s;

  &:hover {
    background: #028AF1;

    transform: translate(0, -20px);

    .title,
    .text {
      color: #FFFFFF;
    }


  }

  img {
    width: 325px;
    height: 200px;
    background: #D9D9D9;
    border-radius: 14px 14px 0px 0px;
  }

  .title,
  .text {
    padding: 0 16px;
  }

  .title {
    font-family: Microsoft YaHei, Microsoft YaHei;
    font-weight: 400;
    font-size: 20px;
    color: #333333;
    text-align: left;
    font-style: normal;
    text-transform: none;
    margin-top: 24px;
  }

  .text {
    font-family: Microsoft YaHei, Microsoft YaHei;
    font-weight: 400;
    font-size: 14px;
    color: #999999;
    text-align: left;
    font-style: normal;
    text-transform: none;
    margin: 12px 0;
  }


}
</style>