<script setup>
import Card from './Card.vue';
</script>
<template>
    <section>Home Cards</section>
    <div class="p-4 flex gap-4 flex-wrap">
        <Card />
        <Card className="bg-red-300"/>
        <Card className="bg-green-600"/>
        <Card />
    </div>
</template>