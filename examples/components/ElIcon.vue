<template>
  <i ref="hIconComponent" id="h-icon">&nbsp;&nbsp;&nbsp;&nbsp;</i>
</template>

<script lang="ts" setup>
import { defineProps, onMounted, ref, nextTick } from 'vue';
const props = defineProps({
    type: {
        type: String,
        default: 'cat',
    },
    color: {
        type: String,
        default: 'white'
    }
})


const hIconComponent = ref<HTMLElement | null>(null);
onMounted(() => {
  nextTick(() => {
    if (hIconComponent.value) {
      hIconComponent.value.style.setProperty('--offsetX', hIconComponent.value.clientWidth + 'px');
      hIconComponent.value.style.setProperty('--color', props.color)
    }
  });
});
</script>

<style lang="less" scoped>
#h-icon {
    --offsetX: 0;
    --color: white;
    display: inline-block;
    background-image: url('../loading-one.svg');
    background-size: contain;
    background-repeat: no-repeat;
    background-clip: content-box;
    aspect-ratio: 1 / 1;
    overflow: hidden;
    position: relative;
    &:before {
        content: '';
        display: block;
        position: absolute;
        top: 0;
        bottom: 0;
        left: -100%;
        right: 0;
        background: inherit;
        filter: drop-shadow(var(--offsetX) 0 0 var(--color));
    }
}
</style>