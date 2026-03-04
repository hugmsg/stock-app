const API_URL = "URL_DE_TON_SCRIPT?action=stock";

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