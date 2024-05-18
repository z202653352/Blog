<!--首页文章主体内容（瀑布流+作者详情）-->
<script setup>
import { ref, onMounted } from 'vue'
import {
  articleNumHttp,
  commentNumHttp,
  labelNumHttp,
  myInfoHttp,
  blogInfoHttp,
  articleListHttp
} from '@/serves'
import { encapsulationRes } from '@/utils/utils.js'
import { ElMessage } from 'element-plus'
import ArticleWaterfall from './articleWaterfall.vue'

const myInfoRef = ref({})

const articleNumRef = ref('')
const commentNumRef = ref('')
const labelNumRef = ref('')
const blogInfoRef = ref({})

onMounted(() => {
  requestMyInfo()
  requestStatistics()
  requestBlogInfo()
})

// 请求个人信息
const requestMyInfo = async () => {
  try {
    const data = encapsulationRes(await myInfoHttp())
    myInfoRef.value = data
  } catch (e) {
    ElMessage.error(e)
  }
}

// 请求博客信息
const requestBlogInfo = async () => {
  try {
    const data = encapsulationRes(await blogInfoHttp())
    blogInfoRef.value = data
  } catch (e) {
    ElMessage.error(e)
  }
}

const requestStatistics = async () => {
  try {
    articleNumRef.value = encapsulationRes(await articleNumHttp())
    commentNumRef.value = encapsulationRes(await commentNumHttp())
    labelNumRef.value = encapsulationRes(await labelNumHttp())
  } catch (e) {
    ElMessage.error(e)
  }
}
</script>

<template>
  <main class="article-main">
    <div class="waterfall">
      <ArticleWaterfall :fetchHttp="articleListHttp" />
    </div>
    <div class="author-info">
      <div class="author">
        <div class="bg"></div>
        <img :src="myInfoRef?.profile" alt="" class="avatar">
        <div class="name">{{ myInfoRef.username }}</div>
        <div class="motto">{{ myInfoRef.motto }}</div>
        <div class="line"></div>
        <div class="data">
          <div class="item">
            <div class="num">{{ articleNumRef }}</div>
            <div class="title">文章</div>
          </div>
          <div class="item">
            <div class="num">{{ commentNumRef }}</div>
            <div class="title">评论</div>
          </div>
          <div class="item">
            <div class="num">{{ labelNumRef }}</div>
            <div class="title">标签</div>
          </div>
        </div>
      </div>
      <div class="site-info">
        <ul>
          <li>
            <span class="directory">已运行时间</span>
            <span class="sum">{{ blogInfoRef?.runDate || 0 }}天</span>
          </li>
          <li>
            <span class="directory">本站总字数</span>
            <span class="sum">{{ blogInfoRef?.charNum || 0 }}k</span>
          </li>
          <li>
            <span class="directory">本站访客数</span>
            <span class="sum">{{ blogInfoRef?.visitNum || 0 }}</span>
          </li>
          <li>
            <span class="directory">本站总访问量</span>
            <span class="sum">{{ blogInfoRef?.sumBrowse || 0 }}</span>
          </li>
        </ul>
      </div>
    </div>
  </main>
</template>

<style scoped lang="scss">
.article-main {
  margin-top: 60px;
  display: flex;
  justify-content: space-between;

  .waterfall {
    width: 100%;
  }

  .author-info {

    .author {
      width: 450px;
      background: #F9FAFB;
      border-radius: 20px 20px 20px 20px;
      padding: 24px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      flex-direction: column;

      .bg {
        width: 100%;
        height: 197px;
        background: url('../../../assets/user_bg.png') no-repeat;
        background-size: contain;
        border-radius: 20px 20px 20px 20px;
      }

      .avatar {
        width: 101px;
        height: 101px;
        background: #C4C4C4;
        object-fit: cover;
        border-radius: 50%;
        transform: translateY(-28px);
      }

      .name {
        font-family: Microsoft YaHei, Microsoft YaHei;
        font-weight: bold;
        font-size: 20px;
        color: #404750;
        line-height: 26px;
        text-align: center;
        font-style: normal;
        text-transform: none;
      }

      .motto {
        font-family: Microsoft YaHei, Microsoft YaHei;
        font-weight: 400;
        font-size: 16px;
        color: #404750;
        line-height: 26px;
        text-align: center;
        font-style: normal;
        text-transform: none;
        margin-top: 12px;
      }

      .line {
        width: 100%;
        height: 0px;
        border: 1px solid #EEEEEE;
        margin: 32px 0;
      }

      .data {
        display: flex;
        justify-content: space-around;
        width: 100%;
        margin: 0;

        .num {
          font-family: Microsoft YaHei, Microsoft YaHei;
          font-weight: bold;
          font-size: 24px;
          color: $text-color;
          line-height: 28px;
          text-align: center;
          font-style: normal;
          text-transform: none;
        }

        .title {
          font-family: Microsoft YaHei, Microsoft YaHei;
          font-weight: 400;
          font-size: 16px;
          color: #929292;
          line-height: 19px;
          text-align: center;
          font-style: normal;
          text-transform: none;
        }
      }
    }
  }

  .site-info {
    width: 450px;
    background: linear-gradient(180deg, #EBF5FF 0%, rgba(255, 255, 255, 0) 100%);
    border-radius: 20px 20px 20px 20px;
    border: 1px solid #EEEEEE;
    margin-top: 40px;
    padding: 24px;
    box-sizing: border-box;

    ul {
      li {
        display: flex;
        justify-content: space-between;
        margin-bottom: 16px;
      }
    }

    .directory {
      font-family: Microsoft YaHei, Microsoft YaHei;
      font-weight: 400;
      font-size: 18px;
      color: #666666;
      line-height: 21px;
      text-align: left;
      font-style: normal;
      text-transform: none;
    }

    .sum {
      font-family: Microsoft YaHei, Microsoft YaHei;
      font-weight: bold;
      font-size: 18px;
      color: $text-color;
      line-height: 21px;
      text-align: right;
      font-style: normal;
      text-transform: none;
    }
  }

  @media screen and (max-width: 720px) {


    .author-info {
      display: none;
    }

  }
}
</style>