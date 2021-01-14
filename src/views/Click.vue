<template>
  <div class="Click">
    <div class="Click-btn">
      <div class="btn" @click="Clicks(time)">Click</div>
      <div class="btn" @click="Cancel">Cancel</div>
      <div class="btn" @click="Flush">Flush</div>
      <div class="btn" @click="dClick('装饰器')">Debounce</div>
    </div>
  </div>
</template>

<script lang="ts">
import _ from "lodash";
import { Component, Vue } from "vue-property-decorator";
import { Debounce } from "@/components/decorators.dome";
@Component
export default class Click extends Vue {
  /**
   * 延迟时间
   */
  private time = 5000;
  /**
   * 模拟请求
   */
  private doAjax(time: number) {
    console.log(time + "毫秒到了");
  }
  /**
   * 取消调用
   */
  private Cancel() {
    console.log("取消调用");
    this.Clicks.cancel();
  }
  /**
   * 直接调用
   */
  private Flush() {
    console.log("直接调用");
    this.Clicks.flush();
  }
  /**
   * 点击请求
   */
  private Clicks = _.debounce(this.doAjax, this.time);

  /**
   * 装饰器
   * @param {text} 文字
   */
  @Debounce(1000)
  private dClick(text: string) {
    console.log(text);
  }
}
</script>
<style lang="less" scoped>
.Click {
  &-btn {
    width: 600px;
    margin: 0 auto 30px;
    display: flex;
    justify-content: space-between;
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
}
</style>

