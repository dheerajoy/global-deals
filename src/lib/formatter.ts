const compavtNumberFormatter = new Intl.NumberFormat(undefined, {
  notation: "compact",
});
export function formatCompactNumber(number: number) {
  return compavtNumberFormatter.format(number);
}
