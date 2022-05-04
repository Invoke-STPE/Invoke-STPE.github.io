app.component("projectpage-component", {
  template: /* html */ `<div>
  <h1 class="text-center display-4 pb-2 fw-bold">Projects</h1>
    <div class="row pb-2">
      <div
        class="col-md-4 d-md-flex align-items-stretch pb-3"
        v-for="project in projects"
        v-bind:key="project.id"
      >
        <project-component v-bind:project="project"></project-component>
      </div>
    </div>
    </div>`,
  props: {
    projects: Array,
  },
});

app.component("project-component", {
  template: /* HTML */ `<div class="card bg-dark text-white">
    <div class="product-holder">
      <img v-bind:src="project.image" class="card-img-top" alt="..." />
      <img
        v-if:="project.construction"
        src="../images/Under-Construction.png"
        class="plus-image img-fluid"
      />
    </div>
    <div class="card-body">
      <h5 class="card-title">
        <span class="text-warning">{{ project.title }}</span>
      </h5>
      <p class="card-text">{{ project.description }}</p>
    </div>
    <div class="btn-group w-100">
      <a
        class="btn btn-primary mt-auto btn-block"
        v-bind:href="project.livePreview"
        >Website</a
      >
      <a class="btn btn-warning mt-auto btn-block" v-bind:href="project.gitHub"
        >GitHub</a
      >
    </div>
  </div>`,
  props: ["project"],
});
