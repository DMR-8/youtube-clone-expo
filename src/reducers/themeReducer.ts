import { AnyAction } from 'redux'

const initialState = false

export const themeReducer = (state=initialState, action: AnyAction) => {
    if(action.type=='change_theme'){
        return action.payload
    }
   return state
}

