<script lang="ts">
import axios from "axios";
import { defineComponent } from "vue";

const defaultArtwork = {
  title: "",
  artist_display: "",
  image_id: "",
  thumbnail: {
    alt_text: "",
  },
  exhibition_history: "",
};

export default defineComponent({
  name: "Artwork",
  data() {
    return {
      artwork: defaultArtwork,
    };
  },
  computed: {},
  methods: {
    async fetchData() {
      const id = this.$route.params.id;
      const resp = await axios.get(`http://localhost:3001/api/artworks/${id}`);
      this.artwork = resp?.data || defaultArtwork;
    },
  },
  mounted() {
    this.fetchData();
  },
});
</script>

<template>
  <div className="m-5">
    <div className="justify-self-center">
      <h1>{{ artwork.title }}</h1>
      <h3>{{ artwork.artist_display }}</h3>
      <img
        v-if="artwork.image_id"
        :src="`https://www.artic.edu/iiif/2/${artwork.image_id}/full/843,/0/default.jpg`"
        :alt="artwork?.thumbnail?.alt_text || artwork.title"
        width="843"
        height="500"
      />
    </div>
    <div v-if="artwork.exhibition_history" className="my-5">
      <p>{{ artwork.exhibition_history }}</p>
    </div>
  </div>
</template>
<style scoped></style>
