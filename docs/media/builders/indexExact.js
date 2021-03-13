import { toNormal } from "../text/index.js";
import { INDEXER_CHARS_IGNORE } from "../constants/index.js";
/** index the input exactly
 *
 * @param input input to be indexed
 */
export function indexExact(input) {
    if (!input)
        return [];
    return [
        Array.from(toNormal(`${input}`))
            .reduce((s, c) => INDEXER_CHARS_IGNORE.includes(c) ? s : [...s, c.toLowerCase()], [])
            .join(''),
    ];
}
