/* ===== tenure counter  =================================== */
const started = new Date("2018-10-01T09:00:00-06:00");   // ← adjust if needed
const el      = document.getElementById("counter");

const pad = n => `${n}`.padStart(2,"0");

function tick(){
  const diff  = Date.now() - started;
  const days  = Math.floor(diff / 86_400_000);
  const hours = Math.floor(diff /   3_600_000) % 24;
  const mins  = Math.floor(diff /      60_000) % 60;
  const secs  = Math.floor(diff /       1_000) % 60;

  el.textContent =
    `${days} days, ${pad(hours)} hours, ` +
    `${pad(mins)} minutes, and ${pad(secs)} seconds`;
}

tick();
if(!matchMedia("(prefers-reduced-motion: reduce)").matches){
  setInterval(tick,1000);
}

/* ===== show card after assets load ======================== */
window.addEventListener("load",()=>requestAnimationFrame(()=>{
  document.querySelector(".card").classList.remove("is-loading");
}));

/* ===== light / dark toggle  =============================== */
const btn  = document.querySelector(".theme-toggle");
const root = document.documentElement;
const key  = "theme";

root.setAttribute("data-theme",localStorage.getItem(key)||"light");

btn.addEventListener("click",()=>{
  const next = root.getAttribute("data-theme")==="light" ? "dark" : "light";
  root.setAttribute("data-theme",next);
  localStorage.setItem(key,next);
});
