//these functions open and close the contact form
function openForm() {
    document.getElementById("myForm").style.display = "block";
}

function closeForm() {
    document.getElementById("myForm").style.display = "none";
}

//This function displays the first image in teh slideshow when the page loads
var slideIndex= 1;
showSlides(slideIndex);

//This function changes the slide when the left or right arrows are clicked
function plusSlides(n) {
    showSlides(slideIndex += n);
}

//This function changes the slide when the dots are clicked 
function currentSlide(n) {
    showSlides(slideIndex = n);
}


function showSlides(n) {
    var slides= document.getElementsByClassName("mySlides"); // this takes all elements with class name
    //"my slides" and stores them in variable array "slides"
    var dots = document.getElementsByClassName("dot"); //this takes all elements w class name "dot" and stores
    //them in the variable array "dot"
    if (n > slides.length) {slideIndex = 1}; //if n (the number passed into the function) is greater than 
    //the length of the array "slides", the slideIndex is set to 1
    if (n < 1) {slideIndex = slides.length}; // if n(the number passed into the function)  is less than 1, 
    //the slideInde is set to the length of array slides 
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none"; // this for loop takes each item in teh array "slides" and sets 
        //the display to none
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", ""); //this for loop takes each item in tne
        // "dots" and removes "active" which removes the active styling
    }
    slides[slideIndex-1].style.display= "block"//this displays the image in the slide show
    dots[slideIndex-1].className += " active"; //this adds the active styling to the dot associated w the image
}

//this code will create close the contact form when the user clicks off it
//the first step is to add an event listener for any clicks on the website
document.addEventListener("click", function(event) {
    //here we state that if the eclicks happens on the cancel elsewhere and click doesn't happen 
    //on any element with the contact class then call the closeForm() function
    if (event.target.matches(".cancel") || !event.target.closest(".form-popup") && !event.target.closest(".Pop_Up_Button") && !event.target.closest(".contact")) {
        closeForm()
    }
}, false )