const form = document.querySelector("#form");
const username = document.querySelector("#username");
const email = document.querySelector("#email");
const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#passwordConfirm");

function showError(input, message) {
	const formControl = input.parentElement;
	formControl.className = "form_control error";
	const small = formControl.querySelector("small");
	small.innerText = message;
}
function showSuccess(input) {
	const formControl = input.parentElement;
	formControl.className = "form_control success";
}

function checkEmail(input) {
	const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	if (re.test(input.value.trim())) {
		showSuccess(input);
	} else {
		showError(input, 'Email is not valid')
	}
}

function checkRequired(inputArray) {
	inputArray.forEach(function (input) {
		if (input.value.trim() === "") {
			showError(input, `${getFieldName(input)} is required`);
		} else {
			showSuccess(input);
		}
	});
}

function checkLength(input, min, max) {
	if (input.value.length < min) {
		showError(input, `${getFieldName(input)} must be at least ${min} characters`);
	} else if (input.value.length > max) {
		showError(input, `${getFieldName(input)} must be less than ${max} characters`);
	} else {
		showSuccess(input);
	}
}

function checkPasswordsMatch (input1, input2) {
	if (input1.value !== input2.value) {
		showError(input2, 'Passwords do not match')
	}
}

function getFieldName(input) {
	return input.name.charAt(0).toUpperCase() + input.name.slice(1);
}

form.addEventListener("submit", function (e) {
	e.preventDefault();
	checkRequired([username, email, password, passwordConfirm]);
	checkLength(username, 3, 20);
	checkLength(password, 6, 25);
	checkEmail(email);
	checkPasswordsMatch(password, passwordConfirm);

});
