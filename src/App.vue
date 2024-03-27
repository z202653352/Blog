<script setup>
import { RouterView } from 'vue-router'
import Hander from '@/components/Hander/Hander.vue'

</script>

<template>
  <div class="bg"></div>
  <div class="main">
    <Hander class="hander" />
    <RouterView />
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
  max-width: 80%;
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
}
</style>
