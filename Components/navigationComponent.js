app.component("navigation-component", {
  template: /* html */ `<nav class="navbar navbar-expand-lg bg-dark navbar-dark">
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
            <a class="nav-link" href="https://invoke-stpe.github.io/"> Home</a>
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
});
