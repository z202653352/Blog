<script setup>
import commentaries from '@/assets/commentaries.png'
import view from '@/assets/view.png'
import { onMounted, ref, reactive } from 'vue'
import { articleDetailHttp } from '@/serves'
import { useRoute } from 'vue-router'
import Catalog from '@/views/components/Catalog/catalog.vue'
import Comment from '@/views/components/Article/comment.vue';

const route = useRoute()

const detailsDataRef = ref({})

const state = reactive({
  text: '',
  catalogList: []
})
const scrollElement = document.documentElement

onMounted(() => {
  requestList()
})

const onGetCatalog = (list) => {
  console.log('list', list)
  state.catalogList = list
}

const requestList = async () => {
  const { id } = route.params
  const ip = sessionStorage.getItem('blobIp')
  const { code, data } = await articleDetailHttp({ articeId: id, ip })
  if (code === '200' && data) {
    detailsDataRef.value = data
  }
}
</script>

<template>
  <main>
    <div class="details">
      <div class="main">
        <h1>{{ detailsDataRef.title }}</h1>
        <el-divider />
        <div class="info">
          <div class="user">
            <el-avatar :size="50" :src="detailsDataRef.authorProfile" />
            <div class="name_time">
              <div class="name">{{ detailsDataRef.authorName || 0 }}</div>
              <div class="time">{{ detailsDataRef.createdTime || 0 }}</div>
            </div>
          </div>
          <div class="statistics">
            <img :src="commentaries" alt="" />
            <span>{{ detailsDataRef.commentNum }}</span>
            <img :src="view" alt="" />
            <span>{{ detailsDataRef.views }}</span>
          </div>
        </div>
        <el-divider />
        <div>
          <!--detailsDataRef.content-->
          <v-md-preview :text="detailsDataRef.content" :default-show-toc="true"></v-md-preview>

        </div>
      </div>
      <!-- preview-only-preview -->
      <!-- <div class="directory">
      <Catalog container=".vuepress-markdown-body" />

    </div> -->
    </div>
    <el-divider />
    <Comment :articleId="route.params.id" />
  </main>
</template>

<style scoped lang="scss">
.details {
  display: flex;

  .main {
    flex: 1;

    h1 {
      font-family:
        Microsoft YaHei,
        Microsoft YaHei;
      font-weight: bold;
      font-size: 40px;
      color: #333333;
      text-align: center;
    }

    .info {
      display: flex;
      justify-content: space-between;

      .user {
        display: flex;

        .name_time {
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          margin-left: 10px;

          .name {
            font-family: Arial, Arial;
            font-weight: bold;
            font-size: 14px;
            color: #333333;
          }

          .time {
            font-family: Arial, Arial;
            font-weight: 400;
            font-size: 12px;
            color: #999999;
          }
        }
      }

      .statistics {
        display: flex;
        align-items: center;

        img {
          width: 20px;
          //margin-right: 10px;
          margin-left: 5px;
        }

        span {
          font-family:
            Microsoft YaHei,
            Microsoft YaHei;
          font-weight: 400;
          font-size: 16px;
          color: #999999;
          margin-left: 5px;
        }
      }
    }
  }

  .directory {
    width: 300px;
    height: 100%;
    // background: #028af1;
    position: fixed;
    right: 0;
  }
}
</style>
