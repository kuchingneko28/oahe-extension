const site = window.location.hostname;

// const addCustomCSS = (css) => (document.head.appendChild(document.createElement("style")).innerHTML = css);

function loadCSS(path) {
  let css = document.createElement("link");
  css.rel = "stylesheet";
  css.media = "all";
  css.href = path;

  document.getElementsByTagName("head")[0].appendChild(css);
}

loadCSS("https://raw.githubusercontent.com/kuchingneko28/oahe-extension/main/style.css");

// const header = document.querySelector(".header-content");

// const textHeader = (text) => {
//   const h1 = document.createElement("h1");
//   h1.className = "header-text";
//   h1.innerHTML = text;
//   header.appendChild(h1);
//   console.log(h1);
// };

// textHeader("Pahe test");
