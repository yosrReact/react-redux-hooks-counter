import * as types from '../../types'
export const increase = () => {
  // action =objet avec champ type (au moins)
  return {
    type: types.INCREASE,
  }
}

export const decrease = () => {
  return {
    type: types.DECREASE,
  }
}

export const reset = () => {
  return {
    type: types.RESET,
  }
}

export const increaseOddValue = () => {
  return {
    type: types.INCREASE_ODD_VALUE,
  }
}

export const increaseSpecificValue = (value) => {
  return {
    type: types.INCREASE_SPECIFIC_VALUE,
    addedValue: value
  
  }
}
