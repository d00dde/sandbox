const nameInput = document.querySelector(".name");
const emailInput = document.querySelector(".email");
const phoneInput = document.querySelector(".phone");
const submitBtn = document.querySelector(".submit-btn");
const success = document.querySelector(".success");
const error = document.querySelector(".error");
const loader = document.querySelector(".loader");

submitBtn.onclick = () => {
  loader.style.display = "flex";
  fetch("/data/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      name: nameInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
    }),
  }).then((response) => {
    loader.style.display = "none";
    // return response.json();
    console.log(response.status);
    if (response.status === 201) {
      success.classList.add("active");
      setTimeout(() => success.classList.remove("active"), 4000);
      nameInput.value = "";
      emailInput.value = "";
      phoneInput.value = "";
    } else {
      error.classList.add("active");
      setTimeout(() => error.classList.remove("active"), 4000);
    }
  });
};
