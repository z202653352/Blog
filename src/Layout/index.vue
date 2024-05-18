<script setup>
import { RouterView } from 'vue-router'
import Hander from '@/components/Hander/Hander.vue'

</script>

<template>
  <div class="bg"></div>
  <div class="main">
    <Hander class="hander" />
    <div class="content">
      <RouterView />
    </div>

    <div class="ipc">
      <a href="https://beian.miit.gov.cn/" target="_blank">浙ICP备2024085151号-1</a>
    </div>
  </div>
</template>

<style scoped lang="scss">
.bg {
  height: 200px;
  width: 100%;
  position: absolute;
  background: linear-gradient(180deg, #EEF8FF 0%, rgba(255, 255, 255, 0) 100%);
  z-index: -1;
}

.main {
  z-index: 3;
  max-width: 1500px;
  margin: 0 auto;

  .hander {
    margin-bottom: 40px;
  }

  @media screen and (max-width: 1500px) {
    max-width: 1200px;
  }

  @media screen and (max-width: 1200px) {
    max-width: 100%;
  }

  <<<<<<< HEAD .ipc {
    margin: 0 auto;

    =======.content {
      min-height: 83vh;
    }

    .ipc {
      margin: 20px auto;
      >>>>>>>28e2acecd9c30ddcde9dfc96dc85ea3e09ecc087 text-align: center;
      padding: 10px 0;
      border-top: 1px solid #e8e8e8;

      a {
        color: #000;
      }
    }
  }</style>