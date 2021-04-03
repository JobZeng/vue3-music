<template>
  <m-header></m-header>
  <tab></tab>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Tab from "components/tab/tab.vue";
import MHeader from "components/m-header/m-header.vue";
export default defineComponent({
  name: "App",
  components: {
    Tab,
    MHeader,
  },
});
</script>

 <style lang="less">
</style>