<template>
  <div class="wrapper" ref="scroll">
    <slot></slot>
  </div>
</template>

<script type="ts">
import BScroll from "@better-scroll/core";
import { ref, onMounted, onBeforeUnmount, watch,defineComponent } from "vue";
export default defineComponent({
  props: {
    data: {
      type: Array,
      default: [],
    },
  },
  setup(props) {
    const scroll = ref(null);
    let bs = new Object()
    onMounted(() => {
      init();
    });
    onBeforeUnmount(() => {
      bs.destroy();
    });
    const init = () => {
      bs = new BScroll(scroll.value, {
        probeType: 3,
        click: true,
      });
      // bs.on("scrollStart", () => {
      //   console.log("scrollStart-");
      // });
      // bs.on("scroll", ({ y }) => {
      //   console.log("scrolling-");
      // });
      // bs.on("scrollEnd", (pos) => {
      //   console.log(pos);
      // });
    };
    const refresh = () => {
      bs && bs.refresh()
    }
    watch(props, () => {
      setTimeout(() => {
        bs.refresh()
      })
    })
    return {
      scroll,
      refresh
    };
  },
});
</script>
<style lang="less" rel="stylesheet/less" scoped>
.scroll-wrapper {
  position: fixed;
  width: 100%;
  top: 88px;
  bottom: 0;
  height: 100%;
  overflow: hidden;
  .scroll-item {
    height: 50px;
    line-height: 50px;
    font-size: 24px;
    font-weight: bold;
    border-bottom: 1px solid #eee;
    text-align: center;
    &:nth-child(2n) {
      background-color: #f3f5f7;
    }
  }
}
</style>
