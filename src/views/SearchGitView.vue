<script setup>
import { defineAsyncComponent } from 'vue'

const SearchGitComponent = defineAsyncComponent(
  () => import('@/components/SearchGit/SearchGitComponent.vue'),
)
</script>

<template>
  <SearchGitComponent />
</template>
