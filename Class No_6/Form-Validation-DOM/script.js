const username = document.getElementById("username");
const result = document.getElementById("result");
const showBtn = document.getElementById("btn");
let lan = [];

showBtn.addEventListener("click", function (event) {
  event.preventDefault();

  // Get the selected gender radio button

  const gender = document.querySelector("input[name='gender']:checked");
  console.log(gender.value);

  // Get the selected languages checkboxes
  let selectedLanguages = [];

  const languages = document.querySelectorAll(
    "input[name ='languages']:checked",
  );

  // Get the selected country from the dropdown
  const country = document.querySelector("select[name='country']");
  console.log(country.value);

  for (let lan of languages) {
    selectedLanguages.push(lan.value);
  }
  console.log(selectedLanguages);

  // Validate the username field
  let name = username.value.trim();
  if (name === "") {
    alert("Please fill Username field");
    return;
  }
  if (name.length < 4 || name.length > 12) {
    alert("Username length should be b/w 4/12 Character");
    return;
  }
  result.textContent = username.value;
});
