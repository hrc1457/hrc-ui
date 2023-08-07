<template>
  <div class="flex">
    <PermissionButton icon="add-four" confirmIcon="add-four" :hasPermission="hasPermission('add')" :popConfirm="{title: '确定新增一条数据？'}" tip="新增" type="primary">
      新增
    </PermissionButton>

    <div style="margin-bottom: 30px;"></div>

    <PermissionButton icon="edit" confirmIcon="edit" :hasPermission="hasPermission('edit')" :popConfirm="{title: '确定编辑数据？'}" tip="编辑" type="primary">
      编辑
    </PermissionButton>

    <div style="margin-bottom: 30px;"></div>

    <PermissionButton icon="delete" confirmIcon="delete" :hasPermission="hasPermission('delete')" :popConfirm="{title: '确定删除数据？'}" tip="删除" type="primary">
      删除
    </PermissionButton>
  </div>
</template>

<script setup lang="ts">
import PermissionButton from './components/PermissionButton.vue';
import { HIcon, HButton } from 'hrc-ui';

const buttons = [
  {
    id: 'query',
    name: '查询',
    enabled: false,
    granted: true
  },
  {
    id: 'edit',
    name: '编辑',
    enabled: false,
    granted: true
  },
  {
    id: 'add',
    name: '新增',
    enabled: false,
    granted: true
  },
  {
    id: 'release',
    name: '发布',
    enabled: false,
    granted: true
  },
  {
    id: 'export',
    name: '导出',
    enabled: false,
    granted: true
  },
  {
    id: 'import',
    name: '导入',
    enabled: false,
    granted: true
  },
  {
    id: 'preview',
    name: '预览',
    enabled: false,
    granted: true
  }
]

/**
 * 判断是否用于权限
 * permission：权限名称
 */
const hasPermission = (permission: string): boolean => {
  return buttons.filter((item) => item.id === permission).length !== 0;
}

const array = ['one', 'two', 'three'];
const len = array.length;
/**
 * for循环
 */
const searchOne = (item: string): boolean => {
  for(let i = 0; i < len; i++){
    if(array[i] === item) {
      return true;
    }
  }
  return false;
}
/**
 * forEach循环
 */
const searchTwo = (item: string): boolean => {
  let res = false;
  array.forEach((num) => {
    if(num === item) {
      res = true;
    }
  })
  return res;
}
/**
 * includes方法
 */
const searchThree = (item: string): boolean => {
  return array.includes(item)
}
/**
 * filter方法
 */
const searchFour = (item: string): boolean => {
  return array.filter((num) => num === item).length !== 0;
}
/**
 * reduce方法
 */
const searchFive = (item: string): boolean => {
  return array.reduce((pre, cur) => pre || cur === item, false);
}
/**
 * indexOf方法
 */
const searchSix = (item: string): boolean => {
  return array.indexOf(item) !== -1;
}
console.log('for循环,one:', searchOne('one'));
console.log('for循环,four:', searchOne('four'));
console.log('forEach循环,one:', searchTwo('one'))
console.log('forEach循环,four:', searchTwo('four'))
console.log('includes方法,one:', searchThree('one'))
console.log('includes方法,four:', searchThree('four'))
console.log('filter方法,one:', searchFour('one'))
console.log('filter方法,four:', searchFour('four'))
console.log('reduce方法,one:', searchFive('one'))
console.log('reduce方法,four:', searchFive('four'))
console.log('indexOf方法,one:', searchSix('one'))
console.log('indexOf方法,four:', searchSix('four'))
</script>

<style lang="less" scoped>
.flex {
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}

</style>