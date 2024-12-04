<script setup>
import { defineProps } from 'vue';
defineProps({
    title: {
        type: String,
        default: 'Become a default'
    },
    subtitle: {
        type: String,
        default: 'Become a default subtitle'
    }
})
</script>

<template>
    <section>
        Hero Section
        <p class="text-red-500">{{ title }}</p>
        <p class="text-green-500">{{ subtitle }}</p>
    </section>
</template>