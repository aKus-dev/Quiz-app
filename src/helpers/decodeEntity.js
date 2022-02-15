import entities from './entities.json'

const entitiesRegex = RegExp(Object.keys(entities).join('|'), 'g');

export function decodeEntities(str) {
    
    const matches = str.match(entitiesRegex);
    if (!matches) return str;

    return matches.reduce((acc, match) => acc.replace(match, entities[match]), str);
}