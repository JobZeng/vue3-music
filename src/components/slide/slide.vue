<template>
  <div class="slide-banner-wrapper" ref="slideRef">
    <div class="slide-banner-content">
      <div :key="item.id" v-for="item in bannerList.value" class="slide-page">
        <a :href="item.linkUrl">
          <img :src="item.picUrl" alt="" />
        </a>
      </div>
    </div>
  </div>
  <div class="dots-wrapper">
    <span
      class="dot"
      v-for="num in bannerLength"
      :key="num"
      :class="{ active: currentPageIndex === num - 1 }"
    ></span>
  </div>
</template>

<script type="ts">
import {
  onMounted,
  nextTick,
  ref,
  reactive,
  onBeforeUnmount,
} from "vue";
import BScroll from "@better-scroll/core";
import Slide from "@better-scroll/slide";
import { getRecommend } from "api/recommend";
BScroll.use(Slide);
import {defineComponent} from 'vue'
 
export default defineComponent({
  setup() {
    const currentPageIndex = ref(0);
    const slideRef = ref(null);
    let bannerList = reactive([]);
    let slide = new Object()
    let bannerLength = ref(0);
    onMounted(() => {
      _getRecommend();
      // console.log(bannerList);
    });

    const init = () => {
      slide = new BScroll(slideRef.value, {
        scrollX: true,
        scrollY: false,
        slide: true,
        momentum: false,
        bounce: false,
        probeType: 3,
      });
      slide.on("scrollEnd", _onScrollEnd);

      slide.on("slideWillChange", (page) => {
        currentPageIndex.value = page.pageX;
      });
    };
    // 处理滚到最后一张
    const _onScrollEnd = () => {
      slide.getCurrentPage();
    };
    // 获取轮播图
    const _getRecommend = () => {
      getRecommend().then((res) => {
        bannerList.value = res.data.slider;
        bannerLength.value = Object.keys(bannerList.value).length;
        // 渲染完再初始化
        nextTick(() => {
          init();
        });
      });
    };

    onBeforeUnmount(() => {
      bs.destroy();
    });

    return {
      slideRef,
      bannerList,
      currentPageIndex,
      bannerLength,
    };
  },
});
</script>
<style lang="less" rel="stylesheet/less">
.slide-banner-content {
  height: 200px;
  white-space: nowrap;
  font-size: 0;
  .slide-page {
    display: inline-block;
    height: 200px;
    width: 100%;
    line-height: 200px;
    text-align: center;
    font-size: 26px;
    a {
      display: block;
      width: 100%;
      overflow: hidden;
      text-decoration: none;
      img {
        display: block;
        width: 100%;
      }
    }
  }
}
.dots-wrapper {
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%);
  .dot {
    display: inline-block;
    margin: 0 4px;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: #eee;
  }
  .dot.active {
    width: 20px;
    border-radius: 5px;
    background: #31c27c;
  }
}
</style>
