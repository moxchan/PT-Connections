export const pixelToVw = (value: number): string => {
  return `${(value / 1920) * 100}vw`;
};
