import { createStore as reduxCreateStore } from "redux"

export enum ActionType {
  SET_THEME_MODE = 'SET_THEME_MODE'
}

const reducer = (state, action) => {
  if (action.type === ActionType.SET_THEME_MODE) {
    return Object.assign({}, state, {
      theme: action.theme,
    })
  }
  return state
}

export const initialState = { theme: 'light' }

const createStore = () => reduxCreateStore(reducer, initialState)
export default createStore
