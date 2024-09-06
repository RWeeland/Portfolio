//dialog


//renders the project cards:
const cardDiv = document.getElementById("projects-cards")

const projectsObj = [{
    id: "fakePeople",
    img: "./Media/Fake People Real Questions.png",
    title: "Fake People Real Questions",
    text: "Fake People Real Questions is a simple website that will help people learn how to read the tarot. <br><br> This website will generate a randomized question that a reader could ask the tarot as well as a random face to give it a more organic and spontaneous feel.<br>Funnily enough since there are AI-generated images sometimes we get kids asking very profound questions, which makes me giggle.",
    link: "https://rweeland.github.io/FakePeopleRealQuestions/",},
    {
    id: "magicPort",
    img: "./Media/Rico Weeland.com.png",
    title:"Magic Portfolio",
    text: "As you might have seen before. Other than being a developer I'm also a profesional magician. A really good one actually. I travel around the world spreading the joy of magic and mysterie.",
    link: "https://close-up-illusionist.com/",
    },
]

const locationIndex= (element) => {
    const index = projectsObj.findIndex(el => el.id === element)
    return index
 }

    projectsObj.forEach(el =>{
        cardDiv.innerHTML += `
            <div class="card">
                        <img src="${el.img}">
                        <h3>${el.title}</h3>
                        <div onclick="renderModal('${el.id}')" class="button">Learn More</div>
                    </div>
        `
    })
    
const dialog = document.querySelector("dialog")
const closeBtn = document.getElementById("close-btn")
const openMod = () =>{
    dialog.showModal()
    dialog.classList.add("flex-column")
}


const closeMod = () =>{
    dialog.classList.remove("flex-column")
    dialog.close()

}

//closes modal when clicked outside of it
dialog.addEventListener("click", e => {
    const dialogDimensions = dialog.getBoundingClientRect()
    if (
      e.clientX < dialogDimensions.left ||
      e.clientX > dialogDimensions.right ||
      e.clientY < dialogDimensions.top ||
      e.clientY > dialogDimensions.bottom
    ) {
    dialog.classList.remove("flex-column")
      dialog.close()
    }
  })

  // renders the info within the modal.

 const renderModal = (el) =>{
    const index = locationIndex(el);
    const currentProject = projectsObj[index]
    const {img, title, text, link} = currentProject;
    dialog.innerHTML =`
    <img src="${img}">
    <h2>${title}</h2>
    <p>${text}</p>
    <a href="${link}" target="_blank"><div class="button">Go to Project</div></a>
    <button class="dia-button" onclick="closeMod()">X</button>
    `
    openMod()
 }



// Animates text and header - Vars

const header = document.querySelector("header")
const fadeText = document.getElementById("about-content")
const projectsSection = document.getElementById("projects")
const sections = document.querySelectorAll(".section")
const navHome = document.getElementById("home-nav")
const navAbout = document.getElementById("about-nav")
const navProjects = document.getElementById("projects-nav")

// animation code

const observingFade = new IntersectionObserver((entries) =>{
    entries.forEach(entry =>{
        if(entry.isIntersecting){
            fadeText.classList.add("fade")
        } else{
            fadeText.classList.remove("fade")
        }
    })
}, {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,

})


const observingNav = new IntersectionObserver((entries) =>{
    entries.forEach(el =>{
        let currentDiv
        if( el.isIntersecting){
            currentDiv = el.target.id
        }
        if(currentDiv === "home"){
            navHome.classList.add("bold")
            navAbout.classList.remove("bold")
            navProjects.classList.remove("bold")

        }
        else if(currentDiv === "about"){
            navHome.classList.remove("bold")
            navAbout.classList.add("bold")
            navProjects.classList.remove("bold")
        
        } else if (currentDiv === "projects"){
            navHome.classList.remove("bold")
            navAbout.classList.remove("bold")
            navProjects.classList.add("bold")}

    })
},{threshold:0.8})
observingFade.observe(projectsSection)
sections.forEach((section) => observingNav.observe(section));

