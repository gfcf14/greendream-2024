import { clampLimit } from '@/constants';

export const clamp = (word: string, specificLimit: number = 0) => {
  const limit = specificLimit > 0 ? specificLimit : clampLimit;

  if (word.length <= limit) {
    return word;
  }

  return `${word.slice(0, limit)}...`;
};
