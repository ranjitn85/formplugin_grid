import { PluginContract } from '@nintex/form-plugin-contract';
export const config: PluginContract = {
  controlName: 'nintex-grid',
  description: 'Example of Data Grid with hard-coded data',
  groupName: 'Visual',
  fallbackDisableSubmit: false,
  version: '1.0',
  properties: {
    sortable: {
      type: 'boolean',
      title: 'Allow Sorting',
    },
    Data:{
      type:'string',
      title:'Data to be rendered in the grid'
    },
  },
};
