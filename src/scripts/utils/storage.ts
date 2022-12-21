import { t } from './translate'

export const save = (key: string, value: any) => {
  if ('localStorage' in window) {
    localStorage.setItem(key, JSON.stringify(value))
  } else {
    throw new Error(t('No access to localStorage'))
  }
}

export const read = (key: string): any => {
  if ('localStorage' in window) {
    if (localStorage.getItem(key)) {
      return JSON.parse(localStorage.getItem(key) || '')
    } else {
      return null
    }
  } else {
    throw new Error(t('No access to localStorage'))
  }
}
