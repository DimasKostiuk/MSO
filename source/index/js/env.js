import { getFormattedDate } from './helpers';
import local from './local'

export const IS_DEV = !!(typeof process.env.NODE_ENV !== 'undefined' && process.env.NODE_ENV.indexOf('dev') !== -1);

export const now = Date.now();
export const newNow = local - now;
export const startMarathon = Date.parse(getFormattedDate('2023-02-27'));

export const startSales = Date.parse(getFormattedDate('2023-02-07'));
export const endSales = Date.parse(getFormattedDate('2024-12-09'));

export const startDiscount = Date.parse(getFormattedDate('2023-02-07'));
export const endDiscount = Date.parse(getFormattedDate('2024-01-09'));

export const isSalesEnable = now >= startSales && now < endSales;
export const isDiscountEnable = now >= startDiscount && now < endDiscount;
