<h2 align="center"> <span style="color:#3EB37F"> Vue</span> <span style="color:#32475b"> Widget</span></h2>
A widget implementation using Vue and Vanilla JS which injects a small form in an external web application that in turn redirects the user to our app.

---

<h3> 
<a href='https://vuewidget.herokuapp.com/demo-example.html' target='_blank'>Demo</a>
</h3>

---

#### Whom is this helpful for?

- You have an application.
- You want to inject a component of your app in some external app.
- You cannot add the source code of the component to that of the other app.

#### What does this sample implementation contain?

- A Demo page (External app) called **Geeky Glasses**
- A main app called **Blah** which is an e-commerce app.

#### Scenario

- Geeky glasses is a product.
- Blah is offering that product with a discount on early bookings.
- We have one Blah's component in the external app.
- User can enter some details in that component from the external app.
- The user is then redirected to the main app so that they we can fill all the other details needed for early booking.


#### The magical code you have to use in the website
```
 <script>
    var js = document.createElement("script");
    js.async = true;
    // Path to the script that loads the widget
    js.src = "https://vuewidget.herokuapp.com/widget-loader.js";
    document.getElementsByTagName("head")[0].appendChild(js);
 </script>
```
