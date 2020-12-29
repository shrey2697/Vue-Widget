// Self invoking function
(function(w, d, link, script, p) {
  window.onload = function() {
    // Load css
    var css =
      "/Users/shreytiwari 1/Sites/projects/vue-widget/static/css/widget.css";
    // Load js
    var js =
      "/Users/shreytiwari 1/Sites/projects/vue-widget/static/js/widget.js";

    link = d.createElement("link");
    link.rel = "stylesheet";
    link.href = css;
    // Appending stylesheet in the head tag
    d.getElementsByTagName("head")[0].appendChild(link);

    script = d.createElement("script");
    script.async = 1;
    script.src = js;
    // Adding the script in the script tag
    p = d.getElementsByTagName("script")[0];
    p.parentNode.insertBefore(script, p);
  };
})(window, document);
