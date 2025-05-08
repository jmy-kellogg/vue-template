<script lang="ts" setup></script>

<template>
  <RouterLink
    class="flex flex-col m-2 pl-1 w-14 h-14 text-left justify-end border-1 hover:bg-ruby-500 hover:font-bold hover:cursor-pointer hover:text-white"
    to="/"
  >
    <p class="text-xs font-bold">Explore</p>
    <p class="text-xs font-bold">AIC API</p>
  </RouterLink>
  <RouterView />
</template>

<style scoped></style>
