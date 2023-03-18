const validatePassword = (
	inputId = 'popup_reg_password',
	inputIdRepeat = 'popup_reg_password_repeat',
) => {
	const $password = document.getElementById(inputId);
	const $confirmPassword = document.getElementById(inputIdRepeat);
	if (!$password && !$confirmPassword) return;

	const $confirmPasswordParent = $confirmPassword.parentElement.parentElement;
	const password = $password.value;
	const confirmPassword = $confirmPassword.value;

	if (password !== confirmPassword) {
		$confirmPasswordParent.classList.add('warning_state');
	} else {
		$confirmPasswordParent.classList.remove('warning_state');
	}
};

export default validatePassword;
