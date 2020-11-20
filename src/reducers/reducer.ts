import { AnyAction } from 'redux'
import { YoutubeResult } from '../classes/youtube_result'
import {IReducer} from './interfaces'

const initialState: IReducer = {
    cardDetails: []
}

 export const MainReducer = (state = initialState, action: AnyAction) => {
     if(action.type=='update'){
         const cardDetails: YoutubeResult[] = action.payload
         return {...state, cardDetails}
     }
    return state
}

