<template>
  <button :disabled="isDisabled" :class="['h-button', `h-button-${type}`, `h-button-${size}`]">
    <div class="h-button-container">
      <div v-if="loading" class="h-button-flex">
        <h-icon type="loading-one" />
        <div>加载中</div>
      </div>
      <div v-else class="h-button-flex">
        <h-icon v-if="icon !== ''" :type="icon" />
        <slot></slot>
      </div>
    </div>
  </button>
</template>
  
<script lang="ts" setup>
import { ref, defineProps } from 'vue';
import HIcon from '../icon';

// 使用 defineProps() 获取传入的 props
const props = defineProps({
  type: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'primary', 'success', 'warning', 'danger'].includes(value)
  },
  size: {
    type: String,
    default: 'normal',
    validator: (value) => ['normal', 'medium', 'small', 'mini'].includes(value) // 修改 medium 的拼写错误
  },
  icon: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  loading: {
    type: Boolean,
    default: false
  }
});

const isDisabled = ref(props.disabled || props.loading);
</script>
  
  <style lang="less" scoped>
  @import url(../index.less);
  /* 样式定义 */
  .h-button-flex {
    display: flex;
    justify-content: center;
    align-items: center;
    height: inherit
  }
  
  .h-button {
  /* 共用样式 */
  display: inline-block;
    line-height: 1;
    white-space-collapse: collapse;
    text-wrap: nowrap;
    cursor: pointer;
    color: rgb(96, 98, 102);
    appearance: none;
    text-align: center;
    box-sizing: border-box;
    font-weight: 500;
    user-select: none;
    font-size: 14px;
    background: rgb(255, 255, 255);
    border-width: 1px;
    border-style: solid;
    border-color: rgb(220, 223, 230);
    border-image: initial;
    outline: none;
    margin: 0px;
    transition: all 0.1s ease 0s;
    padding: 12px 20px;
    border-radius: 4px;
}

.h-button-container {
  display: inline-block;
}

.h-button:hover {
    opacity: 0.7;
}

.h-button-style(@color) {
    background-color: @color;
    border-color: @color;
    color: white;
}

.h-button-default {
  /* 默认样式 */
  .h-button-style(@default-color);
  color: black;
  border-color: black;
}

.h-button-default:hover {
  color: rgb(64, 158, 255);
  background-color: rgb(236, 245, 255);
  border-color: rgb(198, 226, 255);
}
.h-button-default:disabled {
    .h-button-default;
    opacity: @disabled-opacity;
    cursor: not-allowed;
}

.h-button-primary {
  /* 主要样式 */
  .h-button-style(@primary-color);
}

.h-button-success {
  /* 成功样式 */
  .h-button-style(@success-color);
}

.h-button-warning {
  /* 警告样式 */
  .h-button-style(@warning-color);
}

.h-button-danger {
  /* 危险样式 */
  .h-button-style(@danger-color);
}

.h-button-normal {
  /* 默认样式 */
}

.h-button-medium {
  /* 中等样式 */
  font-size: 14px;
  padding: 10px 20px;
  border-radius: 4px;
}

.h-button-small {
  /* 小号样式 */
  font-size: 12px;
  padding: 9px 15px;
  border-radius: 3px;
}

.h-button-mini {
  /* 迷你样式 */
  font-size: 12px;
  padding: 7px 15px;
  border-radius: 3px;
}

.h-button:disabled {
    opacity: @disabled-opacity;
    cursor: not-allowed;
}
</style>
 