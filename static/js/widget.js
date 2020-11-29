(function() {
  this.Widget = function() {
    this.html =
      `<div class='container'>` +
      `<div class='discount-text'>Get 10% Cashback on early bookings</div>` +
      `<div class='logo'><span>b</span><span>l</span><span>a</span><span>h</span>.com</div>` +
      `<div class="input-row" style="margin-top:5%">` +
      `    <div class="input-cell">` +
      `        <label class="input-label" id="input-firstname-label" for="input-firstname">Firstname</label>` +
      `        <input type="text" id="input-firstname" class="input-input" name="firstname" />` +
      `    </div>` +
      `    <div class="input-cell">` +
      `        <label class="input-label" id="input-lastname-label" for="input-lastname">Lastname</label>` +
      `        <input type="text" id="input-lastname" class="input-input" name="lastname" />` +
      `    </div>` +
      `</div>` +
      `<div class="input-row">` +
      `    <div class="input-cell">` +
      `        <label class="input-label" id="input-email-label" for="input-email">Email ID</label>` +
      `        <input type="text" id="input-email" class="input-input" name="email" />` +
      `    </div>` +
      `    <div class="input-cell">` +
      `        <label class="input-label" id="input-phone-label" for="input-phone">Phone</label>` +
      `        <input type="text" id="input-phone" class="input-input" name="phone" />` +
      `    </div>` +
      `</div>` +
      `<button id='submit-button'>BOOK NOW</button>` +
      `</div>`;
    var defaults = {
      containerId: "widget",
      formName: "form",
      // action: "https://signup.input.com.au/subscription/create",
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
