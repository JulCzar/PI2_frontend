import { useMemo } from 'react';

const { round, random } = Math;

/** @param {string} componentName */
export const useComponentKey = componentName => {
  const key = useMemo(
    () => `${componentName}-${round(random() * 999_999_999)}`,
    []
  );

  return key;
};
