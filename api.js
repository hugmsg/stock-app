const API_BASE = "https://script.google.com/macros/s/AKfycbyfee6Gp17x1v_lVigIjuXnRUHpUl5KOJ1PfNfWZ060ytarS789WWC1dz5MIp19_O-v/exec";

export async function getStock() {
  const res = await fetch(`${API_BASE}?action=stock`);
  return await res.json();
}

export async function getModels() {
  const res = await fetch(`${API_BASE}?action=models`);
  return await res.json();
}

export async function calculateCapacity(data) {
  const res = await fetch(`${API_BASE}?action=capacity`, {
    method: "POST",
    body: JSON.stringify(data)
  });
  return await res.json();
}