<!--
   评论
   插件地址:https://readpage.github.io/undraw-ui/components/comment.html
-->
<script setup>

import { ref, onMounted } from 'vue'
import { ElMessage } from 'element-plus'
import { commentListHttp, addCommentHttp, delCommentHttp } from '@/serves'
import Operate from './operate.vue';
import useUserInfoStore from '@/store/userInfo';
import { getAccountInfo } from '@/utils/authority'

import emoji from '@/utils/emoji'
import { reactive } from 'vue'
import { UToast, createObjectURL } from 'undraw-ui'

import userAvatar from '@/assets/user.png'

const userInfoStore = useUserInfoStore()
const accountInfo = getAccountInfo()
const userInfo = userInfoStore.userInfo

const disposeItem = (item) => {
  let obj = {
    id: item.commentId,
    parentId: item.parentId,
    uid: item.commentId,
    address: item.ipAddress,
    content: item.content,
    createTime: item.createdTime,
    user: {
      username: item.commentClientName,
      avatar: item.commentClientProfile,
    }
  }
  if (item.childrenList?.length > 0) {
    const reply = {
      total: item.childrenList?.length,
      list: []
    }
    reply['list'] = item.childrenList.map(child => {
      return disposeItem(child)
    })
    obj['reply'] = reply
  }
  return obj
}

const { articleId } = defineProps({ articleId: String })

const config = reactive({
  user: {
    id: 1,
    username: userInfo?.userName || userAvatar,
    avatar: userInfo?.profile || userAvatar,
    // 评论id数组 建议:存储方式用户uid和评论id组成关系,根据用户uid来获取对应点赞评论id,然后加入到数组中返回
    // likeIds: [1, 2, 3]
  },
  emoji: emoji,
  comments: [],
  total: 10,
  showLevel: false, // 是否显示等级
  showHomeLink: false,// 是否启用个人主页链接
  showLikes: false,  // 是否显示点赞
  placeholder: '请输入评论内容',
  mentionConfig: {
    mentionColor: '#409eff',
  }
})

onMounted(() => {
  requestList()
})

const requestList = async () => {
  console.log('accountInfo', accountInfo);

  const res = await commentListHttp({ articleId, token: accountInfo?.token })
  if (res?.code === '200' && res?.data) {
    const list = res.data.map(item => {

      return disposeItem(item)
    })
    // commentList.value = list
    console.log('list:', list);
    config.comments = list
  }
}



// 提交评论事件
const submit = async ({ content, parentId, files, finish, reply }) => {
  console.log('content:', content, parentId, files, finish, reply);
  if (content) {
    if (!accountInfo?.token) return ElMessage.warning('请登录账号')
    const params = {
      token: accountInfo.token,
      articleId,
      content,
      commentId: parentId || ''
      // ip: window?.ipJson?.ip
    }
    const res = await addCommentHttp(params)
    if (res?.code === '200') {
      UToast({ message: '评论成功!', type: 'info' })
      finish()
      requestList()
    }
  }
  // UToast({ message: '评论成功!', type: 'info' })
}

// 删除评论
const remove = async (comment) => {
  console.log('comment', comment);
  const params = {
    token: accountInfo.token,
    commentId: comment.id
  }
  const res = await delCommentHttp(params)
  if (res?.code === '200') {
    console.log('删除评论:', comment)
    ElMessage.success('删除成功')
    requestList()
  }
}

config.comments = [

]

</script>

<template>
  <div>
    <u-comment :config="config" @submit="submit">
      <!-- <template>导航栏卡槽</template> -->
      <!-- <template #header>头部卡槽</template> -->
      <template #info>
        <div class="admin">
          管理员{{ info }}
        </div>
      </template>
      <!-- <template #card>用户信息卡片卡槽</template> -->
      <!-- <template #func>功能区域卡槽</template> -->
      <template #operate="scope">
        <Operate :comment="scope" @remove="remove" />
      </template>
    </u-comment>
  </div>
</template>

<style lang="scss" scoped>
.admin {
  margin-left: 10px;
  font-size: 12px;
  color: $color-primary
}
</style>