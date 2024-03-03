<!--菜单子项-->
<script setup>
import { onMounted, ref } from 'vue'
import { useRouter,useRoute } from 'vue-router'
const router = useRouter()
const route = useRoute()
onMounted(() => {
  const routerList = router.getRoutes()
  let list = []
  routerList.forEach(({ name, path, meta: { title, type } }) => {
    if (type === 'menu') list.push({ name, path, title })
  })
  menuItem.value = list
})
const menuItem = ref([])

const handleClick = (path)=>{

  router.push(path)
}
</script>

<template>
  <li v-for="item in menuItem" :key="item.path">
    <span :class="{active:route.path.startsWith(item.path)}" @click="handleClick(item.path)">{{ item.title }}</span>
  </li>
</template>

<style scoped lang="scss">
li {
  margin-right: 30px;

  cursor: pointer;

  a {
    text-decoration: none;
    color: $text-color;
  }

  .active {
    color: $color-primary;
  }

  &:hover {
    a {


      color: $secondary-color-primary;
    }
  }

}
// 宽度小于720，把弹框的菜单隔开
@media screen and (max-width: 720px) {
  li{
    margin-bottom: 20px;
  }
}
</style>