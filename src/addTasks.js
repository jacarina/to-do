//Changes active project to clicked project, removes all previous tasks from the container to display newly active project tasks.

let addTasks = (x, y) => {
  let border = "box-shadow: 0 0 0 1px lightgray;font-weight:bold;";
  let allTasks = document.getElementById("all");
  let active = document.querySelector(".active");
  active.classList.remove("active");
  x.classList.add("active");
  let tasks = document.querySelectorAll(".task");
  tasks.forEach((task) => {
    task.remove();
  });

  //if selecting all tasks, style alltasks button as selected but keep default to unsorted.
  y == "yes" ? (x.style.cssText = border) : (allTasks.style.cssText = border);
};

export { addTasks };