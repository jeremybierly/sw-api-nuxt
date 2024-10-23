<template>
  <div>
    <h2 class="text-2xl font-semibold mb-4">Star Wars People</h2>
    <div v-if="pending">Loading...</div>
    <div v-else-if="error">An error occurred: {{ error.message }}</div>
    <ul v-else-if="people && people.results" class="list-disc pl-5">
      <li v-for="person in people.results" :key="person.url" class="mb-2">
        <NuxtLink :to="`/person/${getIdFromUrl(person.url)}`" class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">
          {{ person.name }}
        </NuxtLink>
      </li>
    </ul>
    <p v-else>No people data available.</p>
  </div>
</template>

<script setup>
const { data: people, pending, error } = await useFetch('/api/people')

function getIdFromUrl(url) {
  const matches = url.match(/\/(\d+)\/$/)
  return matches ? matches[1] : null
}
</script>