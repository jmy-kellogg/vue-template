<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";
import Search from "../components/Search.vue";

export default defineComponent({
  components: { Search },
  name: "Artworks",
  computed: {
    ...mapGetters("artworks", ["artworks"]),
  },
  methods: {
    async handleSubmit(keywords: string) {
      this.$store.dispatch("artworks/searchArtworks", keywords);
    },
  },
  mounted() {
    this.$store.dispatch("artworks/fetchArtworks");
  },
});
</script>

<template>
  <div class="m-5 justify-self-center">
    <Search
      placeholder="Search Artworks by Title"
      @input-submit="handleSubmit"
    />
    <div>
      <div
        v-for="artwork in artworks"
        :key="artwork?.id"
        class="flex justify-between border-b-1 border-zinc-300"
      >
        <img
          v-if="artwork?.image_id"
          :src="`https://www.artic.edu/iiif/2/${artwork?.image_id}/full/100,/0/default.jpg`"
          :alt="artwork?.thumbnail?.alt_text || artwork?.title"
          width="100"
          height="100"
        />

        <RouterLink
          class="w-full flex p-2 text-l hover:bg-indigo-100 hover:cursor-pointer hover:font-bold"
          :to="{ name: 'artwork', params: { id: artwork?.id } }"
        >
          <div>
            <h2>{{ artwork?.title }}</h2>
            By: {{ artwork?.artist_title }}
          </div>
        </RouterLink>
      </div>
    </div>
  </div>
</template>
<style scoped></style>
