<template>
  <div class="recommend">
    <scroll
      class="recommend-content"
      :data="recommendList.value"
      ref="scrollRef"
    >
      <div>
        <div class="slide-wrapper">
          <div class="slide-content" >
            <slide> </slide>
          </div>
        </div>
        <div class="recommend-list">
          <h1 class="list-title">热门歌单推荐</h1>
          <div
            class="item"
            v-for="item in recommendList.value"
            :key="item.dissid"
            @click="selectItem(item)"
          >
            <div class="icon">
              <img @load="loadImage" :src="item.imgurl" alt="" />
            </div>
            <div class="text">
              <h2 class="name">{{ item.creator.name }}</h2>
              <p class="desc" v-html="item.dissname"></p>
            </div>
          </div>
        </div>
      </div>
      <div v-if="!recommendListLenght" class="loading-container">
        <loaing></loaing>
      </div>
    </scroll>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { reactive, onMounted, ref ,computed} from "vue";
import Slide from "components/slide/slide.vue";
import Scroll from "components/scroll/scroll.vue";
import Loaing from "components/loading/loading.vue";
import { getDiscList } from "api/recommend.ts";
import { ERR_OK } from "api/config.ts";
import { useStore } from "../../store";
import { MutationType } from "../../store/mutations";

export default defineComponent({
  components: {
    Scroll,
    Slide,
    Loaing,
  },
  setup() {
    // 初始化一些响应式数据
    const recommendList: any = reactive(new Array());
    const scrollRef = ref(null);
    const store = useStore();
    let recommendListLenght = ref(0);

    const loadImage = () => {};
    // 网络请求，获取数据
    onMounted(() => {
      _getDiscList();
    });
    // 获取歌单
    const _getDiscList = () => {
      getDiscList().then((res: any) => {
        console.log(typeof res);

        if (res.code === ERR_OK) {
          recommendList.value = res.data.list;
          recommendListLenght.value = Object.keys(recommendList.value).length;

          // console.log(recommendList.value);
        }
      });
    };
    // 

    const setDisc = (item: object) => {
      store.commit(MutationType.SetDisc, item);
    };
    const selectItem = (item: object) => {
      console.log(item);
      setDisc(item);
    };
    return {
      recommendList,
      scrollRef,
      loadImage,
      selectItem,
      recommendListLenght
    };
  },
});
</script>

<style lang="less">
@import "common/less/variable.less";
.recommend {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;

  .recommend-content {
    height: 100%;
    overflow: hidden;

    .slide-wrapper {
      position: relative;
      width: 100%;
      height: 0;
      padding-top: 40%;
      overflow: hidden;

      .slide-content {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
      }
    }
    .recommend-list {
      .list-title {
        height: 65px;
        line-height: 65px;
        text-align: center;
        font-size: @font-size-medium;
        color: @color-theme;
      }

      .item {
        display: flex;
        box-sizing: border-box;
        align-items: center;
        padding: 0 20px 20px 20px;

        .icon {
          flex: 0 0 60px;
          width: 60px;
          padding-right: 20px;
          img {
            width: 60px;
            height: 60px;
          }
        }

        .text {
          display: flex;
          flex-direction: column;
          justify-content: center;
          flex: 1;
          line-height: 20px;
          overflow: hidden;
          font-size: @font-size-medium;

          .name {
            margin-bottom: 10px;
            color: @color-text;
          }

          .desc {
            color: @color-text-d;
          }
        }
      }
    }
  }
  .loading-container {
    position: absolute;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
  }
}
</style>
