const key = 'delist-checklist-v1';
const boxes = [...document.querySelectorAll('input[type="checkbox"]')];
const storageNote = document.querySelector('#storage');
function unavailable() { storageNote.textContent = 'Ticks can’t be saved in this browser. No tracking.'; }
try {
  const saved = JSON.parse(localStorage.getItem(key) || '{}');
  for (const box of boxes) box.checked = saved?.[box.id] === true;
} catch { unavailable(); }
for (const box of boxes) box.addEventListener('change', () => {
  try { localStorage.setItem(key, JSON.stringify(Object.fromEntries(boxes.map(item => [item.id, item.checked])))); }
  catch { unavailable(); }
});
