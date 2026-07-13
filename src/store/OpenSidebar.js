import { defineStore } from "pinia";

export const useOpenStore = defineStore("OpenSidebar", {
  state: () => ({
    open: true,
  }),
  actions: {
    toggleSidebar() {
      this.open = !this.open;
    },
  },
});