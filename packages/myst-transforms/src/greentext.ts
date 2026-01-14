import type { Plugin } from 'unified';
import { selectAll } from 'unist-util-select';
import type { GenericNode, GenericParent } from 'myst-common';


export function greenTextTransform(tree: GenericParent) {

  const textNodes = selectAll('greentext', tree) as GenericNode[];

  textNodes.forEach(node => {

    // Change the node type to html

    node.type = 'element';
    node.data = { class: "green" }

    // Apply css style
    node.value = 'verde? ' + node.value as string;

  });
}

export const greenTextPlugin: Plugin<[], GenericParent, GenericParent> =

  () => (tree) => {

    greenTextTransform(tree);

  };