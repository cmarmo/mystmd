import type { RoleSpec, RoleData, GenericNode } from 'myst-common';
import { addCommonRoleOptions, commonRoleOptions } from './utils.js';

export const greenTextRole: RoleSpec = {
  name: 'greentext',
  doc: 'A role coloring the text in green.',
  alias: ['green'],
  options: { ...commonRoleOptions('greentext') },
  body: {
    type: String,
    required: true,
  },
  run(data: RoleData): GenericNode[] {

    const green = { type: 'greentext',
      value : data.body as string,
    };
    return [green];
  },
};
