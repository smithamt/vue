<script setup>
import axios from 'axios';
import { useRouter } from 'vue-router';

const router = useRouter()

const addNewJob = async () => {
    try {
        const response = await axios.post('/api/jobs', {
            "title": "Senior Vue Dev Test",
            "type": "Full-Time",
            "location": "Boston, MA",
            "description": "We are seeking a talented Front-End Developer to join our team in Boston, MA. The ideal candidate will have strong skills in HTML, CSS, and JavaScript, with experience working with modern JavaScript frameworks such as Vue or Angular.",
            "salary": "$90K - $100K",
            "company": {
                "name": "NewTek Solutions",
                "description": "NewTek Solutions is a leading technology company specializing in web development and digital solutions. We pride ourselves on delivering high-quality products and services to our clients while fostering a collaborative and innovative work environment.",
                "contactEmail": "contact@teksolutions.com",
                "contactPhone": "555-555-5555"
            },
            "id": "10"
        })
        router.push(`/jobs/${response.data.id}`)
    } catch (error) {
        console.error('Error', error)
    }
}
</script>
<template>
    <div>
        <h1>Add job</h1>
        <button @click="addNewJob" class="p-2 border hover:bg-gray-200 rounded-sm">Add Job</button>
    </div>
</template>