<!--首页文章主体内容（瀑布流+作者详情）-->
<script setup>

import { Waterfall } from 'vue-waterfall-plugin-next'
import WaterfallItem from '@/views/components/ArticleView/waterfallItem.vue'
import { ref } from 'vue'

const list = ref([
  { src: '12333', url: '', index: 0, text: '123' },
  { src: '12333', url: '', index: 2, text: '123' },
  { src: '12333', url: '', index: 3, text: '123' },
  { src: '12333', url: '', index: 4, text: '123' },
  { src: '12333', url: '', index: 5, text: '123' },
  { src: '12333', url: '', index: 6, text: '123' },
  { src: '12333', url: '', index: 7, text: '123' },
  { src: '12333', url: '', index: 8, text: '123' },
  { src: '12333', url: '', index: 98, text: '123' },
  { src: '12333', url: '', index: 123, text: '123' }
])

const breakpoints = ref({

  720: {
    // when wrapper width < 720
    rowPerView: 1
  }
})
</script>

<template>
  <main class="article-main">
    <div class="waterfall">
      <Waterfall :list="list" rowKey="index" :width="484" align="left" :breakpoints="breakpoints"
                 :hasAroundGutter="false" :gutter="30">
        <template #item="{ item, url, index }">
          <waterfall-item />
        </template>
      </Waterfall>
    </div>
    <div class="author-info">
      <div class="author">
        <div class="bg"></div>
        <img src="https://www.logosc.cn/uploads/resources/2024/01/09/1704783215_thumb.png" alt="" class="avatar">
        <div class="name">Kardashianicon</div>
        <div class="motto">有幸遇见，恰巧合拍</div>
        <div class="line"></div>
        <div class="data">
          <div class="item">
            <div class="num">19</div>
            <div class="title">文章</div>
          </div>
          <div class="item">
            <div class="num">50</div>
            <div class="title">评论</div>
          </div>
          <div class="item">
            <div class="num">3</div>
            <div class="title">标签</div>
          </div>
        </div>
      </div>
      <div class="site-info">
        <ul>
          <li>
            <span class="directory">已运行时间</span>
            <span class="sum">838天</span>
          </li>
          <li>
            <span class="directory">本站总字数</span>
            <span class="sum">216.7K</span>
          </li>
          <li>
            <span class="directory">本站访客数</span>
            <span class="sum">8,121</span>
          </li>
          <li>
            <span class="directory">本站总访问量</span>
            <span class="sum">154,121</span>
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

  .waterfall {
    height: 100%;
    width: 80%;
  }

  .author-info {
    width: 20%;

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
        height: 211px;
        background-color: #028AF1;
        border-radius: 20px 20px 20px 20px;
      }

      .avatar {
        width: 101px;
        height: 101px;
        background: #C4C4C4;
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
    .waterfall {
      width: 100%;
    }
    .author-info {
      display: none;
    }

  }
}
</style>