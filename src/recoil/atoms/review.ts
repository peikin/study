import { atom } from 'recoil'
import { BusinessItem } from '../../components/review/businessSelect'

/**
 * 의견 타입 리스트
 */
export const FEEDBACK_TYPE = {
  COMPLIMENT: 'compliment',
  IMPROVEMENT: 'improvement',
}

// 기업 상태
export const businessState = atom({
  key: 'businessState',
  default: null as null | BusinessItem,
})

/**
 * 의견 타입 상태
 */
export const feedbackTypeState = atom({
  key: 'feedbackTypeState',
  default: FEEDBACK_TYPE.IMPROVEMENT,
})

/**
 * 컨텐츠 내용 상태
 */
export const contentsState = atom({
  key: 'contentsState',
  default: '',
})
