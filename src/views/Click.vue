<template>
  <div class="Click">
    <div class="btn" @click="Clicks(12132)">Click</div>
  </div>
</template>

<script lang="ts">
import _ from "lodash";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Click extends Vue {
  /**
   * 模拟请求
   */
  private doAjax(e: number) {
    console.log(e);
  }
  /**
   * 点击请求
   */
  private Clicks = _.debounce(this.doAjax, 1000);
}
</script>
<style lang="less" scoped>
.Click {
  .btn {
    margin-top: 20px;
    border-radius: 5px;
    background: #24adf3;
    display: inline-block;
    padding: 10px 20px;
    cursor: pointer;
    &:active {
      opacity: 0.5;
    }
  }
}
</style>

