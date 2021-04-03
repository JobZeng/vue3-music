<template>
  <div class="wrapper" ref="scroll">
    <slot></slot>
  </div>
</template>

<script type="text/ecmascript-6">
import BScroll from "@better-scroll/core";
import {reactive} from 'vue'
export default {
  props: {
    data: {
      type: Array,
      default: [],
    },
  },
  setup() {
      const bs = reactive(new BScroll(this.$refs.scroll, {
        probeType: 1,
        click: true,
      }))
      onMounted(() => {

      })
      const init = () => {
          
      }
      return {
          bs
      }
  },
  mounted() {
    this.init();
  },
  beforeDestroy() {
    this.bs.destroy();
  },
  methods: {
    init() {
      this.bs = new BScroll(this.$refs.scroll, {
        probeType: 1,
        click: true,
      });
      this.bs.on("scrollStart", () => {
        console.log("scrollStart-");
      });
      this.bs.on("scroll", ({ y }) => {
        console.log("scrolling-");
      });
      this.bs.on("scrollEnd", (pos) => {
        console.log(pos);
      });
    },
    clickHandler(item) {
      window.alert(item);
    },
  },
};
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
