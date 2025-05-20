/* start date of Podium tenure */
const START = new Date("2018-10-01T15:00:00-06:00").getTime();
const span  = document.getElementById("counter");

function pad(n){return `${n}`.padStart(2,"0");}

function render(){
  const ms   = Date.now() - START;
  const days = Math.floor(ms / 86_400_000);
  const hrs  = Math.floor(ms / 3_600_000) % 24;
  const mins = Math.floor(ms /   60_000) % 60;
  const secs = Math.floor(ms /    1_000) % 60;
  span.textContent =
    `${days} days, ${pad(hrs)} hours, ${pad(mins)} minutes, and ${pad(secs)} seconds`;
  requestAnimationFrame(render);
}
requestAnimationFrame(render);

/* reveal card after assets load */
window.addEventListener("load",()=>requestAnimationFrame(()=>{
  document.querySelector(".card").classList.remove("is-loading");
}));

/* light / dark toggle (persists) */
const root=document.documentElement;
const btn =document.querySelector(".theme-toggle");
const KEY ="theme";
root.setAttribute("data-theme",localStorage.getItem(KEY)||"light");
btn.addEventListener("click",()=>{
  const next=root.getAttribute("data-theme")==="light"?"dark":"light";
  root.setAttribute("data-theme",next);
  localStorage.setItem(KEY,next);
});
