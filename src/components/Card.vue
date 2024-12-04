<script setup>
defineProps({
    className: {
        type: String,
        default: 'bg-gray-100'
    }
})
</script>

<template>
    <div :class="`${className} w-20 h-20 border rounded-lg shadow-md p-2`">This is Card</div>
</template>