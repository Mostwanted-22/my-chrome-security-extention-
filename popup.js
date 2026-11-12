document.getElementById('scanBtn').addEventListener('click', () => {
  const status = document.getElementById('status');
  status.textContent = 'Scanning... 🔍';
  status.style.background = '#fff3cd';
  setTimeout(() => {
    status.textContent = 'No threats found! ✅ Safe';
    status.style.background = '#e0ffe0';
  }, 1500);
});
