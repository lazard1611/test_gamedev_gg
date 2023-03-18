import validatePassword from './validatePassword';

const submitForm = () => {
	const $btn = document.getElementById('submit');
	$btn.addEventListener('click', () => {
		validatePassword();
		console.log('click');
	});
};

export default submitForm;
