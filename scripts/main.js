/*--Switch between adding and removing the responsive class to
navigation menu as users click on the hamburger menu icon--*/
function myFunction() {
  var x = document.getElementById("myNav");
  if (x.className === "navbar") {
    x.className += " responsive";
  } else {
    x.className = "navbar";
  }
}

/*--jQuery plugin that changes the background color of the Contact for and
changes the text color to white--*/
/*--Place plugin in function and add two functions to stlye contact form--*/
(function ( $ ) {
  $.fn.colorify = function() {
    this.css("background-color", "#C9C9CB");
    return this;
  };
  $.fn.textify = function() {
    this.css("color", "#000000");
    return this;
  };
  $( "div.text" ).colorify();
  $( ".text label" ).textify();
  $( ".text input" ).textify();
  $( "textarea" ).textify();
} ( jQuery ));
