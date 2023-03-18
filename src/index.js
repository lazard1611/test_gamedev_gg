// scss
import './scss/main-global.scss';

// js
import { documentReady } from 'utils';
import { ENV_STATUS } from 'utils/constants';
import pageWidgetInit from 'dev-vendors/dev-widget';
import App from './js/app';

const styles = ['color: #fff', 'background: #cf8e1f'].join(';');
// eslint-disable-next-line no-console

// -------------------  dev widget
if (ENV_STATUS.projectDevStatus) {
	pageWidgetInit();
}
// -------------------  dev widget###
// -------------------  import sprite-icons svg
function requireAll(r) {
	r.keys().forEach(r);
}
requireAll(require.context('./images/icons/sprite-icons/', true, /\.svg$/));
// -------------------  import sprite-icons svg###

// -------------------  init App
documentReady(() => {
	const appInit = new App();
});
// -------------------  init App##
