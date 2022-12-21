import zhCN from '../../assets/languages/zh-CN.json'
import enUS from '../../assets/languages/en-US.json'

const CURRENT_LANGUAGE = zhCN

export const t = (key: string, value?: { [key: string]: string | number }) => {
  if(!CURRENT_LANGUAGE[key]) {
    return key
  }
  if (!value && CURRENT_LANGUAGE[key].indexOf('{{') >= 0) {
    throw new Error(`TRANSLATION VALUE NOT SET: ${key}`)
  }
  if (!value) {
    return CURRENT_LANGUAGE[key]
  } else {
    let tmp = CURRENT_LANGUAGE[key]
    Object.keys(value).forEach(valueKey => {
      tmp = tmp.replaceAll(`{{${valueKey}}}`, value[valueKey])
    })
    return tmp
  }
}
