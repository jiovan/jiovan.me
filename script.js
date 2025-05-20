const start=new Date("2018-10-01T09:00:00-06:00");
const pad=n=>`${n}`.padStart(2,"0");
function tick(){
  const diff=Date.now()-start;
  const d=Math.floor(diff/86_400_000);
  const h=Math.floor(diff/3_600_000)%24;
  const m=Math.floor(diff/60_000)%60;
  const s=Math.floor(diff/1_000)%60;
  document.getElementById("counter").textContent=`${d}d ${pad(h)}h ${pad(m)}m ${pad(s)}s`;
}
if(!window.matchMedia("(prefers-reduced-motion: reduce)").matches){
  tick();setInterval(tick,1_000);
}else{document.getElementById("counter").textContent="—";}
