<!--首页置顶文章-->
<script setup>
import view_img from '@/assets/view.png'
import commentaries_img from '@/assets/commentaries.png'
import { onMounted, ref } from 'vue'
import { articleTopHttp } from '@/serves'
import { encapsulationRes } from '@/utils/utils.js'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'

const info = ref({})
const router = useRouter()

onMounted(() => {
  requestArticleTop()
})

const requestArticleTop = async () => {
  try {
    const data = encapsulationRes(await articleTopHttp())
    info.value = data[0]
    console.log('data', data)
  } catch (e) {
    ElMessage.error(e)
  }

}

const handleToDetails = () => {
  router.push({ path: '/details/' + info.value.articeId })
}
</script>

<template>
  <div class="article-view-item" @click="handleToDetails">
    <div class="left">
      <img :src="info.previewPicture" alt="">
    </div>
    <div class="right">
      <div class="top">置顶</div>
      <div class="title">{{ info.title }}</div>
      <div class="label">
        <div class="type">{{ info.label }}</div>
        <div class="time">{{ info.createdTime }}</div>
      </div>
      <div class="text">{{ info.description }}</div>
      <div class="user">
        <div class="admin">
          <img class="avatar" :src="info.authorProfile" alt="">
          <span class="name">{{ info.authorName }}</span>
        </div>
        <div class="view">
          <img :src="view_img" alt=""><span>{{ info.views || 0 }}</span>
          <img :src="commentaries_img" alt=""><span>{{ info.commentNum || 0 }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.article-view-item {
  width: 100%;
  display: flex;
  margin-top: 80px;
  justify-content: space-between;

  .left {
    width: 39%;
    height: 503px;

    img {
      border-radius: 20px 20px 20px 20px;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }

  .right {
    width: 59%;
    position: relative;

    .top {
      font-family: Microsoft YaHei, Microsoft YaHei;
      font-weight: 400;
      font-size: 18px;
      color: #999999;
      text-align: justify;
      font-style: normal;
      text-transform: none;
      margin-bottom: 16px;
    }

    .title {
      font-family: Microsoft YaHei, Microsoft YaHei;
      font-weight: bold;
      font-size: 32px;
      color: $text-color;
      line-height: 48px;
      text-align: justify;
      font-style: normal;
      text-transform: none;
      margin-bottom: 16px;
    }

    .label {
      display: flex;
      align-items: center;
      margin-bottom: 16px;

      .type {
        padding: 3px 8px;
        border-radius: 6px 6px 6px 6px;
        border: 2px solid #FFAB2E;
        font-family: Microsoft YaHei, Microsoft YaHei;
        font-weight: 400;
        font-size: 16px;
        color: #FFAB2E;
        line-height: 24px;
        font-style: normal;
        text-transform: none;
      }

      .time {
        margin-left: 16px;
        font-family: Microsoft YaHei, Microsoft YaHei;
        font-weight: 400;
        font-size: 16px;
        color: #999999;
        line-height: 24px;
        text-align: left;
        font-style: normal;
        text-transform: none;
      }
    }

    .text {
      font-family: Microsoft YaHei, Microsoft YaHei;
      font-weight: 400;
      font-size: 20px;
      color: #666666;
      line-height: 30px;
      font-style: normal;
      text-transform: none;
    }

    .user {
      width: 100%;
      display: flex;
      align-items: center;
      position: absolute;
      bottom: 0;
      justify-content: space-between;

      .admin {
        display: flex;
        align-items: center;

        .avatar {
          width: 50px;
          height: 50px;
          border-radius: 50%;
        }

        .name {
          margin-left: 10px;
        }
      }

      .view {
        display: flex;
        align-items: center;
        justify-content: space-between;

        img {
          width: 20px;
          height: 20px;

        }

        span {
          margin-right: 10px;
        }
      }


    }
  }


}

@media screen and (max-width: 720px) {
  .article-view-item {
    display: inline-block;
    padding: 10px;
    box-sizing: border-box;

    .left {
      width: 100%;
      height: 203px;
    }

    .right {
      width: 100%;

      .top {
        display: none;
      }

      .title {

        font-size: 20px;
        color: $text-color;

        margin-bottom: 8px;
      }

      .label {
        display: flex;
        align-items: center;
        margin-bottom: 8px;

        .type {
          padding: 3px 8px;
          border-radius: 6px 6px 6px 6px;
          border: 2px solid #FFAB2E;

          font-size: 12px;
          color: #FFAB2E;

        }

        .time {
          margin-left: 16px;

          font-size: 12px;

        }
      }

      .text {

        font-size: 12px;
        padding-bottom: 60px;
      }

      .user {

        .admin {


          .avatar {
            width: 40px;
            height: 40px;
            border-radius: 50%;
          }
        }

        .view {
          display: flex;
          align-items: center;
          justify-content: space-between;


        }


      }
    }
  }
}
</style>