const input = document.querySelector("#favchap");
const button = document.querySelector("button");
const list = document.querySelector("#list");

button.addEventListener("click", () => {
  const li = document.createElement("li");
  li.textContent = input.value;
  input.value = "";

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "❌";
  li.append(deleteButton);
  list.append(li);

  deleteButton.addEventListener("click", () => {
    list.removeChild(li);
  });

  input.focus();
});

// Create li element

// Create a delete button

{
  /* <script>
      const list = document.querySelector('ul');
      const input = document.querySelector('input');
      const button = document.querySelector('button');

      button.addEventListener('click', () => {
        const myItem = input.value;
        input.value = '';

        const listItem = document.createElement('li');
        const listText = document.createElement('span');
        const listBtn = document.createElement('button');

        listItem.appendChild(listText);
        listText.textContent = myItem;
        listItem.appendChild(listBtn);
        listBtn.textContent = 'Delete';
        list.appendChild(listItem);

        listBtn.addEventListener('click', () => {
          list.removeChild(listItem);
        }); */
}

//     input.focus();
//   });
// </script>
