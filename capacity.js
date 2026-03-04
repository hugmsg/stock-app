import { getModels, calculateCapacity } from "./api.js";

const modelsDiv = document.getElementById("models");
const resultBody = document.getElementById("resultBody");
const button = document.getElementById("calculate");

let models = [];

async function init() {
  models = await getModels();

  models.forEach(model => {
    const div = document.createElement("div");

    div.innerHTML = `
      <label>
        ${model.name}
        <input type="number" min="0" value="0" data-model="${model.name}">
      </label>
    `;

    modelsDiv.appendChild(div);
  });
}

button.addEventListener("click", async () => {
  const inputs = document.querySelectorAll("input[type=number]");
  const request = {};

  inputs.forEach(input => {
    const qty = parseInt(input.value);
    if (qty > 0)
      request[input.dataset.model] = qty;
  });

  const result = await calculateCapacity(request);

  resultBody.innerHTML = "";

  result.forEach(item => {
    const tr = document.createElement("tr");

    if (item.missing > 0)
      tr.classList.add("alert");

    tr.innerHTML = `
      <td>${item.reference}</td>
      <td>${item.needed}</td>
      <td>${item.stock}</td>
      <td>${item.missing}</td>
    `;

    resultBody.appendChild(tr);
  });
});

init();