import { Locales } from '../types'

const specialSymbols = ['/', '#', ':', '?']

export const createPath = (
  pathname: string,
  locale: string = 'en',
  defaultLocale: Locales = 'en',
): string => {
  let divider = '/'
  if (specialSymbols.includes(pathname[0])) {
    divider = ''
  }

  return locale !== defaultLocale ? `/${locale}${divider}${pathname}` : `${divider}${pathname}`
}
