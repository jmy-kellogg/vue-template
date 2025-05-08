<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Home",
  computed: {},
  methods: {},
});
</script>

<template>
  <div>
    <main>
      <div class="flex flex-col min-h-screen justify-center items-center">
        <div>
          <h1>Art Institute of Chicago</h1>
        </div>
        <RouterLink
          class="h-full m-2 p-3 border-2 text-center hover:bg-ruby-500 hover:font-bold hover:cursor-pointer hover:text-white"
          to="/artworks"
        >
          Search our Art
        </RouterLink>
      </div>
    </main>
    <footer
      class="fixed bottom-px w-full py-5 flex gap-[24px] flex-wrap items-center justify-center"
    >
      <a
        class="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-ruby-500"
        href="https://api.artic.edu/docs/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          aria-hidden
          src="../assets/file.svg"
          alt="File icon"
          width="16"
          height="16"
        />
        API Docs
      </a>
      <RouterLink
        class="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-ruby-500"
        to="/artworks"
      >
        <img
          aria-hidden
          src="../assets/window.svg"
          alt="Window icon"
          width="16"
          height="16"
        />
        See Art
      </RouterLink>
      <a
        class="flex items-center gap-2 hover:underline hover:underline-offset-4 hover:text-ruby-500"
        href="https://www.artic.edu/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          aria-hidden
          src="../assets/globe.svg"
          alt="Globe icon"
          width="16"
          height="16"
        />
        Go to artic.edu →
      </a>
    </footer>
  </div>
</template>
<style scoped></style>
