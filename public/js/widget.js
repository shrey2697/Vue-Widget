(function() {
  this.Widget = function() {
    // HTML source code for the widget
    this.html =
      `<div class='container'>` +
      `<div class='discount-text'>Get 10% Cashback on early bookings</div>` +
      `<div class='logo'><span>b</span><span>l</span><span>a</span><span>h</span>.com</div>` +
      `<form id='form' name="widget-form" action="" target="_blank" style="margin-top:5%">` +
      `   <div class="widget-row" >` +
      `       <div class="widget-cell">` +
      `           <label class="widget-label" id="widget-firstname-label" for="widget-firstname">Firstname</label>` +
      `           <input type="text" id="widget-firstname" class="widget-input" name="firstname" />` +
      `       </div>` +
      `       <div class="widget-cell">` +
      `           <label class="widget-label" id="widget-lastname-label" for="widget-lastname">Lastname</label>` +
      `           <input type="text" id="widget-lastname" class="widget-input" name="lastname" />` +
      `       </div>` +
      `   </div>` +
      `   <div class="widget-row">` +
      `       <div class="widget-cell">` +
      `           <label class="widget-label" id="widget-email-label" for="widget-email">Email ID</label>` +
      `           <input type="text" id="widget-email" class="widget-input" name="email" />` +
      `       </div>` +
      `       <div class="widget-cell">` +
      `           <label class="widget-label" id="widget-phone-label" for="widget-phone">Phone</label>` +
      `             <input type="number" id="widget-phone" class="widget-input" name="phone" />` +
      `       </div>` +
      `   </div>` +
      `   <button id='submit-button'>BOOK NOW</button>` +
      `</form>` +
      `</div>`;
    var defaults = {
      containerId: "widget",
      formName: "widget-form",
    };
    this.options = defaults;

    initializeWidget(this);
    initialiseEvents(this);
  };
  function initializeWidget(self) {
    var container = document.getElementById(self.options.containerId);
    if (container) {
      // Appending the widget html code to the block which has the id "widget" in the demo page
      container.innerHTML = self.html;
    }
  }
  function initialiseEvents(self) {
    // Adding event listener to the "Book Now" button
    var button = document.getElementById("submit-button");
    if (button) {
      button.addEventListener("click", submitClicked.bind(self));
    }
    var form = document.getElementById("form");
    if (form) {
      form.addEventListener("submit", submitClicked.bind(self));
    }
  }

  function validateFields(field, value) {
    var regex = /[a-z]{2,}/i;

    // Validate first and last name
    if (field === "firstname" || field === "lastname") {
      return regex.test(value);
    }
    // Validate email address
    if (field === "email") {
      regex = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

      return regex.test(value);
    }
    // Validate phone number
    if (field === "phone") {
      regex = /^[0-9]{10}$/;
      return regex.test(value.toString());
    }
  }

  function submitClicked(event) {
    if (event) {
      event.preventDefault();
    }
    var fields = ["firstname", "lastname", "email", "phone"],
      form = document.forms[this.options.formName],
      field,
      label;
    for (var i = 0; i < fields.length; i++) {
      field = form[fields[i]];
      field.className = field.className.replace(" widget-error", "");
      label = document.getElementById("widget-" + fields[i] + "-label")
        .innerText;
      if (!field.value) {
        field.className += " widget-error";
        alert("Please enter your " + label);
        field.focus();
        return false;
      }
      if (!validateFields(fields[i], field.value)) {
        field.className += " blinker-error";
        alert("Please enter a valid " + label);
        field.focus();
        return;
      }
    }
    // Opening the vue app with all the details
    window.open(
      `https://vuewidget.herokuapp.com/?firstname=${form["firstname"].value}&lastname=${form["lastname"].value}&email=${form["email"].value}&phone=${form["phone"].value}`,
    );
  }
})();

new Widget({});
