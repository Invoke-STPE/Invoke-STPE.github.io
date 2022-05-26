// Get Elements
const navbar = document.querySelector('nav');
const portfolioSection = document.getElementById('Portfolio');


// Get data
const projects = Seed.projects;


// Create Render Fragments.
const pojectFragment = new DocumentFragment();


projects.forEach(project => {
    const element = `
    <div class="single-portfolio col-sm-4">
        <div class="relative">
            <div class="thumb">
                <div class="overlay overlay-bg"></div>
                <img class="image img-fluid" src="${project.image}" alt="">
            </div>
            <div class="p-inner text-center">
            <h4 class="fs-2">${project.title}</h4>
            <p class="fs-5">
                ${project.description}
            </p>
        </div>
        <a href="google.dk" class="stretched-link"></a>                                         
    </div>`;

    const colDiv = document.createElement('div');
    colDiv.classList.toggle('single-portfolio');
    colDiv.classList.toggle('col-sm-4');
    pojectFragment.appendChild(colDiv);

    const relative = document.createElement('div');
    relative.classList.toggle('relative');
    colDiv.appendChild(relative);

    const thumbDiv = document.createElement('div');
    thumbDiv.classList.toggle('thumb');
    relative.appendChild(thumbDiv);

    const img = document.createElement('img');
    img.classList.toggle('image');
    img.classList.toggle('img-fluid');
    img.src = project.image;
    thumbDiv.appendChild(img);

    const innerText = document.createElement('div');
    innerText.classList.toggle('p-inner');
    innerText.classList.toggle('text-center');
    relative.appendChild(innerText);

    const headerFour = document.createElement('h4');
    headerFour.classList.toggle('fs-2');
    headerFour.innerText = project.title;
    innerText.appendChild(headerFour);

    const pTag = document.createElement('p');
    pTag.classList.toggle('fs-5');
    pTag.innerText += project.description;
    innerText.appendChild(pTag);

    const ankerTag = document.createElement('a');
    ankerTag.classList.toggle('stretched-link');
    ankerTag.href = project.github;
    colDiv.appendChild(ankerTag);


    portfolioSection.appendChild(pojectFragment);

});





window.onscroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
