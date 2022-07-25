import { defineStore } from 'pinia'
import axios from 'axios'

export const useMainStore = defineStore("main", {
  state: () => ({
    /* User */
    userName: null,
    userEmail: null,

    /* Field focus with ctrl+k (to register only once) */
    isFieldFocusRegistered: false,

    /* Sample data (commonly used) */
    clients: [],
    history: [],
    bookmarks: [],
    uniLibs: [],
    // new datas
    libraries: [],
    collections: [],
    starter: [],
    tools: [],
    books: [],
    carousel: [],
  }),
  actions: {
    setUser(payload) {
      if (payload.name) {
        this.userName = payload.name;
      }
      if (payload.email) {
        this.userEmail = payload.email;
      }
    },

    fetch(sampleDataKey) {
      axios
        .get(`data-sources/${sampleDataKey}.json`)
        .then((r) => {
          if (r.data && r.data.data) {
            this[sampleDataKey] = r.data.data;
          }
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
});
