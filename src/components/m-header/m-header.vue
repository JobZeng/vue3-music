<template>
  <div class="m-header">
    <div class="icon-logo"></div>
    <h1 class="text">Vue3 Music</h1>
    <router-link to="/user" custom v-slot="{ navigate }">
      <div @click="navigate" @keypress.enter="navigate" role="link" class="mine">
        <i class="icon-mine"></i>
      </div>
    </router-link>
  </div>
</template>

<script type="text/ecmascript-6">
export default {};
</script>

<style scoped lang="less">
@import "common/less/variable";
@import "common/less/mixin";
.m-header {
  position: relative;
  height: 44px;
  text-align: center;
  color: @color-theme;
  font-size: 0;
  .icon-logo {
    display: inline-block;
    padding: 7px 0;
    font-size: 30px;
    margin-right: 5px;
  }
  .text {
    display: inline-block;
    vertical-align: top;
    line-height: 44px;
    font-size: @font-size-large;
  }
  .mine {
    position: absolute;
    top: 0;
    right: 0;
    .icon-mine {
      display: block;
      padding: 12px;
      font-size: 25px;
      color: @color-theme;
    }
  }
}
</style>
