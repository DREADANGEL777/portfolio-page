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
