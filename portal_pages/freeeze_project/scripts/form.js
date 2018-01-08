var random = Math.floor(Math.random(0,1)*20);
var email = document.getElementById("email");
var textArea = document.getElementById("textArea");
var counter = document.getElementById("counter");
var errorName = document.querySelector('#nameError');
var errorEmail = document.querySelector('#emailError');
var validEmail = document.querySelector('#emailValid');
var errorThoughts = document.querySelector('#thoughtsError');
var success = document.querySelector('#success');
var formError = document.querySelector('#formError');
var isValid = false;


//TEXTAREA COUNTER
textArea.addEventListener("keyup",function(){
	var characters = textArea.value.split('');
    counter.innerText = characters.length;
});

//FOR DEBUGGING 
console.log("if number is < 5, form will fail to send. Number is: " + random);
//FOR DEBUGGING



function validation() {

	if(document.form.name.value=="") {
		errorName.style.display='block';
		isValid = false;
	} else {
		errorName.style.display='none';
		isValid = true;
	}

	if(email.value=="") {
		errorEmail.style.display='block';
		isValid = false;
	} else {
		errorEmail.style.display='none';
		isValid = true;
	}

	if(!(email.value.includes("@"))) {
		validEmail.style.display='block';
		isValid = false;
	} else {
		validEmail.style.display="none";
		isValid = true;
	} 

	if(textArea.value.length < 100) {
		errorThoughts.style.display='block';
		isValid = false;
	} else {
		errorThoughts.style.display="none";
		isValid = true;
	}
}


function send() {

	if (random < 5) {
		formError.style.display='block';
	} else if (random > 5) {
		success.style.display='block';

	}


}


//EXCECUTING VALIDATION
document.addEventListener('submit', function (e) {
	success.style.display='none';

	validation();

	if(isValid==true) {

	send();

	if(random > 5){
	textArea.value = '';
	}
}	

  e.preventDefault()
})