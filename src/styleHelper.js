//Makes input visible/invisible
let visibility = (modal) => {
  modal.style.display == "none"
    ? (modal.style.display = "block")
    : (modal.style.display = "none");
};
//Blur's task container
let blurTasks = (taskList) => {
  taskList.style.filter == ""
    ? (taskList.style.filter = "blur(1px)")
    : (taskList.style.filter = "");
};
//Removes currently active project styling
let selector = () => {
  let r = document.querySelectorAll(".link");
  r.forEach((result) => {
    result.style.cssText = "";
  });
};

export { visibility, blurTasks, selector };