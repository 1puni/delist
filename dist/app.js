const key = 'delist-checklist-v1';
const boxes = [...document.querySelectorAll('input[type="checkbox"]')];
const storageNote = document.querySelector('#storage');
const count = document.querySelector('#count');
function updateCount() { count.textContent = `${boxes.filter(box => box.checked).length} / ${boxes.length}`; }
function unavailable() { storageNote.textContent = 'Kryssen kan inte sparas här. Ingen spårning.'; }
try {
  const saved = JSON.parse(localStorage.getItem(key) || '{}');
  for (const box of boxes) box.checked = saved?.[box.id] === true;
} catch { unavailable(); }
updateCount();
for (const box of boxes) box.addEventListener('change', () => {
  updateCount();
  try { localStorage.setItem(key, JSON.stringify(Object.fromEntries(boxes.map(item => [item.id, item.checked])))); }
  catch { unavailable(); }
});
