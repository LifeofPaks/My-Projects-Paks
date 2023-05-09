const input = document.querySelector(".entered-list");
const addBtn = document.querySelector(".add-list");
const tasks = document.querySelector(".tasks");

//addBtn disabled
input.addEventListener("keyup", () => {
  if (input.value.trim() != 0) {
    addBtn.classList.add("active");
  } else {
    addBtn.classList.remove("active");
  }
});

//add new items to the list
addBtn.addEventListener("click", () => {
  if (input.value.trim() != 0) {
    let newItem = document.createElement("div");
    newItem.classList.add("item");
    newItem.innerHTML = `
        <p>${input.value}</p>
        <div class="item-btn">
          <i class="fa-solid fa-pen-to-square"></i>
          <i class="fa-solid fa-xmark"></i>
        </div>
        `;
    tasks.appendChild(newItem);
    input.value = "";
  } else {
    alert("Please enter a task!");
  }
});

//delete item from list

tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-xmark")) {
    e.target.parentElement.parentElement.remove();
  }
});

//mark task as completed
tasks.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-pen-to-square")) {
    e.target.parentElement.parentElement.classList.toggle("completed");
  }
});
