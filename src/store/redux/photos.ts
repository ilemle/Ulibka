import { Racer} from "../../types";

interface defaultStateInterface {
    photos: Racer[]
    photos_fetching: boolean
    photos_error: string | null
}

const defaultState: defaultStateInterface = {
    photos: [],
    photos_fetching: false,
    photos_error: null,

}

export const PHOTOS_REQUEST = 'PHOTOS_REQUEST'
export const PHOTOS_SUCCESS = 'PHOTOS_SUCCESS'
export const PHOTOS_FAILURE = 'PHOTOS_FAILURE'

export const photosRequest = () => ({ type: PHOTOS_REQUEST })
export const photosSuccess = (payload: Racer[]) => ({ type: PHOTOS_SUCCESS, payload })
export const photosFailure = (payload: string) => ({ type: PHOTOS_FAILURE, payload })

export const photosReducer = (state = defaultState, action) => {

    switch (action.type) {

        case PHOTOS_REQUEST: {
            const page = action.payload

            return { ...state, photos_fetching: true, current_page: page, }
        }
        case PHOTOS_SUCCESS: {

            const photos: Racer[] = action.payload

            return {
                ...state,
                photos: [...state.photos, ...photos,],
                photos_fetching: false,

            }
        }
        case PHOTOS_FAILURE: {
            const { error } = action.payload
            return { ...state, photos_error: error, photos_fetching: false }
        }


        default: return state
    }
}
// type racersReducerType = typeof racersReducer
// export const racersStore = legacy_createStore(racersReducer)

