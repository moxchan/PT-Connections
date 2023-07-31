// Take in a px value and return a vw so that it scales to viewport width
// pixelToVh is also useful, but vw makes more of a likely difference

export const pixelToVw = (value: number): string => {
  return `${(value / 1920) * 100}vw`;
};
