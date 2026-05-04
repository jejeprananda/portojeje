const VANTA_BG = 0x0f172a;
/** Warna garis NET mengikuti aksen tema (match style.css) */
const VANTA_NET_COLOR = 0x38bdf8;

let vantaEffect = null;

function initVanta() {
  if (typeof VANTA === "undefined" || typeof VANTA.NET !== "function") return;
  const el = document.getElementById("vanta-bg");
  if (!el) return;

  vantaEffect = VANTA.NET({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    backgroundColor: VANTA_BG,
    color: VANTA_NET_COLOR,
  });
}

function resizeVanta() {
  if (vantaEffect && typeof vantaEffect.resize === "function") {
    vantaEffect.resize();
  }
}

initVanta();

window.addEventListener("resize", resizeVanta);
window.addEventListener("load", resizeVanta);
