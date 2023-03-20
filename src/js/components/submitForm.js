import validatePassword from './validatePassword';

const submitForm = () => {
	const $btn = document.getElementById('submit');
	$btn.addEventListener('click', () => {
		validatePassword();
	});
};

export default submitForm;
