const toggleBtn = document.getElementById("toggleBtn");

const VANTA_BG_DARK = 0x0f172a;
const VANTA_BG_LIGHT = 0xf8fafc;
/** Warna garis NET mengikuti aksen tema (match style.css) */
const VANTA_NET_COLOR_DARK = 0x38bdf8;
const VANTA_NET_COLOR_LIGHT = 0x0ea5e9;

let vantaEffect = null;

function syncThemeSwitch() {
  const isLight = document.body.classList.contains("light");
  toggleBtn.setAttribute("aria-checked", isLight ? "true" : "false");
  toggleBtn.classList.toggle("theme-switch--light", isLight);
  syncVantaTheme();
}

function syncVantaTheme() {
  if (!vantaEffect || typeof vantaEffect.setOptions !== "function") return;
  const isLight = document.body.classList.contains("light");
  vantaEffect.setOptions({
    backgroundColor: isLight ? VANTA_BG_LIGHT : VANTA_BG_DARK,
    color: isLight ? VANTA_NET_COLOR_LIGHT : VANTA_NET_COLOR_DARK,
  });
}

function initVanta() {
  if (typeof VANTA === "undefined" || typeof VANTA.NET !== "function") return;
  const el = document.getElementById("vanta-bg");
  if (!el) return;

  const isLight = document.body.classList.contains("light");

  vantaEffect = VANTA.NET({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.0,
    minWidth: 200.0,
    scale: 1.0,
    scaleMobile: 1.0,
    backgroundColor: isLight ? VANTA_BG_LIGHT : VANTA_BG_DARK,
    color: isLight ? VANTA_NET_COLOR_LIGHT : VANTA_NET_COLOR_DARK,
  });
}

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  syncThemeSwitch();
});

function resizeVanta() {
  if (vantaEffect && typeof vantaEffect.resize === "function") {
    vantaEffect.resize();
  }
}

initVanta();
syncThemeSwitch();

window.addEventListener("resize", resizeVanta);
window.addEventListener("load", resizeVanta);
