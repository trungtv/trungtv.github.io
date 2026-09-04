/* ==========================================================================
   Various functions that we want to use within the template
   ========================================================================== */

/*jslint es6 */
'use strict';

// Constants for CDNs
const PLOTLY_URL = "https://cdn.jsdelivr.net/npm/plotly.js@3.6.0/dist/plotly.min.js";
const MERMAID_URL = "https://cdn.jsdelivr.net/npm/mermaid@11/dist/mermaid.esm.min.mjs";

// Detect OS/browser preference
const browserPref = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

// Determine the computed theme, which can be "dark" or "light".
function determineComputedTheme() {
  // Determine the expected state of the theme toggle, which can be "dark", "light", or default "system"
  let themeSetting = localStorage.getItem("theme");
  themeSetting = (themeSetting != "dark" && themeSetting != "light" && themeSetting != "system") ? "system" : themeSetting;

  // Return the setting if set, or use the browser preference
  if (themeSetting != "system") {
    return themeSetting;
  }
  return browserPref ? "dark" : "light";
}

// Set the theme on page load or when explicitly called
function setTheme(theme) {
  const use_theme = theme ||
    localStorage.getItem("theme") ||
    $("html").attr("data-theme") ||
    browserPref;

  if (use_theme === "dark") {
    $("html").attr("data-theme", "dark");
    $("#theme-icon").removeClass("fa-sun").addClass("fa-moon");
  } else if (use_theme === "light") {
    $("html").removeAttr("data-theme");
    $("#theme-icon").removeClass("fa-moon").addClass("fa-sun");
  }
}

// Toggle the theme manually
function toggleTheme() {
  const current_theme = $("html").attr("data-theme");
  const new_theme = current_theme === "dark" ? "light" : "dark";
  localStorage.setItem("theme", new_theme);
  setTheme(new_theme);
  redrawPlotly();
}

// Defer the loading of Mermaid to only if there is a field on the page to be rendered
let mermaidElements = document.querySelectorAll("pre>code.language-mermaid");
if (mermaidElements.length > 0) {
  document.addEventListener("readystatechange", function() {
    // Append the Mermaid module to the DOM
    const moduleScript = document.createElement('script');
    moduleScript.type = 'module';
    moduleScript.textContent = `
      import mermaid from '${MERMAID_URL}';
      mermaid.initialize({startOnLoad:true, theme:'default'});
      await mermaid.run({querySelector:'code.language-mermaid'});
    `;
    document.body.appendChild(moduleScript);
  });
}

/* ==========================================================================
   Plotly integration script so that Markdown codeblocks will be rendered
   ========================================================================== */

// Read the Plotly data from the code block, hide it, and render the chart as new node. This allows for the
// JSON data to be retrieve when the theme is switched. The listener should only be added if the data is
// actually present on the page.
//
// NOTE that plotlyDarkLayout and plotlyLightLayout will be exposed in the minimized file
let plotlyElements = document.querySelectorAll("pre>code.language-plotly");
if (plotlyElements.length > 0) {
  document.addEventListener("readystatechange", function() {
    // Return if not ready
    if (document.readyState !== "complete") {
      return;
    }

    // Prepare to load Plotly from the CDN
    const script = document.createElement('script');
    script.src = PLOTLY_URL;
    script.async = true;

    // Once loaded, update the page elements to work with it
    script.onload = function() {
      plotlyElements.forEach(function(elem) {
        // Parse the Plotly JSON data and hide it
        let jsonData = JSON.parse(elem.textContent);
        elem.parentElement.classList.add("hidden");

        // Add the Plotly node
        let chartElement = document.createElement("div");
        elem.parentElement.after(chartElement);

        // Set the theme for the plot and render it
        const theme = (determineComputedTheme() === "dark") ? plotlyDarkLayout : plotlyLightLayout;
        if (jsonData.layout) {
          jsonData.layout.template = (jsonData.layout.template) ? { ...theme, ...jsonData.layout.template } : theme;
        } else {
          jsonData.layout = { template: theme };
        }
        Plotly.react(chartElement, jsonData.data, jsonData.layout);
      });
    }

    // Add the script to the document
    document.head.appendChild(script);
  });
}

function redrawPlotly() {
  plotlyElements.forEach(function(elem) {
    // Parse the Plotly JSON data
    let jsonData = JSON.parse(elem.textContent);

    // Get the Plotly node
    let chartElement = $(elem).parent().next().get(0);

    // Set the theme for the plot and render it
    const theme = (determineComputedTheme() === "dark") ? plotlyDarkLayout : plotlyLightLayout;
    if (jsonData.layout) {
      jsonData.layout.template = (jsonData.layout.template) ? { ...theme, ...jsonData.layout.template } : theme;
    } else {
      jsonData.layout = { template: theme };
    }
    Plotly.react(chartElement, jsonData.data, jsonData.layout);
  });
}

/* ==========================================================================
   Actions that should occur when the page has been fully loaded
   (also re-run on Turbo Drive navigations via turbo:load)
   ========================================================================== */

const scssLarge = 925; // pixels, from /_sass/_themes.scss

function normalizePath(pathname) {
  if (!pathname) {
    return "/";
  }
  const trimmed = pathname.replace(/\/+$/, "");
  return trimmed === "" ? "/" : trimmed;
}

function syncNavSelected() {
  const path = normalizePath(window.location.pathname);
  let bestMatch = null;
  let bestLength = -1;

  $("#site-nav .masthead__menu-item").each(function () {
    const $li = $(this);
    if ($li.attr("id") === "theme-toggle") {
      $li.removeClass("selected");
      return;
    }

    const href = $li.find("a[href]").first().attr("href");
    if (!href) {
      $li.removeClass("selected");
      return;
    }

    let linkPath;
    try {
      linkPath = normalizePath(new URL(href, window.location.origin).pathname);
    } catch (e) {
      $li.removeClass("selected");
      return;
    }

    let matches = false;
    if ($li.hasClass("masthead__menu-item--lg")) {
      matches = path === "/";
    } else if (linkPath !== "/") {
      // Exact section root, or a nested page under that section
      matches = path === linkPath || path.startsWith(linkPath + "/");
    }

    $li.removeClass("selected");
    if (matches && linkPath.length > bestLength) {
      bestMatch = $li;
      bestLength = linkPath.length;
    }
  });

  if (bestMatch) {
    bestMatch.addClass("selected");
  }
}

function bumpFooter() {
  const footer = document.querySelector(".page__footer");
  if (!footer) {
    return;
  }
  const height = footer.offsetHeight;
  // Avoid layout thrash when value is unchanged
  if (document.body.dataset.footerHeight === String(height)) {
    return;
  }
  document.body.dataset.footerHeight = String(height);
  document.body.style.paddingBottom = "0";
  document.body.style.marginBottom = height + "px";
}

function typesetMath() {
  if (window.MathJax && typeof window.MathJax.typesetPromise === "function") {
    window.MathJax.typesetPromise();
  }
}

function initPage() {
  setTheme();
  syncNavSelected();
  typesetMath();

  // Defer layout measurements to after paint to reduce jank
  requestAnimationFrame(function () {
    bumpFooter();
    if (typeof updateNav === "function") {
      updateNav();
    }
  });
}

let pageChromeInitialized = false;

function initPageChrome() {
  if (pageChromeInitialized) {
    return;
  }
  pageChromeInitialized = true;

  window.matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", (e) => {
      if (!localStorage.getItem("theme")) {
        setTheme(e.matches ? "dark" : "light");
      }
    });

  // Delegation so handlers survive Turbo body swaps
  $(document).on("click", "#theme-toggle", function (e) {
    e.preventDefault();
    toggleTheme();
  });

  // Optimistic highlight on nav click (permanent masthead keeps old selected otherwise)
  $(document).on("click", "#site-nav .masthead__menu-item a[href]", function () {
    const $li = $(this).closest(".masthead__menu-item");
    if ($li.attr("id") === "theme-toggle") {
      return;
    }
    $("#site-nav .masthead__menu-item").removeClass("selected");
    $li.addClass("selected");
  });

  $(document).on("click", ".author__urls-wrapper button", function () {
    $(".author__urls").fadeToggle("fast", function () { });
    $(".author__urls-wrapper button").toggleClass("open");
  });

  let didResize = false;
  $(window).on("resize.pageChrome", function () {
    didResize = true;
    if ($(".author__urls.social-icons").css("display") == "none" && $(window).width() >= scssLarge) {
      $(".author__urls").css("display", "block");
    }
  });
  setInterval(function () {
    if (didResize) {
      didResize = false;
      bumpFooter();
      if (typeof updateNav === "function") {
        updateNav();
      }
    }
  }, 250);
}

initPageChrome();
initPage();

document.addEventListener("turbo:load", function () {
  initPageChrome();
  initPage();
});

document.addEventListener("turbo:render", function () {
  syncNavSelected();
});

// Keep scroll jump soft: snap to top after render without animated thrash
document.addEventListener("turbo:before-render", function () {
  if ("scrollRestoration" in history) {
    history.scrollRestoration = "manual";
  }
});

document.addEventListener("turbo:load", function () {
  window.scrollTo(0, 0);
});
