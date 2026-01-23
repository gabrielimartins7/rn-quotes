import pt from './locales/pt.json';

type Dict = typeof pt;

function getValue(obj: any, path: string) {
  return path.split('.').reduce((acc, key) => (acc ? acc[key] : undefined), obj);
}

export function translate(key: string): string {
  const value = getValue(pt as Dict, key);
  if (typeof value === 'string' && value.length > 0) return value;
  return key;
}
