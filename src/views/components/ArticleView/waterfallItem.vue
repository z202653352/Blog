<!--瀑布流文章-->
<script setup>
import { defineProps, computed } from 'vue'
import view_img from '@/assets/view.png'
import commentaries_img from '@/assets/commentaries.png'
import { useRouter } from 'vue-router'

const { item } = defineProps({ item: Object })
const router = useRouter()
const times = computed(() => {
  if (item.createdTime?.length > 0) return item.createdTime.split('-')
  return []
})

const handleToDetails = () => {
  router.push({ path: '/details/' + item.articeId })
}
</script>

<template>
  <div class="waterfall-item" @click="handleToDetails">
    <img v-if="item.previewPicture" class="img" :src="item.previewPicture" alt="">
    <div class="main">
      <div class="left">
        <span class="month">{{ times[1] || '' }}</span>
        <div class="line"></div>
        <div class="day">{{ times[2] || '' }}</div>
      </div>
      <div class="right">
        <div class="title">{{ item.title }}</div>
        <div class="label">
          <div class="type">{{ item.label }}</div>
          <div class="time">{{ item.createdTime }}</div>
        </div>
        <div class="text">{{ item.description || '' }}</div>
        <div class="user">
          <div class="admin">
            <img class="avatar" :src="item.authorProfile" alt="">
            <span class="name">{{ item.authorName }}</span>
          </div>
          <div class="view">
            <img :src="view_img" alt=""><span>{{ item.views || '0' }}</span>
            <img :src="commentaries_img" alt=""><span>{{ item.commentNum || '0' }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.waterfall-item {
  width: 100%;
  height: 100%;

  .img {
    width: 100%;
    max-width: 484px;
    max-height: 356px;
    object-fit: cover;
    border-radius: 20px 20px 0px 0px;
  }

  .main {
    width: 100%;
    background: #F9FAFB;
    border-radius: 0 0 20px 20px;
    padding: 24px;
    display: flex;
    box-sizing: border-box;

    .left {
      text-align: center;
      margin-right: 16px;

      .month {
        font-family: Arial, Arial;
        font-weight: bold;
        font-size: 16px;
        color: #212B36;
        line-height: 26px;
        text-align: center;
        font-style: normal;
        text-transform: none;
      }

      .day {
        font-family: Arial, Arial;
        font-weight: bold;
        font-size: 40px;
        color: #212B36;
        line-height: 54px;
        text-align: center;
        font-style: normal;
        text-transform: none;
      }

      .line {
        width: 62px;
        height: 1px;
        background: rgba(153, 153, 153, 0.24);
        border-radius: 0px 0px 0px 0px;
        margin: 5px 0;
      }
    }

    .right {
      width: 100%;

      .title {
        font-family: Microsoft YaHei, Microsoft YaHei;
        font-weight: bold;
        font-size: 20px;
        color: $text-color;
        line-height: 30px;
        text-align: justify;
        font-style: normal;
        text-transform: none;
      }

      .label {
        display: flex;
        align-items: center;
        margin: 16px 0;

        .type {
          padding: 1px 6px;
          border-radius: 6px 6px 6px 6px;
          border: 2px solid #FFAB2E;
          font-family: Microsoft YaHei, Microsoft YaHei;
          font-weight: 400;
          font-size: 14px;
          color: #FFAB2E;
          line-height: 24px;
          font-style: normal;
          text-transform: none;
        }

        .time {
          margin-left: 16px;
          font-family: Microsoft YaHei, Microsoft YaHei;
          font-weight: 400;
          font-size: 14px;
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
        font-size: 16px;
        color: #666666;
        line-height: 26px;
        text-align: justify;
        font-style: normal;
        text-transform: none;
        margin-bottom: 46px;
      }

      .user {
        width: 100%;
        display: flex;
        align-items: center;

        justify-content: space-between;

        .admin {
          display: flex;
          align-items: center;

          .avatar {
            width: 32px;
            height: 32px;
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
    padding: 0 10px;
    box-sizing: border-box;
  }
}
</style>