<script setup>
import { defineAsyncComponent } from 'vue';

const NoteAppComponent = defineAsyncComponent(() => 
    import('@/components/NoteApp/NoteAppComponent.vue')
)
</script>

<template>
    <NoteAppComponent />
</template>