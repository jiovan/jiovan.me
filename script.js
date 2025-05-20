/* ===== tenure counter  =================================== */
const started = new Date("2018-10-01T15:00:00-06:00");   // adjust start
const el      = document.getElementById("counter");

function render(diffMs){
  const d = Math.floor(diffMs / 86_400_000);
  const h = Math.floor(diffMs /   3_600_000) % 24;
  const m = Math.floor(diffMs /      60_000) % 60;
  const s = Math.floor(diffMs /       1_000) % 60;
  const pad = n => `${n}`.padStart(2,"0");

  el.textContent =
    `${d} days, ${pad(h)} hours, ${pad(m)} minutes, and ${pad(s)} seconds`;
}

function loop(t){
  render(t - started.getTime());
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

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
