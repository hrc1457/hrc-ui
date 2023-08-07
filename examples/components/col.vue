<template>
  <div ref="HCol" class="h-col">
    <solt></solt>
  </div>
</template>

<script setup lang="ts">
import { defineProps, ref, onMounted, nextTick } from 'vue';
const props = defineProps({
    span: {
        type: Number,
        default: 1
    }
})

const HCol = ref<HTMLElement | null>(null);
onMounted(() => {
  nextTick(() => {
    if (HCol.value) {
      HCol.value.style.setProperty('--flex-span', String(props.span));
    }
  });
});
</script>

<style lang="less" scoped>
.h-col {
    --flex-span: 1;
    background-color: antiquewhite;
    flex: var(--flex-span);
}
</style>