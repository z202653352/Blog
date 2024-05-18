<script setup>
import commentaries from '@/assets/commentaries.png'
import view from '@/assets/view.png'
import { onMounted, ref, reactive } from 'vue'
import { articleDetailHttp, commentListHttp, addCommentHttp, } from '@/serves'
import { useRoute } from 'vue-router'
import Comment from '@/views/components/Article/comment.vue';

const route = useRoute()

const detailsDataRef = ref({})
const titles = ref([])
const previewRef = ref()


onMounted(() => {
  requestList()
  initMdTitle()
})



const requestList = async () => {
  const { id } = route.params

  const { code, data } = await articleDetailHttp({ articeId: id })
  if (code === '200' && data) {
    detailsDataRef.value = data
  }
}

const initMdTitle = () => {
  console.log('previewRef', previewRef.value.$el);
  const anchors = previewRef.value.$el.querySelectorAll('h1,h2,h3,h4,h5,h6');
  console.log('anchors', anchors);
  const _titles = Array.from(anchors).filter((title) => !!title.innerText.trim());
  console.log('_titles', _titles);
  if (!_titles.length) {
    titles.value = [];
    return;
  }


  const hTags = Array.from(new Set(_titles.map((title) => title.tagName))).sort();
  console.log('hTags', hTags);
  titles.value = _titles.map((el) => ({
    title: el.innerText,
    lineIndex: el.getAttribute('data-v-md-line'),
    indent: hTags.indexOf(el.tagName),
  }));
}

const handleAnchorClick = (anchor) => {
  const { preview } = this.$refs;
  const { lineIndex } = anchor;

  const heading = preview.$el.querySelector(`[data-v-md-line="${lineIndex}"]`);

  if (heading) {
    // 注意：如果你使用的是编辑组件的预览模式,则这里的方法名改为 previewScrollToTarget
    preview.previewScrollToTarget({
      target: heading,
      scrollContainer: window,
      top: 60,
    });
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
          <v-md-preview ref="previewRef" :text="detailsDataRef.content"></v-md-preview>
          <div v-for="anchor in titles" :style="{ padding: `10px 0 10px ${anchor.indent * 20}px` }"
            @click="handleAnchorClick(anchor)">
            <a style="cursor: pointer">{{ anchor.title }}</a>
          </div>
        </div>
      </div>
      <div class="directory">

      </div>
    </div>
    <el-divider />
    <Comment :listHttp="commentListHttp" :addHttp="addCommentHttp" :listParams="{ articleId: route.params.id }"
      :addParams="{ articleId: route.params.id }" />
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
    right: 212px;

    top: 168px;
  }
}
</style>
