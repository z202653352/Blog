<!--电脑菜单-->
<script setup>
import { ref, onMounted } from 'vue'
import { Search } from '@element-plus/icons-vue'
import MenuItem from '@/components/Hander/menuItem.vue'

const search = ref('')


</script>

<template>
  <ul class="mobile-menu">
    <menu-item />
    <!-- <li class="search-user">
      <el-input
        v-model="search"
        placeholder="Please Input"
        :prefix-icon="Search"
      />
      <el-button round>注册</el-button>
      <el-button type="primary" round>登录</el-button>
    </li> -->
  </ul>
</template>

<style scoped lang="scss">
.mobile-menu {
  display: flex;
  align-items: center;


  .search-user {
    display: flex;

    .el-input {
      margin-right: 12px;
    }
  }

  @media screen and (max-width: 1000px) {
    .search-user {
      display: none;
    }

  }
}
</style>