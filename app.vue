<template>
  <div class="min-h-screen view-transition-app transition-colors duration-300 dark:bg-gray-900 dark:text-white">
    <div class="container mx-auto p-4">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-3xl font-bold font-nunito">Star Wars Data</h1>
        <button @click="toggleColorMode" class="p-2 rounded-full bg-gray-200 dark:bg-gray-700">
          <span v-if="colorMode.value === 'light'">🌙</span>
          <span v-else>☀️</span>
        </button>
      </div>
      <nav class="mb-4">
        <NuxtLink to="/" class="mr-4 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Home</NuxtLink>
        <NuxtLink to="/people" class="mr-4 text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">People</NuxtLink>
        <NuxtLink to="/planets" class="text-blue-500 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300">Planets</NuxtLink>
      </nav>
      <NuxtPage />
    </div>
  </div>
</template>

<script setup>
const colorMode = useColorMode()

const toggleColorMode = () => {
  colorMode.preference = colorMode.value === 'dark' ? 'light' : 'dark'
}
</script>