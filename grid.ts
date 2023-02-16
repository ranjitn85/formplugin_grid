
import { html, LitElement } from 'lit';
import { customElement, property } from 'lit/decorators.js';
import { PluginContract } from '@nintex/form-plugin-contract';
import { Grid } from 'gridjs';
import { styles } from './grid.styles';

@customElement('nintex-grid')
export class NintexSamplegrid extends LitElement {
  private grid?: Grid; 
  static styles = styles;
  
/**
   * Allow Grid Sorting
   */
@property({ type: Boolean })
sortable = false;

@property()
Data!: string;

static getMetaConfig() {
  // plugin contract information
  return import('./grid.config');
}

firstUpdated() {
  this.grid = new Grid({
    columns: [{
     id: 'name',
     name: 'Name'
  }, {
     id: 'email',
     name: 'Email'
  }, {
     id: 'phoneNumber',
     name: 'Phone Number'
  }],
    data: JSON.parse(this.Data),    
    sort: this.sortable,
    
  });

  this.grid.render(this.shadowRoot?.getElementById('js-canvas') as Element);
}

render() {
  if (this.grid) {
    this.grid.updateConfig({
      sort: this.sortable,
      
      data: JSON.parse(this.Data), 
      
    });
    this.grid.forceRender();
  }

  return html`
  <div style="display:none;">${JSON.parse(this.Data)}</div>
  <div id="js-canvas"></div>`;
}
}
