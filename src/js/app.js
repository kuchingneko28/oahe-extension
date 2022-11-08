const backgroundJson = chrome.runtime.getURL("background.json");

const loadCSS = (path) => {
  let css = document.createElement("link");
  css.rel = "stylesheet";
  css.media = "all";
  css.href = path;

  //  append css to head tag
  document.getElementsByTagName("head")[0].appendChild(css);
};

loadCSS("https://kuchingneko28.github.io/oahe-extension/src/css/index.css"); // load css from github

// loadCSS("http://127.0.0.1:5500/src/css/index.css"); // local css from localhost

// fetch background.json
fetch(backgroundJson)
  .then((response) => response.json())
  .then((data) => {
    const url_background = data.url;
    const position_background = data.position !== null ? `background-position: ${data.position}` : "";
    const addCustomCSS = (css) => (document.head.appendChild(document.createElement("style")).innerHTML = css);

    if (url_background == null) {
      return;
    }

    // apply custom wallpaper
    addCustomCSS(`
    #theme-header {
    
    background-image: url(${url_background});
    ${position_background}

  }
  `);
  });
