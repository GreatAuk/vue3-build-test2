<template>
  <div class="bg-red-400 text-30px font-500">Hello {{ msg }}</div>
</template>

<script lang="ts" setup>
import { defineProps } from "vue";

const props = defineProps<{
  msg: string;
}>();
</script>
