var nav = document.querySelectorAll ('li a');
var home = document.getElementById('home');
var about = document.getElementById('about');
var contact = document.getElementById('contact');
var product = document.getElementById('product');
var dropdown = document.querySelector('ul li ul');

if (window.location.href.indexOf('index') > -1) {
    !home.classList.remove("selected");
    home.className += "selected";
};

if (window.location.href.indexOf('about') > -1) {
    !about.classList.remove("selected");
    about.className += "selected";
};

if (window.location.href.indexOf('contact') > -1) {
    !contact.classList.remove("selected");
    contact.className += "selected";
};

if (window.location.href.indexOf('product') > -1) {
    !product.classList.remove("selected");
    product.className += "selected";
    dropdown.style.display = "block";
} 

