<script setup>
import Hero from '@/components/Hero.vue';
import HomeCards from '@/components/HomeCards.vue';
import JobListings from '@/components/JobListings.vue';
</script>

<template>
    <div>
        <Hero title="Hero Title" subtitle="Hero Subtitle" />
        <HomeCards />
        <JobListings :limit="3" :showButton="true" />
    </div>
</template>