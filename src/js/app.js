const site = window.location.hostname;

// custom background
const url_background = "";

// Load css dari file .css biar g ribet
function loadCSS(path) {
  let css = document.createElement("link");
  css.rel = "stylesheet";
  css.media = "all";
  css.href = path;

  document.getElementsByTagName("head")[0].appendChild(css);
}
loadCSS("https://kuchingneko28.github.io/oahe-extension/src/css/oahe.css");
const addCustomCSS = (css) => (document.head.appendChild(document.createElement("style")).innerHTML = css);

addCustomCSS(`
  #theme-header {
    
    background-image: url(${url_background});
  }
  `);
// Load dari localhost
// loadCSS("http://127.0.0.1:5500/src/css/oahe.css");

// css via js ribet

// tadi ny mau buat add element cuma males ribet
// const header = document.querySelector(".header-content");

// const textHeader = (text) => {
//   const h1 = document.createElement("h1");
//   h1.className = "header-text";
//   h1.innerHTML = text;
//   header.appendChild(h1);
//   console.log(h1);
// };

// textHeader("Pahe test");
