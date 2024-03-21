<!--站点动态-->
<script setup>

import TimesLine from '@/views/components/News/timesLine.vue'
import { ref, onMounted } from 'vue'
import { encapsulationRes } from '@/utils/utils.js'
import { ElMessage } from 'element-plus'
import { trendsListHttp } from '@/serves'

const dataRef = ref([])

onMounted(() => {
  requestTrendsList()
})

const requestTrendsList = async () => {
  try {
    const data = encapsulationRes(await trendsListHttp())
    dataRef.value = data
  } catch (e) {
    ElMessage.error(e)
  }
}

</script>

<template>
  <times-line :data="dataRef" />
</template>

<style scoped></style>