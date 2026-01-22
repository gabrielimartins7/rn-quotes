import pt from './locales/pt.json';

type Dictionary = typeof pt;

const dict: Dictionary = pt;

function getValue(obj: any, path: string) {
  return path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

export function translate(key: string): string {
  const value = getValue(dict, key);
  return typeof value === 'string' ? value : key;
}
