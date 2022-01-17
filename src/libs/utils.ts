import { STORAGE_PREFIX } from 'src/constants/constants';

export const saveToLocalStorage = (name: string, values: unknown) => {
  if (typeof window === 'undefined' || !window.localStorage) return;

  localStorage.setItem(`${STORAGE_PREFIX}${name}`, JSON.stringify(values));
};

export const loadFromLocalStorage = (name: string) => {
  if (typeof window === 'undefined' || !window.localStorage) return null;

  const serialized = window.localStorage.getItem(`${STORAGE_PREFIX}${name}`);

  return serialized !== null ? JSON.parse(serialized) : null;
};

export const removeFromLocalStorage = (name: string) => {
  if (typeof window === 'undefined' || !window.localStorage) return;

  window.localStorage.removeItem(`${STORAGE_PREFIX}${name}`);
};
