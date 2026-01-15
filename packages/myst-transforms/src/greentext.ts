import type { Plugin } from 'unified';
import { visit } from 'unist-util-visit';
import { selectAll } from 'unist-util-select';
import type { Element } from 'rehype-format';
import type { GenericNode, GenericParent } from 'myst-common';


export function greenTextTransform(tree: GenericParent) {

  const textNodes = selectAll('greentext', tree) as GenericNode[];

  textNodes.forEach(node => {

    // Change the node type to html

    let style;
    let properties;
    const type = 'div';
    visit(node, (n: any) => {
      properties = n.properties;
      style = n.properties?.style;
      console.log(n.properties);
    });
    node.type = type;
    node.properties = properties;
    node.properties.style = style;
  

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