<!--友情链接-->
<script setup>
import CreativityCard from '@/views/components/Creativity/creativityCard.vue'
import { ref, onMounted } from 'vue';
import { friendLinkListHttp } from '@/serves';

const listRef = ref()

onMounted(() => {
  requestList()
})

const requestList = async () => {
  const { code, data } = await friendLinkListHttp()
  if (code === '200' && data?.length > 0) {
    listRef.value = data
  }
}
</script>

<template>
  <main class="links">
    <el-space wrap :size="40">
      <creativity-card v-for="item in [1, 2, 3, 4, 5, 6]" :key="item" />
    </el-space>
  </main>
</template>

<style scoped lang="scss">
.links {

  @media screen and (max-width: 720px) {
    :deep(.el-space) {
      justify-content: center;
    }
  }
}
</style>