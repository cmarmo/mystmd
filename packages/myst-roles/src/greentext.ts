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
  /*  return [

        {

          type: 'greentext',

          value: data.body as string

        }

    ];*/

    const style = 'color: "green";'
    const green = { type: 'greentext',
      value : data.body as string,
      properties : { style: style},
    };
    return [green];
  },
};
