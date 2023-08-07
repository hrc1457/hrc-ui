<template>
  <div class="flex">
    <PermissionButton :hasPermission="true" :popConfirm="{title: '这是最后一条数据哦，确认删除吗？'}" tip="启用" type="icon" confirmIcon="bird">
      <h-icon />
    </PermissionButton>

    <div style="margin-bottom: 30px;"></div>

    <PermissionButton icon="cat" :hasPermission="true" :popConfirm="{title: '这是最后一条数据哦，确认删除吗？'}" tip="启用" type="primary">
      确认
    </PermissionButton>

    <div style="margin-bottom: 30px;"></div>

    <button><ElIcon/></button>
    <ElIcon />
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