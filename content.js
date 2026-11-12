// My Chrome Security Extension - Blocks malicious sites
const maliciousSites = [
  "phishing-test.com",
  "malware-test.com",
  "dangerous-site.com"
];

const currentSite = window.location.hostname;

if (maliciousSites.some(site => currentSite.includes(site))) {
  document.body.innerHTML = `
    <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100vh; background:#ffebee; font-family:Arial;">
      <h1 style="color:#d32f2f; font-size:40px;">⚠️ SECURITY ALERT!</h1>
      <p style="font-size:20px;">This site is blocked for your safety!</p>
      <p>Blocked by My Chrome Security Extension 🛡️</p>
      <button onclick="history.back()" style="padding:10px 20px; background:#d32f2f; color:white; border:none; border-radius:5px; cursor:pointer;">Go Back Safely</button>
    </div>
  `;
} else {
  console.log("✅ Security Guard: This site is safe - checked by my extension");
}
