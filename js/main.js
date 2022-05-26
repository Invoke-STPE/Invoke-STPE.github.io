// Get Elements
const navbar = document.querySelector('nav');
const portfolioSection = document.getElementById('Portfolio');
const educationSection = document.getElementById('Education');
const experienceSection = document.getElementById('Experience');      


// Get data
const projects = Seed.projects;
const education = Seed.education;
const experience = Seed.experience;

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
    ankerTag.href = project.gitHub;
    colDiv.appendChild(ankerTag);

});

portfolioSection.appendChild(pojectFragment);


const educationFragment = new DocumentFragment();
education.forEach(education => {
    // <div class="resume-item mb-4">
    //                 <span class="date"><span class="bi bi-calendar"></span> March 2013 - Present</span>
    //                 <h3>Masteral in Information Technology</h3>
    //                 <p>Even the all-powerful Pointing has no control about the blind texts it is an almost unorthographic.</p>
    //                 <span class="school">New York University</span>
    //               </div>

    const divCol = document.createElement('div');
    divCol.classList.toggle('resume-item');
    divCol.classList.toggle('mb-4');
    educationFragment.appendChild(divCol);

    const spanDate = document.createElement('span');
    spanDate.classList.toggle('date');
    spanDate.innerText = education.year;
    divCol.appendChild(spanDate);

    const spanCalender = document.createElement('span');
    spanCalender.className = 'bi bi-calender';
    spanDate.appendChild(spanCalender);

    const headerthree = document.createElement('h3');
    headerthree.innerText = education.title;
    divCol.appendChild(headerthree);
    
    const pTag = document.createElement('p');
    pTag.innerText = education.description;
    divCol.appendChild(pTag);

    const locationSpan = document.createElement('span');
    locationSpan.classList.toggle('school');
    locationSpan.innerText = education.location;
    divCol.appendChild(locationSpan);
})

educationSection.appendChild(educationFragment);

const experienceFragment = new DocumentFragment();
experience.forEach(experience => {


    const divCol = document.createElement('div');
    divCol.classList.toggle('resume-item');
    divCol.classList.toggle('mb-4');
    experienceFragment.appendChild(divCol);

    const spanDate = document.createElement('span');
    spanDate.classList.toggle('date');
    spanDate.innerText = experience.year;
    divCol.appendChild(spanDate);

    const spanCalender = document.createElement('span');
    spanCalender.className = 'bi bi-calender';
    spanDate.appendChild(spanCalender);

    const headerthree = document.createElement('h3');
    headerthree.innerText = experience.title;
    divCol.appendChild(headerthree);
    
    const pTag = document.createElement('p');
    pTag.innerText = experience.description;
    divCol.appendChild(pTag);

    const locationSpan = document.createElement('span');
    locationSpan.classList.toggle('school');
    locationSpan.innerText = experience.location;
    divCol.appendChild(locationSpan);
})

experienceSection.appendChild(experienceFragment);



window.onscroll = () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
};
