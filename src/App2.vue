<script>
export default {
  data() {
    return {
      message: 'hello vue js',
      status: 'active',
      tests: ['Test 1', 'Test 2', 'Test 3'],
      link: 'https://google.com'
    }
  },
  methods: {
    changeActive() {
      this.status = 'pending'
    },
  },
}
</script>

<template>
  <h1>
    {{ message }}
  </h1>
  <p v-if="status === 'active'">Status is active</p>
  <p v-else-if="status === 'pending'">Status is pending</p>
  <p v-else="status === 'sleep'">Status is {{ status }}</p>
  <button @click="changeActive">Change Active</button>

  <ul>
    <li v-for="test in tests" :key="test">{{ test }}</li>
  </ul>
  <a v-bind:href="link">Google</a>
  <a :href="link">Google</a>
</template>

<style scoped>
h1 {
  color: red
}
</style>