<!--首页文章瀑布流
  插件地址：https://github.com/gk-shi/v3-waterfall
-->
<script setup>
import { ref, onMounted, defineProps, watch, watchEffect } from 'vue'
import {
  articleListHttp,
} from '@/serves'
import _ from 'lodash'
import WaterfallItem from '@/views/components/ArticleView/waterfallItem.vue'

const list = ref([]) // 数据
const over = ref(false) // 控制数据是否已经全部加载完成(即不需要再滚动加载)
const loading = ref(false)
const start = ref(0)
const _params = ref({})
const { fetchHttp, params } = defineProps({ fetchHttp: Function, params: {} })

onMounted(() => {
  // fetchList()
})

watchEffect(() => {
  console.log('watchEffect', params);
  _params.value = params
})

const calculateStart = (value) => {
  if (value > 0) {
    return value * 10 + 1
  } else {
    return value
  }
}


const fetchList = _.throttle(async () => {
  console.log('params222', params);
  loading.value = true
  const res = await fetchHttp({ start: calculateStart(start.value), num: 10, ..._params.value })
  loading.value = false
  if (res?.code === '200') {
    if (res.data?.length > 0) {
      list.value = list.value.concat(res.data)
      start.value++
    } else {
      over.value = true
    }

  } else {
    over.value = true
  }
}, 100, {
  leading: true, // 延长开始后调用
  trailing: false, // 延长结束前调用
})

const scrollReachBottom = () => {
  fetchList()
}

const reRender = () => {
  console.log('reRender');
  list.value = []
  fetchList()
}

defineExpose({
  reRender
})
</script>

<template>
  <div class="waterfall">
    <v3-waterfall :list="list" :colWidth="484" :gap="20" :bottomGap="20" :virtual-time="400" :distanceToScroll="100"
      :isLoading="loading" :isOver="over" @scrollReachBottom="scrollReachBottom">
      <template v-slot:default="slotProp">
        <waterfall-item :item="slotProp.item" />
      </template>
    </v3-waterfall>
  </div>
</template>

<style scoped lang="scss">
.waterfall {
  height: 100%;
  width: 100%;

  :deep(.vue3-waterfall-wrapper) {
    width: 100% !important;
  }

}

@media screen and (max-width: 720px) {}
</style>