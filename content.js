const maliciousSites = [
 "phishing-test.com",
 "malware-test.com",
 "dangerous-site.com"
];

const currentsite = window.location.hostname;
const pageText = document.body.innerText.toLowerCase();
const isFakeOpera = pageText.includes("opera") && pageText.includes("out of date") && !currentSite.includes("opera.com");

if (maliciousSites.some(site => currentSite.includes(site)) || isFakeOpera) {
 document.body.innerHTML = `
 <div style="display:flex; flex-direction:column; align-items:center; justify-content:center; height:100vh">
 <h1 style="color:#d32f2f; font-size:40px;">⚠️ SECURITY ALERT!</h1>
 <p style="font-size:20px;">This site is blocked for your safety!</p>
 <p>Blocked by My Chrome Security Extension 🛡️</p>
 <button onclick="history.back()" style="padding:10px 20px; background:#d32f2f; color:white; border:none;">Go Back</button>
 </div>
 `;
} else {
 console.log("✅ Security Guard: This site is safe - checked by my extension");
}
