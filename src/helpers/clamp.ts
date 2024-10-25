import { clampLimit } from '@/constants';

export const clamp = (word: string) => {
  if (word.length <= clampLimit) {
    return word;
  }

  return `${word.slice(0, clampLimit)}...`;
};
