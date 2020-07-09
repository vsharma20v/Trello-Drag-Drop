const listItems = document.querySelectorAll(".list-item");
const lists = document.querySelectorAll(".list");

let draggedItem = null;

listItems.forEach((listItem) => {
  listItem.addEventListener("dragstart", (e) => {
    console.log("drag start");
    draggedItem = listItem;
    setTimeout(() => {
      e.target.classList.add("dragging");
    }, 0);
  });

  listItem.addEventListener("dragend", (e) => {
    console.log("drag end");
    draggedItem = null;
    setTimeout(() => {
      e.target.classList.remove("dragging");
    }, 0);
  });
});

lists.forEach((list) => {
  list.addEventListener("dragenter", (e) => {
    e.preventDefault();
    list.classList.add("highlight");
  });

  list.addEventListener("dragover", (e) => {
    e.preventDefault();
  });

  list.addEventListener("dragleave", (e) => {
    list.classList.remove("highlight");
  });

  list.addEventListener("drop", (e) => {
    list.appendChild(draggedItem);
    list.classList.remove("highlight");
  });
});
