import { RouteLocationNormalizedLoaded } from "vue-router";
import type { Store } from "vuex";
import type { State } from "./src/client/store";

declare module "@vue/runtime-core" {
  interface ComponentCustomProperties {
    $store: Store<State>;
    $route: RouteLocationNormalizedLoaded;
  }
}
