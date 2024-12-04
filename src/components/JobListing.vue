<script setup>
import { computed, ref } from 'vue';

const props = defineProps({
    job: {
        type: Object,
    }
})

const showFullDescription = ref(false)
const truncatedDescription = computed(() => {
    let description = props.job.description
    if (!showFullDescription.value) {
        description = description.substring(0, 90) + '...'
    }
    return description
})

const toggleDescription = () => {
    showFullDescription.value = !showFullDescription.value
}

</script>

<template>
    <div class=" p-2 w-[350px] border rounded-lg shadow">
        <h1 class="font-semibold text-lg">
            {{ job.title }}
        </h1>
        <p> <span class="w-20">Salary -</span> {{ job.salary }}</p>
        <p> <span class="w-20">Type -</span> {{ job.type }}</p>
        <div>
            <p>{{ truncatedDescription }}</p>
            <button class="text-xs" @click="toggleDescription">{{ showFullDescription ? 'Less' : 'More' }}</button>
        </div>
        <div>
            <i class="pi pi-map-marker text-orange-700"></i>
            {{ job.location }}
        </div>
        <a :href="'/job/' + job.id">
            Read More
        </a>
    </div>
</template>