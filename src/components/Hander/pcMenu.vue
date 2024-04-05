<!--电脑菜单-->
<script setup>
import { ref, onMounted, watch } from 'vue'
import MenuItem from '@/components/Hander/menuItem.vue'
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import useUserInfoStore from '@/store/userInfo';

const userInfoStore = useUserInfoStore()
const router = useRouter()
const userInfo = ref({})
onMounted(() => {
  userInfo.value = userInfoStore.userInfo
})
watch(() => userInfoStore.userInfo, (newInfo) => {
  userInfo.value = newInfo
})
const handleQuit = () => {
  userInfoStore.resetUserInfo()
  router.push('/')
  ElMessage.success('退出成功')
}

</script>

<template>
  <ul class="mobile-menu">
    <menu-item />
    <li class="search-user">
      <!-- <el-input v-model="search" placeholder="Please Input" :prefix-icon="Search" /> -->
      <div class="btns" v-if="!userInfo?.loginName">
        <el-button round @click="router.push({ path: '/register' })">注册</el-button>
        <el-button type="primary" round @click="router.push('/login')">登录</el-button>
      </div>
      <div class="user-info" v-else>
        <el-dropdown>
          <img :src="userInfo?.profile || 'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png'" alt=""
            srcset="">
          <template #dropdown>
            <el-dropdown-menu>
              <el-dropdown-item @click="router.push('/userInfo')">个人信息</el-dropdown-item>
              <!-- <el-dropdown-item>修改密码</el-dropdown-item> -->
              <el-dropdown-item @click="handleQuit">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </template>
        </el-dropdown>
      </div>
    </li>
  </ul>
</template>

<style scoped lang="scss">
.mobile-menu {
  display: flex;
  align-items: center;


  .search-user {
    display: flex;

    .btns {
      display: flex;
    }

    .user-info {
      img {
        cursor: pointer;
        width: 38px;
        height: 38px;
        border-radius: 50%;

        &:focus-visible {
          outline: none;
        }
      }
    }

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