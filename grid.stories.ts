import { Meta, Story } from '@storybook/web-components';
import { html } from 'lit';

import './grid';
import { NintexSamplegrid } from './grid';

export default {
  title: 'GRID',
  component: 'nintex-grid',
} as Meta;

const Template: Story<NintexSamplegrid> = (args) => {
  return html`<nintex-grid
  ?sortable=${args.sortable}
  .Data=${args.Data}
  >
  </nintex-grid>`;
};

export const Base: Story<NintexSamplegrid> = Template.bind({});
Base.args = {};
