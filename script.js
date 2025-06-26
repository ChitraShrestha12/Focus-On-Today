const iconWrappers = document.querySelectorAll(".icon-wrapper");
const incompleteMsg = document.querySelector(".incomplete-msg");
const progressBar = document.querySelector(".progress-bar");
const countcheck = progressBar.querySelector("p")

const checkAllInput = document.querySelectorAll(".add-goal input");
checkAllInput.forEach((checkInput) => {
  checkInput.addEventListener("focus", () => {
    incompleteMsg.classList.remove("active");
  });
});
iconWrappers.forEach((iconWrapper) => {
  const inputGoal = iconWrapper.parentElement.querySelector("input");
  iconWrapper.addEventListener("click", () => {
    const allInputs = document.querySelectorAll(".add-goal input");
    const allFilled = Array.from(allInputs).every(
      (inputs) => inputs.value !== ""
    );
    if (!allFilled) {
      incompleteMsg.classList.add("active");
      return;
    }
    const active = iconWrapper.classList.toggle("icon-click");
    inputGoal.classList.toggle("check-complete", active);
    inputGoal.readOnly = active;
    const countCompleted = document.querySelectorAll(".icon-click").length;
    const total = iconWrappers.length
    progressBar.style.width = `${countCompleted/total*100}%`;
     
    countcheck.innerHTML =`<p>${countCompleted}/${total}<span>Completed</span></p>`
     countcheck.style.color = '#EEFFE0'
  });
});
