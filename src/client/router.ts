import { createWebHistory, createRouter } from "vue-router";

import HomeVue from "./views/Home.vue";
import ArtworksVue from "./views/Artworks.vue";
import ArtworkVue from "./views/Artwork.vue";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", name: "home", component: HomeVue },
    {
      path: "/artworks",
      name: "artworks",
      component: ArtworksVue,
    },
    { path: "/artworks/:id", name: "artwork", component: ArtworkVue },
  ],
});

export default router;
