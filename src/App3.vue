<script setup>
import { ref, onMounted } from 'vue'
const message = ref('hello vue js');
const status = ref('approved');
const tasks = ref(['Test 1', 'Test 2', 'Test 3']);
const link = ref('https://google.com');
const newTask = ref('default input')
const changeActive = () => {
  if (status.value = 'approved') {
    status.value = 'pending'
  } else {
    status.value = 'approved'
  }
}
const addTask = () => {
  if (newTask.value.trim() !== '') {
    tasks.value.push(newTask.value)
    newTask.value = ''
  }
}
const removeTask = (index) => {
  tasks.value.splice(index, 1)
}
onMounted(async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos')
    const data = await response.json()
    tasks.value = data.map((task) => task.title)
  } catch (error) {
    console.log('error found', error)
  }
})
</script>

<template>
  <h1> {{ message }} </h1>
  {{ status }}
  <p v-if="status === 'approved'">Status is approved</p>
  <p v-else-if="status === 'pending'">Status is pending</p>
  <p v-else="status">Status is {{ status }}</p>
  <button @click="changeActive">Change Active</button>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" name="newTask" v-model="newTask" />
    <button type="submit">Submit</button>
  </form>

  <ul>
    <li v-for="(task, index) in tasks" :key="index">
      <span>
        {{ task }}
      </span>
      <button @click="removeTask(index)">X</button>
    </li>
  </ul>
  <a v-bind:href="link">Google</a>
  <a :href="link">Google</a>
</template>

<style scoped>
h1 {
  color: red
}
</style>