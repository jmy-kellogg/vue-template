import axios from "axios";
import type { Artworks } from "../../../server";

export interface Context {
  commit: Function;
  dispatch: Function;
}

export interface ArtworksState {
  searchList: Artworks;
  defaultList: Artworks;
  keywords: string;
}

interface ArtworksContext extends Context {
  state: ArtworksState;
}

export default {
  namespaced: true,
  state: (): ArtworksState => ({
    searchList: [],
    defaultList: [],
    keywords: "",
  }),
  getters: {
    artworks(state: ArtworksState): Artworks {
      return state.keywords ? state.searchList : state.defaultList;
    },
  },
  mutations: {
    updateDefaultList(state: ArtworksState, artworks: Artworks) {
      state.defaultList = artworks;
    },
    updateSearchList(state: ArtworksState, artworks: Artworks) {
      state.searchList = artworks;
    },
    updateKeywords(state: ArtworksState, keywords: string) {
      state.keywords = keywords;
    },
    clearSearchList(state: ArtworksState) {
      state.keywords = "";
      state.searchList = [];
    },
  },
  actions: {
    async fetchArtworks({ commit }: ArtworksContext) {
      const resp = await axios.get("http://localhost:3001/api/artworks");
      const artworks: Artworks = resp?.data || [];
      commit("updateDefaultList", artworks);
    },
    async searchArtworks({ commit }: ArtworksContext, keywords: string) {
      commit("updateKeywords", keywords);
      if (keywords) {
        const resp = await axios.get(
          `http://localhost:3001/api/artworks/search?keywords=${encodeURIComponent(
            keywords
          )}`
        );
        const artworks: Artworks = resp?.data || [];
        commit("updateSearchList", artworks);
      } else {
        commit("clearSearchList");
      }
    },
  },
};
