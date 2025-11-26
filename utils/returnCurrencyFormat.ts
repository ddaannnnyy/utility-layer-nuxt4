import { defu } from 'defu';

export function returnCurrencyFormat(amount?: string | number, options?: Intl.NumberFormatOptions) {
  if (!amount) return
  const pattern = /^-?\d+(\.\d+)?$/;
  if (!pattern.test(amount.toString())) return amount;

  const mergedOptions: Intl.NumberFormatOptions = defu(options, { style: 'currency', currency: 'AUD' } as Intl.NumberFormatOptions)

  return new Intl.NumberFormat("en-AU", mergedOptions).format(parseFloat(amount.toString()));
}