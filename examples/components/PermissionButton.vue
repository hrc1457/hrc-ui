<template>
    <div class="permission-container">
      <div v-show="showConfirm" class="permission-confirmDiv">
        <div class="permission-confirmDiv-titleDiv">
          <h-icon style="margin-right: 5px;" :type="confirmIcon" />
          {{ popConfirm.title }}
        </div>
        <div class="permission-confirmDiv-buttoneDiv">
          <button @click="changeShowConfirmState" class="permission-confirmDiv-cancelButton">取消</button>
          <button @click="popConfirm.onConfirm" class="permission-confirmDiv-confirmButton">确认</button>
        </div>
      </div>
      <h-button class="permission-button" @click="changeShowConfirmState" :type="type" :icon="icon" :size="size" :loading="loading" :disabled="isDisabled">
        <slot></slot>
      </h-button>
      <div v-if="tip !== ''" class="permission-tipDiv">
          {{ tipTitle }}
      </div>
    </div>
</template>
  
<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { HIcon, HButton } from 'hrc-ui';
const props = defineProps({
  hasPermission: {
      type: Boolean,
      default: true
  },
  popConfirm: {
    type: Object,
    default: {
      title: '',
      onConfirm: () => {},
    }
  },
  tip: {
    type: String,
    default: ''
  },
  type: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'primary', 'success', 'warning', 'danger', 'icon'].includes(value)
  },
  size: {
    type: String,
    default: 'normal',
    validator: (value) => ['normal', 'medium', 'small', 'mini'].includes(value)
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
  },
  confirmIcon: {
    type: String,
    default: 'cat'
  }
})

const showConfirm = ref(false);

const isDisabled = ref<boolean>(props.disabled || !props.hasPermission);

const tipTitle = props.hasPermission ? props.tip : '没有相关权限，请联系管理员!';

/**
 * 改变二次确认弹出框的状态
 */
const changeShowConfirmState = () => {
  showConfirm.value = !showConfirm.value;
}

const onClick = () => {
    changeShowConfirmState();
}
</script>

<style lang="less" scoped>
.permission-container{
  position: relative;
  font-size: 14px;
  .permission-button {
    // padding: 0;
    // margin: 0;
    // border-width: 0;
    // background-color: transparent;
    &:hover + .permission-tipDiv {
      display: block;
    }
  }

  .permission-confirmDiv {
    position: absolute;
    left: 50%;
    top: 0%;
    transform: translate(-50%, -110%);
    width: 200px;
    border: 1px solid white;
    padding: 15px;
    box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
    background-color: #fff;
    z-index: 50;
    .permission-confirmDiv-titleDiv {
      display: flex;
      margin-bottom: 15px;
    }
    .permission-confirmDiv-buttoneDiv {
      display: flex;
      justify-content: flex-end;
      .permission-confirmDiv-cancelButton, .permission-confirmDiv-confirmButton {
        background-color: #fff;
        border: 1px solid #fff;
        box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
      }
      .permission-confirmDiv-confirmButton {
        background-color: #409eff;
        margin-left: 5px;
      }
      .permission-confirmDiv-cancelButton:hover, .permission-confirmDiv-confirmButton:hover {
        opacity: 0.7;
      }
    }
  }
  .permission-tipDiv {
    position: absolute;
    left: 50%;
    top: 0%;
    transform: translate(-50%, -110%);
    z-index: 100;
    width: 80px;
    background-color: rgba(0, 0, 0, 0.7);
    padding: 5px;
    color: #fff;
    text-shadow: 0 0 5px #000;
    text-align: center;
    display: none;
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      top: 100%;
      border-width: 5px;
      transform: translateX(-50%);
      border-style: solid;
      border-color: rgba(0, 0, 0, 0.7) transparent transparent transparent;
    }
  }
}

.permission-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}
</style>