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

form.addEventListener("submit", function (e) {
	e.preventDefault();

	function isValidEmail(email) {
		const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		return re.test(String(email).toLowerCase());
	}

	if (username.value === "") {
		showError(username, "Username is required");
	} else {
		showSuccess(username);
	}
	if (email.value === "") {
		showError(email, "Email is required");
    } else if(!isValidEmail(email.value)) {
        showError(email, 'Email is not valid');
    } else {
		showSuccess(email);
	}
	if (password.value === "") {
		showError(password, "Password is required");
	} else {
		showSuccess(password);
	}
	if (passwordConfirm.value === "") {
		showError(passwordConfirm, "Password is required");
	} else {
		showSuccess(passwordConfirm);
	}
});
