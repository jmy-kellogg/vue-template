<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "Search",
  data() {
    return { inputText: "" };
  },
  props: {
    placeholder: { type: String, required: false },
    btnText: { type: String, required: false, default: "Search" },
  },
  emits: ["inputSubmit"],
  computed: {},
  methods: {
    handleSubmit() {
      this.$emit("inputSubmit", this.inputText);
    },
  },
});
</script>

<template>
  <div>
    <form v-on:submit.prevent="handleSubmit">
      <input
        name="inputText"
        type="text"
        v-model="inputText"
        :placeholder="placeholder"
        class="m-3 w-2xl rounded-md bg-white px-3 py-1.5 text-base outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
      />
      <button
        type="submit"
        class="mx-2 p-1 border-1 text-center hover:bg-ruby-500 hover:font-bold hover:cursor-pointer hover:text-white"
      >
        {{ btnText }}
      </button>
    </form>
  </div>
</template>
<style scoped></style>
