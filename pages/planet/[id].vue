<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">Planet Details</h2>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">An error occurred: {{ error.message }}</div>
    <div v-else-if="planet" class="bg-white dark:bg-gray-800 shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h3 class="text-xl font-bold mb-2">{{ planet.name }}</h3>
      <p><strong>Climate:</strong> {{ planet.climate }}</p>
      <p><strong>Terrain:</strong> {{ planet.terrain }}</p>
      <p><strong>Population:</strong> {{ planet.population }}</p>
      <p><strong>Diameter:</strong> {{ planet.diameter }} km</p>
      <p><strong>Gravity:</strong> {{ planet.gravity }}</p>
    </div>
    <p v-else>No planet data available.</p>
    <NuxtLink to="/planets" class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Back to Planets List</NuxtLink>
  </div>
</template>

<script setup>
const route = useRoute()
const { data: planet, pending, error } = await useFetch(`/api/planets/${route.params.id}`)
</script>