<script setup>
import axios from 'axios';
import { onMounted, reactive } from 'vue';
import { useRoute } from 'vue-router';
import PulseLoader from 'vue-spinner/src/PulseLoader.vue';
const route = useRoute();

const jobId = route.params.id

const state = reactive({
    job: {},
    isLoading: true
})

onMounted(async () => {
    try {
        const response = await axios.get(`/api/jobs/${jobId}`)
        state.job = response.data
    } catch (error) {
        console.error(error)
        state.isLoading = false
    } finally {
        state.isLoading = false
    }
})
</script>

<template>
    <section class="w-full h-full">
        {{ jobId }}
        <div v-if="state.isLoading" class="w-full h-full flex items-center justify-center">
            <PulseLoader />
        </div>
        {{ JSON.stringify(state.job) }}
    </section>
</template>