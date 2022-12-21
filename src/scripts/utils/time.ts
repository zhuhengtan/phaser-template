import moment from 'moment'
import { t } from './translate'

export const transferSecondsToTime = (seconds) => {
  const duration = moment.duration(seconds, 'seconds')
  if (seconds < 60) {
    return `00${t('minites')}${String(seconds).padStart(2, '0')}${t('seconds')}`
  } else if (seconds >= 60 && seconds < 60 * 60) {
    return `${String(Math.floor(duration.minutes())).padStart(2, '0')}${t('minites')}${String(duration.seconds()).padStart(2, '0')}${t('seconds')}`
  } else if (seconds >= 60 * 60 && seconds < 60 * 60 * 24) {
    return `${String(duration.hours()).padStart(2, '0')}${t('hours')}${String(duration.minutes()).padStart(2, '0')}${t('minites')}${String(duration.seconds()).padStart(2, '0')}${t('seconds')}`
  } else {
    return `${String(Math.floor(duration.asDays())).padStart(2, '0')}${t('days')}${String(duration.hours()).padStart(2, '0')}${t('hours')}${String(duration.minutes()).padStart(2, '0')}${t('minites')}${String(duration.seconds()).padStart(2, '0')}${t('seconds')}`
  }
}