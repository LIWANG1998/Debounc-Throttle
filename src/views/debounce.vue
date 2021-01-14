<template>
  <div class="debounce">
    <div class="debounce-tigger">
      <div class="tigger-area" ref="tigger" @mouseover="onMouseover">
        Tigger area
      </div>
      <div class="btn" @click="Reset">Reset</div>
    </div>
    <div class="color-box">
      <div class="color-box-title">Raw event over time</div>
      <div class="color-box-cell">
        <template v-for="(t, i) in colorArray">
          <div
            class="color-box-cell-raw"
            :style="{ background: t }"
            :key="i"
          ></div>
        </template>
      </div>

      <div class="color-box-title">Debounce events {{ d_time }}ms</div>
      <div class="color-box-cell">
        <template v-for="(t, i) in colorArrays">
          <div
            class="color-box-cell-raw"
            :style="{ background: t }"
            :key="i"
          ></div>
        </template>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import _ from "lodash";
import { Component, Vue } from "vue-property-decorator";

@Component
export default class Scoll extends Vue {
  /**
   * 防抖时间
   */
  private d_time = 300;
  private leading = false;
  private trailing = true;
  /**
   * 选色时间
   */
  private colortime = 1;
  private colortimes = 1;
  /**
   * 是否移动过
   */
  private isMove = false;
  private isMoves = false;
  /**
   * 选色组
   */
  private colors = [
    "#24adf3",
    "#0dffd2",
    "#fd78ff",
    "#b5ff00",
    "#ff6d6d",
    "#B2BEFF",
    "#99FDFF",
  ];
  /**
   * 时间间隔函数
   */
  private timer!: NodeJS.Timeout | null;
  /**
   * 颜色条数组
   */
  private colorArray: string[] = [];
  private colorArrays: string[] = [];
  /**
   * 颜色条数组下标
   */
  private colorNum = -1;
  private colorNums = -1;
  private colorNumold = -1;

  /**
   * 修改
   */
  private onLeading() {
    console.log(this.leading);
  }
  /**
   * 增加间隔
   */
  private addColor() {
    if (this.colorArrays.length > 90) {
      clearInterval(this.timer as NodeJS.Timeout);
      this.timer = null;
      return;
    }
    if (!this.isMove) {
      this.colorNum = -1;
      this.colortime = 0;
    }
    this.colortime++;
    this.isMove = false;
    this.colorArray.push(this.colors[this.colorNum]);

    if (!this.isMoves) {
      this.colorNums = -1;
      this.colortimes = 0;
    }
    this.colortimes++;
    this.isMoves = false;
    this.colorArrays.push(this.colors[this.colorNums]);
  }
  /**
   * 鼠标移入事件
   */
  private onMouseover(e: MouseEvent) {
    if (this.timer) {
      return;
    }
    this.timer = setInterval(() => {
      this.addColor();
    }, 100);
  }
  /**
   * 鼠标移动事件
   */
  private onMousemove() {
    this.isMove = true;
    if (this.colortime < 2) {
      this.colorNum = Math.floor(Math.random() * this.colors.length);
      this.colorNumold = this.colorNum;
    }
  }
  private onMousemoves() {
    this.isMoves = true;
    if (this.colortimes < 2) {
      this.colorNums = this.colorNumold;
    }
  }
  /**
   * 重置
   */
  private Reset() {
    this.colorArray = [];
    this.colorArrays = [];
    clearInterval(this.timer as NodeJS.Timeout);
    this.timer = null;
  }

  private mounted() {
    (this.$refs.tigger as Element).addEventListener(
      "mousemove",
      this.onMousemove
    );
    (this.$refs.tigger as Element).addEventListener(
      "mousemove",
      _.debounce(this.onMousemoves, this.d_time, {
        leading: this.leading,
        trailing: this.trailing,
      })
    );
  }
}
</script>
<style lang="less" scoped>
.debounce {
  margin-top: 50px;
  .debounce-tigger {
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    .tigger-area {
      width: 300px;
      height: 150px;
      border: 1px solid #24adf3;
      text-align: center;
      line-height: 150px;
      border-radius: 5px;
      margin-right: 100px;
      &:hover {
        background-color: #24aef36b;
      }
    }
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
  .color-box {
    margin: 30px auto 0;
    width: 800px;
    height: 400px;
    background: #676767ab;
    border-radius: 5px;
    padding: 20px 30px;
    &-title {
      text-align: left;
      font-size: 24px;
    }
    &-cell {
      display: flex;
      margin: 20px 0;
      height: 24px;
      &-raw {
        height: 24px;
        width: 8px;
        border-right: 2px solid black;
      }
    }
  }
}
</style>
