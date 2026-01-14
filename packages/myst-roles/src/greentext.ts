import type { RoleSpec, RoleData, GenericNode } from 'myst-common';
import { addCommonRoleOptions, commonRoleOptions } from './utils.js';

export const greenTextRole: RoleSpec = {
  name: 'greentext',
  alias: ['green'],
  options: { ...commonRoleOptions('greentext') },
  body: {
    type: String,
    required: true,
  },
  run(data: RoleData): GenericNode[] {
    return [

        {

          type: 'greentext',

          value: data.body as string

        }

    ];
    /*const html = (data.body as string);
    const htmltext = '<p style="color:green;">'+ html +'</p>';
    const green = { type: 'greentext', children: [{ type: 'text', htmltext }] };
    addCommonRoleOptions(data, green);
    return [green];*/
  },
};
