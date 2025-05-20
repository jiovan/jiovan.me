/* start date of Podium tenure */
const START = new Date("2018-10-01T15:00:00-06:00").getTime();
const span  = document.getElementById("counter");

function loop(){
  const now = Date.now() - START;
  const d   = Math.floor(now / 86_400_000);
  const h   = Math.floor(now / 3_600_000) % 24;
  const m   = Math.floor(now /   60_000) % 60;
  const s   = Math.floor(now /    1_000) % 60;
  span.textContent =
    `${d} days, ${h.toString().padStart(2,"0")} hours, ` +
    `${m.toString().padStart(2,"0")} minutes, and ` +
    `${s.toString().padStart(2,"0")} seconds`;
  requestAnimationFrame(loop);
}
requestAnimationFrame(loop);

/* reveal card after assets load */
window.addEventListener("load",()=>requestAnimationFrame(()=>{
  document.querySelector(".card").classList.remove("is-loading");
}));

/* light / dark toggle (persists) */
const root=document.body;
const btn =document.querySelector(".theme-toggle");
const KEY ="theme";
root.setAttribute("data-theme",localStorage.getItem(KEY)||"light");
btn.addEventListener("click",()=>{
  const next=root.getAttribute("data-theme")==="light"?"dark":"light";
  root.setAttribute("data-theme",next);
  localStorage.setItem(KEY,next);
});
