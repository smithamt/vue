<script setup>
import logo from '@/assets/logo.svg'
import { RouterLink, useRoute } from 'vue-router';

const isActiveLink = (routePath) => {
    const route = useRoute()
    console.log('routerl', route.path)
    return route.path === routePath
} 
</script>

<template>
    <div class="flex items-center justify-between p-2 border-b">
        <RouterLink to="/" class="flex p-2 items-center">
            <span> Vue </span>
            <img class="w-10 h-10" v-bind:src="logo" />
        </RouterLink>
        <nav class="flex items-center gap-2">
            <RouterLink :class="['flex p-2 items-center rounded-md px-4', isActiveLink('/') ? 'bg-green-500 text-white' : '']" to="/">
                Home
            </RouterLink>
            <RouterLink :class="['flex p-2 items-center rounded-md px-4', isActiveLink('/jobs') ? 'bg-green-500 text-white' : '']"
                to="/jobs">
                Jobs
            </RouterLink>
        </nav>
    </div>
</template>