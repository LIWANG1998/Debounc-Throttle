<template>
  <div class="Scoll">
    <div>没有经过任何处理的Scoll事件</div>
    <div class="btn" @click="Scoll">Scoll</div>
    <div class="Scoll-Num">{{ ScollNum }}</div>
  </div>
</template>

<script lang="ts">
import _ from "lodash";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Scoll extends Vue {
  /**
   * 获取滚动条高度
   */
  private ScollNum = 0;

  /**
   * 监听滚动条事件
   */
  private mounted() {
    window.addEventListener("scroll", this.Scoll);
    // window.addEventListener("scroll", _.debounce(this.Scoll, 400));
  }
  private Scoll() {
    this.ScollNum = document.documentElement.scrollTop;
    console.log("Hello Scoll");
  }
}
</script>
<style lang="less" scoped>
.Scoll {
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
  .Scoll-Num {
    position: fixed;
    font-size: 50px;
    letter-spacing: 8px;
    top: 250px;
    left: 50%;
    transform: translateX(-50%);
  }
}
</style>
