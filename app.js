const API_URL = "https://script.google.com/macros/s/AKfycbw26JUWFZKnB7ewTgML5OgfFfyP1rPbWOESE9-WH6YvEAgMfs-jmIAjqUmX1OxQFKn8/exec?action=stock";

async function loadStock() {
  const res = await fetch(API_URL);
  const data = await res.json();

  const tbody = document.querySelector("#stockTable tbody");
  tbody.innerHTML = "";

  data.forEach(item => {

    const row = document.createElement("tr");

    if (item.quantite <= item.seuil) {
      row.style.backgroundColor = "#ffcccc";
    }

    row.innerHTML = `
      <td>${item.reference}</td>
      <td>${item.quantite}</td>
      <td>${item.seuil}</td>
      <td>${item.famille}</td>
    `;

    tbody.appendChild(row);
  });
}

loadStock();

setInterval(loadStock, 60000);

