const items = document.querySelectorAll(".sidebar ul li");
const infoBox = document.getElementById("info");

items.forEach((item) => {
  item.addEventListener("click", () => {
    console.log("Cliquei em:", item.textContent); // teste
    const info = item.getAttribute("data-info");
    infoBox.innerHTML = `<h2>${item.textContent}</h2>${info}`;
  });
});
