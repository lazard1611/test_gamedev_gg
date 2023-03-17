import 'ScssComponents/popup.scss';
import initPopup from './initPopup';

const popup = () => {
	initPopup('.popupOpen', '.popupCard', '.popupCardContent', '.popupCardClose');
};

export default popup;
