var random = Math.floor(Math.random(0,1)*20);
var email = document.getElementById("email");
var textArea = document.getElementById("textArea");
var counter = document.getElementById("counter");

textArea.addEventListener("keyup",function(){
	var characters = textArea.value.split('');
  counter.innerText = characters.length;
});

//FOR DEBUGGING 
console.log("if number is < 5, form will fail to send: " + random);
//FOR DEBUGGING

document.addEventListener('submit', function (e) {
  e.preventDefault()
})

function validation() {
	if(document.form.name.value=="") {
		alert("The field Name is required");
		return false;
	}

	if(document.form.email.value=="") {
		alert("The field Email is required");
		return false;
	}

	if(!(email.value.includes("@"))) {
		alert("Please, enter a valid Email.")
		return false;
	}

	if(textArea.value.length < 100) {
		alert("Your message needs to have at least 100 chars. Please be more descriptive.");
		return false;
	}

	else if (random < 5) {
		alert("Sorry, something went wrong while validating your form. Refresh the page and try again, please.");

	}

	else {
		alert("Your form was sent with success!");

	}

}

