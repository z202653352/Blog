<!--文章归档页面-->
<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { Search } from '@element-plus/icons-vue'
import { labelListHttp, lableDetailHttp } from '@/serves';
import ArticleWaterfall from '@/views/components/Article/articleWaterfall.vue'

const searchInputRef = ref('')
const tabsValueRef = ref()
const listRef = ref([])
const tabsListRef = ref([])
const titleRef = ref()
const describeRef = ref()
const subArticleCount = ref(0)

const waterfallref = ref()

onMounted(() => {
  requestTabs()

})

const requestTabs = async () => {
  const { code, data } = await labelListHttp()
  if (code === '200' && data?.length > 0) {
    tabsListRef.value = data
    tabsValueRef.value = data[0].articeId
    titleRef.value = data[0].title
    describeRef.value = data[0].description
    subArticleCount.value = Number(data[0].subArticleCount)
    console.log('waterfallref', waterfallref);
    await nextTick()
    waterfallref.value.reRender()
  }
}




const handleTabClick = async (obj) => {
  tabsValueRef.value = obj.articeId
  titleRef.value = obj.title
  describeRef.value = obj.description
  subArticleCount.value = Number(obj.subArticleCount)
  await nextTick()
  waterfallref.value.reRender()
}
</script>

<template>
  <main>
    <div class="header">
      <div class="num">
        共{{ subArticleCount }}篇
      </div>
      <div class="search">
        <div class="title">{{ titleRef }}</div>
        <div class="describe">{{ describeRef }}</div>
        <div>

          <!-- <el-input v-model="searchInputRef" class="search_input" placeholder="输入文章标题搜索">
            <template #append>
              <el-button type="primary" :icon="Search" />
            </template>
</el-input> -->
        </div>
      </div>
    </div>
    <div class="tabs">
      <div class="tabs_title">Post Category</div>
      <div class="tab">
        <ul>
          <li v-for="item in tabsListRef" :key="item">
            <div class="item" :class="{ 'active': item.articeId === tabsValueRef }" @click="handleTabClick(item)">
              {{ item.title }}
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="waterfall">
      <ArticleWaterfall :key="tabsValueRef" :fetchHttp="lableDetailHttp" :params="{ lableId: tabsValueRef }"
        ref="waterfallref" />
    </div>
  </main>
</template>

<style scoped lang="scss">
.header {
  width: 100%;
  height: 290px;
  background-image: url('../../assets/profilecover.png');
  background-repeat: no-repeat;
  background-size: 100% 100%;
  position: relative;

  .num {
    width: 109px;
    height: 48px;
    background: #028AF1;
    border-radius: 50px 50px 50px 50px;
    border: 2px solid #FFFFFF;
    font-family: Microsoft YaHei, Microsoft YaHei;
    font-weight: 400;
    font-size: 20px;
    color: #FFFFFF;
    box-sizing: border-box;
    text-align: center;
    line-height: 44px;
    float: right;

    margin: 24px 24px 0 0;
  }

  .search {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    text-align: center;

    .title {
      font-family: Microsoft YaHei, Microsoft YaHei;
      font-weight: bold;
      font-size: 24px;
      color: #333333;
    }

    .describe {
      font-family: Microsoft YaHei, Microsoft YaHei;
      font-weight: 400;
      font-size: 16px;
      color: #666666;
      margin: 12px 0 18px 0;
    }

    .search_input {
      width: 600px;
      height: 48px;

      :deep(.el-input-group__append) {
        background: #3866DF;
        width: 40px;

        .el-icon {
          color: #fff;
        }
      }
    }
  }


}

.tabs {
  margin: 40px 0 24px 0;

  .tabs_title {
    font-family: Microsoft YaHei, Microsoft YaHei;
    font-weight: bold;
    font-size: 24px;
    color: #000000;
    margin-bottom: 32px;
  }

  .tab {
    ul {
      display: flex;

      li {
        .item {
          width: 113px;
          height: 48px;
          background: #F5F5F5;
          border-radius: 50px 50px 50px 50px;
          text-align: center;
          line-height: 48px;
          cursor: pointer;

        }

        margin-right: 24px;

        &:last-child {
          margin: 0;
        }

        .active {
          background: linear-gradient(90deg, #59B8FF 0%, #2181FF 100%);
          color: #fff;
        }
      }
    }
  }
}

.waterfall {
  width: 100%;
}
</style>