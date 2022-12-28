const titleEl = document.getElementById("task-title");
const dateEl = document.getElementById("date");
const descriptionEl = document.getElementById("description");
const tasksEl = document.getElementById("tasks");
const titleSpanEl = document.getElementById("title-span");
const dateSpanEl = document.getElementById("date-span");
const descriptionSpanEl = document.getElementById("description-span");

let title, date, description;

function clearEle() {
  dateEl.value = "";
  titleEl.value = "";
  descriptionEl.value = "";
  titleSpanEl.innerHTML = "";
  dateSpanEl.innerHTML = "";
  descriptionSpanEl.innerHTML = "";
}

const formValidation = () => {
  let flag = 0;
  if (titleEl.value === "") {
    titleSpanEl.innerHTML = "(Required Field)";
    flag = 1;
  } else {
    titleSpanEl.innerHTML = "";
  }
  if (dateEl.value === "") {
    dateSpanEl.innerHTML = "(Required Field)";
    flag = 1;
  } else {
    dateSpanEl.innerHTML = "";
  }
  if (descriptionEl.value === "") {
    descriptionSpanEl.innerHTML = "(Required Field)";
    flag = 1;
  } else {
    descriptionSpanEl.innerHTML = "";
  }
  return flag === 1;
};

function save() {
  if (formValidation()) {
  } else {
    titleSpanEl.innerHTML = "";
    dateSpanEl.innerHTML = "";
    descriptionSpanEl.innerHTML = "";
    addTask();
  }
}

const addTask = () => {
  tasksEl.innerHTML += `<div class="task">
            <span class="task-name">${titleEl.value}</span>
            <span class="date">${dateEl.value}</span>
            <p class="desc">${descriptionEl.value}</p>
            <span class="options">
              <p onclick="editTask(this)">📝</p>
              <p onclick="deleteTask(this)">🧹</p>
            </span>
          </div>`;

  clearEle();
};

const editTask = (e) => {
  if (titleEl.value != "" || dateEl.value != "" || descriptionEl.value != "") {
    alert("Clear all input fields");
  } else {
    titleEl.value =
      e.parentElement.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML;
    dateEl.value =
      e.parentElement.previousElementSibling.previousElementSibling.innerHTML;
    descriptionEl.value = e.parentElement.previousElementSibling.innerHTML;
    e.parentElement.parentElement.remove();
  }
};

const deleteTask = (e) => {
  e.parentElement.parentElement.remove();
};
