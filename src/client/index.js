import routes from './Routes.js';
import ChatService from './Services/ChatService.js';
import RouterService from './Services/RouterService.js';
import RenderService from './Services/RenderService.js';
import RouterLinkDirective from './Shared/Directives/RouterLinkDirective.js';
import ServiceLocator from './Services/ServiceLocator.js';
import ProfileService from './Services/ProfileService.js';
import styles from './Shared/css/common.scss';

const root = document.querySelector('#root');
document.body.className = styles.clear;

const chatService = new ChatService();
const router = new RouterService(routes);
const locator = new ServiceLocator();
const profileService = new ProfileService();
const renderService = new RenderService(router);

locator.addInstance('router', router);
locator.addInstance('chatService', chatService);
locator.addInstance('profileService', profileService);
window.locator = locator;


let html = renderService.render();



const render = (callback) => {
  root.innerHTML = html;
  callback();
}

render(()=>{
  const directive = new RouterLinkDirective();
  renderService.addHandlers();
});




