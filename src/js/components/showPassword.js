const showPassword = (buttons = '.btnShowPass') => {
	const $buttons = document.querySelectorAll(buttons);
	if (!$buttons.length) return;

	Array.from($buttons).forEach(($element) => {
		$element.addEventListener('click', () => {
			const { inputId } = $element.dataset;
			if (!inputId) return;

			const $input = document.getElementById(inputId);
			if (!$input) return;

			const attrInput = $input.getAttribute('type');
			if (attrInput === 'password') {
				$input.setAttribute('type', 'text');
			} else {
				$input.setAttribute('type', 'password');
			}
		});
	});
};

export default showPassword;
