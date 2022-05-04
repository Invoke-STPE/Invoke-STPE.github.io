app.component("intro-component", {
  template: /* html */ `
  <div class="container py-5 bg-dark text-white">
    <div class="d-md-flex align-items-center justify-content-between">
      <div class="">
        <img
          src="./images/profile_pic.svg"
          class="img-fluid"
          alt=""
          srcset=""
        />
      </div>
      <div class="p-4">
        <h1 class="display-4">
          Steven <span class="text-warning">Pedersen</span>
        </h1>
        <p class="lead">
          Hello, welcome to my little part of the internet, this site is
          intented as a
          <span class="text-warning">portifolio</span> website, and to
          showcase my <span class="text-warning">projects</span>.
        </p>
        <p class="lead">
          I am currently studying computer science at
          <span class="text-warning">Zealand Business College.</span> If
          you wanna know more about me, feel free to read my
          <a href=""><span class="text-info">CV</span></a> or take a look
          through of my current/completed projects below.
        </p>
      </div>       
    </div>

  </div>
    `,
});
