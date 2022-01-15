import BaseComponent from "../Shared/Components/BaseComponent/BaseComponent";
import styles from "./LayoutComponent.module.scss"

export default class LayoutComponent extends BaseComponent{
  _template = `
      <div class="{{styles.auth-layout}}">  
        <router>
      </div>  
  `;

  _context = {
    styles:styles
  };

  constructor() {
    super();
    this._renderTemplate = this.render();
  }
}
