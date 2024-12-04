<script setup>
import { onMounted, reactive, ref } from 'vue';
import JobListing from './JobListing.vue';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
import axios from 'axios';

defineProps({
    limit: Number,
    showButton: {
        type: Boolean,
        default: false
    }
})

const state = reactive({
    jobs: [],
    isLoading: true
})

onMounted(async () => {
    try {
        const response = await axios.get('/api/jobs')
        state.jobs = response.data
    } catch (error) {
        console.error('error', error)
    } finally {
        state.isLoading = false
    }
})

</script>

<template>
    <div>
        <h1>
            Job Listings
        </h1>
        <div class="p-4 flex gap-4 flex-wrap">
            <div v-if="state.isLoading" class="w-full h-full flex items-center justify-center">
                <PulseLoader />
            </div>
            <JobListing v-for="(job, index) in state.jobs.slice(0, (limit || state.jobs.length))" :job="job"
                :key="index" />
        </div>

        <button v-if="showButton">View all jobs</button>
    </div>
</template>