//dialog

//todo Item: add a functionality to render different modals depending on the button clicked.
// the modal needs an image, a close cross, text explaining the proijects and a button to go to the project


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
closeBtn.addEventListener("click",closeMod)



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
            console.log(currentDiv)
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