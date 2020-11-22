(function(w, d, link, script, p) {
  window.onload = function() {
    var css =
      "/Users/shreytiwari 1/Sites/projects/vue-widget/static/css/widget.css";
    var js =
      "/Users/shreytiwari 1/Sites/projects/vue-widget/static/js/widget.js";

    link = d.createElement("link");
    link.rel = "stylesheet";
    link.href = css;
    d.getElementsByTagName("head")[0].appendChild(link);

    script = d.createElement("script");
    script.async = 1;
    script.src = js;

    p = d.getElementsByTagName("script")[0];
    p.parentNode.insertBefore(script, p);
  };
})(window, document);
