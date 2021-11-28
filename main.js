const app = Vue.createApp({
  data() {
    return {
      timelineEvents: Seed.timelineEvents,
      projects: Seed.projects,
      toggleCV: false,
    };
  },
  methods: {
    toggleView() {
      if (this.toggleCV == false) {
        this.toggleCV = true;
      } else {
        this.toggleCV = false;
      }
    },
  },
});
