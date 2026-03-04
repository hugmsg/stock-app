import { getStock } from "./api.js";

const tbody = document.getElementById("stockBody");
const search = document.getElementById("search");

async function load() {
  const data = await getStock();
  render(data);
}

function render(data) {
  tbody.innerHTML = "";

  const filter = search.value.toLowerCase();

  data
    .filter(item => item.reference.toLowerCase().includes(filter))
    .forEach(item => {
      const tr = document.createElement("tr");

      if (item.quantite <= item.seuil)
        tr.classList.add("alert");
      else if (item.quantite <= item.seuil * 1.2)
        tr.classList.add("warning");

      tr.innerHTML = `
        <td>${item.reference}</td>
        <td>${item.quantite}</td>
        <td>${item.seuil}</td>
        <td>${item.famille}</td>
        <td>${item.fournisseur}</td>
      `;

      tbody.appendChild(tr);
    });
}

search.addEventListener("input", load);

load();
setInterval(load, 60000);