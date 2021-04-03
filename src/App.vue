<template>
  <i class="icon-logo"></i>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "App",
  components: {
  },
});
</script>

 <style lang="less">
@import "common/less/variable.less";
.icon-logo {
  display: block;
  padding: 12px;
  font-size: 20px;
  color: #333;
}
</style>