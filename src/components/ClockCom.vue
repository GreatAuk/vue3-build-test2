<script setup lang="ts">
import dayjs from "dayjs";
import { ref } from "vue";

const getTime = () => {
  return dayjs().format("YYYY-MM-DD HH:mm:ss");
};
let time = ref(getTime());
setInterval(() => {
  time.value = getTime();
}, 1000);
</script>

<template>
  <h1 style="color: red">
    {{ time }}
  </h1>
</template>
