<!--手机菜单-->
<script setup>
import { ref } from 'vue'
import MenuItem from '@/components/Hander/menuItem.vue'

const drawer = ref(false)
</script>

<template>
<div class="mobile-menu">
  <el-icon :size="30" color="#333"><Operation @click="drawer = true"/></el-icon>

  <el-drawer v-model="drawer" title="菜单" :size="180">
    <ul>
      <menu-item class="menu-item">

      </menu-item>
    </ul>
  </el-drawer>
</div>
</template>

<style scoped lang="scss">
.mobile-menu{
  margin-right: 20px;


}
</style>