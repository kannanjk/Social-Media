import * as UserApi from '../Api/UserRequest'

export const updateuser = (id, formData) => async (dispatch) => {
    dispatch({ type: "UPDATE_START" })
    try {
        const { data } = await UserApi.updateuser(id, formData)
        dispatch({ type: "UPDATE_SUCCESS", data: data })
    } catch (error) {
        dispatch({ type: "UPDATEING_FAIL" })
    }
}

export const followUser = (id, data) => async (dispatch) => {
    dispatch({ type: "FOLLOW_USER", data: id })
    UserApi.followUser(id, data)
}

export const unfollowUser = (id, data) => async (dispatch) => {
    dispatch({ type: "UNFOLLOW_USER", data: id })
    UserApi.unFollowUser(id, data)
}