<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">Person Details</h2>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">An error occurred: {{ error.message }}</div>
    <div v-else-if="person" class="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h3 class="text-xl font-bold mb-2">{{ person.name }}</h3>
      <p><strong>Height:</strong> {{ person.height }} cm</p>
      <p><strong>Mass:</strong> {{ person.mass }} kg</p>
      <p><strong>Hair Color:</strong> {{ person.hair_color }}</p>
      <p><strong>Eye Color:</strong> {{ person.eye_color }}</p>
      <p><strong>Birth Year:</strong> {{ person.birth_year }}</p>
    </div>
    <p v-else>No person data available.</p>
    <NuxtLink to="/people" class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Back to People List</NuxtLink>
  </div>
</template>

<script setup>
const route = useRoute()
const { data: person, pending, error } = await useFetch(`/api/people/${route.params.id}`)
</script>