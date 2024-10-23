<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">Star Wars Planets</h2>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">An error occurred: {{ error.message }}</div>
    <ul v-else-if="planets && planets.results" class="list-disc pl-5">
      <li v-for="planet in planets.results" :key="planet.url" class="mb-2">
        <NuxtLink :to="`/planet/${getIdFromUrl(planet.url)}`" class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
          {{ planet.name }}
        </NuxtLink>
      </li>
    </ul>
    <p v-else>No planet data available.</p>
  </div>
</template>

<script setup>
const { data: planets, pending, error } = await useFetch('/api/planets')

function getIdFromUrl(url) {
  const matches = url.match(/\/(\d+)\/$/)
  return matches ? matches[1] : null
}
</script>