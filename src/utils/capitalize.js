/** @param {string} string */
export const capitalizeString = string => {
  return `${string.charAt(0).toUpperCase()}${string
    .substr(1)
    .toLocaleLowerCase()}`;
};
/** @param {string} phrase */
export const capitalizePhrase = phrase => {
  const words = phrase.trim().split(' ');

  return words.map(capitalizeString).join(' ');
};
