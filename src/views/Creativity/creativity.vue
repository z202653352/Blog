<!--创意空间-->
<script setup>

import CreativityCard from '@/views/components/Creativity/creativityCard.vue'
</script>

<template>
  <main class="creativity">
    <el-space wrap :size="40">
      <!-- <creativity-card :key="item" /> -->
    </el-space>
  </main>
</template>

<style scoped lang="scss">
.creativity {
  :deep(.el-space) {
    //justify-content: space-between;
  }

  @media screen and (max-width: 720px) {
    :deep(.el-space) {
      justify-content: center;
    }
  }
}
</style>