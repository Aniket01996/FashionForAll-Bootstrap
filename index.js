const dropdownButton = document.getElementById("dropdownButton");
const dropdown = document.getElementById("dropdown-menu");
dropdown.addEventListener("change", function () {
  dropdownButton.textContent = "Sort by : " + dropdown.value;
});
