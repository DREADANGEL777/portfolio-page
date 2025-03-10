const projects2 = document.getElementById("projects__cont-2")
const underProjectsBtn = document.getElementById("under__projects-btn")

function addProjects() {
  projects2.classList.toggle("projects__cont-2-active")

  if (projects2.classList.contains("projects__cont-2-active")) {
    underProjectsBtn.innerHTML = "SEE LESS PROJECTS"
  } else {
    underProjectsBtn.innerHTML = "SEE MORE PROJECTS"
  }
}

function scrollToBlock(event) {
  event.preventDefault()
  const targetId = event.target.getAttribute("href").substring(1)
  const targetElement = document.getElementById(targetId)

  targetElement.scrollIntoView({
    behavior: "smooth",
    block: "start",
  })
}

var icon = document.getElementById("icon")
var headerBG = document.getElementById("header__main")
var contact = document.getElementById("contact")

icon.onclick = function () {
  document.body.classList.toggle("dark-theme")
  if (headerBG.classList.contains("white__theme-bg")) {
    headerBG.classList.add("dark__theme-bg")
    headerBG.classList.remove("white__theme-bg")
  } else {
    headerBG.classList.remove("dark__theme-bg")
    headerBG.classList.add("white__theme-bg")
  }
  if (contact.classList.contains("white__theme-bg-2")) {
    contact.classList.add("dark__theme-bg-2")
    contact.classList.remove("white__theme-bg-2")
  } else {
    contact.classList.remove("dark__theme-bg-2")
    contact.classList.add("white__theme-bg-2")
  }
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun.png"
  } else {
    icon.src = "images/moon.png"
  }
}
