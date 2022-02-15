import { entities } from './entities'

const entitiesRegex = RegExp(Object.keys(entities).join('|'), 'g');

export function decodeEntities(str: string) {
    
    const matches = str.match(entitiesRegex);
    if (!matches) return str;

    return matches.reduce((acc, match) => acc.replace(match, entities[match]), str);
}