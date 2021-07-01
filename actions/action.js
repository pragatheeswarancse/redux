export const addUser = (user) => async (dispatch) => {
    dispatch({
        type: "ADD_USER",
        payload:user
    })
}
