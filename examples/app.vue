<template>
  <div class="flex">
    <PermissionButton :hasPermission="true" :popConfirm="{title: '这是最后一条数据哦，确认删除吗？'}" tip="启用">
      <h-icon />
    </PermissionButton>
    <h-button icon="cat" type="primary">123</h-button>
    <ElIcon />
    <br/>
    <button style="font-size: 30px;"><ElIcon />1234</button>
    <PermissionButton :hasPermission="true" :popConfirm="{title: '这是最后一条数据哦，确认删除吗？'}" tip="启用">
      <h-icon />
    </PermissionButton>
  </div>
</template>

<script setup lang="ts">
import PermissionButton from './components/PermissionButton.vue';
import ElIcon from './components/ElIcon.vue';
import { HIcon, HButton } from 'hrc-ui';
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