<!--瀑布流组件-->
<script setup>

import { Waterfall } from 'vue-waterfall-plugin-next'
import WaterfallItem from '@/views/components/ArticleView/waterfallItem.vue'
import { ref, onMounted, defineProps } from 'vue'

const { list } = defineProps({
  list: {
    type: Array,
    default: () => []
  }
})

const breakpointsRef = ref({

  720: {
    // when wrapper width < 720
    rowPerView: 1
  }
})


onMounted(() => {

})

</script>

<template>

  <Waterfall :list="list" rowKey="articeId" :width="484" align="left" :breakpoints="breakpointsRef"
    :hasAroundGutter="false" :gutter="30">
    <template #item="{ item }">
      <waterfall-item :item="item" />
    </template>
  </Waterfall>
</template>

<style scoped lang="scss"></style>