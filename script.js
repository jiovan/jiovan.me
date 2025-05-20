/* ---------- live tenure counter ---------------------------------- */
const START = new Date("2018-10-01T15:00:00-06:00").getTime(); // adjust if needed
const out   = document.getElementById("counter");

const pad = n => n.toString().padStart(2,"0");
function tick(){
  const ms = Date.now() - START;
  const d  = Math.floor(ms / 86_400_000);
  const h  = Math.floor(ms /   3_600_000) % 24;
  const m  = Math.floor(ms /      60_000) % 60;
  const s  = Math.floor(ms /       1_000) % 60;
  out.textContent =
    `${d} days, ${pad(h)} hours, ${pad(m)} minutes, and ${pad(s)} seconds`;
  requestAnimationFrame(tick);
}
requestAnimationFrame(tick);

/* ---------- reveal after load ------------------------------------ */
addEventListener("load",()=>requestAnimationFrame(()=>{
  document.querySelector(".card").classList.remove("is-loading");
}));

/* ---------- theme toggle ----------------------------------------- */
const root=document.documentElement, btn=document.querySelector(".theme-toggle"), KEY="theme";
root.setAttribute("data-theme",localStorage.getItem(KEY)||"light");
btn.addEventListener("click",()=>{
  const next=root.getAttribute("data-theme")==="light"?"dark":"light";
  root.setAttribute("data-theme",next);localStorage.setItem(KEY,next);
});
