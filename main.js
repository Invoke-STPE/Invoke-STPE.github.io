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
const timelineComponent = {
  /*html*/
  template: `
            <div>
              <time>{{ employment.year }}</time>
              <h5>{{ employment.title }}</h5>
              {{ employment.description }}

            </div>
         `,
  props: ["employment"],

  mounted() {
    (function () {
      "use strict";

      // define variables
      var items = document.querySelectorAll(".timeline li");

      // check if an element is in viewport
      // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
      function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
          rect.top >= 0 &&
          rect.left >= 0 &&
          rect.bottom <=
            (window.innerHeight || document.documentElement.clientHeight) &&
          rect.right <=
            (window.innerWidth || document.documentElement.clientWidth)
        );
      }

      function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
          if (isElementInViewport(items[i])) {
            items[i].classList.add("in-view");
          }
        }
      }

      // listen for events
      window.addEventListener("load", callbackFunc);
      window.addEventListener("resize", callbackFunc);
      window.addEventListener("scroll", callbackFunc);
    })();
  },
};

const footerComponent = {
  template: /* html*/ `
  <footer>
      <span>made by </span>
      <a href="https://georgemartsoukos.com/" target="_blank">
        <img
          width="24"
          height="24"
          src="https://assets.codepen.io/162656/george-martsoukos-small-logo.svg"
          alt="George Martsoukos logo"
        />
      </a>
    </footer>`,
};

const navigationBar = {
  template: /* html */ `
  <nav class="navbar navbar-expand-lg bg-dark navbar-dark">
        <div class="container">
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navmenu"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navmenu">
            <ul class="navbar-nav">
              <li class="nav-item">
                <span>
                  <a
                    class="nav-link"
                    href="https://github.com/Invoke-STPE"
                    target="_blank"
                    rel="noopener noreferrer"
                    ><i class="bi bi-github"></i> GitHub
                  </a>
                </span>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="https://anbo-easj.dk/cv/"> Home</a>
              </li>
            </ul>
            <ul class="navbar-nav ms-auto">
              <li class="nav-item">
                <a class="nav-link" href="https://invoke-stpe.github.io/cv"
                  ><i class="bi bi-file-person"></i> CV</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>`,
};

// Setup Vue
new Vue({
  el: "#app",
  data() {
    return {
      timelineEvents: Seed.timelineEvents,
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
    "timeline-component": timelineComponent,
    "navigation-component": navigationBar,
  },
  methods: {
    toggleShowMore() {
      this.showMore = !this.showMore;
      console.log(this.showMore);
    },
  },
});
