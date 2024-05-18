<!--友情链接-->
<script setup>
import CreativityCard from '@/views/components/Creativity/creativityCard.vue'
import LinksModal from '@/views/components/Links/Modal.vue'
import { ref, onMounted } from 'vue';
import { friendLinkListHttp, applyFriendLinkHttp } from '@/serves';
import { ElMessage } from 'element-plus';
import linksBgImg from '@/assets/links_bg.png';

const listRef = ref()
const dialogVisibleRef = ref(false)
const linksModal = ref()

onMounted(() => {
  requestList()
})

const requestList = async () => {
  const { code, data } = await friendLinkListHttp()
  if (code === '200' && data?.length > 0) {
    listRef.value = data
  }
}

const handleAddLink = () => {
  dialogVisibleRef.value = true
}

const onSubmit = async (form) => {
  console.log('submit!', form)
  // 判断对象是否有空的值
  for (const key in form) {
    if (!form[key]) {
      ElMessage.error('内容不能为空')
      return false
    }
  }

  const { code, data, msg } = await applyFriendLinkHttp(form)
  if (code === '200') {
    ElMessage.success('申请成功，请等待管理员审核')
    requestList()
    onCancel()
  } else {
    ElMessage.error(msg || '保存失败，请联系管理员')
  }

}

const onCancel = () => {
  dialogVisibleRef.value = false
  linksModal.value.resetForm()
  console.log('linksModal', linksModal.value);

}
</script>

<template>
  <main class="links">
    <div class="header">
      <div class="header-title">友情链接</div>
      <el-button class="btn" type="primary" @click="handleAddLink">链接申请</el-button>
    </div>
    <el-space wrap :size="20">
      <creativity-card v-for="item in listRef" :key="item.friendLinkId" :data="item" btnName="俺来也!" />
      <!-- <div class="creativity-card2">
        <img src="#" alt="">
        <div class="title">123</div>
        <div class="text">123</div>
        <el-button class="btns" type="primary">立即使用</el-button>
      </div> -->
    </el-space>
    <LinksModal ref="linksModal" :dialogVisible="dialogVisibleRef" :onCancel="onCancel" :onSubmit="onSubmit" />
  </main>
</template>

<style scoped lang="scss">
.links {
  position: relative;

  @media screen and (max-width: 720px) {
    :deep(.el-space) {
      justify-content: center;
    }
  }

  .header {
    width: 100%;
    height: 400px;
    background: url(@/assets/links_bg.png) no-repeat;
    background-size: 100% 100%;
    border-radius: 10px;
    margin-bottom: 40px;
    position: relative;

    .header-title {
      font-size: 40px;
      font-weight: bold;
      color: #FFFFFF;
      position: absolute;
      left: 40px;
      top: 40px;
    }

    .btn {
      position: absolute;
      right: 40px;
      bottom: 40px;
    }
  }

}



.creativity-card2 {
  display: inline-block;

  background: #FFFFFF;
  border-radius: 14px 14px 14px 14px;
  border: 1px solid #E3E2E2;
  padding: 16px;

  img {
    width: 325px;
    height: 200px;
    background: #D9D9D9;
    border-radius: 14px 14px 0px 0px;
  }

  .title {
    font-family: Microsoft YaHei, Microsoft YaHei;
    font-weight: 400;
    font-size: 18px;
    color: #333333;
    text-align: left;
    font-style: normal;
    text-transform: none;
    margin-top: 24px;
  }

  .text {
    font-family: Microsoft YaHei, Microsoft YaHei;
    font-weight: 400;
    font-size: 16px;
    color: #999999;
    text-align: left;
    font-style: normal;
    text-transform: none;
    margin-top: 12px;
  }

  .btns {
    margin-top: 59px;
  }
}
</style>