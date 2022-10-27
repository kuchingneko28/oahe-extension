const urlImageJSON = chrome.runtime.getURL("custom_background.json");

const loadCSS = (path) => {
  let css = document.createElement("link");
  css.rel = "stylesheet";
  css.media = "all";
  css.href = path;

  //  append css ny ke head tag
  document.getElementsByTagName("head")[0].appendChild(css);
};

// panggil function loadCSS
loadCSS("https://kuchingneko28.github.io/oahe-extension/src/css/index.css");
// loadCSS("http://127.0.0.1:5500/src/css/index.css"); // ini untuk run di localhost

// fetch custom gambar dari json
fetch(urlImageJSON)
  .then((response) => response.json())
  .then((data) => {
    const url_background = data.url_background;

    if (url_background.length > 0) {
      const addCustomCSS = (css) => (document.head.appendChild(document.createElement("style")).innerHTML = css);

      addCustomCSS(`
      #theme-header {
      
      background-image: url(${url_background});
    }
    `);
    }
  });
