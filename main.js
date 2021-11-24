// Define components.
const projectComponent = {
  /*html*/
  template: `
        <div class="card">
            <img v-bind:src="project.image" class="card-img-top " alt="..." />
            <div class="card-body">
            <h5 class="card-title">
                <span class="text-warning">{{ project.title }}</span>
            </h5>
            <p class="card-text">
                {{ project.description }}
            </p>
            </div>
            <div class="btn-group w-100">
            <a class="btn btn-dark mt-auto btn-block" v-bind:href="project.gitHub">GitHub</a>
            <a class="btn btn-warning mt-auto btn-block" v-bind:href="project.livePreview">Website</a>
            </div>
        </div>
        `,
  props: ["project"],
};

// Setup Vue
new Vue({
  el: "#app",
  data() {
    return {
      projects: Seed.projects,
      showMore: false,
    };
  },
  computed: {
    previewProjects() {
      return this.projects.slice(0, 3);
    },
  },
  components: {
    "project-component": projectComponent,
  },
  methods: {
    toggleShowMore() {
      this.showMore = !this.showMore;
      console.log(this.showMore);
    },
  },
});
