/* -- COLLAPSE -- */

const experienceTab = document.querySelector("#experience")
const contentExperience = document.querySelector("#content-experience")
const educationTab = document.querySelector("#education")
const contentEducation = document.querySelector("#content-education")

function showExperienceTab() {
  contentExperience.style.display = "flex"
  contentEducation.style.display = "none"
  experienceTab.classList.add("tab-selected")
  educationTab.classList.remove("tab-selected")
}

function showEducationTab() {
  contentExperience.style.display = "none"
  contentEducation.style.display = "flex"
  educationTab.classList.add("tab-selected")
  experienceTab.classList.remove("tab-selected")
  experience.classList.add("tab")
}

experienceTab.addEventListener("click", showExperienceTab)
educationTab.addEventListener("click", showEducationTab)
