/* ---------- tenure counter ---------- */
const start = new Date("2018-10-01T09:00:00-06:00"); // \u2190 tweak if needed
const pad   = n => `${n}`.padStart(2,"0");

function updateCounter(){
  const diff = Date.now() - start;
  const d = Math.floor(diff/86_400_000);
  const h = Math.floor(diff/3_600_000)%24;
  const m = Math.floor(diff/60_000)%60;
  const s = Math.floor(diff/1_000)%60;
  document.getElementById("counter").textContent =
    `${d}d ${pad(h)}h ${pad(m)}m ${pad(s)}s`;
}

if(!matchMedia("(prefers-reduced-motion:reduce)").matches){
  updateCounter();
  setInterval(updateCounter,1000);
}else{
  document.getElementById("counter").textContent = "\u2014";
}

/* ---------- staggered entry ---------- */
window.addEventListener("load",() => {
  setTimeout(() => document.body.classList.add("is-loaded"), 80); // slight pause
});

/* ---------- theme toggle ---------- */
const root = document.documentElement;
const btn  = document.querySelector(".theme-toggle");
const key  = "theme";

const setTheme = t => root.setAttribute("data-theme", t);

setTheme(localStorage.getItem(key) || "light");

btn.addEventListener("click",() => {
  const next = root.getAttribute("data-theme")==="light" ? "dark" : "light";
  setTheme(next);
  localStorage.setItem(key,next);
});
