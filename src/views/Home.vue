<template>
  <div class="home">
    <div class="font-title">什么是防抖(debounce)</div>
    <div class="font-one">
      当持续触发事件时，一定时间段内没有再触发事件，事件处理函数才会执行一次，如果设定的时间到来之前，又一次触发了事件，就重新开始延时。如下图，持续触发scroll事件时，并不执行handle函数，当1000毫秒内没有触发scroll事件时，才会延时触发scroll事件
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Home extends Vue {}
</script>
<style lang="less">
.home {
  font-size: 1.5rem;
  .font-title {
    padding-bottom: 0.5rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #0000001a;
  }
  .font-one {
    font-size: 0.9rem;
    text-indent: 2em;
    line-height: 1.5rem;
  }
}
</style>
