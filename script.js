function updateTime() {
  const now = new Date();
  
  // Saat
  const hours = String(now.getHours()).padStart(2, '0');
  const minutes = String(now.getMinutes()).padStart(2, '0');
  document.getElementById('clock').textContent = `${hours}:${minutes}`;

  // Tarih
  const options = { weekday: 'long', month: 'short', day: 'numeric' };
  document.getElementById('date').textContent = now.toLocaleDateString('tr-TR', options);
}

// Günün odağını localStorage'a kaydetme
const focusInput = document.getElementById('focus-input');

focusInput.value = localStorage.getItem('dailyFocus') || '';

focusInput.addEventListener('input', (e) => {
  localStorage.setItem('dailyFocus', e.target.value);
});

// İlk çalıştırma ve canlı saat güncellemesi
updateTime();
setInterval(updateTime, 1000);