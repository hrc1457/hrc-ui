<template>
  <i id="h-icon" :styel="`--offsetX: ${width}`">&nbsp;&nbsp;&nbsp;&nbsp;</i>
</template>

<script lang="ts" setup>
import { defineProps, onMounted, ref } from 'vue';
const props = defineProps({
    type: {
        type: String,
        default: 'cat',
    }
})

const width = ref("")


onMounted(() => {
    const icon = document.querySelector('#h-icon');
    width.value = icon?.clientWidth + 'px';
    console.log("width:" , width.value)
})
</script>

<style lang="less" scoped>
// [class^='h-icon--'] {
//     display:inline-block;
//     position: relative;
//     font-size: 12px;
//     zoom: 1;
//     &::after {
//         content: '12';
//         position: absolute;
//         top: 0;
//         bottom: 0;
//         left: 0;
//         right: 0;
//         background-image: url('../loading-one.svg');
//         background-size: cover;
//     }
// }
#h-icon {
    --offsetX: 18.94px;
    --color: red;
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

#icon{
    --offsetX: 180px;
    --color: white;
    display: inline-block;
    width: 180px;
    height: 180px;
    background: url('../loading-one.svg') no-repeat center  cover;
    overflow: hidden;
    &:after {
        content: '';
        display: block;
        height: 100%;
        background: inherit;
        transform: translateX(-100%);
        filter: drop-shadow(var(--offsetX) 0 0 white);
    }
}
</style>