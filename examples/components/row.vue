<template>
    <div class="layout">
      <!-- 使用v-for遍历所有插槽，根据插槽的数量和索引确定渲染位置 -->
      <div v-for="(slotContent, index) in $slots" :key="index" :class="`column ${getColumnClass(index)}`">
        <slot :name="getSlotName(index)"></slot>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  // 导入组件的类型定义
  import { defineProps, withCtx } from 'vue'
  
  // 定义组件的props
  const props = defineProps({
    gutter: {
        type: Number,
        default: 0
    }
  })
  
  // 计算插槽名称
function getSlotName(index: number): string {
  // 将插槽名称定义在这里，你可以根据需求进行更改
  const slotNames = ['left', 'right', 'footer']
  return slotNames[index] || `slot_${index}`
}

// 根据插槽的索引返回对应的列样式类名
function getColumnClass(index: number): string {
  const columnClasses = ['left', 'right']
  return columnClasses[index] || `column_${index}`
}
  </script>
  
  <style lang="less">
  .layout {
    display: flex;
  }
  
  .column {
    flex: 1;
    padding: 10px;
  }
  
  .left {
    background-color: #f2f2f2;
  }
  
  .right {
    background-color: #eaeaea;
  }
  </style>