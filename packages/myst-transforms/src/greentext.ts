import type { Plugin } from 'unified';
import { selectAll } from 'unist-util-select';
import type { GenericNode, GenericParent } from 'myst-common';


export function greenTextTransform(tree: GenericParent) {

  const textNodes = selectAll('greentext', tree) as GenericNode[];

  textNodes.forEach(node => {

    // Change the node type to div

    node['type'] = 'div';
    node['style'] = { color: 'green'}  

    node.children = [];
    const child = { type : 'text',
      value : 'verde? ' + node.value as string,
    }
    node.children[0] = child;
  });
}

export const greenTextPlugin: Plugin<[], GenericParent, GenericParent> =

  () => (tree) => {

    greenTextTransform(tree);

  };