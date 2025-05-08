import { type InjectionKey } from "vue";
import { createStore, useStore as baseUseStore, type Store } from "vuex";

import artworks from "./modules/artworks";
import type { ArtworksState } from "./modules/artworks.ts";

export interface Context {
  commit: Function;
  dispatch: Function;
}

export interface State {
  artworks: ArtworksState;
}

export const key: InjectionKey<Store<State>> = Symbol();

export default createStore<State>({
  modules: {
    artworks,
  },
});

export function useStore() {
  return baseUseStore(key);
}
