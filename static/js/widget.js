(function() {
  this.Widget = function() {
    this.html =
      `<div class='container'>` +
      `<h1>Hello</h1>` +
      `<button id='submit-button'>Click</button>` +
      `</div>`;
    var defaults = {
      // source: window.location.hostname,
      containerId: "widget",
      formName: "form",
      // action: "https://signup.blinker.com.au/subscription/create",
      // apiHost: "https://api.blinker.com.au",
    };
    this.options = defaults;
    initializeWidget(this);
    initialiseEvents(this);
  };
  function initializeWidget(self) {
    var container = document.getElementById(self.options.containerId);

    if (container) {
      container.innerHTML = self.html;
    }
  }
  function initialiseEvents(self) {
    var button = document.getElementById("submit-button");
    if (button) {
      button.addEventListener("click", submitClicked.bind(self));
    }
  }

  function submitClicked(self) {
    window.open(`http://localhost:8080?hello='${this.options.containerId}'`);
  }
})();

new Widget({});
