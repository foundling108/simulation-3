const initialState = {
    username: '',
    profilePic: '',
    userId: 0
}

const UPDATE_USER = 'UPDATE_USER';

export default function reducer(state=initialState, action) {
    let { payload } = action;
    switch (action.type) {
        case UPDATE_USER:
            return Object.assign({}, state, {username: payload.username, profilePic: payload.profilePic, userId: payload.id} )
        default:
        return state;
    }
}

export function updateUser(user) {
    return {
        type: UPDATE_USER,
        payload: user
    }
}