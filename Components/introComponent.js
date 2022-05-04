app.component("intro-component", {
  template: /* html */ `
  <section class="bg-dark">
        <div class="container">
            <div class="row h-100 g-0">
                <div class="col-md-6 order-lg-1 order-sm-2 order-2">
                    <div class="bg-300 p-4 h-100 d-flex d-flex-md d-flex-sm flex-column  justify-content-center">
                        <h4 class="text-800">Steven <span class="text-warning">Pedersen</span></h1>
                        <h1 class="fw-semi-bold lh-sm fs-4 fs-lg-5 fs-xl-6 text-white">Computer Science</h1>
                        <p class="mb-5 fs-5 text-800">Hello, welcome to my <span class="text-warning">portifolio</span>.<br />
                          Soon to be <span class="text-warning">Computer Science graduate</span>, with experience working across <span class="text-warning">full-stack development</span>
                          Eager to learn, interested in building web apps.    
                        </p>
                    <div class="d-grid gap-2 d-lg-block">
                      <a class="btn btn-primary btn-lg me-2" href="#!" role="button">My Linkedin Profile</a>
                      <a class="btn btn-warning btn-lg" href="#!" role="button">My Github Profile</a>
                    </div>

                    
                    </div>
                </div>
                <div class="col-md-6 order-lg-2  order-sm-1 order-0">
                  <div class="card card-span h-100 text-white bg-dark border-0">
                      <img class="card-img h-100 " src="images/profile_pic.svg" alt="...">
                  </div>
              </div>
          
            </div>
        </div>
    </section>
    `,
});
