const usersTableBody = document.querySelector(".users-table-body");
const getUsersBtn = document.querySelector(".get-users");
const loader = document.querySelector(".loader");

getUsersBtn.onclick = () => {
  loader.style.display = "flex";
  fetch("/data/users", {
    method: "GET",
  })
    .then((response) => {
      return response.json();
    })
    .then((body) => {
      loader.style.display = "none";
      const tableContent = body
        .map((item) => {
          return `<tr>
          <td>${item.name}</td>
          <td>${item.email}</td>
          <td>${item.phone}</td>
        </tr>`;
        })
        .join("");
      usersTableBody.innerHTML = tableContent;
    });
};
