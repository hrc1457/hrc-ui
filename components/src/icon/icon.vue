<template>
  <i id="h-icon" :style="`background-image: url(${imageSrc})`">&nbsp;&nbsp;&nbsp;&nbsp;</i>
</template>
  
<script setup lang="ts">
import { ref, defineProps } from 'vue';
import { imgSrc } from "./image_paths";

  const props = defineProps({
    type: {
      type: String,
      default: 'cat'
    }
  })

  const sourceDir = './source/';
  const imageName = '\\' + props.type + '.svg'

  const src = String(sourceDir + imgSrc.filter((path) => path.includes(imageName))[0])

  const imageSrc = ref("")

  import(src).then((image) => {
    imageSrc.value = image.default || imageSrc.value;
  })

  </script>

  <style lang="less" scoped>
  #h-icon {
    display: inline-block;
    background-size: contain;
    background-repeat: no-repeat;
    background-clip: content-box;
    aspect-ratio: 1 / 1;
  }
  </style>