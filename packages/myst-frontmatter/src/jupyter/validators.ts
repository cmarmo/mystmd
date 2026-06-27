import type { ValidationOptions } from 'simple-validators';
import { defined, incrementOptions, validateBoolean, validateObjectKeys } from 'simple-validators';
import type { Jupyter } from './types.js';

const JUPYTER_KEYS = ['source_hidden', 'outputs_hidden'];

/**
 * Validate Jupyter object
 *
 * https://nbformat.readthedocs.io/en/latest/format_description.html#cell-metadata
 */
export function validateJupyter(input: any, opts: ValidationOptions) {
  const value = validateObjectKeys(input, { optional: JUPYTER_KEYS }, opts);
  if (value === undefined) return undefined;
  const output: Jupyter = {};
  if (defined(value.source_hidden)) {
    output.source_hidden = validateBoolean(value.source_hidden, incrementOptions('source_hidden', opts));
  }
  if (defined(value.text_representation)) {
    output.outputs_hidden = validateBoolean(
      value.outputs_hidden,
      incrementOptions('outputs_hidden', opts),
    );
  }
  return output;
}
