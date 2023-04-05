import validatePassword from './validatePassword';

const submitForm = () => {
	const $btn = document.getElementById('submit');
	$btn.addEventListener('click', (e) => {
		e.preventDefault();
		validatePassword();
	});
};

export default submitForm;
